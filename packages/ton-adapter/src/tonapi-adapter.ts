import {
    Address,
    beginCell,
    Cell,
    comment,
    Contract,
    ContractProvider,
    ContractState,
    external,
    openContract,
    OpenedContract,
    storeMessage,
    toNano,
    Transaction,
    TupleItem,
    TupleReader,
    loadTransaction
} from '@ton/core';
import {
    AccountStatus as TonApiAccountStatus,
    TonApiClient,
    BlockchainRawAccount,
    AccountStatus
} from '@ton-api/client';
import { Buffer } from 'buffer';

export class ContractAdapter {
    constructor(private readonly tonapi: TonApiClient) {}

    /**
     * Open smart contract
     * @param contract contract
     * @returns opened contract
     */
    open<T extends Contract>(contract: T) {
        return openContract<T>(contract, args =>
            createProvider(this.tonapi, args.address, args.init)
        );
    }

    /**
     * Create provider
     * @param address address
     * @param init optional init data
     * @returns provider
     */
    provider(address: Address, init?: { code?: Cell; data?: Cell } | null) {
        return createProvider(this.tonapi, address, init ? init : null);
    }
}
type LoclaBlockchainRawAccount = Partial<Pick<BlockchainRawAccount, 'lastTransactionLt'>> &
    Omit<BlockchainRawAccount, 'lastTransactionLt'>;

function createProvider(
    tonapi: TonApiClient,
    address: Address,
    init: { code?: Cell | null; data?: Cell | null } | null
): ContractProvider {
    return {
        async getState(): Promise<ContractState> {
            // Load state
            const account: LoclaBlockchainRawAccount = await tonapi.blockchain
                .getBlockchainRawAccount(address)
                .catch((error: Error) => {
                    if (error.message !== 'entity not found') {
                        throw new Error(`Account request failed: ${error.message}`, error);
                    }

                    const mockResult: LoclaBlockchainRawAccount = {
                        address: address,
                        balance: 0n,
                        lastTransactionLt: undefined,
                        status: AccountStatus.Uninit,
                        storage: {
                            usedCells: 1,
                            usedBits: 95,
                            usedPublicCells: 0,
                            lastPaid: Math.floor(new Date().getTime() / 1000),
                            duePayment: 0n
                        }
                    };

                    return mockResult;
                });

            // Convert state
            const last =
                account.lastTransactionHash !== undefined && account.lastTransactionLt !== undefined
                    ? {
                          lt: account.lastTransactionLt,
                          hash: Buffer.from(account.lastTransactionHash, 'base64')
                      }
                    : null;

            const stateGetters: Record<
                TonApiAccountStatus,
                (account: LoclaBlockchainRawAccount) => ContractState['state']
            > = {
                active: account => ({
                    type: 'active',
                    code: account.code?.toBoc() ?? null,
                    data: account.data?.toBoc() ?? null
                }),
                uninit: () => ({
                    type: 'uninit'
                }),
                nonexist: () => ({
                    type: 'uninit'
                }),
                frozen: () => {
                    throw new Error(`Frozen accounts are not supported by TonApi`);
                }
            };

            return {
                balance: account.balance,
                last: last,
                state: stateGetters[account.status](account)
            };
        },
        async get(name, args) {
            if (typeof name !== 'string') {
                throw new Error('Method name must be a string for TonClient provider');
            }

            if (args.some(arg => arg.type === 'tuple')) {
                throw new Error('Tuples as get parameters are not supported by tonapi');
            }

            const result = await tonapi.blockchain.execGetMethodForBlockchainAccount(
                address,
                name,
                { args: args.map(TupleItemToTonapiString) }
            );

            return {
                stack: new TupleReader(result.stack)
            };
        },
        async external(message) {
            // Resolve init
            let neededInit: { code?: Cell | null; data?: Cell | null } | null = null;
            if (init && (await tonapi.accounts.getAccount(address)).status !== 'active') {
                neededInit = init;
            }

            // Send with state init
            const ext = external({
                to: address,
                init: neededInit ? { code: neededInit.code, data: neededInit.data } : null,
                body: message
            });
            const boc = beginCell().store(storeMessage(ext)).endCell();

            await tonapi.blockchain.sendBlockchainMessage({ boc });
        },
        async internal(via, message) {
            // Resolve init
            let neededInit: { code?: Cell | null; data?: Cell | null } | null = null;
            if (init && (await tonapi.accounts.getAccount(address)).status !== 'active') {
                neededInit = init;
            }

            // Resolve bounce
            let bounce = true;
            if (message.bounce !== null && message.bounce !== undefined) {
                bounce = message.bounce;
            }

            // Resolve value
            let value: bigint;
            if (typeof message.value === 'string') {
                value = toNano(message.value);
            } else {
                value = message.value;
            }

            // Resolve body
            let body: Cell | null = null;
            if (typeof message.body === 'string') {
                body = comment(message.body);
            } else if (message.body) {
                body = message.body;
            }

            // Send internal message
            await via.send({
                to: address,
                value,
                bounce,
                sendMode: message.sendMode,
                init: neededInit,
                body
            });
        },
        open<T extends Contract>(contract: T): OpenedContract<T> {
            return openContract(contract, params =>
                createProvider(tonapi, params.address, params.init)
            );
        },
        getTransactions(
            address: Address,
            lt: bigint,
            hash: Buffer,
            limit?: number
        ): Promise<Transaction[]> {
            console.info(
                'hash param in getTransactions action ignored, beacause not supported',
                hash.toString('hex')
            );
            return tonapi.blockchain
                .getBlockchainAccountTransactions(address, {
                    before_lt: lt + 1n,
                    limit
                })
                .then(({ transactions }) =>
                    transactions.map(transaction => loadTransaction(transaction.raw.asSlice()))
                );
        }
    };
}

function TupleItemToTonapiString(item: TupleItem): string {
    switch (item.type) {
        case 'int':
            return '0x' + item.value.toString(16);
        case 'nan':
            return 'NaN';
        case 'null':
            return 'Null';
        case 'cell':
        case 'builder':
            return item.cell.toBoc().toString('base64');
        case 'slice':
            return item.cell.toBoc().toString('hex');
        case 'tuple':
            throw new Error('Tuple is not supported in TonApi get method parameters');
        default:
            throw new Error(`Unknown type ${(item as { type: string }).type}`);
    }
}

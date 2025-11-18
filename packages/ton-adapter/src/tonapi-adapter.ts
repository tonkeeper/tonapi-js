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
    loadTransaction,
    ExtraCurrency
} from '@ton/core';
import {
    AccountStatus as TonApiAccountStatus,
    BlockchainRawAccount,
    AccountStatus,
    TonApiHttpError,
    TonApiClient
} from '@ton-api/client';
import { Buffer } from 'buffer';

export class ContractAdapter {
    private client: TonApiClient;

    constructor(client: TonApiClient) {
        this.client = client;
    }

    /**
     * Open smart contract
     * @param contract contract
     * @returns opened contract
     */
    open<T extends Contract>(contract: T) {
        return openContract<T>(contract, args => createProvider(this.client, args.address, args.init));
    }

    /**
     * Create provider
     * @param address address
     * @param init optional init data
     * @returns provider
     */
    provider(address: Address, init?: { code?: Cell; data?: Cell } | null) {
        return createProvider(this.client, address, init ? init : null);
    }
}
type LocalBlockchainRawAccount = Partial<Pick<BlockchainRawAccount, 'lastTransactionLt'>> &
    Omit<BlockchainRawAccount, 'lastTransactionLt'>;

function createProvider(
    client: TonApiClient,
    address: Address,
    init: { code?: Cell | null; data?: Cell | null } | null
): ContractProvider {
    return {
        async getState(): Promise<ContractState> {
            // Load state
            const account: LocalBlockchainRawAccount = await client
                .getBlockchainRawAccount(address)
                .catch((accountError: unknown) => {
                    // Check if it's a 404 error (account not found)
                    const accountNotExists =
                        accountError instanceof TonApiHttpError && accountError.status === 404;

                    if (!accountNotExists) {
                        throw new Error(`Account request failed`, {
                            cause: accountError
                        });
                    }

                    return {
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
                    } as LocalBlockchainRawAccount;
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
                (account: LocalBlockchainRawAccount) => ContractState['state']
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

            let extraCurrency: ExtraCurrency | null = null;
            if (account.extraBalance) {
                const ec: Record<number, bigint> = {};
                for (const [k, v] of Object.entries(account.extraBalance)) {
                    ec[Number(k)] = BigInt(v as unknown as string | number | bigint);
                }
                extraCurrency = ec as unknown as ExtraCurrency;
            }

            return {
                balance: account.balance,
                extracurrency: extraCurrency,
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

            return client
                .execGetMethodForBlockchainAccount(address, name, {
                    args: args.map(TupleItemToTonapiString)
                })
                .then((result) => ({
                    stack: new TupleReader(result.stack)
                }))
                .catch((error: unknown) => {
                    throw new Error(`Get method execution failed`, {
                        cause: error
                    });
                });
        },
        async external(message) {
            // Resolve init
            const neededInit: { code?: Cell | null; data?: Cell | null } | null = init
                ? await client
                    .getAccount(address)
                    .then((data) => (data.status !== 'active' ? init : null))
                    .catch((error: unknown) => {
                        throw new Error(`Failed to get account info`, {
                            cause: error
                        });
                    })
                : null;

            // Send with state init
            const ext = external({
                to: address,
                init: neededInit ? { code: neededInit.code, data: neededInit.data } : null,
                body: message
            });
            const boc = beginCell().store(storeMessage(ext)).endCell();

            return client
                .sendBlockchainMessage({ boc })
                .catch((error: unknown) => {
                    throw new Error(`Failed to send blockchain message`, {
                        cause: error
                    });
                });
        },
        async internal(via, message) {
            // Resolve init
            const neededInit: { code?: Cell | null; data?: Cell | null } | null = init
                ? await client
                    .getAccount(address)
                    .then((data) => (data.status !== 'active' ? init : null))
                    .catch((error: unknown) => {
                        throw new Error(`Failed to get account info`, {
                            cause: error
                        });
                    })
                : null;

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
            return openContract(contract, params => createProvider(client, params.address, params.init));
        },
        async getTransactions(
            address: Address,
            lt: bigint,
            hash: Buffer,
            limit?: number
        ): Promise<Transaction[]> {
            console.info(
                'hash param in getTransactions action ignored, because not supported',
                hash.toString('hex')
            );

            return client
                .getBlockchainAccountTransactions(address, {
                    before_lt: lt + 1n,
                    limit
                })
                .then((result) =>
                    result.transactions.map(transaction =>
                        loadTransaction(transaction.raw.asSlice())
                    )
                )
                .catch((error: unknown) => {
                    throw new Error(`Failed to get account transactions`, {
                        cause: error
                    });
                });
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

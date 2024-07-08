import {
    Address,
    beginCell,
    Cell,
    comment,
    Contract,
    ContractProvider,
    ContractState,
    CurrencyCollection,
    HashUpdate,
    TransactionDescription,
    external,
    openContract,
    OpenedContract,
    storeMessage,
    toNano,
    Dictionary,
    Transaction,
    AccountStatus,
    Message,
    TupleItem,
    TupleReader
} from '@ton/core';
import {
    AccountStatus as TonApiAccountStatus,
    Api,
    BlockchainRawAccount,
    Transaction as TonApiTransaction,
    Message as TonApiMessage
} from '../../client/src/client';
import { Buffer } from 'buffer';

export class ContractAdapter {
    constructor(private readonly tonapi: Api<unknown>) {}

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

function createProvider(
    tonapi: Api<unknown>,
    address: Address,
    init: { code?: Cell | null; data?: Cell | null } | null
): ContractProvider {
    return {
        async getState(): Promise<ContractState> {
            // Load state
            const account = await tonapi.blockchain.getBlockchainRawAccount(address);

            // Convert state
            const last =
                account.lastTransactionLt !== undefined && account.lastTransactionHash !== undefined
                    ? {
                          lt: BigInt(account.lastTransactionLt),
                          hash: Buffer.from(account.lastTransactionHash, 'base64')
                      }
                    : null;

            const stateGetters: Record<
                AccountStatus,
                (account: BlockchainRawAccount) => ContractState['state']
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
        // TODO: many questions
        async getTransactions(
            address: Address,
            lt: bigint,
            hash: Buffer, // TODO what is hash?
            limit?: number
        ): Promise<Transaction[]> {
            console.info('hash param in getTransactions action ignored, beacause not supported');
            // TODO: use  unused params
            return await tonapi.blockchain
                .getBlockchainAccountTransactions(address, {
                    after_lt: lt,
                    limit
                })
                .then(data => data.transactions.map(TonapiTransactionToTonCoreTransaction));
        }
    };
}

function TonapiTransactionToTonCoreTransaction(transaction: TonApiTransaction): Transaction {
    try {
        return {
            address: BigInt(transaction.account.address.toString()), // TODO: Why bigint?
            lt: transaction.lt,
            prevTransactionHash: BigInt(transaction.prevTransHash!), // TODO: why not optional? How convert HEX to BigInt?
            prevTransactionLt: transaction.prevTransLt!, // TODO: why not optoinal?
            now: new Date().getTime(), // TODO: check estimated data
            outMessagesCount: transaction.outMsgs.length, // TODO: need remove field from Transaction in ton/core
            oldStatus: TonapiAccountStatusToTonCoreAccountStatus(transaction.origStatus),
            endStatus: TonapiAccountStatusToTonCoreAccountStatus(transaction.endStatus),
            inMessage: transaction.inMsg ? TonapiMessageToTonCoreMessage(transaction.inMsg) : null,
            outMessages: TonapiMessagesToTonCoreDisctionaryMessages(transaction.outMsgs),
            totalFees: {
                coins: transaction.totalFees
            } as CurrencyCollection, // TODO: need return full CurrencyCollection
            stateUpdate: TonapiTransactionToTonCoreHashUpdate(transaction),
            description: TonApiTransactionToTonCoreTransactionDescription(transaction), // TODO: check source for data
            raw: transaction.raw,
            hash: () => Buffer.from(transaction.hash, 'base64')
        };
    } catch (error) {
        throw new Error(
            "Can't convert TonApi Transaction fo @ton/core type, please upgrade package to new version"
        );
    }
}

function TonApiTransactionToTonCoreTransactionDescription(
    transaction: TonApiTransaction
): TransactionDescription {}

function TonapiTransactionToTonCoreHashUpdate({
    stateUpdateOld,
    stateUpdateNew
}: TonApiTransaction): HashUpdate {
    return {
        oldHash: Buffer.from(stateUpdateOld, 'hex'),
        newHash: Buffer.from(stateUpdateNew, 'hex')
    };
}

function TonapiMessageToTonCoreMessage(message: TonApiMessage): Message {}

function TonapiMessagesToTonCoreDisctionaryMessages(
    messages: TonApiMessage[]
): Dictionary<number, Message> {}

function TonapiAccountStatusToTonCoreAccountStatus(status: TonApiAccountStatus): AccountStatus {}

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

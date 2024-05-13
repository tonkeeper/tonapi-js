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
    storeMessage,
    toNano,
    TupleItem,
    TupleReader
} from '@ton/core';
import { Api, TvmStackRecord } from '@tonapi/client';
import { Buffer } from 'buffer';

export class ContractAdapter {
    constructor(private readonly tonapi: Api) {}

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
    tonapi: Api,
    address: Address,
    init: { code?: Cell | null; data?: Cell | null } | null
): ContractProvider {
    return {
        async getState(): Promise<ContractState> {
            // Load state
            const account = await tonapi.blockchain.getBlockchainRawAccount(address.toRawString());

            // Convert state
            const last =
                account.last_transaction_lt !== undefined &&
                account.last_transaction_hash !== undefined
                    ? {
                          lt: BigInt(account.last_transaction_lt),
                          hash: Buffer.from(account.last_transaction_hash, 'base64')
                      }
                    : null;

            let storage:
                | {
                      type: 'uninit';
                  }
                | {
                      type: 'active';
                      code: Buffer | null;
                      data: Buffer | null;
                  }
                | {
                      type: 'frozen';
                      stateHash: Buffer;
                  };
            switch (account.status) {
                case 'active':
                    storage = {
                        type: 'active',
                        code: account.code ? Buffer.from(account.code, 'base64') : null,
                        data: account.data ? Buffer.from(account.data, 'base64') : null
                    };
                    break;
                case 'uninit':
                case 'nonexist':
                    storage = {
                        type: 'uninit'
                    };
                    break;
                case 'frozen':
                    throw new Error(`Frozen accounts are not supported by TonApi`);
                /* storage = {
                        type: 'frozen',
                        stateHash: Buffer.from(account, 'base64') // TODO
                    };
                    break;*/
                default:
                    throw new Error(`Unsupported status ${(account as { status: string }).status}`);
            }

            return {
                balance: BigInt(account.balance),
                last: last,
                state: storage
            };
        },
        async get(name, args) {
            if (args.some(arg => arg.type === 'tuple')) {
                throw new Error('Tuples as get parameters are not supported by tonapi');
            }

            const result = await tonapi.blockchain.execGetMethodForBlockchainAccount(
                address.toRawString(),
                name,
                { args: args.map(TupleItemToTonapiString) }
            );

            const tuple = result.stack.map(TvmStackRecordToTupleItem);
            return {
                stack: new TupleReader(tuple)
            };
        },
        async external(message) {
            // Resolve init
            let neededInit: { code?: Cell | null; data?: Cell | null } | null = null;
            if (
                init &&
                (await tonapi.accounts.getAccount(address.toRawString())).status !== 'active'
            ) {
                neededInit = init;
            }

            // Send with state init
            const ext = external({
                to: address,
                init: neededInit ? { code: neededInit.code, data: neededInit.data } : null,
                body: message
            });
            const boc = beginCell().store(storeMessage(ext)).endCell().toBoc().toString('base64');

            await tonapi.blockchain.sendBlockchainMessage({ boc });
        },
        async internal(via, message) {
            // Resolve init
            let neededInit: { code?: Cell | null; data?: Cell | null } | null = null;
            if (
                init &&
                (await tonapi.accounts.getAccount(address.toRawString())).status !== 'active'
            ) {
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
        }
    };
}

function TvmStackRecordToTupleItem(record: TvmStackRecord): TupleItem {
    switch (record.type) {
        case 'num':
            return { type: 'int', value: BigInt(record.num!) };
        case 'nan':
            return { type: 'nan' };
        case 'cell':
            try {
                const cell = Cell.fromBase64(record.cell!);
                return { type: 'cell', cell };
            } catch (_) {
                return {
                    type: 'cell',
                    cell: Cell.fromBase64(Buffer.from(record.cell!, 'hex').toString('base64'))
                };
            }
        case 'null':
            return { type: 'null' };
        case 'tuple':
            return { type: 'tuple', items: record.tuple!.map(TvmStackRecordToTupleItem) };
        default:
            throw new Error(`Unknown type ${record.type}`);
    }
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

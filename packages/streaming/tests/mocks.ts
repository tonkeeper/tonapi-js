import { BlockEvent, AccountEvent, TraceEvent, MempoolEvent } from '../src';

export const mockBlockEvent: BlockEvent = {
    workchain: 0,
    shard: 'c000000000000000',
    seqno: 41765057,
    root_hash: '025af4e6949d8f19efad3834f530b62247ba53a07d612ff0d2ee88ed11caaf82',
    file_hash: '8fce344f74fde197ad3b74a10cd40977aa4e258bcdb5f00227587e432c58b4f9'
};

export const mockAccountEvent: AccountEvent = {
    account_id: '-1:5555555555555555555555555555555555555555555555555555555555555555',
    lt: 44465970000003,
    tx_hash: '26d07a4111767dc033493af71182203e1efcaa7c1220e48720b8f441a62ea9a0'
};

export const mockTraceEvent: TraceEvent = {
    accounts: ['-1:5555555555555555555555555555555555555555555555555555555555555555'],
    hash: '0759d100a122f4c61eb413178d286bb4bbb08f906cd7684937442093a4e2aa9f'
};

export const mockMempoolEvent: MempoolEvent = {
    boc: 'te6cckECAwEAASYAAeGIAQzfeQb/oLAdBBiWv7YgB+chJ8Z6vTo9WjIJc7MkRgdqAds1wHgOHl6OaffDvLZaSfAu9O+6ZMph0kzXhY0mEtI6f8/z4fWJ6hIf4Pid+CH+vu/9Ms9wFwSqpx5pQX4gIDlNTRi7Lh2I4AAACHgAHAEBaGIAOuno9qdQsynX/xnS7Rm8eUhXL1Yee9PHtIUTMABI+MYgJiWgAAAAAAAAAAAAAAAAAAECAPJNaW5lAGXDtGKGb7yDf9BYDoIMS1/bEAPzkJPjPV6dHq0ZBLnZkiMDtWm4kMEc7RC4ntp+RM567VUCHs2tzcb10oOGzbgmo0hLhFUPqatBVMVygjRh30ykJmm4kMEc7RC4ntp+RM567VUCHs2tzcb10oOGzbgmo0hLHs8BkQ=='
};

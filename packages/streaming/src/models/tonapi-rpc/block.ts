export type BlockEvent = {
    workchain: -1 | 0;
    shard: string;
    seqno: number;
    root_hash: string;
    file_hash: string;
};

export type BlockEventRpc = {
    method: 'block';
    params: BlockEvent;
};

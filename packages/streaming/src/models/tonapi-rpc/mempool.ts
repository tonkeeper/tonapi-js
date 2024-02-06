export type MempoolEvent = {
    boc: string;
    involved_accounts?: string[];
};

export type MempoolEventRpc = {
    method: 'mempool_message';
    params: MempoolEvent;
};

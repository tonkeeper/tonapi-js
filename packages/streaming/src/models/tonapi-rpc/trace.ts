export type TraceEvent = {
    accounts: string[];
    hash: string;
};

export type TraceEventRpc = {
    method: 'trace';
    params: TraceEvent;
};

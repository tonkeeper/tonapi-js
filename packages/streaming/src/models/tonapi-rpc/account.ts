export type AccountEvent = {
    account_id: string;
    lt: number;
    tx_hash: string;
};

export type AccountEventRpc = {
    method: 'account_transaction';
    params: AccountEvent;
};

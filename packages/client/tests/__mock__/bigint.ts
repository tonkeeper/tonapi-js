import { JSONBig } from '../client.test';

export const getAccount = JSONBig.stringify({
    accounts: [
        {
            address: '0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168',
            balance: 471698230471698230471698230471698230n,
            last_activity: 1717957542,
            status: 'active',
            interfaces: ['wallet_v4r2'],
            name: 'moiseev.ton',
            is_scam: false,
            memo_required: false,
            get_methods: ['get_public_key', 'seqno'],
            is_wallet: true
        },
        {
            address: '0:7c9fc62291740a143086c807fe322accfd12737b3c2243676228176707c7ce40',
            balance: 47602800,
            last_activity: 1715684124,
            status: 'active',
            interfaces: ['nft_item'],
            get_methods: ['get_nft_data'],
            is_wallet: false
        }
    ]
});

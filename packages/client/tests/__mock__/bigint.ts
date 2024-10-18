import { JSONStringify } from '../utils/jsonbig';

export const getAccount = JSONStringify({
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

export const getJettonInfo = JSONStringify({
    mintable: true,
    total_supply: 1030000002000000n,
    admin: {
        address: '0:6440fe3c69410383963945173c4b11479bf0b9b4d7090e58777bda581c2f9998',
        is_scam: false,
        is_wallet: false
    },
    metadata: {
        address: '0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe',
        name: 'Tether USD',
        symbol: 'USD₮',
        decimals: '6',
        image: 'https://cache.tonapi.io/imgproxy/T3PB4s7oprNVaJkwqbGg54nexKE0zzKhcrPv8jcWYzU/rs:fill:200:200:1/g:no/aHR0cHM6Ly90ZXRoZXIudG8vaW1hZ2VzL2xvZ29DaXJjbGUucG5n.webp',
        description: 'Tether Token for Tether USD'
    },
    verification: 'whitelist',
    holders_count: 1734294
});

import { TonClient } from '@ton/ton';
import { ContractAdapter } from '@ton-api/ton-adapter';
import { TonApiClient } from '@ton-api/client';

require('dotenv').config();

const ta = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    apiKey: process.env.TONAPI_API_KEY
});

export const clientTonApi = new ContractAdapter(ta); // Create an adapter

export const getTonCenterClient = () => {
    if (!process.env.TONCENTER_API_KEY) {
        throw new Error('TONCENTER_API_KEY is not set');
    }

    return new TonClient({
        endpoint: 'https://toncenter.com/api/v2/jsonRPC',
        apiKey: process.env.TONCENTER_API_KEY
    });
};

export const client = process.env.CLIENT === 'toncenter' ? getTonCenterClient() : clientTonApi;

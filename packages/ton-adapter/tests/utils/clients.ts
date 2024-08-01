import { TonClient } from '@ton/ton';
import { ContractAdapter } from '../../src/tonapi-adapter';
import { Api, TonApiClient } from '@ton-api/client';

require('dotenv').config();

const httpClient = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    apiKey: process.env.TONAPI_API_KEY
});

const tonApiClient = new Api(httpClient); // Initialize the ton API client
export const clientTonApi = new ContractAdapter(tonApiClient); // Create an adapter

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

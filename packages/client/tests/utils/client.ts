import { Api, TonApiClient } from '../../src/client';

const httpWithApiKey = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    apiKey: 'TEST_API_KEY'
});
export const clienWithApiKey = new Api(httpWithApiKey);

const http = new TonApiClient({
    baseUrl: 'https://tonapi.io'
});
export const client = new Api(http);

import { TonApiClient } from '../../src/client';

const baseUrl = 'https://test.tonapi.io';

export const clienWithApiKey = new TonApiClient({
    baseUrl,
    apiKey: 'TEST_API_KEY'
});

export const client = new TonApiClient({
    baseUrl
});

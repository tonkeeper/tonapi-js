import { TonApiClient } from '../../src/client';

const baseUrl = 'https://tonapi.io';

export const taWithApiKey = new TonApiClient({
    baseUrl,
    apiKey: 'TEST_API_KEY'
});

export const ta = new TonApiClient({
    baseUrl
});

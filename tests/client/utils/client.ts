import { initClient, TonApiClient } from '@ton-api/client';

const baseUrl = 'https://tonapi.io';

export const taWithApiKey = new TonApiClient({
    baseUrl,
    apiKey: 'TEST_API_KEY'
});

export const ta = new TonApiClient({
    baseUrl
});

// Initialize default client (without API key)
export function initTa() {
    initClient({ baseUrl });
}

// Initialize client with API key
export function initTaWithApiKey() {
    initClient({
        baseUrl,
        apiKey: 'TEST_API_KEY'
    });
}

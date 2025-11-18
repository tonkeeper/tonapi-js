import { Address } from '@ton/core';
import { ta } from './utils/client';
import { describe, test, expect, beforeEach } from 'vitest';

// Integration tests - make real API calls to TonAPI
// These tests are skipped by default to avoid rate limiting and API calls during regular test runs
// Run with: npm run test:integration
// Note: Free tier has rate limit of 1 request per 4 seconds

const skipIntegration = !process.env.INTEGRATION;

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

describe.skipIf(skipIntegration)('Integration tests - Real API calls', () => {
let isFirstTest = true;

beforeEach(async () => {
    if (isFirstTest) {
        isFirstTest = false;
        return;
    }
    // Wait 4 seconds between tests to avoid rate limiting (free tier: 1 req/4s)
    await sleep(4000);
});

test('getRates - real API call with cryptocurrency codes', async () => {
    const data = await ta.getRates({
        tokens: ['ton'],
        currencies: ['usd']
    });

    expect(data).toBeDefined();
    expect(data.rates).toBeDefined();

    // Check response structure
    const keys = Object.keys(data.rates);
    expect(keys.length).toBeGreaterThan(0);

    // Verify we got a valid rate (key might be different format)
    const firstRate = data.rates[keys[0]!];
    expect(firstRate).toBeDefined();
    expect(firstRate?.prices).toBeDefined();
});

test('getRates - real API call with Address object and cryptocurrency code', async () => {
    // USDT jetton master address
    const usdtAddress = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs');

    const data = await ta.getRates({
        tokens: [usdtAddress, 'ton'],
        currencies: ['usd']
    });

    expect(data).toBeDefined();
    expect(data.rates).toBeDefined();

    // Should have rates for both tokens
    const keys = Object.keys(data.rates);
    expect(keys.length).toBeGreaterThanOrEqual(1);

    // At least one rate should have valid prices
    const hasValidPrice = keys.some(key => {
        const rate = data.rates[key];
        return rate?.prices && Object.keys(rate.prices).length > 0;
    });
    expect(hasValidPrice).toBe(true);
});

test('getChartRates - real API call with cryptocurrency code', async () => {
    const data = await ta.getChartRates({
        token: 'ton',
        currency: 'usd'
    });

    expect(data).toBeDefined();
    expect(data.points).toBeDefined();
    expect(Array.isArray(data.points)).toBe(true);
    expect(data.points.length).toBeGreaterThan(0);

    // Verify tuple structure [timestamp, price]
    const [timestamp, price] = data.points[0]!;
    expect(typeof timestamp).toBe('number');
    expect(timestamp).toBeGreaterThan(0);
    expect(typeof price).toBe('number');
    expect(price).toBeGreaterThan(0);
});

test('getChartRates - real API call with Address object', async () => {
    // USDT jetton master address
    const usdtAddress = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs');

    const data = await ta.getChartRates({
        token: usdtAddress,
        currency: 'usd'
    });

    expect(data).toBeDefined();
    expect(data.points).toBeDefined();
    expect(Array.isArray(data.points)).toBe(true);
    expect(data.points.length).toBeGreaterThan(0);

    // Verify tuple structure [timestamp, price]
    const [timestamp, price] = data.points[0]!;
    expect(typeof timestamp).toBe('number');
    expect(timestamp).toBeGreaterThan(0);
    expect(typeof price).toBe('number');
});

test('getChartRates - real API call with address strings', async () => {
    // USDT jetton master address in different formats
    const usdtAddressRaw = '0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe';
    const usdtAddressFriendly = 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs';

    // Test raw format
    const dataRaw = await ta.getChartRates({
        token: usdtAddressRaw,
        currency: 'usd'
    });

    expect(dataRaw).toBeDefined();
    expect(dataRaw.points).toBeDefined();
    expect(Array.isArray(dataRaw.points)).toBe(true);
    expect(dataRaw.points.length).toBeGreaterThan(0);

    // Wait before second request in same test
    await sleep(4000);

    // Test friendly format
    const dataFriendly = await ta.getChartRates({
        token: usdtAddressFriendly,
        currency: 'usd'
    });

    expect(dataFriendly).toBeDefined();
    expect(dataFriendly.points).toBeDefined();
    expect(Array.isArray(dataFriendly.points)).toBe(true);
    expect(dataFriendly.points.length).toBeGreaterThan(0);
});

});

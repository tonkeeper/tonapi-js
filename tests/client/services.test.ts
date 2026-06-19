import { Address } from '@ton/core';
import { ta } from './utils/client';
import { getChartRates as getChartRatesMock, getRates as getRatesMock } from './__mock__/services';
import { mockFetch } from './utils/mockFetch';
import { test, expect, afterEach, vi } from 'vitest';

afterEach(() => {
    vi.restoreAllMocks();
});

test('getChartRates, should correct parse array in pair', async () => {
    mockFetch(getChartRatesMock);

    const addressString = 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs';
    const addressObject = Address.parse(addressString);
    const data = await ta.getChartRates({
        token: addressObject,
        currency: 'rub'
    });

    expect(data).toBeDefined();
    expect(data.points).toBeDefined();
    expect(Array.isArray(data.points)).toBe(true);
    expect(data.points.length).toBeGreaterThan(0);

    data.points.forEach(point => {
        expect(Array.isArray(point)).toBe(true);
        expect(point.length).toBe(2);

        const [timestamp, value] = point;

        expect(typeof timestamp).toBe('number');
        expect(timestamp).toBeGreaterThan(0);

        expect(typeof value).toBe('number');
    });
});

test('getRates, additionalProperties should be not convert to camelCase', async () => {
    mockFetch(getRatesMock);

    const data = await ta.getRates({
        tokens: ['TON,TOKEN_WITH_UNDERSCORE'],
        currencies: ['USD', 'EUR']
    });

    expect(data).toBeDefined();
    expect(data.rates).toBeDefined();
    expect(data.rates['TON']).toBeDefined();
    expect(data.rates['TOKEN_WITH_UNDERSCORE']).toBeDefined();
});

test('getRates, explode in params should be matter', async () => {
    const fetchSpy = mockFetch(getRatesMock);

    await ta.getRates({
        tokens: ['TON', 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs'],
        currencies: ['USD', 'EUR']
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const url = fetchSpy.mock.calls[0]?.[0] as string;
    const searchParams = new URL(url).searchParams;

    expect(searchParams.get('tokens')).toBe('TON,EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs');
    expect(searchParams.get('currencies')).toBe('USD,EUR');
});

test('getChartRates, should serialize Address object to string', async () => {
    const fetchSpy = mockFetch(getChartRatesMock);

    const addressString = 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs';
    const addressObject = Address.parse(addressString);

    await ta.getChartRates({
        token: addressObject,
        currency: 'usd'
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const url = fetchSpy.mock.calls[0]?.[0] as string;
    const searchParams = new URL(url).searchParams;

    // Address object should be serialized to raw format
    expect(searchParams.get('token')).toBe(addressObject.toRawString());
    expect(searchParams.get('currency')).toBe('usd');
});

test('getChartRates, should accept string token directly', async () => {
    const fetchSpy = mockFetch(getChartRatesMock);

    const addressString = 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs';

    await ta.getChartRates({
        token: addressString,
        currency: 'usd'
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const url = fetchSpy.mock.calls[0]?.[0] as string;
    const searchParams = new URL(url).searchParams;

    expect(searchParams.get('token')).toBe(addressString);
    expect(searchParams.get('currency')).toBe('usd');
});

test('getRates, should accept cryptocurrency codes (ton, btc) without validation error', async () => {
    const fetchSpy = mockFetch(getRatesMock);

    await ta.getRates({
        tokens: ['ton', 'btc'],
        currencies: ['usd', 'rub']
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const url = fetchSpy.mock.calls[0]?.[0] as string;
    const searchParams = new URL(url).searchParams;

    expect(searchParams.get('tokens')).toBe('ton,btc');
    expect(searchParams.get('currencies')).toBe('usd,rub');
});

test('getChartRates, should accept cryptocurrency code (ton) without validation error', async () => {
    const fetchSpy = mockFetch(getChartRatesMock);

    await ta.getChartRates({
        token: 'ton',
        currency: 'usd'
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const url = fetchSpy.mock.calls[0]?.[0] as string;
    const searchParams = new URL(url).searchParams;

    expect(searchParams.get('token')).toBe('ton');
    expect(searchParams.get('currency')).toBe('usd');
});

test('getRates, should serialize Address objects to raw format', async () => {
    const fetchSpy = mockFetch(getRatesMock);

    const address1 = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs');
    const address2 = Address.parse('UQC62nZpm36EFzADVfXDVd_4OpbFyc1D3w3ZvCPHLni8Dst4');

    await ta.getRates({
        tokens: [address1, address2],
        currencies: ['usd', 'rub']
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const url = fetchSpy.mock.calls[0]?.[0] as string;
    const searchParams = new URL(url).searchParams;

    // Address objects should be serialized to raw format
    expect(searchParams.get('tokens')).toBe(`${address1.toRawString()},${address2.toRawString()}`);
    expect(searchParams.get('currencies')).toBe('usd,rub');
});

test('getRates, should handle mixed array of Address objects, cryptocurrency codes, and address strings', async () => {
    const fetchSpy = mockFetch(getRatesMock);

    const addressObject = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs');
    const addressString = '0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe';

    await ta.getRates({
        tokens: [addressObject, 'ton', addressString, 'btc'],
        currencies: ['usd']
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const url = fetchSpy.mock.calls[0]?.[0] as string;
    const searchParams = new URL(url).searchParams;

    // Mixed: Address object (raw), cryptocurrency code (as-is), address string (as-is), cryptocurrency code (as-is)
    expect(searchParams.get('tokens')).toBe(`${addressObject.toRawString()},ton,${addressString},btc`);
    expect(searchParams.get('currencies')).toBe('usd');
});

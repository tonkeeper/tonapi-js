import { Address } from '@ton/core';
import { ta } from './utils/client';
import fetchMock from 'jest-fetch-mock';
import { getChartRates, getRates } from './__mock__/services';

beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.resetMocks();
});

afterAll(() => {
    fetchMock.disableMocks();
});

test('getChartRates, should correct parse array in pair', async () => {
    fetchMock.mockResponseOnce(getChartRates);

    const addressString = 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs';
    const addressObject = Address.parse(addressString);
    const points = await ta.rates
        .getChartRates({
            token: addressObject,
            currency: 'rub'
        })
        .then(res => res.points);

    expect(points).toBeDefined();
    expect(Array.isArray(points)).toBe(true);

    expect(points.length).toBeGreaterThan(0);

    points.forEach(point => {
        expect(Array.isArray(point)).toBe(true);
        expect(point.length).toBe(2);

        const [timestamp, value] = point;

        expect(typeof timestamp).toBe('number');
        expect(timestamp).toBeGreaterThan(0);

        expect(typeof value).toBe('number');
    });
});

test.only('getRates, additionalProperties should be not convert to camelCase', async () => {
    fetchMock.mockResponseOnce(getRates);

    const res = await ta.rates
        .getRates({
            tokens: ['TON,TOKEN_WITH_UNDERSCORE'],
            currencies: ['USD', 'EUR']
        })
        .then(res => res);

    expect(res).toBeDefined();
    expect(res.rates).toBeDefined();
    expect(res.rates['TON']).toBeDefined();
    expect(res.rates['TOKEN_WITH_UNDERSCORE']).toBeDefined();
});

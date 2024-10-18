import { Address } from '@ton/core';
import { ta } from './utils/client';
// import fetchMock from 'jest-fetch-mock';
// import { JSONStringify } from './utils/jsonbig';

// beforeEach(() => {
//     fetchMock.enableMocks();
//     fetchMock.resetMocks();
// });

// afterAll(() => {
//     fetchMock.disableMocks();
// });

test('getChartRates test', async () => {
    // fetchMock.mockResponseOnce(execGetMethodForBlockchainAccount);

    const addressString = 'Ef_X4pRKtgXOXYMOXNgXNRdlhkNKJ9bTKMfqvj6HDIiQG98F';
    const addressObject = Address.parse(addressString);
    const points = await ta.rates.getChartRates({
        token: Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs'),
        currency: 'rub',
    }).then(res => res.points);

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

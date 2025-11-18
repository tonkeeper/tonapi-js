import { Address } from '@ton/core';
import { ta } from './utils/client';
import { getAccount, getJettonInfo as getJettonInfoMock } from './__mock__/bigint';
import { mockFetch } from './utils/mockFetch';
import { vi, afterEach, test, expect } from 'vitest';

afterEach(() => {
    vi.restoreAllMocks();
});

test('BigInt parse data in number test', async () => {
    mockFetch(getAccount);

    const addressStrings = [
        '0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168',
        '0:7c9fc62291740a143086c807fe322accfd12737b3c2243676228176707c7ce40'
    ];
    const accountIds = addressStrings.map(addr => Address.parse(addr));
    const data = await ta.getAccounts({ accountIds });

    expect(data).toBeDefined();
    expect(data?.accounts).toHaveLength(2);
    expect(data?.accounts[0]?.balance).toBe(471698230471698230471698230471698230n);
    expect(typeof data?.accounts[0]?.balance).toBe('bigint');
    expect(data?.accounts[1]?.balance).toBe(47602800n);
    expect(typeof data?.accounts[1]?.balance).toBe('bigint');
});

test('BigInt parse data in string test', async () => {
    mockFetch(getJettonInfoMock);

    const usdtJettonAddress = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs');
    const data = await ta.getJettonInfo(usdtJettonAddress);

    expect(data).toBeDefined();
    expect(typeof data?.totalSupply).toBe('bigint');
});

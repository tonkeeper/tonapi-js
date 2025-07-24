import { Address } from '@ton/core';
import { ta } from './utils/client';
import { getAccounts, getBlockchainRawAccount, getJettonHolders } from './__mock__/address';
import { vi, test, expect, afterEach } from 'vitest';
import { mockFetch } from './utils/mockFetch';

afterEach(() => {
    vi.restoreAllMocks();
});

test('Address simple in params & response', async () => {
    const fetchSpy = mockFetch(getBlockchainRawAccount);

    const addressString = 'UQC62nZpm36EFzADVfXDVd_4OpbFyc1D3w3ZvCPHLni8Dst4';
    const addressObject = Address.parse(addressString);
    const addressRawString = addressObject.toRawString();
    const res = await ta.blockchain.getBlockchainRawAccount(addressObject);

    expect(res).toBeDefined();
    expect(Address.isAddress(res.address)).toBe(true);
    expect(fetchSpy).toHaveBeenCalledWith(
        expect.stringContaining(addressRawString),
        expect.any(Object)
    );
});

test('Address in request body test', async () => {
    const fetchSpy = mockFetch(getAccounts);

    const addressStrings = [
        '0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168',
        '0:7c9fc62291740a143086c807fe322accfd12737b3c2243676228176707c7ce40'
    ];

    const accountIds = addressStrings.map(str => Address.parse(str));
    const res = await ta.accounts.getAccounts({ accountIds });

    expect(res).toBeDefined();
    expect(fetchSpy).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
            body: JSON.stringify({
                account_ids: addressStrings.map(addr => Address.parse(addr).toRawString())
            })
        })
    );
});

test('Maybe address in response body test', async () => {
    mockFetch(getJettonHolders);

    const res = await ta.jettons.getJettonHolders(Address.parse('EQDDGeJzJm0yEtCDPQbspKf9wtoyhF2n96r3Rs2DnL7oUIJq'));

    res.addresses.forEach((holder, index) => {
        const tAddr = getJettonHolders.addresses[index].owner.address;
        if (holder.owner.address === null) {
            expect(tAddr).toBe("");
        } else {
            expect(holder.owner.address.toRawString()).toBe(tAddr);
        }
    });
    expect(res).toBeDefined();
});

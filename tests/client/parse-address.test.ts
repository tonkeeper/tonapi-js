import { Address } from '@ton/core';
import { ta } from './utils/client';
import {
    getAccounts,
    getBlockchainRawAccount,
    getAccountEvent,
    getAccountEventWithEmptyNft
} from './__mock__/address';
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
    const data = await ta.getBlockchainRawAccount(addressObject);

    expect(data).toBeDefined();
    expect(Address.isAddress(data?.address)).toBe(true);
    // Address objects are serialized to raw format
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
    const data = await ta.getAccounts({ accountIds });

    expect(data).toBeDefined();
    // Address objects are serialized to raw format
    expect(fetchSpy).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
            body: JSON.stringify({
                account_ids: addressStrings
            })
        })
    );
});

test('MaybeAddress with valid address', async () => {
    mockFetch(getAccountEvent);

    const data = await ta.getAccountEvent(
        Address.parse('0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168'),
        'test-event-id'
    );

    expect(data).toBeDefined();
    expect(data.actions[0]).toBeDefined();
    const nftTransfer = data.actions[0]?.NftItemTransfer;
    expect(nftTransfer).toBeDefined();
    expect(nftTransfer?.nft).toBeInstanceOf(Address);
    expect(Address.isAddress(nftTransfer?.nft)).toBe(true);
});

test('MaybeAddress with empty string', async () => {
    mockFetch(getAccountEventWithEmptyNft);

    const data = await ta.getAccountEvent(
        Address.parse('0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168'),
        'test-event-id-empty'
    );

    expect(data).toBeDefined();
    expect(data.actions[0]).toBeDefined();
    const nftTransfer = data.actions[0]?.NftItemTransfer;
    expect(nftTransfer).toBeDefined();
    expect(nftTransfer?.nft).toBeNull();
});

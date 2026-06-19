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

test('MaybeAddress with null value should return null', async () => {
    // API returns null in maybe-address field
    mockFetch({
        event_id: 'test-event-id-null',
        account: { address: '0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168' },
        timestamp: 1234567890,
        actions: [
            {
                type: 'NftItemTransfer',
                status: 'ok',
                NftItemTransfer: {
                    sender: { address: '0:1111111111111111111111111111111111111111111111111111111111111111' },
                    recipient: { address: '0:2222222222222222222222222222222222222222222222222222222222222222' },
                    nft: null // null in maybe-address field
                }
            }
        ]
    });

    const data = await ta.getAccountEvent(
        Address.parse('0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168'),
        'test-event-id-null'
    );

    expect(data).toBeDefined();
    expect(data.actions[0]).toBeDefined();
    const nftTransfer = data.actions[0]?.NftItemTransfer;
    expect(nftTransfer).toBeDefined();
    expect(nftTransfer?.nft).toBeNull();
});

test('MaybeAddress with invalid address should throw parsing error', async () => {
    // API returns invalid address string in maybe-address field
    const mockInvalidAddressData = {
        event_id: 'test-event-id-invalid',
        account: { address: '0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168' },
        timestamp: 1234567890,
        actions: [
            {
                type: 'NftItemTransfer',
                status: 'ok',
                NftItemTransfer: {
                    sender: { address: '0:1111111111111111111111111111111111111111111111111111111111111111' },
                    recipient: { address: '0:2222222222222222222222222222222222222222222222222222222222222222' },
                    nft: 'totally-invalid-address-string' // Invalid address in maybe-address field
                }
            }
        ]
    };

    mockFetch(mockInvalidAddressData);

    try {
        await ta.getAccountEvent(
            Address.parse('0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168'),
            'test-event-id-invalid'
        );
        expect.fail('Should have thrown TonApiParsingError');
    } catch (error: any) {
        expect(error).toBeDefined();
        expect(error.type).toBe('parsing_error');
        expect(error.parsingType).toBe('MaybeAddress');
    }
});

test('Address accepts both friendly and raw formats in request', async () => {
    // Test raw format
    const rawAddress = '0:2f0df5851b4a185f5f63c0d0cd0412f5aca353f577da18ff47c936f99dbd849a';
    const fetchSpyRaw = mockFetch({
        address: rawAddress,
        balance: '1000000000',
        status: 'active'
    });

    await ta.getAccount(Address.parse(rawAddress));

    // Address should be sent in raw format
    expect(fetchSpyRaw).toHaveBeenCalledWith(
        expect.stringContaining(rawAddress),
        expect.any(Object)
    );

    vi.restoreAllMocks();

    // Test friendly format
    const friendlyAddress = 'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y';
    const fetchSpyFriendly = mockFetch({
        address: friendlyAddress,
        balance: '1000000000',
        status: 'active'
    });

    await ta.getAccount(Address.parse(friendlyAddress));

    // Address object should be serialized to raw format
    const addressObject = Address.parse(friendlyAddress);
    expect(fetchSpyFriendly).toHaveBeenCalledWith(
        expect.stringContaining(addressObject.toRawString()),
        expect.any(Object)
    );
});

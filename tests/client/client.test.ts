import { TonApiClient, ApiConfig } from '@ton-api/client';
import { ta, taWithApiKey } from './utils/client';
import { Address } from '@ton/core';
import { getAccounts } from './__mock__/services';
import { vi, test, expect, afterEach } from 'vitest';
import { mockFetch } from './utils/mockFetch';

afterEach(() => {
    vi.restoreAllMocks();
});

test('Client status test', async () => {
    mockFetch({
        rest_online: true,
        indexing_latency: 8
    });

    const res = await ta.status();
    expect(res).toBeDefined();
});

test('Client apiKey test', async () => {
    const fetchSpy = mockFetch({
        rest_online: true,
        indexing_latency: 8
    });

    const res = await taWithApiKey.status();
    expect(res).toBeDefined();

    expect(fetchSpy).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.objectContaining({
                Authorization: 'Bearer TEST_API_KEY'
            })
        })
    );
});

test('Client without apiKey should not include Authorization header', async () => {
    const fetchSpy = mockFetch({
        rest_online: true,
        indexing_latency: 8
    });

    const res = await ta.status();
    expect(res).toBeDefined();

    expect(fetchSpy).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.not.objectContaining({
                Authorization: expect.anything()
            })
        })
    );
});

test('Client x-tonapi-client header test', async () => {
    const fetchSpy = mockFetch({
        rest_online: true,
        indexing_latency: 8
    });

    const res = await ta.status();
    expect(res).toBeDefined();

    expect(fetchSpy).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.objectContaining({
                'x-tonapi-client': expect.stringMatching(/^tonapi-js@/)
            })
        })
    );
});

test('Client custom fetch is called', async () => {
    const mockResponse = {
        rest_online: true,
        indexing_latency: 8
    };

    const customFetch = vi.fn().mockResolvedValueOnce(
        new Response(JSON.stringify(mockResponse), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    );

    const config: ApiConfig = {
        baseUrl: 'https://tonapi.io',
        fetch: customFetch
    };

    const ta = new TonApiClient(config);

    await ta.status();

    expect(customFetch).toHaveBeenCalled();
});

test('Client post method in fetch', async () => {
    const fetchSpy = mockFetch(getAccounts);

    const accountIds = [
        'UQCae11h9N5znylEPRjmuLYGvIwnxkcCw4zVW4BJjVASi5eL',
        'UQAW2nxA69WYdMr90utDmpeZFwvG4XYcc9iibAP5sZnlojRO'
    ];

    const res = await ta.getAccounts({
        accountIds: accountIds.map(id => Address.parse(id))
    });

    expect(res).toBeDefined();

    expect(fetchSpy).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            method: 'POST'
        })
    );
});

test('Client response type for schema outside component (with snake_case)', async () => {
    mockFetch({
        public_key: '9544d2cccdd17e06e27f14fd531f803378d27f64710fd6aadc418c53d0660ec6'
    });

    const senderAddress = Address.parse('UQAQxxpzxmEVU0Lu8U0zNTxBzXIWPvo263TIN1OQM9YvxsnV');
    const res = await ta.getAccountPublicKey(senderAddress);

    expect(res).toBeDefined();
    expect(res.publicKey).toBe('9544d2cccdd17e06e27f14fd531f803378d27f64710fd6aadc418c53d0660ec6');
});

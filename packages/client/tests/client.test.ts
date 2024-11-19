import { TonApiClient, ApiConfig } from '../src/client';
import fetchMock from 'jest-fetch-mock';
import { ta, taWithApiKey } from './utils/client';
import { JSONStringify } from './utils/jsonbig';

test('Client status test', async () => {
    fetchMock.enableMocks();

    fetchMock.mockResponseOnce(
        JSONStringify({
            rest_online: true,
            indexing_latency: 8
        })
    );

    const res = await ta.utilities.status();
    expect(res).toBeDefined();

    fetchMock.disableMocks();
});

test('Client apiKey test', async () => {
    fetchMock.enableMocks();

    fetchMock.mockResponseOnce(
        JSONStringify({
            rest_online: true,
            indexing_latency: 8
        })
    );

    const res = await taWithApiKey.utilities.status();
    expect(res).toBeDefined();

    expect(fetchMock).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.objectContaining({
                Authorization: 'Bearer TEST_API_KEY'
            })
        })
    );

    fetchMock.disableMocks();
});

test('Client apiKey missing test', async () => {
    fetchMock.enableMocks();

    const config: ApiConfig = {
        baseUrl: 'https://tonapi.io'
    };

    const ta = new TonApiClient(config);
    const res = await ta.utilities.status();
    expect(res).toBeDefined();

    expect(fetchMock).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.not.objectContaining({
                Authorization: expect.anything()
            })
        })
    );

    fetchMock.disableMocks();
});

test('Client fallback test', async () => {
    fetchMock.enableMocks();

    const config: ApiConfig = {
        baseUrl: 'https://tonapi.io'
    };

    const ta = new TonApiClient(config);
    const res = await ta.blockchain.status();
    expect(res).toBeDefined();

    expect(fetchMock).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.not.objectContaining({
                Authorization: expect.anything()
            })
        })
    );

    fetchMock.disableMocks();
});

test('Client x-tonapi-client header test', async () => {
    fetchMock.enableMocks();

    fetchMock.mockResponseOnce(
        JSONStringify({
            rest_online: true,
            indexing_latency: 8
        })
    );

    const res = await ta.utilities.status();
    expect(res).toBeDefined();

    expect(fetchMock).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.objectContaining({
                'x-tonapi-client': expect.stringMatching(/^tonapi-js@/)
            })
        })
    );

    fetchMock.disableMocks();
});

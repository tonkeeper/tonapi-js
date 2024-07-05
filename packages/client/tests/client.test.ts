import { TonApiClient, Api, ApiConfig } from '../src/client';
import JSONBigWrapper from 'json-bigint';
import fetchMock from 'jest-fetch-mock';

export const JSONBig = JSONBigWrapper({ useNativeBigInt: true });

const config: ApiConfig = {
    baseUrl: 'https://tonapi.io',
    apiKey: 'TEST_API_KEY'
};

const http = new TonApiClient(config);
export const client = new Api(http);

test('Client status test', async () => {
    fetchMock.enableMocks();

    fetchMock.mockResponseOnce(
        JSONBig.stringify({
            rest_online: true,
            indexing_latency: 8
        })
    );

    const res = await client.blockchain.status();
    expect(res).toBeDefined();

    fetchMock.disableMocks();
});

test('Client apiKey test', async () => {
  fetchMock.enableMocks();

  fetchMock.mockResponseOnce(
      JSONBig.stringify({
          rest_online: true,
          indexing_latency: 8
      })
  );

  const res = await client.blockchain.status();
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

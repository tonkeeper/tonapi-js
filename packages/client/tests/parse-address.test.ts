import { Address } from '@ton/core';
import { ta } from './utils/client';
import fetchMock from 'jest-fetch-mock';
import { getAccounts, getBlockchainRawAccount } from './__mock__/address';

beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.resetMocks();
});

afterAll(() => {
    fetchMock.disableMocks();
});

test('Address simple in params & response', async () => {
    fetchMock.mockResponseOnce(getBlockchainRawAccount);

    const addressString = 'UQC62nZpm36EFzADVfXDVd_4OpbFyc1D3w3ZvCPHLni8Dst4';
    const addressObject = Address.parse(addressString);
    const addressRawString = addressObject.toRawString();
    const res = await ta.blockchain.getBlockchainRawAccount(addressObject);

    expect(res).toBeDefined();
    expect(Address.isAddress(res.address)).toBe(true);
    expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining(addressRawString),
        expect.any(Object)
    );
});

// Same case with first test not matter
// test("nft test", async () => {
//   fetchMock.mockResponseOnce(getBlockchainRawAccount);

//   const addressStringValid =
//     "0:7c9fc62291740a143086c807fe322accfd12737b3c2243676228176707c7ce40";
//   const addressObjectValid = Address.parse(addressStringValid);
//   const resValid = await client.nft.getNftItemByAddress(addressObjectValid);

//   expect(resValid).toBeDefined();
//   expect(resValid.address.toRaw).toBeDefined();
//   expect(fetchMock).toHaveBeenCalledWith(
//     expect.stringContaining(addressStringValid),
//     expect.any(Object)
//   );
// });

test('Address in request body test', async () => {
    fetchMock.mockResponseOnce(getAccounts);

    const addressStrings = [
        '0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168',
        '0:7c9fc62291740a143086c807fe322accfd12737b3c2243676228176707c7ce40'
    ];

    const accountIds = addressStrings.map(value => Address.parse(value));
    const res = await ta.accounts.getAccounts({ accountIds });

    expect(res).toBeDefined();
    expect(fetchMock).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
            body: JSON.stringify({
                account_ids: addressStrings.map(value => Address.parse(value).toRawString())
            })
        })
    );
});

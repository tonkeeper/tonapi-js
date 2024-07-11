import { Address, Cell, TupleItem, TupleItemCell } from '@ton/core';
import fetchMock from 'jest-fetch-mock';
import { execGetMethodForBlockchainAccount, getBlockchainRawAccount } from './__mock__/cell';
import { client } from './utils/client';

beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.resetMocks();
});

afterAll(() => {
    fetchMock.disableMocks();
});

test('Cell hex in response test', async () => {
    fetchMock.mockResponseOnce(getBlockchainRawAccount);

    const addressString = '0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168';
    const addressObject = Address.parse(addressString);
    const res = await client.blockchain.getBlockchainRawAccount(addressObject);

    expect(res).toBeDefined();
    expect(res.code).toBeDefined();
    expect(res.code).toBeInstanceOf(Cell);
});

// TODO: Fix this test (add valid message)
test('Cell hex in request body test', async () => {
    const cellBase64 = Buffer.from(
        'b5ee9c72010214010002d4000114ff00f4a413f4bcf2c80b010201200203020148040504f8f28308d71820d31fd31fd31f02f823bbf264ed44d0d31fd31fd3fff404d15143baf2a15151baf2a205f901541064f910f2a3f80024a4c8cb1f5240cb1f5230cbff5210f400c9ed54f80f01d30721c0009f6c519320d74a96d307d402fb00e830e021c001e30021c002e30001c0039130e30d03a4c8cb1f12cb1fcbff1011121302e6d001d0d3032171b0925f04e022d749c120925f04e002d31f218210706c7567bd22821064737472bdb0925f05e003fa403020fa4401c8ca07cbffc9d0ed44d0810140d721f404305c810108f40a6fa131b3925f07e005d33fc8258210706c7567ba923830e30d03821064737472ba925f06e30d06070201200809007801fa00f40430f8276f2230500aa121bef2e0508210706c7567831eb17080185004cb0526cf1658fa0219f400cb6917cb1f5260cb3f20c98040fb0006008a5004810108f45930ed44d0810140d720c801cf16f400c9ed540172b08e23821064737472831eb17080185005cb055003cf1623fa0213cb6acb1fcb3fc98040fb00925f03e20201200a0b0059bd242b6f6a2684080a06b90fa0218470d4080847a4937d29910ce6903e9ff9837812801b7810148987159f31840201580c0d0011b8c97ed44d0d70b1f8003db29dfb513420405035c87d010c00b23281f2fff274006040423d029be84c600201200e0f0019adce76a26840206b90eb85ffc00019af1df6a26840106b90eb858fc0006ed207fa00d4d422f90005c8ca0715cbffc9d077748018c8cb05cb0222cf165005fa0214cb6b12ccccc973fb00c84014810108f451f2a7020070810108d718fa00d33fc8542047810108f451f2a782106e6f746570748018c8cb05cb025006cf165004fa0214cb6a12cb1fcb3fc973fb0002006c810108d718fa00d33f305224810108f459f2a782106473747270748018c8cb05cb025005cf165003fa0213cb6acb1f12cb3fc973fb00000af400c9ed54',
        'hex'
    ).toString('base64');

    const cell = Cell.fromBase64(cellBase64);

    await client.blockchain.sendBlockchainMessage({
        boc: cell
    });

    expect(fetchMock).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
            method: 'POST',
            body: JSON.stringify({
                boc: cell.hash().toString('hex')
            })
        })
    );
});

// TODO: add test for cell base64 in request body (can't make correct request)
// test("Cell base64 in request test", async () => {
//   const addressString =
//     "0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168";
//   const addressObject = Address.parse(addressString);
//   const res = await client.blockchain.getBlockchainRawAccount(addressObject);

//   expect(res).toBeDefined();
//   expect(res.code).toBeDefined();
//   expect(res.code).toBeInstanceOf(Cell);
// });

const guardCell = (item: TupleItem): item is TupleItemCell => {
    return item.type === 'cell';
};

// TODO: This test was supposed to be about base64, but the expected response was in hex
test('Cell base64 in response test', async () => {
    fetchMock.mockResponseOnce(execGetMethodForBlockchainAccount);

    const addressString = 'EQDW6q4sRqQwNCmW4qwUpeFSU1Xhd6l3xwJ6jjknBPzxKNtT';
    const addressObject = Address.parse(addressString);
    const res = await client.blockchain.execGetMethodForBlockchainAccount(
        addressObject,
        'royalty_params'
    );

    const cellTupleItem = res.stack[2];

    expect(res).toBeDefined();
    expect(res.success).toBeDefined();
    expect(cellTupleItem).toBeDefined();
    expect(cellTupleItem.type).toBeDefined();
    expect(cellTupleItem.type).toBe('cell');

    if (guardCell(cellTupleItem)) {
        expect(cellTupleItem.cell).toBeDefined();
        expect(cellTupleItem.cell).toBeInstanceOf(Cell);
    } else {
        throw new Error('Cell guard failed');
    }
});

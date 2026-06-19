import { Address, Cell, Tuple, TupleItem } from '@ton/core';
import { ta } from './utils/client';
import { execGetMethodForBlockchainAccount as execGetMethodForBlockchainAccountMock } from './__mock__/tuple';
import { mockFetch } from './utils/mockFetch';
import { test, expect, afterEach, vi } from 'vitest';

afterEach(() => {
    vi.restoreAllMocks();
});

function guardTuple(item: TupleItem): item is Tuple {
    return item.type === 'tuple';
}

test('Tuple test', async () => {
    mockFetch(execGetMethodForBlockchainAccountMock);

    const addressString = 'Ef_X4pRKtgXOXYMOXNgXNRdlhkNKJ9bTKMfqvj6HDIiQG98F';
    const addressObject = Address.parse(addressString);
    const data = await ta.execGetMethodForBlockchainAccount(
        addressObject,
        'list_nominators'
    );

    expect(data).toBeDefined();
    expect(data?.success).toBeDefined();

    const highLevelTuple = data?.stack[0];
    expect(highLevelTuple).toBeDefined();
    expect(highLevelTuple?.type).toBeDefined();
    expect(highLevelTuple?.type).toBe('tuple');

    if (!highLevelTuple) {
        expect.fail('Expected highLevelTuple to be defined');
        return;
    }

    if (!guardTuple(highLevelTuple)) {
        expect.fail('Expected highLevelTuple to be a tuple type');
        return;
    }

    expect(highLevelTuple.items).toBeDefined();

    const secondLevelTupleFirst = highLevelTuple.items[0];
    expect(secondLevelTupleFirst).toBeDefined();
    expect(secondLevelTupleFirst?.type).toBeDefined();
    expect(secondLevelTupleFirst?.type).toBe('tuple');

    if (!secondLevelTupleFirst) {
        expect.fail('Expected secondLevelTupleFirst to be defined');
        return;
    }

    if (!guardTuple(secondLevelTupleFirst)) {
        expect.fail('Expected secondLevelTupleFirst to be a tuple type');
        return;
    }

    expect(secondLevelTupleFirst.items).toBeDefined();
});

test('TupleItem num type with hexadecimal value', async () => {
    mockFetch({
        success: true,
        exit_code: 0,
        stack: [
            {
                type: 'num',
                num: '0xabc123' // Hexadecimal positive number
            }
        ]
    });

    const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
    const data = await ta.execGetMethodForBlockchainAccount(address, 'get_data');

    expect(data).toBeDefined();
    expect(data?.stack[0]).toBeDefined();
    expect(data?.stack[0]?.type).toBe('int');

    if (data?.stack[0]?.type === 'int') {
        // 0xabc123 = 11256099
        expect(data.stack[0].value).toBe(11256099n);
    }
});

test('TupleItem num type with negative hexadecimal value', async () => {
    mockFetch({
        success: true,
        exit_code: 0,
        stack: [
            {
                type: 'num',
                num: '-0xabc123' // Negative hexadecimal number
            }
        ]
    });

    const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
    const data = await ta.execGetMethodForBlockchainAccount(address, 'get_data');

    expect(data).toBeDefined();
    expect(data?.stack[0]).toBeDefined();
    expect(data?.stack[0]?.type).toBe('int');

    if (data?.stack[0]?.type === 'int') {
        // -0xabc123 = -11256099
        expect(data.stack[0].value).toBe(-11256099n);
    }
});

test('TupleItem slice type parsing', async () => {
    // Valid empty cell in hex format
    const validCellHex = 'b5ee9c724101010100020000004cacb9cd';

    mockFetch({
        success: true,
        exit_code: 0,
        stack: [
            {
                type: 'slice',
                slice: validCellHex
            }
        ]
    });

    const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
    const data = await ta.execGetMethodForBlockchainAccount(address, 'get_data');

    expect(data).toBeDefined();
    expect(data?.stack[0]).toBeDefined();
    expect(data?.stack[0]?.type).toBe('slice');

    if (data?.stack[0]?.type === 'slice') {
        expect(data.stack[0].slice).toBeDefined();
        // Should be parsed as Cell
        expect(data.stack[0].slice).toBeInstanceOf(Cell);
    }
});

test('TupleItem null type parsing', async () => {
    mockFetch({
        success: true,
        exit_code: 0,
        stack: [
            {
                type: 'null'
            }
        ]
    });

    const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
    const data = await ta.execGetMethodForBlockchainAccount(address, 'get_data');

    expect(data).toBeDefined();
    expect(data?.stack[0]).toBeDefined();
    expect(data?.stack[0]?.type).toBe('null');
});

test('TupleItem nan type parsing', async () => {
    mockFetch({
        success: true,
        exit_code: 0,
        stack: [
            {
                type: 'nan'
            }
        ]
    });

    const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
    const data = await ta.execGetMethodForBlockchainAccount(address, 'get_data');

    expect(data).toBeDefined();
    expect(data?.stack[0]).toBeDefined();
    expect(data?.stack[0]?.type).toBe('nan');
});

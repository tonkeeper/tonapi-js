import { Address, Tuple, TupleItem } from '@ton/core';
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

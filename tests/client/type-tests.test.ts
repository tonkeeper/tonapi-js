/**
 * Type-level tests for conditional return types with ThrowOnError
 * These tests verify that TypeScript correctly infers return types based on throwOnError parameter
 */

import { test, expectTypeOf, vi, beforeEach } from 'vitest';
import {
    initClient,
    TonApiClient,
    status,
    getAccount,
    getAccounts,
    TonApiHttpError,
    type Result,
    type ServiceStatus,
    type Account,
    type Accounts,
    type TonApiError,
    type TonApiPromise
} from '@ton-api/client';
import { Address } from '@ton/core';

beforeEach(() => {
    // Initialize client for global methods
    initClient({ baseUrl: 'https://tonapi.io' });

    // Mock fetch to prevent actual API calls during type tests
    // These calls are never awaited - they're just for type checking
    vi.spyOn(global, 'fetch').mockResolvedValue(
        new Response(JSON.stringify({}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    );
});

test('Advanced API - Global methods with ThrowOnError', () => {
    // Test 1: Without throwOnError (default = false) should return Result<T>
    expectTypeOf(status()).resolves.toEqualTypeOf<Result<ServiceStatus>>();

    // Test 2: With throwOnError: false should return Result<T>
    expectTypeOf(status({ throwOnError: false })).resolves.toEqualTypeOf<Result<ServiceStatus>>();

    // Test 3: With throwOnError: true should return T directly
    expectTypeOf(status({ throwOnError: true })).resolves.toEqualTypeOf<ServiceStatus>();

    // Test 4: With throwOnError: true as const should return T directly
    expectTypeOf(status({ throwOnError: true as const })).resolves.toEqualTypeOf<ServiceStatus>();

    // Test 5: With path parameters - throwOnError: false
    const address = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');
    expectTypeOf(
        getAccount({
            path: { accountId: address },
            throwOnError: false
        })
    ).resolves.toEqualTypeOf<Result<Account>>();

    // Test 6: With path parameters - throwOnError: true
    expectTypeOf(
        getAccount({
            path: { accountId: address },
            throwOnError: true
        })
    ).resolves.toEqualTypeOf<Account>();

    // Test 7: With path parameters - no throwOnError (default = false)
    expectTypeOf(
        getAccount({
            path: { accountId: address }
        })
    ).resolves.toEqualTypeOf<Result<Account>>();

    // Test 8: With body and query parameters - throwOnError: false
    expectTypeOf(
        getAccounts({
            body: { accountIds: [address] },
            query: { currency: 'usd' },
            throwOnError: false
        })
    ).resolves.toEqualTypeOf<Result<Accounts>>();

    // Test 9: With body and query parameters - throwOnError: true
    expectTypeOf(
        getAccounts({
            body: { accountIds: [address] },
            query: { currency: 'usd' },
            throwOnError: true
        })
    ).resolves.toEqualTypeOf<Accounts>();

    // Test 10: With body and query parameters - no throwOnError (default = false)
    expectTypeOf(
        getAccounts({
            body: { accountIds: [address] },
            query: { currency: 'usd' }
        })
    ).resolves.toEqualTypeOf<Result<Accounts>>();

    // Test 11: Result type destructuring works correctly
    // Result<T> should match the exact union type with TonApiError
    type ResultType = Result<ServiceStatus>;
    type ExpectedType = { data: ServiceStatus; error: null } | { data: null; error: TonApiError };
    expectTypeOf<ResultType>().toEqualTypeOf<ExpectedType>();

    // Test 12: String address support
    expectTypeOf(
        getAccount({
            path: { accountId: 'EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin' }
        })
    ).resolves.toEqualTypeOf<Result<Account>>();

    // Test 13: String address with throwOnError: true
    expectTypeOf(
        getAccount({
            path: { accountId: 'EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin' },
            throwOnError: true
        })
    ).resolves.toEqualTypeOf<Account>();

    // Test 14: Custom client in options
    const customClient = new TonApiClient({ baseUrl: 'https://tonapi.io' });
    expectTypeOf(
        status({
            client: customClient,
            throwOnError: false
        })
    ).resolves.toEqualTypeOf<Result<ServiceStatus>>();

    // Test 15: Custom client with throwOnError: true
    expectTypeOf(
        status({
            client: customClient,
            throwOnError: true
        })
    ).resolves.toEqualTypeOf<ServiceStatus>();
});

test('Instance API - TonApiClient methods', () => {
    const client = new TonApiClient({ baseUrl: 'https://tonapi.io' });
    const address = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');

    // Test 1: Instance method returns TonApiPromise<T, TonApiError>
    expectTypeOf(client.status()).toEqualTypeOf<TonApiPromise<ServiceStatus, TonApiError>>();

    // Test 2: Instance method with path parameters
    expectTypeOf(client.getAccount(address)).toEqualTypeOf<TonApiPromise<Account, TonApiError>>();

    // Test 3: Instance method resolves to T (not Result)
    expectTypeOf(client.status()).resolves.toEqualTypeOf<ServiceStatus>();

    // Test 4: Instance method with Address parameter
    expectTypeOf(client.getAccount(address)).resolves.toEqualTypeOf<Account>();

    // Test 5: Instance method with string address
    expectTypeOf(
        client.getAccount('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin')
    ).resolves.toEqualTypeOf<Account>();

    // Test 6: Instance method with body and query
    expectTypeOf(
        client.getAccounts({ accountIds: [address] }, { currency: 'usd' })
    ).resolves.toEqualTypeOf<Accounts>();

    // Test 7: TonApiPromise extends Promise
    type StatusPromise = ReturnType<typeof client.status>;
    type IsPromise = StatusPromise extends Promise<ServiceStatus> ? true : false;
    expectTypeOf<IsPromise>().toEqualTypeOf<true>();
});

test('Typed .catch() for Instance API', () => {
    const client = new TonApiClient({ baseUrl: 'https://tonapi.io' });
    const address = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');

    // Test 1: .catch() error parameter is typed as TonApiError
    const catchHandler1 = (_error: TonApiError) => null;
    expectTypeOf(catchHandler1).parameter(0).toEqualTypeOf<TonApiError>();

    // Test 2: .catch() receives TonApiError and can access its properties
    client.status().catch((error) => {
        // Verify error type is inferred as TonApiError
        type ErrorType = typeof error;
        expectTypeOf<ErrorType>().toEqualTypeOf<TonApiError>();

        // Can access TonApiError properties
        error.message;
        error.type;
        return null;
    });

    // Test 3: .catch() with type narrowing
    client.getAccount(address).catch((error) => {
        // Error is TonApiError
        type ErrorType = typeof error;
        expectTypeOf<ErrorType>().toEqualTypeOf<TonApiError>();

        // Can use instanceof for narrowing
        if (error instanceof TonApiHttpError) {
            error.status;
            error.code;
            error.url;
        }
        return null;
    });

    // Test 4: Promise chain return types
    type ChainResult = ReturnType<typeof client.status>;
    expectTypeOf<ChainResult>().toEqualTypeOf<TonApiPromise<ServiceStatus, TonApiError>>();

    // Test 5: .then() preserves type
    const thenResult = client.status().then(data => {
        type DataType = typeof data;
        expectTypeOf<DataType>().toEqualTypeOf<ServiceStatus>();
        return data.restOnline;
    });
    expectTypeOf(thenResult).resolves.toEqualTypeOf<boolean>();
});

test('Promise chain typing for global methods', () => {
    const address = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');

    // Test 1: throwOnError: true with .then()
    const thenHandler1 = (data: Account) => data.balance;
    expectTypeOf(
        getAccount({
            path: { accountId: address },
            throwOnError: true
        }).then(thenHandler1)
    ).resolves.toEqualTypeOf<bigint>();

    // Test 2: throwOnError: false with .then() - receives Result
    const thenHandler2 = (result: Result<Account>) => result.data;
    expectTypeOf(
        getAccount({
            path: { accountId: address },
            throwOnError: false
        }).then(thenHandler2)
    ).resolves.toEqualTypeOf<Account | null>();

    // Test 3: throwOnError: true with .catch() - error is unknown (standard Promise)
    const catchHandler = (_error: unknown) => null;
    expectTypeOf(catchHandler).parameter(0).toEqualTypeOf<unknown>();
});

test('Result type usage patterns', () => {
    const address = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');

    // Test 1: Destructuring Result type
    type AccountResult = Result<Account>;
    expectTypeOf<AccountResult>().toEqualTypeOf<
        { data: Account; error: null } | { data: null; error: TonApiError }
    >();

    // Test 2: Result enables type-safe error handling with if checks
    // TypeScript will narrow types when checking result.error or result.data
    type ResultHandler = (result: Result<Account>) => Account | null;
    const handleResult: ResultHandler = (result) => {
        // Can check error property
        if (result.error) {
            return null;
        }
        // TypeScript knows data is Account here
        return result.data;
    };

    // Test 3: Result data property can be null in error case
    type SuccessBranch = { data: Account; error: null };
    type ErrorBranch = { data: null; error: TonApiError };
    expectTypeOf<Result<Account>>().toEqualTypeOf<SuccessBranch | ErrorBranch>();
});

test('TonApiPromise - .then() preserves typed .catch()', () => {
    const client = new TonApiClient({ baseUrl: 'https://tonapi.io' });
    const address = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');

    // Test 1: After .then(), error should still be TonApiError (not unknown!)
    const chainTest1 = client.status().then(data => {
        return data.restOnline;
    });

    chainTest1.catch(error => {
        type ErrorType = typeof error;
        // ✅ Should be TonApiError, not unknown!
        expectTypeOf<ErrorType>().toEqualTypeOf<TonApiError>();
    });

    // Test 2: Multiple .then() chains preserve typing
    const chainTest2 = client
        .getAccount(address)
        .then(account => account.balance)
        .then(balance => balance.toString());

    chainTest2.catch(error => {
        type ErrorType = typeof error;
        // ✅ Should be TonApiError
        expectTypeOf<ErrorType>().toEqualTypeOf<TonApiError>();
    });

    // Test 3: .then() with onrejected also works
    const chainTest3 = client.status().then(
        data => data.restOnline,
        error => {
            // error in onrejected should be TonApiError
            type ErrorType = typeof error;
            expectTypeOf<ErrorType>().toEqualTypeOf<TonApiError>();
            return false;
        }
    );

    chainTest3.catch(error => {
        type ErrorType = typeof error;
        expectTypeOf<ErrorType>().toEqualTypeOf<TonApiError>();
    });
});

test('TonApiPromise - .catch().then() preserves typing', () => {
    const client = new TonApiClient({ baseUrl: 'https://tonapi.io' });

    const chainTest = client
        .status()
        .catch(error => {
            // error is TonApiError ✅
            type ErrorType = typeof error;
            expectTypeOf<ErrorType>().toEqualTypeOf<TonApiError>();
            return null;
        })
        .then(result => {
            // result is ServiceStatus | null
            type ResultType = typeof result;
            expectTypeOf<ResultType>().toEqualTypeOf<ServiceStatus | null>();
            return result;
        });

    // Subsequent .catch() should still have typed error
    chainTest.catch(error => {
        type ErrorType = typeof error;
        expectTypeOf<ErrorType>().toEqualTypeOf<TonApiError>();
    });
});

test('TonApiPromise - .finally() preserves typing', () => {
    const client = new TonApiClient({ baseUrl: 'https://tonapi.io' });

    const chainTest = client.status().finally(() => {
        console.log('done');
    });

    // After .finally(), error should still be TonApiError
    chainTest.catch(error => {
        type ErrorType = typeof error;
        expectTypeOf<ErrorType>().toEqualTypeOf<TonApiError>();
    });
});

test('TonApiPromise - Complex chains preserve typing', () => {
    const client = new TonApiClient({ baseUrl: 'https://tonapi.io' });
    const address = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');

    const complexChain = client
        .getAccount(address)
        .then(account => account.balance)
        .then(balance => balance.toString())
        .finally(() => {
            console.log('fetched balance');
        })
        .then(str => str.length);

    // After all these chains, error should still be TonApiError
    complexChain.catch(error => {
        type ErrorType = typeof error;
        expectTypeOf<ErrorType>().toEqualTypeOf<TonApiError>();
    });
});

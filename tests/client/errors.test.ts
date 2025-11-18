import { initTa, ta } from './utils/client';
import {
    status,
    getAccount,
    getAccounts,
    sendBlockchainMessage,
    TonApiParsingError,
    TonApiHttpError,
    TonApiNetworkError,
    TonApiUnknownError,
    TonApiValidationError,
    TonApiError,
    TonApiClient
} from '@ton-api/client';
import { Address, Cell } from '@ton/core';
import { vi, test, expect, beforeEach, describe, afterEach, expectTypeOf } from 'vitest';
import { mockFetch } from './utils/mockFetch';

beforeEach(() => {
    vi.restoreAllMocks();
    // Suppress console.error logs from parsing errors
    vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
    vi.restoreAllMocks();
});

const createJsonResponse = (data: any, statusCode = 200) => {
    return new Response(JSON.stringify(data), {
        status: statusCode,
        headers: { 'Content-Type': 'application/json' }
    });
};

// Helper to catch thrown errors for clean assertion
async function expectThrowingError(fn: () => Promise<any>) {
    return await fn().catch(err => err);
}

// Type assertion helpers for safe error testing
function assertIsHttpError(error: unknown): asserts error is TonApiHttpError {
    expect(error).toBeInstanceOf(TonApiHttpError);
}

function assertIsNetworkError(error: unknown): asserts error is TonApiNetworkError {
    expect(error).toBeInstanceOf(TonApiNetworkError);
}

function assertIsParsingError(error: unknown): asserts error is TonApiParsingError {
    expect(error).toBeInstanceOf(TonApiParsingError);
}

function assertIsUnknownError(error: unknown): asserts error is TonApiUnknownError {
    expect(error).toBeInstanceOf(TonApiUnknownError);
}

// ============================================================================
// PRIMARY APPROACH: Instance-based methods with throw on error (ta.*)
// ============================================================================

describe('Instance API - Primary approach (throws errors)', () => {
    test('should return a successful response with JSON data', async () => {
        const mockData = { rest_online: true, indexing_latency: 8 };
        const fetchSpy = mockFetch(mockData);

        const result = await ta.status();
        expect(result).toBeDefined();
        // Response is converted to camelCase
        expect(result?.restOnline).toBe(true);
        expect(result?.indexingLatency).toBe(8);
        expect(fetchSpy).toHaveBeenCalledWith(
            expect.stringContaining('/v2/status'),
            expect.any(Object)
        );
    });

    // ========================================================================
    // TonApiHttpError
    // ========================================================================

    describe('TonApiHttpError', () => {
        test('should have all required properties', async () => {
            const mockError = { error: 'Test error', code: 'TEST_CODE' };
            vi.spyOn(global, 'fetch').mockResolvedValueOnce(createJsonResponse(mockError, 400));

            const error = await expectThrowingError(() => ta.status());
            assertIsHttpError(error);

            // Verify all required properties
            expect(error).toHaveProperty('message');
            expect(error).toHaveProperty('status');
            expect(error).toHaveProperty('type');
            expect(error).toHaveProperty('url');
            expect(error).toHaveProperty('code');
            expect(error).toHaveProperty('originalCause');

            expect(typeof error.message).toBe('string');
            expect(typeof error.status).toBe('number');
            expect(error.type).toBe('http_error');
            expect(typeof error.url).toBe('string');
            expect(error.status).toBe(400);
        });

        test('should throw with JSON message', async () => {
            const mockError = { error: 'Invalid request' };
            vi.spyOn(global, 'fetch').mockResolvedValueOnce(createJsonResponse(mockError, 400));

            const error = await expectThrowingError(() => ta.status());
            assertIsHttpError(error);
            expect(error.message).toContain('Invalid request');
            expect(error.status).toBe(400);
            expect(error.type).toBe('http_error');
        });

        test('should throw with string message', async () => {
            vi.spyOn(global, 'fetch').mockResolvedValueOnce(
                createJsonResponse('Simple error message', 500)
            );

            const error = await expectThrowingError(() => ta.status());
            assertIsHttpError(error);
            expect(error.message).toContain('Simple error message');
            expect(error.status).toBe(500);
            expect(error.type).toBe('http_error');
        });

        test('should throw with proper structure', async () => {
            const mockError = { error: 'Invalid request' };
            vi.spyOn(global, 'fetch').mockResolvedValueOnce(createJsonResponse(mockError, 400));

            const error = await expectThrowingError(() => ta.status());
            expect(error).toBeDefined();
            expect(error.message).toBeDefined();
            assertIsHttpError(error);
        });

        test('should throw without error field', async () => {
            const mockError = { message: 'Some error without error field' };
            vi.spyOn(global, 'fetch').mockResolvedValueOnce(createJsonResponse(mockError, 400));

            const error = await expectThrowingError(() => ta.status());
            assertIsHttpError(error);
            expect(error.message).toContain('Some error without error field');
            expect(error.status).toBe(400);
            expect(error.type).toBe('http_error');
        });

        test('should throw when response has invalid JSON', async () => {
            const response = new Response('Invalid JSON', {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
            vi.spyOn(global, 'fetch').mockResolvedValueOnce(response);

            const error = await expectThrowingError(() => ta.status());
            assertIsHttpError(error);
            expect(error.type).toBe('http_error');
        });
    });

    // ========================================================================
    // TonApiNetworkError
    // ========================================================================

    describe('TonApiNetworkError', () => {
        test('should have all required properties', async () => {
            const mockError = new Error('Network failure');
            vi.spyOn(global, 'fetch').mockRejectedValueOnce(mockError);

            const error = await expectThrowingError(() => ta.status());
            assertIsNetworkError(error);

            // Verify all required properties
            expect(error).toHaveProperty('message');
            expect(error).toHaveProperty('type');
            expect(error).toHaveProperty('originalCause');

            expect(typeof error.message).toBe('string');
            expect(error.type).toBe('network_error');
            expect(error.originalCause).toBeInstanceOf(Error);
        });

        test('should throw when network fails', async () => {
            const mockError = new Error('Network failure');
            vi.spyOn(global, 'fetch').mockRejectedValueOnce(mockError);

            const error = await expectThrowingError(() => ta.status());
            assertIsNetworkError(error);
            expect(error.message).toContain('Network failure');
            expect(error.type).toBe('network_error');
        });
    });

    // ========================================================================
    // TonApiUnknownError
    // ========================================================================

    describe('TonApiUnknownError', () => {
        test('should have all required properties', async () => {
            vi.spyOn(global, 'fetch').mockRejectedValueOnce({ message: 'Some unknown error' });

            const error = await expectThrowingError(() => ta.status());
            assertIsUnknownError(error);

            // Verify all required properties
            expect(error).toHaveProperty('message');
            expect(error).toHaveProperty('type');
            expect(error).toHaveProperty('originalCause');

            expect(typeof error.message).toBe('string');
            expect(error.type).toBe('unknown_error');
            expect(error.originalCause).toBeDefined();
        });

        test('should throw on unknown error type (object)', async () => {
            vi.spyOn(global, 'fetch').mockRejectedValueOnce({ message: 'Some unknown error' });

            const error = await expectThrowingError(() => ta.status());
            assertIsUnknownError(error);
            expect(error.type).toBe('unknown_error');
        });

        test('should throw on unknown error type (string)', async () => {
            vi.spyOn(global, 'fetch').mockRejectedValueOnce('Some unknown error');

            const error = await expectThrowingError(() => ta.status());
            assertIsUnknownError(error);
            expect(error.type).toBe('unknown_error');
        });

        test('should throw when error is null', async () => {
            vi.spyOn(global, 'fetch').mockRejectedValueOnce(null);

            const error = await expectThrowingError(() => ta.status());
            assertIsUnknownError(error);
            expect(error.type).toBe('unknown_error');
        });

        test('should throw when error is undefined', async () => {
            vi.spyOn(global, 'fetch').mockRejectedValueOnce(undefined);

            const error = await expectThrowingError(() => ta.status());
            assertIsUnknownError(error);
            expect(error.type).toBe('unknown_error');
        });
    });

    // ========================================================================
    // TonApiParsingError
    // ========================================================================

    describe('TonApiParsingError', () => {
        describe('Invalid Address parsing', () => {
            test('should throw parsing_error for invalid address string', async () => {
                mockFetch({
                    address: 'invalid-address-string',
                    balance: '1000000000',
                    status: 'active'
                });

                const validAddress = Address.parse(
                    'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y'
                );
                const error = await expectThrowingError(() => ta.getAccount(validAddress));

                assertIsParsingError(error);
                expect(error.parsingType).toBe('Address');
                expect(error.type).toBe('parsing_error');
            });

            test('should throw parsing_error for empty address string', async () => {
                mockFetch({
                    address: '',
                    balance: '1000000000',
                    status: 'active'
                });

                const validAddress = Address.parse(
                    'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y'
                );
                const error = await expectThrowingError(() => ta.getAccount(validAddress));

                assertIsParsingError(error);
                expect(error.parsingType).toBe('Address');
            });

            test('should throw parsing_error for malformed address format', async () => {
                mockFetch({
                    address: 'EQ_this_is_not_valid_base64',
                    balance: '1000000000',
                    status: 'active'
                });

                const validAddress = Address.parse(
                    'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y'
                );
                const error = await expectThrowingError(() => ta.getAccount(validAddress));

                assertIsParsingError(error);
                expect(error.parsingType).toBe('Address');
            });
        });

        describe('Invalid Cell parsing', () => {
            test('should throw parsing_error for invalid cell hex string', async () => {
                mockFetch({
                    success: true,
                    exit_code: 0,
                    stack: [
                        {
                            type: 'cell',
                            cell: 'invalid-hex-string'
                        }
                    ]
                });

                const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
                const error = await expectThrowingError(() =>
                    ta.execGetMethodForBlockchainAccount(address, 'get_data')
                );

                assertIsParsingError(error);
                expect(error.parsingType).toBe('Cell');
            });

            test('should throw parsing_error for invalid cell BoC format', async () => {
                mockFetch({
                    success: true,
                    exit_code: 0,
                    stack: [
                        {
                            type: 'cell',
                            cell: 'b5ee9c72410101010007' // Valid hex but invalid BoC format
                        }
                    ]
                });

                const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
                const error = await expectThrowingError(() =>
                    ta.execGetMethodForBlockchainAccount(address, 'get_data')
                );

                assertIsParsingError(error);
                expect(error.parsingType).toBe('Cell');
            });

            test('should throw parsing_error for odd length hex string', async () => {
                mockFetch({
                    success: true,
                    exit_code: 0,
                    stack: [
                        {
                            type: 'cell',
                            cell: 'abc' // 3 characters - odd length
                        }
                    ]
                });

                const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
                const error = await expectThrowingError(() =>
                    ta.execGetMethodForBlockchainAccount(address, 'get_data')
                );

                assertIsParsingError(error);
                expect(error.parsingType).toBe('Cell');
            });

            test('should throw parsing_error for non-hex characters in cell', async () => {
                mockFetch({
                    success: true,
                    exit_code: 0,
                    stack: [
                        {
                            type: 'cell',
                            cell: 'zzxxyyaabbcc'
                        }
                    ]
                });

                const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
                const error = await expectThrowingError(() =>
                    ta.execGetMethodForBlockchainAccount(address, 'get_data')
                );

                assertIsParsingError(error);
                expect(error.parsingType).toBe('Cell');
            });
        });

        describe('Invalid BigInt parsing', () => {
            test('should throw parsing_error for non-numeric BigInt string', async () => {
                mockFetch({
                    address: 'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y',
                    balance: 'not-a-number',
                    status: 'active'
                });

                const validAddress = Address.parse(
                    'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y'
                );
                const error = await expectThrowingError(() => ta.getAccount(validAddress));

                assertIsParsingError(error);
                expect(error.parsingType).toBe('BigInt');
            });

            test('should throw parsing_error for invalid BigInt format', async () => {
                mockFetch({
                    address: 'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y',
                    balance: '123.456', // Decimal number, BigInt doesn't support decimals
                    status: 'active'
                });

                const validAddress = Address.parse(
                    'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y'
                );
                const error = await expectThrowingError(() => ta.getAccount(validAddress));

                assertIsParsingError(error);
                expect(error.parsingType).toBe('BigInt');
            });

            test('should handle empty string in BigInt field (converts to 0n)', async () => {
                // Note: BigInt('') actually returns 0n, not an error
                mockFetch({
                    address: 'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y',
                    balance: '',
                    status: 'active'
                });

                const validAddress = Address.parse(
                    'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y'
                );
                const result = await ta.getAccount(validAddress);

                // Empty string converts to 0n without error
                expect(result).toBeDefined();
                expect(result?.balance).toBe(0n);
            });
        });

        describe('Invalid TupleItem type', () => {
            test('should throw parsing_error for unknown tuple item type', async () => {
                mockFetch({
                    success: true,
                    exit_code: 0,
                    stack: [
                        {
                            type: 'unknown_type',
                            value: 'some-value'
                        }
                    ]
                });

                const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
                const error = await expectThrowingError(() =>
                    ta.execGetMethodForBlockchainAccount(address, 'get_data')
                );

                assertIsParsingError(error);
                expect(error.parsingType).toBe('TupleItem');
            });

            test('should throw parsing_error for invalid type in nested tuple', async () => {
                mockFetch({
                    success: true,
                    exit_code: 0,
                    stack: [
                        {
                            type: 'tuple',
                            tuple: [
                                {
                                    type: 'invalid_nested_type',
                                    value: 'test'
                                }
                            ]
                        }
                    ]
                });

                const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
                const error = await expectThrowingError(() =>
                    ta.execGetMethodForBlockchainAccount(address, 'get_data')
                );

                assertIsParsingError(error);
                expect(error.parsingType).toBe('TupleItem');
            });
        });

        describe('Error structure validation', () => {
            test('should have all required properties', async () => {
                mockFetch({
                    address: 'invalid',
                    balance: '1000000000',
                    status: 'active'
                });

                const validAddress = Address.parse(
                    'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y'
                );
                const error = await expectThrowingError(() => ta.getAccount(validAddress));

                assertIsParsingError(error);

                // Verify all required properties
                expect(error).toHaveProperty('message');
                expect(error).toHaveProperty('type');
                expect(error).toHaveProperty('parsingType');
                expect(error).toHaveProperty('originalCause');
                expect(error).toHaveProperty('response');

                expect(typeof error.message).toBe('string');
                expect(error.type).toBe('parsing_error');
                expect(['Address', 'Cell', 'BigInt', 'TupleItem', 'Unknown']).toContain(
                    error.parsingType
                );
            });

            test('parsing_error should have correct structure', async () => {
                mockFetch({
                    address: 'invalid',
                    balance: '1000000000',
                    status: 'active'
                });

                const validAddress = Address.parse(
                    'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y'
                );
                const error = await expectThrowingError(() => ta.getAccount(validAddress));

                assertIsParsingError(error);

                // Verify error structure
                expect(error).toHaveProperty('message');
                expect(error).toHaveProperty('type');
                expect(error).toHaveProperty('parsingType');
                expect(error).toHaveProperty('originalCause');

                expect(typeof error?.message).toBe('string');
                expect(error?.type).toBe('parsing_error');
            });

            test('originalCause should contain the original error', async () => {
                mockFetch({
                    address: 'invalid-address',
                    balance: '1000000000',
                    status: 'active'
                });

                const validAddress = Address.parse(
                    'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y'
                );
                const error = await expectThrowingError(() => ta.getAccount(validAddress));

                assertIsParsingError(error);
                expect(error.originalCause).toBeDefined();
                expect(error.parsingType).toBe('Address');
            });
        });
    });
});

// ============================================================================
// ADVANCED APPROACH: Global methods with {data, error} return pattern
// ============================================================================

describe('Advanced API - Global methods (returns {data, error})', () => {
    beforeEach(() => {
        initTa();
    });

    test('should return a successful response with JSON data', async () => {
        const mockData = { rest_online: true, indexing_latency: 8 };
        const fetchSpy = mockFetch(mockData);

        const { data, error } = await status();

        expect(error).toBeNull();
        expect(data).toBeDefined();
        // Response is converted to camelCase
        expect(data?.restOnline).toBe(true);
        expect(data?.indexingLatency).toBe(8);
        expect(fetchSpy).toHaveBeenCalledWith(
            expect.stringContaining('/v2/status'),
            expect.any(Object)
        );
    });

    test('should handle an error response with a JSON message', async () => {
        const mockError = { error: 'Invalid request' };
        vi.spyOn(global, 'fetch').mockResolvedValueOnce(createJsonResponse(mockError, 400));

        const { data, error } = await status();
        expect(data).toBeNull();
        expect(error).not.toBeNull();
        assertIsHttpError(error);
        expect(error.message).toContain('Invalid request');
        expect(error.status).toBe(400);
        expect(error.type).toBe('http_error');
    });

    test('should use custom client when provided', async () => {
        const mockData = { rest_online: true, indexing_latency: 8 };
        const customFetch = vi.fn().mockResolvedValueOnce(createJsonResponse(mockData, 200));
        const customClient = new TonApiClient({
            baseUrl: 'https://custom.tonapi.io',
            fetch: customFetch
        });

        const { data, error } = await status({ client: customClient });
        expect(error).toBeNull();
        expect(data).toBeDefined();
        expect(data?.restOnline).toBe(true);
        expect(customFetch).toHaveBeenCalledWith(
            expect.stringContaining('https://custom.tonapi.io/v2/status'),
            expect.any(Object)
        );
    });

    test('should work with path parameters', async () => {
        const mockData = {
            address: 'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y',
            balance: '1000000000',
            status: 'active'
        };
        mockFetch(mockData);

        const validAddress = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
        const { data, error } = await getAccount({
            path: { accountId: validAddress }
        });

        expect(error).toBeNull();
        expect(data).toBeDefined();
        expect(data?.balance).toBeDefined();
    });

    test('should work with path parameters and custom params', async () => {
        const mockData = {
            address: 'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y',
            balance: '1000000000',
            status: 'active'
        };
        const fetchSpy = mockFetch(mockData);

        const validAddress = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
        const { data, error } = await getAccount({
            path: { accountId: validAddress },
            params: { headers: { 'X-Custom': 'test' } }
        });

        expect(error).toBeNull();
        expect(data).toBeDefined();
        expect(fetchSpy).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({
                headers: expect.objectContaining({
                    'X-Custom': 'test'
                })
            })
        );
    });

    test('should work with body and query parameters', async () => {
        const mockData = {
            accounts: [
                {
                    address: 'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y',
                    balance: '1000000000',
                    status: 'active'
                }
            ]
        };
        mockFetch(mockData);

        const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
        const { data, error } = await getAccounts({
            body: { accountIds: [address] },
            query: { currency: 'usd' }
        });

        expect(error).toBeNull();
        expect(data).toBeDefined();
        expect(data?.accounts).toBeDefined();
    });

    test('should work with body only (optional query)', async () => {
        const mockData = {
            accounts: [
                {
                    address: 'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y',
                    balance: '1000000000',
                    status: 'active'
                }
            ]
        };
        mockFetch(mockData);

        const address = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
        const { data, error } = await getAccounts({
            body: { accountIds: [address] }
        });

        expect(error).toBeNull();
        expect(data).toBeDefined();
    });

    describe('throwOnError mode', () => {
        test('should return data directly when throwOnError is true', async () => {
            const mockData = { rest_online: true, indexing_latency: 8 };
            mockFetch(mockData);

            const data = await status({ throwOnError: true });

            // Should return data directly, not Result type
            expect(data).toBeDefined();
            expect(data.restOnline).toBe(true);
            expect(data.indexingLatency).toBe(8);

            // Should NOT have error property (not a Result type)
            expect(data).not.toHaveProperty('error');
            expect(data).not.toHaveProperty('data');
        });

        test('should throw error when throwOnError is true and API returns error', async () => {
            const mockError = { error: 'Server error' };
            vi.spyOn(global, 'fetch').mockResolvedValueOnce(createJsonResponse(mockError, 500));

            await expect(status({ throwOnError: true })).rejects.toThrow();
        });

        test('should work with path parameters and throwOnError', async () => {
            const mockData = {
                address: 'EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y',
                balance: '1000000000',
                status: 'active'
            };
            mockFetch(mockData);

            const validAddress = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
            const data = await getAccount({
                path: { accountId: validAddress },
                throwOnError: true
            });

            expect(data).toBeDefined();
            expect(data.balance).toBeDefined();
            // Should NOT have Result properties
            expect(data).not.toHaveProperty('error');
        });

        test('should throw specific error type when throwOnError is true', async () => {
            const mockError = { error: 'Not found' };
            vi.spyOn(global, 'fetch').mockResolvedValue(createJsonResponse(mockError, 404));

            const validAddress = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');

            // Catch and verify error details
            const error = await getAccount({
                path: { accountId: validAddress },
                throwOnError: true
            }).catch(e => e);

            // Should throw TonApiHttpError with correct properties
            assertIsHttpError(error);
            expect(error.status).toBe(404);
            expect(error.message).toBe('HTTP 404: Not found');
        });

        test('throwOnError false should still return Result type', async () => {
            const mockData = { rest_online: true, indexing_latency: 8 };
            mockFetch(mockData);

            const result = await status({ throwOnError: false });

            // Should return Result type
            expect(result).toHaveProperty('data');
            expect(result).toHaveProperty('error');
            expect(result.error).toBeNull();
            expect(result.data).toBeDefined();
        });

        test('should demonstrate type narrowing with if (error) check', async () => {
            const validAddress = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');

            // Test success case - type narrows to success branch
            const mockData = { balance: 100n, status: 'active' };
            mockFetch(mockData);

            const successResult = await getAccount({
                path: { accountId: validAddress }
            });

            if (successResult.error) {
                // Error branch - would have TonApiError and null data
                fail('Should not have error in success case');
            } else {
                // Success branch - TypeScript knows data is Account, error is null
                expect(successResult.data).toBeDefined();
                expect(successResult.data.balance).toBe(100n);
                expect(successResult.data.status).toBe('active');
                expect(successResult.error).toBeNull();
            }

            // Test error case - type narrows to error branch
            const mockError = { error: 'Account not found' };
            vi.spyOn(global, 'fetch').mockResolvedValueOnce(createJsonResponse(mockError, 404));

            const errorResult = await getAccount({
                path: { accountId: validAddress }
            });

            if (errorResult.error) {
                // Error branch - TypeScript knows error is TonApiError, data is null
                expect(errorResult.error).toBeInstanceOf(TonApiHttpError);
                expect(errorResult.error.message).toContain('Account not found');
                expect(errorResult.data).toBeNull();
            } else {
                // Success branch
                fail('Should have error in error case');
            }
        });

        test('should support error recovery pattern with default values', async () => {
            const validAddress = Address.parse('EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y');
            const mockError = { error: 'Account not found' };
            mockFetch(mockError, 404);

            const { data, error } = await getAccount({
                path: { accountId: validAddress }
            });

            // Pattern 1: Using ternary for default value
            const balance = error ? 0n : data.balance;
            expect(balance).toBe(0n);

            // Pattern 2: Early return pattern
            if (error) {
                expect(error.message).toContain('Account not found');
                expect(data).toBeNull();
                return; // Early return in real code
            }

            // This line won't be reached in this test
            fail('Should have returned early on error');
        });
    });
});

describe('TonApiValidationError - Client-side validation', () => {
    beforeEach(() => {
        vi.spyOn(global, 'fetch').mockResolvedValue(
            new Response(JSON.stringify({ balance: '100', address: 'test', status: 'active' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            })
        );
    });

    test('Advanced API - Invalid address string returns TonApiValidationError', async () => {
        const invalidAddress = 'invalid-address-format';

        const result = await getAccount({
            path: { accountId: invalidAddress }
        });

        // Should return error, not throw
        expect(result.error).toBeDefined();
        expect(result.data).toBeNull();

        if (result.error) {
            // Check it's a validation error
            expect(result.error).toBeInstanceOf(TonApiValidationError);
            expect(result.error.type).toBe('validation_error');

            if (result.error instanceof TonApiValidationError) {
                expect(result.error.validationType).toBe('Address');
                expect(result.error.invalidInput).toBe(invalidAddress);
                expect(result.error.message).toContain('Address');
            }
        }
    });

    test('Advanced API - Invalid address with throwOnError: true throws', async () => {
        const invalidAddress = 'invalid-address-format';

        try {
            await getAccount({
                path: { accountId: invalidAddress },
                throwOnError: true
            });
            expect.fail('Should have thrown TonApiValidationError');
        } catch (error) {
            expect(error).toBeInstanceOf(TonApiValidationError);

            if (error instanceof TonApiValidationError) {
                expect(error.validationType).toBe('Address');
                expect(error.invalidInput).toBe(invalidAddress);
            }
        }
    });

    test('Instance API - Invalid address throws TonApiValidationError', async () => {
        const client = new TonApiClient({ baseUrl: 'https://tonapi.io' });
        const invalidAddress = 'invalid-address-format';

        try {
            await client.getAccount(invalidAddress);
            expect.fail('Should have thrown TonApiValidationError');
        } catch (error) {
            expect(error).toBeInstanceOf(TonApiValidationError);

            if (error instanceof TonApiValidationError) {
                expect(error.validationType).toBe('Address');
                expect(error.invalidInput).toBe(invalidAddress);
                expect(error.message).toContain('Validation error [Address]');
            }
        }
    });

    test('Valid address string works correctly', async () => {
        const validAddress = 'EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin';

        // Should not throw validation error (but might have parsing error from mock response)
        const result = await getAccount({
            path: { accountId: validAddress }
        });

        // If there's an error, it should NOT be validation error
        if (result.error) {
            expect(result.error).not.toBeInstanceOf(TonApiValidationError);
        }
    });

    test('TonApiValidationError is included in TonApiError union', () => {
        const error = new TonApiValidationError('Address', 'test error', 'invalid');

        // Should be assignable to TonApiError
        const tonApiError: TonApiError = error;

        expect(tonApiError.type).toBe('validation_error');
    });

    test('Advanced API - Invalid cell string returns TonApiValidationError', async () => {
        const invalidCell = 'invalid-cell-string';

        const result = await sendBlockchainMessage({
            body: { boc: invalidCell as any }
        });

        // Should return error, not throw
        expect(result.error).toBeDefined();
        expect(result.data).toBeNull();

        if (result.error) {
            expect(result.error).toBeInstanceOf(TonApiValidationError);
            expect(result.error.type).toBe('validation_error');

            if (result.error instanceof TonApiValidationError) {
                expect(result.error.validationType).toBe('Cell');
                expect(result.error.invalidInput).toBe(invalidCell);
                expect(result.error.message).toContain('Cell');
            }
        }
    });

    test('Advanced API - Invalid cell with throwOnError: true throws', async () => {
        const invalidCell = 'not-a-valid-cell';

        try {
            await sendBlockchainMessage({
                body: { boc: invalidCell as any },
                throwOnError: true
            });
            expect.fail('Should have thrown TonApiValidationError');
        } catch (error) {
            expect(error).toBeInstanceOf(TonApiValidationError);

            if (error instanceof TonApiValidationError) {
                expect(error.validationType).toBe('Cell');
                expect(error.invalidInput).toBe(invalidCell);
            }
        }
    });

    test('Instance API - Invalid cell throws TonApiValidationError', async () => {
        const client = new TonApiClient({ baseUrl: 'https://tonapi.io' });
        const invalidCell = 'invalid-cell';

        try {
            await client.sendBlockchainMessage({ boc: invalidCell as any });
            expect.fail('Should have thrown TonApiValidationError');
        } catch (error) {
            expect(error).toBeInstanceOf(TonApiValidationError);

            if (error instanceof TonApiValidationError) {
                expect(error.validationType).toBe('Cell');
                expect(error.invalidInput).toBe(invalidCell);
                expect(error.message).toContain('Validation error [Cell]');
            }
        }
    });

    test('Valid cell hex string works correctly', async () => {
        // Valid empty cell in hex format
        const validCellHex = 'b5ee9c724101010100020000004cacb9cd';

        const fetchSpy = vi.spyOn(global, 'fetch')
            .mockResolvedValueOnce(new Response(null, { status: 200 }));

        const result = await sendBlockchainMessage({
            body: { boc: validCellHex as any }
        });

        // Should not have validation error
        if (result.error) {
            expect(result.error).not.toBeInstanceOf(TonApiValidationError);
        }

        // Verify the cell hex was sent correctly (API expects hex for 'boc' field)
        expect(fetchSpy).toHaveBeenCalledWith(
            expect.any(String),
            expect.objectContaining({
                method: 'POST',
                body: JSON.stringify({ boc: validCellHex })
            })
        );
    });

    test('Valid cell base64 string is converted to hex', async () => {
        // Valid empty cell in base64 format
        const validCellBase64 = 'te6cckEBAQEAAgAAAEysuc0=';

        const fetchSpy = vi.spyOn(global, 'fetch')
            .mockResolvedValueOnce(new Response(null, { status: 200 }));

        const result = await sendBlockchainMessage({
            body: { boc: validCellBase64 as any }
        });

        // Should not have validation error
        if (result.error) {
            expect(result.error).not.toBeInstanceOf(TonApiValidationError);
        }

        // Verify the cell was converted from base64 to hex format
        expect(fetchSpy).toHaveBeenCalledWith(
            expect.any(String),
            expect.objectContaining({
                method: 'POST',
                body: JSON.stringify({ boc: 'b5ee9c724101010100020000004cacb9cd' })
            })
        );
    });
});

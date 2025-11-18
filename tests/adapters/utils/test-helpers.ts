import { vi } from 'vitest';
import { Address } from '@ton/core';
import { TonApiClient } from '@ton-api/client';
import { ContractAdapter } from '@ton-api/ton-adapter';

/**
 * Mock response generators for adapter tests
 */

export function mockBlockchainRawAccount(
    address: string | Address,
    balance: bigint = 0n,
    status: 'active' | 'uninit' | 'nonexist' = 'uninit',
    publicKey?: string
) {
    const addressStr = typeof address === 'string' ? address : address.toRawString();

    const base: any = {
        address: addressStr,
        balance: balance.toString(),
        status,
        storage: {
            usedCells: 1,
            usedBits: 95,
            usedPublicCells: 0,
            lastPaid: Math.floor(new Date().getTime() / 1000),
            duePayment: '0'
        }
    };

    if (status === 'active' && publicKey) {
        base.code = 'te6ccgEBBgEAhgABFP8A9KQT9LzyyAsBAgEgAgMCAUgEBQCW8oMI1xgg0x/TH9MfAvgju/Jj7UTQ0x/TH9P/0VEyuvKhUUS68qIE+QFUEFX5EPKj+ACTINdKltMH1AL7AOgwAaTIyx/LH8v/ye1UAATQMAIBSAYHABmtznaiaGmvmOuF/8AEG+X5dqJoaY+Y6Y/oADoS8';
        base.data = 'te6ccgEBAQEAKgAAAFEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVAvHg';
    }

    if (publicKey) {
        base.extraBalance = {
            '0': publicKey
        };
    }

    return base;
}

export function mockWalletSeqno(seqno: number = 0) {
    return {
        success: true,
        exitCode: 0,
        stack: [
            {
                type: 'int',
                value: seqno.toString()
            }
        ]
    };
}

export function mockSendBoc() {
    return {
        message_hash: '0x' + '0'.repeat(64)
    };
}

export function mockGetMethod(stack: any[] = []) {
    return {
        success: true,
        exitCode: 0,
        stack
    };
}

/**
 * Configuration for mock fetch
 */
export interface MockFetchConfig {
    /**
     * Map of address -> account data
     * If address not in map, returns uninit with 0 balance
     */
    accounts?: Map<string, { balance: bigint; status: 'active' | 'uninit' | 'nonexist'; publicKey?: string }>;

    /**
     * Map of method name -> custom response
     */
    methods?: Map<string, any>;
}

/**
 * Creates a mock fetch function for tests
 * Each test can customize responses via config
 */
export function createMockFetch(config: MockFetchConfig = {}) {
    return vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
        const urlStr = typeof input === 'string' ? input : input.toString();

        // Mock blockchain raw account endpoint
        const accountMatch = urlStr.match(/\/v2\/blockchain\/accounts\/([^/?]+)(?:$|\?)/);
        if (accountMatch && accountMatch[1]) {
            const address = accountMatch[1];

            // Check custom config
            const customAccount = config.accounts?.get(address);
            if (customAccount) {
                return new Response(JSON.stringify(
                    mockBlockchainRawAccount(address, customAccount.balance, customAccount.status, customAccount.publicKey)
                ), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            // Default: uninit with 0 balance
            return new Response(JSON.stringify(mockBlockchainRawAccount(address, 0n, 'uninit')), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Mock get method calls
        const methodMatch = urlStr.match(/\/methods\/([^/?]+)/);
        if (methodMatch && methodMatch[1]) {
            const methodName = methodMatch[1];

            // Check custom method response
            if (config.methods?.has(methodName)) {
                return new Response(JSON.stringify(config.methods.get(methodName)), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            // Default method responses
            if (methodName === 'seqno') {
                return new Response(JSON.stringify(mockWalletSeqno(0)), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }

            // Generic method response
            return new Response(JSON.stringify(mockGetMethod()), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Mock send BOC endpoint
        if (urlStr.includes('/v2/blockchain/message') && init?.method === 'POST') {
            return new Response(JSON.stringify(mockSendBoc()), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Default: throw error for unmocked URLs
        throw new Error(`Unmocked URL in test: ${urlStr}`);
    });
}

/**
 * Creates a test client with mocked fetch
 * Each test gets its own isolated client instance
 */
export function createTestClient(mockFetch: typeof fetch) {
    const client = new TonApiClient({
        baseUrl: 'https://tonapi.io',
        fetch: mockFetch
    });

    return new ContractAdapter(client);
}

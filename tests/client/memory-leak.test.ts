import { getBlockchainBlockTransactions as getBlockchainBlockTransactionsMock } from './__mock__/services';
import { ta } from './utils/client';
import { TonApiClient } from '@ton-api/client';
import { describe, test, expect } from 'vitest';
import { JSONStringify } from './utils/jsonbig';

global.fetch = () =>
    Promise.resolve(
        new Response(JSONStringify(getBlockchainBlockTransactionsMock), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    );

const tonApiClient = new TonApiClient({ baseUrl: 'https://tonapi.io' });

// Memory leak tests - run separately with dedicated command
// These tests are resource-intensive and should not run in regular test suite
// Run with: npm run test:memory-leak

const skipMemoryLeak = !process.env.MEMORY_LEAK;

describe.skipIf(skipMemoryLeak)('Memory leak test', () => {
    const iterations = 500000;

    test('Memory leak test for instance API', async () => {
        if (!global.gc) {
            console.warn('Run with --expose-gc');
        } else {
            global.gc();
        }

        const initialMemory = process.memoryUsage().heapUsed;
        const memoryUsageSamples: number[] = [];

        await ta.status();

        for (let i = 0; i < iterations; i++) {
            await ta.getBlockchainBlockTransactions('(-1,8000000000000000,4234234)');

            // Log memory usage every 50_000 iterations
            if (i % 50_000 === 0) {
                const currentMemory = process.memoryUsage().heapUsed;
                console.log(
                    `Iteration ${i}, memory: ${(currentMemory / 1024 / 1024).toFixed(2)} MB`
                );
                memoryUsageSamples.push(currentMemory);
            }
        }

        if (global.gc) global.gc();

        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for GC to work

        const finalMemory = process.memoryUsage().heapUsed;

        console.log(
            `Memory before: ${(initialMemory / 1024 / 1024).toFixed(2)} MB, ` +
                `Memory after: ${(finalMemory / 1024 / 1024).toFixed(2)} MB`
        );

        console.log(
            'Memory samples:',
            memoryUsageSamples.map(m => (m / 1024 / 1024).toFixed(2))
        );

        expect((finalMemory - initialMemory) / 1024 / 1024).toBeLessThan(15);
    }, 1_000_000);

    test('Memory leak test for global API', async () => {
        if (!global.gc) {
            console.warn('Run with --expose-gc');
        } else {
            global.gc();
        }

        const initialMemory = process.memoryUsage().heapUsed;
        const memoryUsageSamples: number[] = [];

        for (let i = 0; i < iterations; i++) {
            await tonApiClient.getBlockchainBlockTransactions('(-1,8000000000000000,4234234)');

            // Log memory usage every 50_000 iterations
            if (i % 50_000 === 0) {
                const currentMemory = process.memoryUsage().heapUsed;
                console.log(
                    `Iteration ${i}, memory: ${(currentMemory / 1024 / 1024).toFixed(2)} MB`
                );
                memoryUsageSamples.push(currentMemory);
            }
        }

        if (global.gc) global.gc();

        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for GC to work

        const finalMemory = process.memoryUsage().heapUsed;

        console.log(
            `Memory before: ${(initialMemory / 1024 / 1024).toFixed(2)} MB, ` +
                `Memory after: ${(finalMemory / 1024 / 1024).toFixed(2)} MB`
        );

        console.log(
            'Memory samples:',
            memoryUsageSamples.map(m => (m / 1024 / 1024).toFixed(2))
        );

        expect((finalMemory - initialMemory) / 1024 / 1024).toBeLessThan(15);
    }, 1_000_000);
});

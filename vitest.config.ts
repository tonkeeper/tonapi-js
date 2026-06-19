import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    resolve: {
        alias: {
            '@ton-api/client': path.resolve(rootDir, 'packages/client/src/client.ts'),
            '@ton-api/ton-adapter': path.resolve(rootDir, 'packages/ton-adapter/src/index.ts')
        }
    },
    test: {
        include: ['tests/**/*.test.ts'],
        exclude: ['**/node_modules/**', 'packages/**']
    }
});

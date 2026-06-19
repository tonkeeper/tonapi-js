import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/client.ts'],
    outDir: 'dist',
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    external: ['@ton/core', 'core-js-pure', /^core-js-pure\//]
});

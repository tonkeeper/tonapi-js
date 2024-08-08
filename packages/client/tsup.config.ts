import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/client.ts'],
    outDir: 'dist',
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: false,
    clean: true
})

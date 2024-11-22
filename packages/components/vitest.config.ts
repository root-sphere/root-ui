import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    coverage: {
      provider: 'istanbul',
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
  },
});

import sassPlugin from 'esbuild-plugin-sass';
import { defineConfig } from 'tsup';

import { legacyConfig, modernConfig } from '../../scripts/tsup.cjs';
import pkg from './package.json';

const external = Object.keys(pkg.peerDependencies || {});

export default defineConfig([
  modernConfig({
    entry: ['src/index.{ts,tsx}', '!**/*.{test,spec,stories}.{ts,tsx}'],
    esbuildPlugins: [sassPlugin()],
    external,
  }),
  legacyConfig({
    entry: ['src/index.{ts,tsx}', '!**/*.{test,spec,stories}.{ts,tsx}'],
    esbuildPlugins: [sassPlugin()],
    external,
  }),
]);

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import terser from '@rollup/plugin-terser';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const commonPlugins = [
  nodeResolve({
    extensions,
    mainFields: ['main', 'module'],
  }),
  commonjs(),
  json(),
  typescript({
    tsconfig: './tsconfig.build.json',
  }),
  babel({
    exclude: /node_modules/,
    extensions,
  }),
  postcss({
    config: {
      path: './postcss.config.js',
    },
    extract: true,
    // modules: true,
    minimize: true,
    use: {
      sass: scss,
    },
  }),
  terser(),
];

export const appBundler = ({ output, plugins = [], external = [] }) => ({
  external,
  input: 'src/index.ts',
  output: {
    ...output,
    sourcemap: false,
  },
  plugins: commonPlugins.concat(plugins),
});

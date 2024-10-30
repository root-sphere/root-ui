import { merge } from 'webpack-merge'
import webpackDevConfig from './webpack.common'

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../src/assets'],

  features: {
    previewMdx2: true, // 👈 MDX 2 enabled here
  },

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook'
  ],

  /**
   * @param {import('webpack').Configuration} config
   */
  webpackFinal: async (config) => {
    const nextConfig = merge(config, webpackDevConfig);
    return nextConfig;
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};

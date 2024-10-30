const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');
const context = resolve(__dirname, '../src');

/**
 * Webpack common configuration
 * @type {import('webpack').Configuration}
 */
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '~': context,
    },
  },
  context: context,
  module: {
    rules: [
      {
        test: [/\.[jt]sx?$/],
        /**
         * @see https://github.com/babel/babel-loader
         */
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{
          /**
           * @see https://react-svgr.com/docs/webpack/
           */
          loader: '@svgr/webpack',
          options: {
            icon: true
          }
        }],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
  ],
};

module.exports = {
  plugins: ['@babel/plugin-transform-react-jsx'],
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        useBuiltIns: 'entry',
      },
    ],
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
    '@babel/preset-react',
  ],
};

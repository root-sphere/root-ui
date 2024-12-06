module.exports = {
  extends: ['@seolhun/eslint-config'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react-hooks/exhaustive-deps': ['warn', {
      'additionalHooks': '(useIsoMorphicEffect)'
    }],
    'perfectionist/sort-objects': 'off',
  }
};

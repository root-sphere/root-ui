module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:perfectionist/recommended-alphabetical',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin', 'perfectionist'],
  root: true,
  rules: {
    // Custom
    'max-len': 0,
    'no-unused-vars': 0,
    'no-var-requires': 0,
    'perfectionist/sort-classes': [
      'error',
      {
        type: 'natural',
        groups: [
          'static-property',
          'private-property',
          'property',
          'constructor',
          'static-method',
          'private-method',
          'method',
        ],
        order: 'asc',
      },
    ],
    'perfectionist/sort-enums': [
      'error',
      {
        type: 'natural',
        order: 'asc',
      },
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
      },
    ],
    /**
     * @see https://eslint-plugin-perfectionist.azat.io/rules/
     */
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        'custom-groups': {
          value: {
            "root-sphere": '@root-sphere/**',
          },
        },
        groups: [
          'side-effect',
          'type',
          ['builtin', 'external', 'root-sphere'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'style',
          'object',
          'unknown',
        ],
        'internal-pattern': ['~/**'],
        'newlines-between': 'always',
        order: 'asc',
        'read-tsconfig': false,
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        type: 'natural',
        'always-on-top': ['id', '_id'],
        order: 'asc',
        'partition-by-comment': 'Part:**',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
  },
};

module.exports = {
  extends: [
    'plugin:json/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.ts'] }],
    '@typescript-eslint/indent': [2, 2],
    'no-console': 2,
    "import/order": ["error", {"groups": ["builtin", "external", "parent", "sibling", "index"]}],
    "import/order": ["error", {"newlines-between": "always"}],
  },
};

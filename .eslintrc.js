module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-multi-spaces': ['error'],
  },
  plugins: ['eslint-plugin-html'],
};

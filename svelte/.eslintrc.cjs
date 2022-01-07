module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte', '.cjs'],
  },
  env: {
    es6: true,
    browser: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  ignorePatterns: ['*.cjs', 'svelte.config.js'],
  settings: {
    'svelte3/typescript': () => require('typescript'),
    // ignore style tags in Svelte because of Tailwind CSS
    // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
    'svelte3/ignore-styles': () => true
  },
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['node_modules'],
  rules: {
    'max-len': [ 'warn', { code: 160 } ],
    'linebreak-style': 0,
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-cycle':'off',
    'no-underscore-dangle': 'off',
    'prefer-const': 'off',
    'global-require': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': [
      0,
      {
        "devDependencies": false,
        "optionalDependencies": false,
        "peerDependencies": false
      }],
    allowImportExportEverywhere: 0,
    'import/no-dynamic-import': 'off',
    'func-names': 'off',
    'object-curly-newline': 'off'    
  }
}
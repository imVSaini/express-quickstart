// @ts-nocheck
import js from '@eslint/js'
import globals from 'globals'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import jest from 'eslint-plugin-jest'
import security from 'eslint-plugin-security'
import importPlugin from 'eslint-plugin-import'
import airbnbBase from 'eslint-config-airbnb-base'

export default [
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      prettier,
      security,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...airbnbBase.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'warn',
      // Security Best Practices
      'security/detect-object-injection': 'warn',
      'security/detect-non-literal-fs-filename': 'warn',
      // Best Practices
      'no-console': 'warn',
      // Code Quality
      'no-unused-vars': ['warn', { argsIgnorePattern: '^__' }],
      'no-empty-function': ['error', { allow: ['arrowFunctions'] }], // Allow empty arrow functions, but not others
      'no-param-reassign': ['error', { props: false }], // Prevent modifying function parameters
      'eqeqeq': ['error', 'always'], // Enforce strict equality (`===` and `!==`)
      'no-return-await': 'error', // Disallow `return await` inside an async function
      'prefer-template': 'warn',
      'no-implicit-coercion': 'warn', // Disallow `!!`, `+`, `~`, and other implicit conversions
      // 'no-magic-numbers': ['warn', { ignore: [-1, 0, 1], ignoreArrayIndexes: true, enforceConst: true }],
      'prefer-object-spread': 'warn', // Suggest using `{ ...obj }` over `Object.assign`
      'no-shadow': 'error', // Disallow variable shadowing
       // Import Rules
      'import/no-extraneous-dependencies': 'off',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
    },
  },
  {
    files: ['src/**/*.test.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
]

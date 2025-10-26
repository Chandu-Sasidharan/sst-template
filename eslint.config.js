import js from '@eslint/js';
import nPlugin from 'eslint-plugin-n';

export default [
  {
    files: ['packages/**/*.js'],
    ignores: ['node_modules'],
    ...js.configs.recommended,
    ...nPlugin.configs.recommendedModule,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        __dirname: 'readonly',
      },
    },
    plugins: {
      n: nPlugin,
    },
    rules: {
      // override or add your own
      'no-unused-vars': [
        'error',
        {
          // Ignore function arguments prefixed with `_`
          argsIgnorePattern: '^_',
          // Ignore caught errors in `catch` blocks
          caughtErrors: 'none',
        },
      ],
      'no-console': 'warn',
    },
  },
];

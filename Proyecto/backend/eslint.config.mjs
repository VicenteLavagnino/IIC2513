import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      'eqeqeq': 'error',
      'no-undef': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
    },
  },
  pluginJs.configs.recommended,
  {
    files: ['tests/**/*', 'src/__tests__/**/*'],  
    languageOptions: {
      globals: {
        ...globals.jest, 
      },
    },
    env: {
      jest: true,
    },
  },
];

module.exports = {
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  plugins: ['react', '@typescript-eslint', 'react-native'],
  rules: {
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    'comma-style': [
      2,
      'first',
      {exceptions: {ArrayExpression: true, ObjectExpression: true}},
    ],
    curly: 2,
    eqeqeq: [2, 'allow-null'],
    'max-statements': [2, 30],
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-use-before-define': 'off',
    radix: 0,
    semi: 1,
    'space-infix-ops': 2,
    strict: 0,
    indent: ['error', 2],
    'linebreak-style': [0, 'unix'],
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression'],
      },
    ],
    'no-console': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'import/namespace': 0,
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-empty': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'import/ignore': ['node_modules', 'blueprint-templates'],
  },
  ignorePatterns: ['./node_modules', './blueprint-templates'],
};

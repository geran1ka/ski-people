import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
// extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:react/jsx-runtime",
//     "plugin:react-hooks/recommended",
//     "plugin:prettier/recommended",
//   ],

// "eslint-plugin-react": "^7.33.2",
// "eslint-plugin-react-hooks": "^4.6.0",
// "eslint-plugin-react-refresh": "^0.4.5",

export default [
  {
    plugins: {
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['node_modules', 'dist'],
  },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022,
      },
    },
  },
  {
    files: ['**/*{js,jsx}'],
    rules: {
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
      // indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-loop-func': ['error'],
      'block-spacing': ['error', 'always'],
      camelcase: ['error'],
      eqeqeq: ['error', 'always'],
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
      'comma-style': ['error', 'last'],
      'comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'eol-last': ['error'],
      'func-call-spacing': ['error', 'never'],
      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
          mode: 'minimum',
        },
      ],
      'max-len': [
        'error',
        {
          code: 80,
          tabWith: 2,
          ignoreUrls: true,
        },
      ],
      'max-nested-callbacks': [
        'error',
        {
          max: 7,
        },
      ],
      'new-cap': [
        'error',
        {
          newIsCap: true,
          capIsNew: false,
          properties: true,
        },
      ],
      'new-parens': ['error'],
      'no-lonely-if': ['error'],
      'no-trailing-spaces': ['error'],
      'no-unneeded-ternary': ['error'],
      'no-whitespace-before-property': ['error'],
      'object-curly-spacing': ['error', 'always'],
      'operator-assignment': ['error', 'always'],
      'operator-linebreak': ['error', 'after'],
      'semi-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': ['error'],
      'space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: false,
          overrides: {
            typeof: false,
          },
        },
      ],
      'no-unreachable': ['error'],
      'no-global-assign': ['error'],
      'no-self-compare': ['error'],
      'no-unmodified-loop-condition': ['error'],
      'no-constant-condition': [
        'error',
        {
          checkLoops: false,
        },
      ],
      'no-console': ['off'],
      'no-useless-concat': ['error'],
      'no-useless-escape': ['error'],
      'no-shadow-restricted-names': ['error'],
      'no-use-before-define': [
        'error',
        {
          functions: false,
        },
      ],
      'arrow-parens': ['error', 'as-needed'],
      'arrow-body-style': ['error', 'as-needed'],
      'arrow-spacing': ['error'],
      'no-confusing-arrow': [
        'error',
        {
          allowParens: true,
        },
      ],
      'no-useless-computed-key': ['error'],
      'no-useless-rename': ['error'],
      'no-var': ['error'],
      'object-shorthand': ['error', 'always'],
      'prefer-arrow-callback': ['error'],
      'prefer-const': ['error'],
      'prefer-numeric-literals': ['error'],
      'prefer-rest-params': ['error'],
      'prefer-spread': ['error'],
      'rest-spread-spacing': ['error', 'never'],
      'template-curly-spacing': ['error', 'never'],
      // ! новые
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      strict: ['error', 'global'],
      //!-google
      'no-cond-assign': 'off',
      'no-irregular-whitespace': 'error',
      'no-unexpected-multiline': 'error',
      curly: ['error', 'multi-line'],
      'guard-for-in': 'error',
      'no-caller': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-invalid-this': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'no-with': 'error',
      'prefer-promise-reject-errors': 'error',
      'no-unused-vars': [
        'error',
        {
          args: 'none',
        },
      ],
      'array-bracket-newline': 'off',
      'array-bracket-spacing': ['error', 'never'],
      'array-element-newline': 'off',
      'comma-dangle': ['error', 'only-multiline'],
      'computed-property-spacing': 'error',
      indent: [
        'error',
        2,
        {
          CallExpression: {
            arguments: 1,
          },
          FunctionDeclaration: {
            body: 1,
            parameters: 2,
          },
          FunctionExpression: {
            body: 1,
            parameters: 2,
          },
          MemberExpression: 1,
          ObjectExpression: 1,
          SwitchCase: 1,
          ignoredNodes: ['ConditionalExpression'],
        },
      ],
      'keyword-spacing': 'error',
      'no-array-constructor': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 2,
        },
      ],
      'no-new-object': 'error',
      'no-tabs': 'error',
      'one-var': [
        'error',
        {
          var: 'never',
          let: 'never',
          const: 'never',
        },
      ],
      'padded-blocks': ['error', 'never'],
      'quote-props': ['error', 'consistent'],
      'spaced-comment': ['error', 'always'],
      'switch-colon-spacing': 'error',
      'constructor-super': 'error',
      'generator-star-spacing': ['error', 'after'],
      'no-new-symbol': 'error',
      'no-this-before-super': 'error',
      'yield-star-spacing': ['error', 'after'],
    },
  },
];

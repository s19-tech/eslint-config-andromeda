module.exports = {
  extends: ['eslint-config-airbnb'].map(require.resolve),

  plugins: ['react', 'babel'],

  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },

  rules: {
    'jsx-a11y/no-static-element-interactions': 'off',
    'linebreak-style': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'react/jsx-filename-extension': 'off',
    'react/no-unused-prop-types': 'off',
    'max-len': ['error', 80],
    'arrow-parens': ['error', 'as-needed'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};

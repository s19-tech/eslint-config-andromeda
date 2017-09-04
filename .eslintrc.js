module.exports = {
  extends: ['airbnb'],

  plugins: ['babel'],

  parser: 'babel-eslint',

  rules: {
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'react/jsx-filename-extension': 'off',
    'react/no-unused-prop-types': 'off',
    'max-len': ['error', 80],
    'arrow-parens': ['error', 'as-needed']
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    },
  },
};

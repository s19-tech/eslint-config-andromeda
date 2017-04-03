module.exports = {
  "extends": [
    "eslint-config-airbnb",
  ].map(require.resolve),

  "plugins": [
    "react",
  ],

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true,
    },
  },

  "rules": {
    "import/prefer-default-export": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "linebreak-style": "off",
    "no-use-before-define": ["error", { "functions": false }],
    "react/jsx-filename-extension": "off",
    "react/no-unused-prop-types": "off",
  },
};

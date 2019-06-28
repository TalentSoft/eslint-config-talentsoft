module.exports = {
  env: {
    node: true
  },
  extends: [
    './rules/eslint/best-practices.js',
    './rules/eslint/errors.js',
    './rules/eslint/es6.js',
    './rules/eslint/style.js',
    './rules/eslint/variables.js'
  ],
  rules: {}
};

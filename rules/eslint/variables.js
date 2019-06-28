module.exports = {
  rules: {
    // Disallow deleting variables
    // Introduced in ESLint 0.0.9
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // Disallow Shadowing of Restricted Names
    // Introduced in ESLint 0.1.4
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // Disallow Undeclared Variables
    // Introduced in ESLint 0.0.9
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // Disallow Unused Variables
    // Introduced in ESLint 0.0.9
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
  }
};
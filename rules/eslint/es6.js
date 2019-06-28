module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },

  rules: {
    // Verify calls of super() in constructors
    // Introduced in ESLint 0.24.0
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // Disallow modifying variables of class declarations
    // Introduced in ESLint 1.0.0-rc-1
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // Disallow modifying variables that are declared using const
    // Introduced in ESLint 1.0.0-rc-1
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // Disallow duplicate class members
    // Introduced in ESLint 1.2.0
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Disallow symbol constructor
    // Introduced in ESLint 2.0.0-beta.1
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // disallow to use this/super before super() calling in constructors.
    // Introduced in ESLint 0.24.0
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Disallow generator functions that do not have yield
    // Introduced in ESLint 1.0.0-rc-1
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error'
  }
};

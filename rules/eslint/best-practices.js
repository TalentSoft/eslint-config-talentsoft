module.exports = {
  rules: {
    // Disallow lexical declarations in case/default clauses
    // Introduced in ESLint 1.9.0
    // https://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 'error',

    // Disallow empty destructuring patterns
    // Introduced in ESLint 1.7.0
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // Disallow Case Statement Fallthrough
    // Introduced in ESLint 0.0.7
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // Disallow assignment to native objects or read-only global variables
    // Introduced in ESLint 3.3.0
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],

    // Disallow octal literals
    // Introduced in ESLint 0.0.6
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // Disallow variable redeclaration
    // Introduced in ESLint 0.0.9
    // https://eslint.org/docs/rules/no-octal
    'no-redeclare': 'error',

    // Disallow Self Assignment
    // Introduced in ESLint 2.0.0-rc.0
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': ['error', {
      props: true,
    }],

    // Disallow Unused Labels
    // Introduced in ESLint 2.0.0-rc.0
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // Disallow unnecessary catch clauses
    // https://eslint.org/docs/rules/no-useless-catch
    // Introduced in ESLint 5.11.0
    'no-useless-catch': 'error',

    // Disallow unnecessary escape usage
    // https://eslint.org/docs/rules/no-useless-escape
    // Introduced in ESLint 2.5.0
    'no-useless-escape': 'error',

    // Disallow with statements
    // https://eslint.org/docs/rules/no-with
    // Introduced in ESLint 0.0.2
    'no-with': 'error',
  }
};
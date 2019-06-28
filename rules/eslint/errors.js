module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction.
    // Introduced in ESLint 4.0.0-beta.0
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // Enforces that a return statement is present in property getters
    // Introduced in ESLint 4.2.0
    // If your project will not be using ES5 property getters you do not need this rule.
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // Disallow using an async function as a Promise executor
    // Introduced in ESLint 5.3.0
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // Disallow comparisons to negative zero
    // Introduced in ESLint 3.17.0
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // Disallow assignment operators in conditional statements
    // Introduced in ESLint 0.0.9
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // Disallow constant expressions in conditions
    // Introduced in ESLint 0.4.1
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'warn',

    // disallow control characters in regular expressions
    // Introduced in ESLint 0.1.0
    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'error',

    // Disallow use of debugger
    // Introduced in ESLint 0.0.2
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // Disallow duplicate arguments in function definitions
    // Introduced in ESLint 0.16.0
    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // Disallow duplicate keys when creating object literals
    // Introduced in ESLint 0.0.9
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // Disallow a duplicate case label.
    // Introduced in ESLint 0.17.0
    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // Disallow empty block statements
    // Introduced in ESLint 0.0.2
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // Disallow empty character classes in regular expressions
    // Introduced in ESLint 0.22.0
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // Disallow reassigning exceptions in catch clauses
    // Introduced in ESLint 0.0.9
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Disallow double-negation boolean casts in a boolean context
    // Introduced in ESLint 0.4.0
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // Disallow unnecessary semicolons
    // Introduced in ESLint 0.0.9
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // Disallow reassigning function declarations
    // Introduced in ESLint 0.0.9
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // Disallow variable or function declarations in nested blocks
    // Introduced in ESLint 0.6.0
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in RegExp constructors
    // Introduced in ESLint 0.1.4
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespace outside of strings and comments
    // Introduced in ESLint 0.9.0
    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    // Introduced in ESLint 5.3.0
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // Disallow calling global object properties as functions
    // Introduced in ESLint 0.0.9
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',

    // Disallow use of Object.prototypes builtins directly
    // Introduced in ESLint 2.11.0
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // disallow multiple spaces in regular expression literals
    // Introduced in ESLint 0.4.0
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // Disallow sparse arrays
    // Introduced in ESLint 0.4.0
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // Disallow confusing multiline expressions
    // Introduced in ESLint 0.24.0
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // Disallow unreachable statements after a return, throw, continue, or break statement
    // Introduced in ESLint  0.0.6
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // Disallow control flow statements in finally blocks
    // Introduced in ESLint 2.9.0
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators
    // Introduced in ESLint 3.3.0
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // Introduced in ESLint 5.3.0
    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 'error',

    // Require calls to isNaN() when checking for NaN
    // Introduced in ESLint 0.0.6
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',

    // Enforce comparing typeof expressions against valid strings 
    // Introduced in ESLint 0.5.0
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],
  }
};
# Talentsoft ESLint config

[![Version][version-svg]][package-url] [![License][license-image]][license-url]

This package provides Talentsoft's base JS .eslintrc config as an extensible shared config. It is `eslint@5+`-compatible and actively maintained by Talentsoft.

## Installation

1.  Install this config package and ESLint:

    ```bash
    $ yarn add --dev @talentsoft-opensource/eslint-config-talentsoft
    ```

    or if you use npm :

    ```bash
    $ npm install --save-dev @talentsoft-opensource/eslint-config-talentsoft
    ```

## Usage

To consume and extend a config in ESLint just add the extends attribute to your `.eslintrc`.

For more details about how shareable configs work, see the
[ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

```yaml
'extends': ['@talentsoft-opensource/eslint-config-talentsoft']
```

or if you use a yaml file

```yaml
---
'extends':
  - '@talentsoft-opensource/eslint-config-talentsoft'
```

**NOTE:**
Extending multiple complete configs can cause unexpected results.

### Configurations

ESLint configuration is broken apart in `./rules` containing ESLint's rules.

The full set of ESLint rules (`./rules/eslint`) are broken into categories that mirror ESLint's documentation. Under each rule type there are sets of configuration.

###### Examples

```yaml
---
'extends':
  - '@talentsoft-opensource/eslint-config-talentsoft/rules/eslint/best-practices'
  - '@talentsoft-opensource/eslint-config-talentsoft/rules/eslint/es6'
  - '@talentsoft-opensource/eslint-config-talentsoft/rules/eslint/errors'
  - '@talentsoft-opensource/eslint-config-talentsoft/rules/eslint/style'
  - '@talentsoft-opensource/eslint-config-talentsoft/rules/eslint/variables'
```

---

## License

Copyright (c) 2019-present, Talentsoft

[MIT licensed](./LICENSE).

[version-svg]: https://img.shields.io/npm/v/@talentsoft-opensource/eslint-config-talentsoft.svg?style=flat-square
[package-url]: https://npmjs.org/package/@talentsoft-opensource/eslint-config-talentsoft
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE

<div align="center">
  <h1>types-tsconfig</h1>
  <a href="https://npmjs.com/package/types-tsconfig">
    <img alt="NPM" src="https://img.shields.io/npm/v/types-tsconfig.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-tsconfig">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/types-tsconfig.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/types-tsconfig?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/types-tsconfig.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/types-tsconfig">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/types-tsconfig?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Type checking for tsconfig.json.

Derived from [type-fest](https://www.npmjs.com/package/type-fest) with a focus on tsconfig.json types.

## Installation

```bash
yarn add types-tsconfig
```

```bash
npm install types-tsconfig
```

## API

### Types

```ts
import {
  TSConfigJSON,
  CompilerOptions,
  TypeAcquisition,
  References,
  Plugin,
  Lib,
  Target,
  NewLine,
  Module,
  JSX,
  fileName
} from "types-tsconfig";

console.log(fileName); // "tsconfig.json"
```

<br />

<h2>Dependencies<img align="right" alt="David" src="https://img.shields.io/david/bconnorwhite/types-tsconfig.svg"></h2>

- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON objects

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/types-tsconfig.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/types-tsconfig.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)

<br />

## Related Projects

- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON objects
- [types-pkg-json](https://www.npmjs.com/package/types-pkg-json): Type checking for package.json
- [types-eslintrc](https://www.npmjs.com/package/types-eslintrc): Type checking for .eslintrc.json

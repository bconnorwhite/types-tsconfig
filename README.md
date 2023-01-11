<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>types-tsconfig</h1>
  <a href="https://npmjs.com/package/types-tsconfig">
    <img alt="NPM" src="https://img.shields.io/npm/v/types-tsconfig.svg">
  </a>
  <a href="https://github.com/bconnorwhite/types-tsconfig">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/types-tsconfig.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/types-tsconfig?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/types-tsconfig.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Type checking for tsconfig.json.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/types-tsconfig">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/types-tsconfig?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

This package uses [zod]() to parse and type-guard a TSConfigJSON object.


## Installation

```sh
yarn add types-tsconfig
```

```sh
npm install types-tsconfig
```

```sh
pnpm add types-tsconfig
```

## Usage

The `isTSConfigJSON` function is a type guard that checks if an object is a valid `TSConfigJSON` object.

```ts
import { isTSConfigJSON, TSConfigJSON } from "types-tsconfig";

const config = {
  $schema: "https://json.schemastore.org/tsconfig",
  extends: "@autosoft/tsconfig",
  compilerOptions: {
    outDir: ".auto/build",
    rootDirs: [
      "source"
    ]
  },
  files: [
    "source/index.ts"
  ]
};

if(isTSConfigJSON(config)) {
  // config is TSConfigJSON
}
```

The `parseTSConfigJSON` function parses an object into a `TSConfigJSON` object. If the object is a valid `TSConfigJSON` object, it will be returned, otherwise undefined will be returned.

```ts
import { parseTSConfigJSON, TSConfigJSON  } from "types-tsconfig";

const config = {
  invalid: "config"
};

const result = parseTSConfigJSON(config); // undefined
```

Additionally, a constant `fileName` is exported as "tsconfig.json":

```ts
import { fileName } from "types-tsconfig";

console.log(fileName); // "tsconfig.json"
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/types-tsconfig?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/types-tsconfig.svg"></a></h2>

- [type-fest](https://www.npmjs.com/package/type-fest): A collection of essential TypeScript types
- [zod](https://www.npmjs.com/package/zod): TypeScript-first schema declaration and validation library with static type inference


<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/types-tsconfig.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _MIT License_
<!--END FOOTER-->

## Related Projects

- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON objects
- [types-pkg-json](https://www.npmjs.com/package/types-pkg-json): Type checking for package.json
- [types-eslintrc](https://www.npmjs.com/package/types-eslintrc): Type checking for .eslintrc.json

/* eslint-disable max-lines */
import { Lib, JSX, Module, NewLine, Target, Plugin } from "./types";

export type CompilerOptions = {
  /**
   * The character set of the input files.
   * @default 'utf8'
   */
  charset?: string;
  /**
   * Enables building for project references.
   * @default true
   */
  composite?: boolean;
  /**
   * Generates corresponding d.ts files.
   * @default false
   */
  declaration?: boolean;
  /**
   * Specify output directory for generated declaration files.
   * Requires TypeScript version 2.0 or later.
   */
  declarationDir?: string;
  /**
   * Show diagnostic information.
   * @default false
   */
  diagnostics?: boolean;
  /**
   * Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.
   * @default false
   */
  emitBOM?: boolean;
  /**
   * Only emit `.d.ts` declaration files.
   * @default false
   */
  emitDeclarationOnly?: boolean;
  /**
   * Enable incremental compilation.
   * @default `composite`
   */
  incremental?: boolean;
  /**
   * Specify file to store incremental compilation information.
   * @default '.tsbuildinfo'
   */
  tsBuildInfoFile?: string;
  /**
   * Emit a single file with source maps instead of having a separate file.
   * @default false
   */
  inlineSourceMap?: boolean;
  /**
   * Emit the source alongside the sourcemaps within a single file.
   * Requires `--inlineSourceMap` to be set.
   * @default false
   */
  inlineSources?: boolean;
  /**
   * Specify JSX code generation: `'preserve'`, `'react'`, or `'react-native'`.
   * @default 'preserve'
   */
  jsx?: JSX;
  /**
   * Specifies the object invoked for `createElement` and `__spread` when targeting `'react'` JSX emit.
   * @default 'React'
   */
  reactNamespace?: string;
  /**
   * Print names of files part of the compilation.
   * @default false
   */
  listFiles?: boolean;
  /**
   * Specifies the location where debugger should locate map files instead of generated locations.
   */
  mapRoot?: string;
  /**
   * Specify module code generation: 'None', 'CommonJS', 'AMD', 'System', 'UMD', 'ES6', 'ES2015' or 'ESNext'.
   * Only 'AMD' and 'System' can be used in conjunction with `--outFile`. 'ES6' and 'ES2015' values may be used when targeting 'ES5' or lower.
   * @default ['ES3', 'ES5'].includes(target) ? 'CommonJS' : 'ES6'
   */
  module?: Module;
  /**
   * Specifies the end of line sequence to be used when emitting files: 'crlf' (Windows) or 'lf' (Unix).
   * Default: Platform specific
   */
  newLine?: NewLine;
  /**
   * Do not emit output.
   * @default false
   */
  noEmit?: boolean;
  /**
   * Do not generate custom helper functions like `__extends` in compiled output.
   * @default false
   */
  noEmitHelpers?: boolean;
  /**
   * Do not emit outputs if any type checking errors were reported.
   * @default false
   */
  noEmitOnError?: boolean;
  /**
   * Warn on expressions and declarations with an implied 'any' type.
   * @default false
   */
  noImplicitAny?: boolean;
  /**
   * Raise error on 'this' expressions with an implied any type.
   * @default false
   */
  noImplicitThis?: boolean;
  /**
   * Report errors on unused locals.
   * Requires TypeScript version 2.0 or later.
   * @default false
   */
  noUnusedLocals?: boolean;
  /**
   * Report errors on unused parameters.
   * Requires TypeScript version 2.0 or later.
   * @default false
   */
  noUnusedParameters?: boolean;
  /**
   * Do not include the default library file (lib.d.ts).
   * @default false
   */
  noLib?: boolean;
  /**
   * Do not add triple-slash references or module import targets to the list of compiled files.
   * @default false
   */
  noResolve?: boolean;
  /**
   * Disable strict checking of generic signatures in function types.
   * @default false
   */
  noStrictGenericChecks?: boolean;
  /**
   * @deprecated use `skipLibCheck` instead.
   */
  skipDefaultLibCheck?: boolean;
  /**
   * Skip type checking of declaration files.
   * Requires TypeScript version 2.0 or later.
   * @default false
   */
  skipLibCheck?: boolean;
  /**
   * Concatenate and emit output to single file.
   */
  outFile?: string;
  /**
   * Redirect output structure to the directory.
   */
  outDir?: string;
  /**
   * Do not erase const enum declarations in generated code.
   * @default false
   */
  preserveConstEnums?: boolean;
  /**
   * Do not resolve symlinks to their real path; treat a symlinked file like a real one.
   * @default false
   */
  preserveSymlinks?: boolean;
  /**
   * Keep outdated console output in watch mode instead of clearing the screen.
   * @default false
   */
  preserveWatchOutput?: boolean;
  /**
   * Stylize errors and messages using color and context (experimental).
   * @default true // Unless piping to another program or redirecting output to a file.
   */
  pretty?: boolean;
  /**
   * Do not emit comments to output.
   * @default false
   */
  removeComments?: boolean;
  /**
   * Specifies the root directory of input files.
  Use to control the output directory structure with `--outDir`.
   */
  rootDir?: string;
  /**
   * Unconditionally emit imports for unresolved files.
   * @default false
   */
  isolatedModules?: boolean;
  /**
   * Generates corresponding '.map' file.
   * @default false
   */
  sourceMap?: boolean;
  /**
   * Specifies the location where debugger should locate TypeScript files instead of source locations.
   */
  sourceRoot?: string;
  /**
   * Suppress excess property checks for object literals.
   * @default false
   */
  suppressExcessPropertyErrors?: boolean;
  /**
   * Suppress noImplicitAny errors for indexing objects lacking index signatures.
   * @default false
   */
  suppressImplicitAnyIndexErrors?: boolean;
  /**
   * Do not emit declarations for code that has an `@internal` annotation.
   */
  stripInternal?: boolean;
  /**
   * Specify ECMAScript target version.
   * @default 'es3'
   */
  target?: Target;
  /**
   * Watch input files.
   * @default false
   */
  watch?: boolean;
  /**
   * Enables experimental support for ES7 decorators.
   * @default false
   */
  experimentalDecorators?: boolean;
  /**
   * Emit design-type metadata for decorated declarations in source.
   * @default false
   */
  emitDecoratorMetadata?: boolean;
  /**
   * Specifies module resolution strategy: 'node' (Node) or 'classic' (TypeScript pre 1.6).
   * @default ['AMD', 'System', 'ES6'].includes(module) ? 'classic' : 'node'
   */
  moduleResolution?: "classic" | "node";
  /**
   * Do not report errors on unused labels.
   * @default false
   */
  allowUnusedLabels?: boolean;
  /**
   * Report error when not all code paths in function return a value.
   * @default false
   */
  noImplicitReturns?: boolean;
  /**
   * Report errors for fallthrough cases in switch statement.
   * @default false
   */
  noFallthroughCasesInSwitch?: boolean;
  /**
   * Do not report errors on unreachable code.
   * @default false
   */
  allowUnreachableCode?: boolean;
  /**
   * Disallow inconsistently-cased references to the same file.
   * @default false
   */
  forceConsistentCasingInFileNames?: boolean;
  /**
   * Base directory to resolve non-relative module names.
   */
  baseUrl?: string;
  /**
   * Specify path mapping to be computed relative to baseUrl option.
   */
  paths?: {
    [key: string]: string[];
  };
  /**
   * List of TypeScript language server plugins to load.
   * Requires TypeScript version 2.3 or later.
   */
  plugins?: Plugin[];
  /**
   * Specify list of root directories to be used when resolving modules.
   */
  rootDirs?: string[];
  /**
   * Specify list of directories for type definition files to be included.
   * Requires TypeScript version 2.0 or later.
   */
  typeRoots?: string[];
  /**
   * Type declaration files to be included in compilation.
   * Requires TypeScript version 2.0 or later.
   */
  types?: string[];
  /**
   * Enable tracing of the name resolution process.
   * @default false
   */
  traceResolution?: boolean;
  /**
   * Allow javascript files to be compiled.
   * @default false
   */
  allowJs?: boolean;
  /**
   * Do not truncate error messages.
   * @default false
   */
  noErrorTruncation?: boolean;
  /**
   * Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
   * @default module === 'system' || esModuleInterop
   */
  allowSyntheticDefaultImports?: boolean;
  /**
   * Do not emit `'use strict'` directives in module output.
   * @default false
   */
  noImplicitUseStrict?: boolean;
  /**
   * Enable to list all emitted files.
   * Requires TypeScript version 2.0 or later.
   * @default false
   */
  listEmittedFiles?: boolean;
  /**
   * Disable size limit for JavaScript project.
   * Requires TypeScript version 2.0 or later.
   * @default false
   */
  disableSizeLimit?: boolean;
  /**
   * List of library files to be included in the compilation.
   * Requires TypeScript version 2.0 or later.
   */
  lib?: Lib[];
  /**
   * Enable strict null checks.
   * Requires TypeScript version 2.0 or later.
   * @default false
   */
  strictNullChecks?: boolean;
  /**
   * The maximum dependency depth to search under `node_modules` and load JavaScript files. Only applicable with `--allowJs`.
   * @default 0
   */
  maxNodeModuleJsDepth?: number;
  /**
   * Import emit helpers (e.g. `__extends`, `__rest`, etc..) from tslib.
   * Requires TypeScript version 2.1 or later.
   * @default false
   */
  importHelpers?: boolean;
  /**
   * Specify the JSX factory function to use when targeting React JSX emit, e.g. `React.createElement` or `h`.
   * Requires TypeScript version 2.1 or later.
   * @default 'React.createElement'
   */
  jsxFactory?: string;
  /**
   * Parse in strict mode and emit `'use strict'` for each source file.
   * Requires TypeScript version 2.1 or later.
   * @default false
   */
  alwaysStrict?: boolean;
  /**
   * Enable all strict type checking options.
   * Requires TypeScript version 2.3 or later.
   * @default false
   */
  strict?: boolean;
  /**
   * Enable stricter checking of of the `bind`, `call`, and `apply` methods on functions.
   * @default false
   */
  strictBindCallApply?: boolean;
  /**
   * Provide full support for iterables in `for-of`, spread, and destructuring when targeting `ES5` or `ES3`.
   * Requires TypeScript version 2.3 or later.
   * @default false
   */
  downlevelIteration?: boolean;
  /**
   * Report errors in `.js` files.
   * Requires TypeScript version 2.3 or later.
   * @default false
   */
  checkJs?: boolean;
  /**
   * Disable bivariant parameter checking for function types.
   * Requires TypeScript version 2.6 or later.
   * @default false
   */
  strictFunctionTypes?: boolean;
  /**
   * Ensure non-undefined class properties are initialized in the constructor.
   * Requires TypeScript version 2.7 or later.
   * @default false
   */
  strictPropertyInitialization?: boolean;
  /**
   * Emit `__importStar` and `__importDefault` helpers for runtime Babel ecosystem compatibility and enable `--allowSyntheticDefaultImports` for typesystem compatibility.
   * Requires TypeScript version 2.7 or later.
   * @default false
   */
  esModuleInterop?: boolean;
  /**
   * Allow accessing UMD globals from modules.
   * @default false
   */
  allowUmdGlobalAccess?: boolean;
  /**
   * Resolve `keyof` to string valued property names only (no numbers or symbols).
   * Requires TypeScript version 2.9 or later.
   * @default false
   */
  keyofStringsOnly?: boolean;
  /**
   * Emit ECMAScript standard class fields.
   * Requires TypeScript version 3.7 or later.
   * @default false
   */
  useDefineForClassFields?: boolean;
  /**
   * Generates a sourcemap for each corresponding `.d.ts` file.
   * Requires TypeScript version 2.9 or later.
   * @default false
   */
  declarationMap?: boolean;
  /**
   * Include modules imported with `.json` extension.
   * Requires TypeScript version 2.9 or later.
   * @default false
   */
  resolveJsonModule?: boolean;
}

export {
  Plugin,
  Lib,
  Target,
  NewLine,
  Module,
  JSX
};

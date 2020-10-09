import { CompilerOptions } from "./compiler-options";

export type TSConfigFileName = "tsconfig.json";

export const fileName: TSConfigFileName = "tsconfig.json";

/**
Auto type (.d.ts) acquisition options for this project.
Requires TypeScript version 2.1 or later.
*/
export type TypeAcquisition = {
  /**
   * Enable auto type acquisition.
   */
  enable?: boolean;
  /**
   * Specifies a list of type declarations to be included in auto type acquisition. For example, `['jquery', 'lodash']`.
   */
  include?: string[];
  /**
   * Specifies a list of type declarations to be excluded from auto type acquisition. For example, `['jquery', 'lodash']`.
   */
  exclude?: string[];
}

export type References = {
  /**
   * A normalized path on disk.
   */
  path: string;
  /**
   * The path as the user originally wrote it.
   */
  originalPath?: string;
  /**
   * True if the output of this reference should be prepended to the output of this project.
   * Only valid for `--outFile` compilations.
   */
  prepend?: boolean;
  /**
   * True if it is intended that this reference form a circularity.
   */
  circular?: boolean;
}

export type TSConfigJSON = {
  /**
   * Instructs the TypeScript compiler how to compile `.ts` files.
   */
  compilerOptions?: CompilerOptions;
  /**
   * Auto type (.d.ts) acquisition options for this project.
   * Requires TypeScript version 2.1 or later.
   */
  typeAcquisition?: TypeAcquisition;
  /**
   * Enable Compile-on-Save for this project.
   */
  compileOnSave?: boolean;
  /**
   * Path to base configuration file to inherit from.
   * Requires TypeScript version 2.1 or later.
   */
  extends?: string;
  /**
   * If no `files` or `include` property is present in a `tsconfig.json`, the compiler defaults to
   * including all files in the containing directory and subdirectories except those specified by `exclude`.
   * When a `files` property is specified, only those files and those specified by `include` are included.
   */
  files?: string[];
  /**
   * Specifies a list of files to be excluded from compilation. The `exclude` property only affects the files included via the `include` property and not the `files` property.
   * Glob patterns require TypeScript version 2.0 or later.
   */
  exclude?: string[];
  /**
   * Specifies a list of glob patterns that match files to be included in compilation.
   * If no `files` or `include` property is present in a `tsconfig.json`, the compiler defaults to including all files in the containing directory
   * and subdirectories except those specified by `exclude`.
   * Requires TypeScript version 2.0 or later.
   */
  include?: string[];
  /**
   * Referenced projects.
   * Requires TypeScript version 3.0 or later.
   */
  references?: References[];
}

export {
  CompilerOptions,
  Plugin,
  Lib,
  Target,
  NewLine,
  Module,
  JSX
} from "./compiler-options";

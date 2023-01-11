/* eslint-disable @typescript-eslint/no-namespace */
import { TsConfigJson } from "type-fest";
import { z } from "zod";
import { compilerOptionsSchema } from "./complier-options.js";
import { watchOptionsSchema } from "./watch-options.js";

export const fileName = "tsconfig.json";

export type TSConfigFileName = typeof fileName;

export interface TSConfigJSON extends TsConfigJson {
  $schema?: string;
}

declare namespace TSConfigJSON {
  namespace CompilerOptions {
    export type JSX = TsConfigJson.CompilerOptions.JSX;
    export type Module = TsConfigJson.CompilerOptions.Module;
    export type NewLine = TsConfigJson.CompilerOptions.NewLine;
    export type Target = TsConfigJson.CompilerOptions.Target;
    export type Lib = TsConfigJson.CompilerOptions.Lib;
    export type Plugin = TsConfigJson.CompilerOptions.Plugin;
    export type ImportsNotUsedAsValues = TsConfigJson.CompilerOptions.ImportsNotUsedAsValues;
    export type FallbackPolling = TsConfigJson.CompilerOptions.FallbackPolling;
    export type WatchDirectory = TsConfigJson.CompilerOptions.WatchDirectory;
    export type WatchFile = TsConfigJson.CompilerOptions.WatchFile;
    export type ModuleResolution = TsConfigJson.CompilerOptions.ModuleResolution;
    export type ModuleDetection = TsConfigJson.CompilerOptions.ModuleDetection;
  }
  export type CompilerOptions = TsConfigJson.CompilerOptions;
  namespace WatchOptions {
    export type WatchFileKind = TsConfigJson.WatchOptions.WatchFileKind;
    export type WatchDirectoryKind = TsConfigJson.WatchOptions.WatchDirectoryKind;
    export type PollingWatchKind = TsConfigJson.WatchOptions.PollingWatchKind;
  }
  export type WatchOptions = TsConfigJson.WatchOptions;
  export type TypeAcquisition = TsConfigJson.TypeAcquisition;
  export type References = TsConfigJson.References;
}

const typeAcquisitionSchema = z.object({
  enable: z.boolean().optional(),
  include: z.array(z.string()).optional(),
  exclude: z.array(z.string()).optional()
});

const referencesSchema = z.object({
  path: z.string(),
  originalPath: z.string().optional(),
  prepend: z.boolean().optional(),
  circular: z.boolean().optional()
});

export const schema = z.object({
  $schema: z.string().optional(),
  compilerOptions: compilerOptionsSchema.optional(),
  watchOptions: watchOptionsSchema.optional(),
  typeAcquisition: typeAcquisitionSchema.optional(),
  compileOneSave: z.boolean().optional(),
  extends: z.string().optional(),
  files: z.array(z.string()).optional(),
  exclude: z.array(z.string()).optional(),
  include: z.array(z.string()).optional(),
  references: z.array(referencesSchema).optional()
});

export function isTSConfigJSON(value?: unknown): value is TSConfigJSON {
  return schema.strict().safeParse(value).success;
}

export function parseTSConfigJSON(value?: unknown): TSConfigJSON | undefined {
  return isTSConfigJSON(value) ? value : undefined;
}

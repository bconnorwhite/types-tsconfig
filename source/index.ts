import { TsConfigJson } from "type-fest";
import { z } from "zod";
import { compilerOptionsSchema } from "./complier-options.js";
import { watchOptionsSchema } from "./watch-options.js";

export const fileName = "tsconfig.json";

export type TSConfigJSON = TsConfigJson & {
  $schema?: string;
};

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

import { test, expect } from "@jest/globals";
import { fileName, isTSConfigJSON, parseTSConfigJSON } from "../source/index.js";

const tsconfig = {
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

test("fileName", () => {
  expect(fileName).toBe("tsconfig.json");
});

test("isTSConfigJSON", () => {
  expect(isTSConfigJSON(tsconfig)).toBe(true);
  expect(isTSConfigJSON({
    ...tsconfig,
    invalid_key: true
  })).toBe(false);
});

test("parseTSConfigJSON", () => {
  expect(parseTSConfigJSON(tsconfig)).toEqual(tsconfig);
  expect(parseTSConfigJSON({
    ...tsconfig,
    invalid_key: true
  })).toBeUndefined();
});

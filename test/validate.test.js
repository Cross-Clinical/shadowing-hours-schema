import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import assert from "node:assert/strict";
import Ajv2020Module from "ajv/dist/2020.js";
import addFormatsModule from "ajv-formats";
import { loadSchema, SCHEMA_VERSION } from "../index.js";

const Ajv2020 = Ajv2020Module.default || Ajv2020Module;
const addFormats = addFormatsModule.default || addFormatsModule;

const __dirname = dirname(fileURLToPath(import.meta.url));
const fixturesDir = join(__dirname, "..", "fixtures");

function makeValidator() {
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  addFormats(ajv);
  return ajv.compile(loadSchema());
}

test("schema_version is 0.1.0", () => {
  assert.equal(SCHEMA_VERSION, "0.1.0");
  assert.equal(loadSchema().properties.schema_version.const, "0.1.0");
});

test("valid fixtures pass", () => {
  const validate = makeValidator();
  for (const file of readdirSync(fixturesDir)) {
    if (!file.startsWith("valid-")) continue;
    const data = JSON.parse(readFileSync(join(fixturesDir, file), "utf8"));
    const ok = validate(data);
    assert.equal(ok, true, `${file}: ${JSON.stringify(validate.errors)}`);
  }
});

test("invalid fixtures fail", () => {
  const validate = makeValidator();
  for (const file of readdirSync(fixturesDir)) {
    if (!file.startsWith("invalid-")) continue;
    const data = JSON.parse(readFileSync(join(fixturesDir, file), "utf8"));
    const ok = validate(data);
    assert.equal(ok, false, `${file} should be invalid`);
  }
});

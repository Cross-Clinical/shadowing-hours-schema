import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020Module from "ajv/dist/2020.js";
import addFormatsModule from "ajv-formats";
import { loadSchema } from "../index.js";

const Ajv2020 = Ajv2020Module.default || Ajv2020Module;
const addFormats = addFormatsModule.default || addFormatsModule;
const __dirname = dirname(fileURLToPath(import.meta.url));
const fixturesDir = join(__dirname, "..", "fixtures");

const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(loadSchema());

let failed = 0;
for (const file of readdirSync(fixturesDir)) {
  if (!file.endsWith(".json")) continue;
  const data = JSON.parse(readFileSync(join(fixturesDir, file), "utf8"));
  const ok = validate(data);
  const expectValid = file.startsWith("valid-");
  if (ok !== expectValid) {
    console.error(`FAIL ${file}`, validate.errors);
    failed += 1;
  } else {
    console.log(`OK   ${file}`);
  }
}
process.exit(failed ? 1 : 0);

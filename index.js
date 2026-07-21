import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const SCHEMA_VERSION = "0.1.0";

export function loadSchema() {
  const path = join(__dirname, "schema", "shadowing-hour-record.schema.json");
  return JSON.parse(readFileSync(path, "utf8"));
}

export function getSchemaPath() {
  return join(__dirname, "schema", "shadowing-hour-record.schema.json");
}

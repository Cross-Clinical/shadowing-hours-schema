# shadowing-hours-schema

[![CI](https://github.com/Cross-Clinical/shadowing-hours-schema/actions/workflows/ci.yml/badge.svg)](https://github.com/Cross-Clinical/shadowing-hours-schema/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Cross Clinical](https://img.shields.io/badge/Cross%20Clinical-OSS-0B3D2E)](https://crossclinical.com)
[![ProMedNet](https://img.shields.io/badge/ProMedNet-waitlist-1F6F5B)](https://crossclinical.com)

Portable **JSON Schema** (and CSV column map) for verified clinical shadowing / observation hours.

Part of the [Cross Clinical OSS suite](https://github.com/Cross-Clinical/awesome).

> See [DISCLAIMER.md](DISCLAIMER.md). Educational / operational hours ledger format — **no PHI**.

## Install

```bash
npm install @cross-clinical/shadowing-hours-schema
# or use the schema file directly from this repo
```

## Schema version

`0.1.0` — pin `schema_version` on every export.

## Quick validate

```bash
npm install
npm test
```

## Files

| Path | Purpose |
|---|---|
| `schema/shadowing-hour-record.schema.json` | Canonical JSON Schema |
| `CSV_COLUMN_MAP.md` | CSV headers ↔ JSON paths |
| `fixtures/` | Valid + invalid examples |

## Non-goals

Hosting, auth, UI, scheduling, PHI storage.

## Related

- [clinical-experience-resume](https://github.com/Cross-Clinical/clinical-experience-resume) — consumes this schema
- [ProMedNet](https://crossclinical.com) — hosted multi-tenant shadowing + network product

## Contributing

Sign off commits (`git commit -s`). See [DCO.md](DCO.md).

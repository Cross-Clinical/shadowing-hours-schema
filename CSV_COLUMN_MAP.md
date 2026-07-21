# CSV column map — shadowing-hours-schema 0.1.0

Use these column headers for CSV export/import. One row = one `ShadowingHourRecord`.

| CSV column | JSON path | Notes |
|---|---|---|
| schema_version | schema_version | Always `0.1.0` |
| student_name | student.name | Required |
| student_email | student.email | Optional |
| student_school | student.school | Optional |
| host_name | host.name | Required |
| host_credential_tier | host.credential_tier | student\|trainee\|licensed\|org_admin\|other |
| site_name | site.name | Required |
| site_location | site.location | Optional |
| specialty | specialty | Required |
| started_at | started_at | ISO-8601 |
| ended_at | ended_at | ISO-8601 |
| hours | hours | Decimal hours |
| mode | mode | in_person\|virtual |
| verification_status | verification.status | pending\|verified\|rejected |
| verified_at | verification.verified_at | Optional ISO-8601 |
| verifier_name | verification.verifier_name | Optional |

## Example header row

```csv
schema_version,student_name,student_email,student_school,host_name,host_credential_tier,site_name,site_location,specialty,started_at,ended_at,hours,mode,verification_status,verified_at,verifier_name
```

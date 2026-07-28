---
"@scr2em/bitbucket-cli": minor
---

`bb commits show` is implemented — it previously printed "Commit details not implemented yet". It
prints the commit metadata and message, and optionally the per-file summary (`--stat`), the raw
git-style diff (`--diff`), or everything as JSON (`--json`). `-w/--workspace` now falls back to the
configured default workspace, like the other repository-scoped commands.

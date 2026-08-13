---
"@scr2em/bitbucket-cli": patch
---

Fix 410 errors caused by Bitbucket removing the global `/repositories` and `/workspaces` endpoints (CHANGE-2770). `repos list --all` now walks the caller's workspaces and lists each one, and workspace lookups use `/user/workspaces`. Workspace pickers show the slug, since the replacement endpoint no longer returns a workspace name or privacy flag.

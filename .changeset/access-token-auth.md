---
"@scr2em/bitbucket-cli": minor
---

Support Bitbucket repository, project, and workspace access tokens. Run `bb login --access-token` to save one; it is sent as a Bearer token. Commands that need to list workspaces (`repos list --all`, interactive `config set-workspace`, `browse` without a workspace) explain that a workspace must be passed with `-w` or set as the default instead.

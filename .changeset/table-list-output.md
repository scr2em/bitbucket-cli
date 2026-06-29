---
"@scr2em/bitbucket-cli": minor
---

List commands now render as aligned tables (one row per item) instead of multi-line blocks, making
output much easier to scan. Applies to pull requests, comments, tasks, commits, statuses, diffstat,
activity, branches/tags, branch restrictions, and repositories. Single-item detail views are unchanged.

Author/user columns are colorized, with each user's color derived from their name length (colors are
disabled automatically when output is piped or `NO_COLOR` is set).

---
'@neovici/cosmoz-queue': minor
---

feat(queue): add `header` render-prop to wrap the tab row

`renderQueue` / `queue` accept an optional `header` callback that wraps the
tab row (heading, tabs, stats, pagination). Defaults to identity, so existing
callers are unaffected. Useful for embedding the row in a custom top bar.

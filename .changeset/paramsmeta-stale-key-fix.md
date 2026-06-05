---
"@neovici/cosmoz-queue": patch
---

Fix `paramsMeta` stale key accumulation in `useListCore`

When filters were cleared, `Object.assign(paramsMeta, params)` only added or
overwrote keys — never removing stale ones. This caused cleared filter keys to
leak into subsequent available-values API calls. Keys are now deleted before
assigning new params.

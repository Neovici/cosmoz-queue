---
'@neovici/cosmoz-queue': minor
---

`renderListCore` also takes `breakpoints` as a `[tiers, deps]` tuple. The tiers are rebuilt when one of the deps changes, so a tier can carry values that change while the list is mounted, such as `enabledColumns`.

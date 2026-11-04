---
'@neovici/cosmoz-queue': minor
---

Add `breakpointsDeps` to `renderListCore`. The breakpoints are rebuilt when one of them changes, so a tier can carry values that change while the list is mounted, such as `enabledColumns`.

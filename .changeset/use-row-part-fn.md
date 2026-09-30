---
'@neovici/cosmoz-queue': patch
---

feat(queue): export useRowPartFn

Export `useRowPartFn` (matcher for the active row's `itemRow-active`
part) and the `ACTIVE_ROW_PART` constant; `useQueue`'s returned
`rowPartFn` uses it internally.

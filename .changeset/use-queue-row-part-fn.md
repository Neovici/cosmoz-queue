---
'@neovici/cosmoz-queue': minor
---

feat(queue): `useQueue` returns `rowPartFn`

`useQueue` computes and returns `rowPartFn`, which marks the active row with
the static `itemRow-active` part (matched by id, so it survives
`touch()`/SSE item replacement). `queue()` sets it on the list element via
its `thru` spread, and views forward it to the omnitable through their
existing props plumbing (`listCore` and the low-level `omnitable()` helper
accept it and bind it on the omnitable).

---
'@neovici/cosmoz-queue': patch
---

feat(queue): static queue stylesheet via `rowPartFn`

The queue stylesheet is now a static module constant (`queueStyle`), written
into the `<style>` element once and never re-parsed. The active row is
highlighted through the omnitable's `rowPartFn` extension point, which marks
the active row with a static `itemRow-active` part (matched by id, so it
survives `touch()`/SSE item replacement). `exportparts` is static
(`itemRow, itemRow-active`); `exposedParts` now defaults to that value in
`listCore` and `omnitable`, so queue views no longer need to forward it
(custom values still override).

`rowPartFn` is forwarded via props like any other host prop: `listCore` and
the low-level `omnitable()` helper accept it and bind it on the omnitable,
which appends the returned part to each row.

`queueStyle` is exported for the pion `styleSheets` option, so views can
attach the sheet declaratively. The default `renderStyles` export is
deprecated in favour of `queueStyle` (its `index` parameter is now ignored).

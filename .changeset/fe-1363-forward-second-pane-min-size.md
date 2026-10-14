---
'@neovici/cosmoz-queue': minor
---

feat(queue): forward second pane min size (`split.minSize: number[]`) to `cosmoz-resizable-view`

`queue()` forwarded only the first entry of `split.minSize` to the
`min-size` attribute of `<cosmoz-resizable-view>`, so the detail pane
could be dragged to ~0 width and obscured. All entries are now joined
into the attribute, mapping to per-pane minimums:

- `minSize` unset -> attribute omitted, `min-size` falls back to `100`
- `300` -> `min-size="300"` (previous pane only)
- `[300]` -> `min-size="300"` (unchanged from before)
- `[300, 400]` -> `min-size="300 400"` (minimums for both panes)

Per-pane minimums are honored by `@neovici/cosmoz-resizable` >= 2.2.0
(`^2.0.0` already spans it; older 2.x releases ignore the attribute
entirely).

The hook pattern is supported as well: `useQueue` now accepts the
deprecated `split` option and returns the computed `splitAttrs` object
(sharing the mapping with `queue()`), to pass directly to
`renderQueue` when the legacy `useQueue(...)` + `renderQueue(...)`
pattern is used.

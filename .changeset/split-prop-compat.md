---
'@neovici/cosmoz-queue': patch
---

Restore `split` prop compatibility via `cosmoz-resizable-view` attributes.

- `split` prop is converted to `initial-size` / `min-size` attributes on `<cosmoz-resizable-view>`
- `split.sizes[0]` → `initial-size` (percentage), `split.minSize` → `min-size` (px)
- `expandToMin` and `snapOffset` are silently ignored (no equivalent)
- Default sizing: `50%` / `100px` (matching split.js defaults)
- `split` prop marked `@deprecated` — use attributes on `<cosmoz-resizable-view>` directly

---
'@neovici/cosmoz-queue': patch
---

Restore `split` prop compatibility and fix default sizing.

- `split` prop is now converted to CSS custom properties (`--cz-queue-list-basis`, `--cz-queue-list-min-width`) applied on `<cosmoz-resizable-view>`
- `split.sizes[0]` → `--cz-queue-list-basis` (percentage), `split.minSize` → `--cz-queue-list-min-width` (px)
- `expandToMin` and `snapOffset` are silently ignored (no CSS equivalent)
- Default `#list` sizing changed from `25%`/`300px` to `50%`/`100px` (matching split.js defaults)
- Consumers without `split` prop now get 50/50 split (was 25/75)
- `split` prop marked `@deprecated` — use CSS custom properties directly instead

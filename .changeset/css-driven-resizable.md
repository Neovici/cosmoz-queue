---
'@neovici/cosmoz-queue': minor
---

Migrate from split.js to `@neovici/cosmoz-resizable` v2 CSS-driven flex model.

- Replace split.js gutter with `<cosmoz-resizable-view>` + `<cosmoz-resize-handle>`
- `#list` gets `slot="previous"`, cosmoz-slider gets `slot="next"`
- `#list` CSS: `flex-basis: 25%; min-width: 300px` (replaces `initialSizes`/`minSize` props)
- Persist key derived from `settingsId + '-split'`, passed via `persist` attribute
- `split` prop deprecated (silently ignored — sizing is CSS-only)
- Removed `use-split.ts`, `split.js` dependency, `@types/split.js`

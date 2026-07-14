---
'@neovici/cosmoz-queue': patch
---

**Fix:** Guard against unmounted component in `overlaps()` function

The `overlaps()` function in `use-key-nav.ts` would crash with `TypeError: Cannot read properties of null (reading 'getBoundingClientRect')` when the component unmounted but keyboard events still fired (e.g., user holding a key). This fix adds null guards to prevent the crash, returning `false` when the component is unmounted, which safely blocks keyboard navigation via `permits()`.

**Fixes FE-959**

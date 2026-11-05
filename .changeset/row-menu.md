---
'@neovici/cosmoz-queue': minor
---

Pass `rowMenu` through `renderListCore` to the omnitable, for per-row action menus. Action buttons take an optional `role` and `variant`, so the same actions can be listed as menu items: `renderActions({ open, items, role: 'menuitem', variant: 'tertiary' })(actions)`.

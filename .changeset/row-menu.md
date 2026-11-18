---
'@neovici/cosmoz-queue': minor
---

Pass `rowMenu` through `renderListCore` to the omnitable, for per-row action menus. Action buttons take an optional `role` and `variant`, so the same actions can be listed as menu items: `renderActions({ open, items, role: 'menuitem', variant: 'tertiary' })(actions)`. The role goes on the focusable native button (cosmoz-button's `control-role`), which needs `@neovici/cosmoz-button` 2.4 or later.

Queue keyboard navigation now ignores arrow keys that come from inside a `role="menu"`, so they move between the menu's items instead of switching the queue's item.

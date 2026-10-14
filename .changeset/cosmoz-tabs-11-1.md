---
'@neovici/cosmoz-queue': patch
---

Update `@neovici/cosmoz-tabs` to 11.1

Refreshes the floor to `^11.1.0`. The built-in tab bar picks up the
tabs 11.1 keyboard model: the arrow keys move the focus only, and
Enter/Space activate the focused tab (manual activation, like a
native tablist). Tabs with `href` pick through their link, and the
keys are handled from the tab's first render.

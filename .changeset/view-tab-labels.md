---
'@neovici/cosmoz-queue': minor
---

Use a document icon for the queue layout, and add an opt-in `labelActive` helper that names the active layout tab next to its icon: `renderTabs({ ...tabnav, tabs: labelActive(tabnav.tabs, tabnav.active?.name) })`.

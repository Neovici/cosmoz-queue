---
'@neovici/cosmoz-queue': minor
---

Rename the queue layout tab to "Focus" and give it a document icon, and add an opt-in `labelActive` helper that names the active layout tab next to its icon: `renderTabs({ ...tabnav, tabs: labelActive(tabnav.tabs, tabnav.active?.name) })`. The tab's `name` stays `queue`, so URLs and saved view preferences keep working.

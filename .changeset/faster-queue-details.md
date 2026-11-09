---
'@neovici/cosmoz-queue': minor
---

Render cached details at once and prefetch neighbours. A settled details promise renders its item without the loader, and a pending one renders as soon as it resolves instead of after the slide animation. The slide is skipped when nothing was open. With `api`, the queue caches the six most recently requested items for 30 seconds and loads the previous and next items while idle. Pointing at the layout tabs loads the selected item; custom headers get this as `tabnav.prefetch`.

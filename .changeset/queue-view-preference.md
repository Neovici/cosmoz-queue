---
'@neovici/cosmoz-queue': minor
---

Remember the tab a queue opens on, via a `persist` key

`queue()` and `useQueue()` take a `persist` key. When set, activating a tab
stores it under that key and later mounts open on it, falling back to
`fallback` when nothing is stored.

Only a tab click counts. `tabnav.activate` — how a row or link click opens a
record — deliberately does not, so opening a record cannot overwrite the layout
someone picked. The stored tab is read once at mount, so a later pick does not
move the target that Back returns to.

`usePref` now accepts no key (persistence off) and no longer throws where
`localStorage` is unavailable.

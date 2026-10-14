---
'@neovici/cosmoz-queue': minor
---

Remember the layout a user picks, via `tabPersistKey`

`queue()` and `useQueue()` take `tabPersistKey` and hand it to cosmoz-tabs'
`useTabs` as `persist`. Clicking List or Split stores it, and later mounts open
on it instead of `fallback`. The details tab is marked `persist: false`, and
opening a record from the list does not count as a pick.

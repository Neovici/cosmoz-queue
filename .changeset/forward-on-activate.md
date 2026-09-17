---
'@neovici/cosmoz-queue': minor
---

Forward `onActivate` through `queue()` to `useQueue`

`useQueue` and `useTabs` already accept `onActivate`, but the `queue()` wrapper
dropped it, so callers using `queue()` had no way to learn that the user picked
a tab. It is the only signal that distinguishes an explicit tab click from a
programmatic `tabnav.activate()` — row and link clicks go through the latter —
which callers need to persist a layout preference without a record click
overwriting it.

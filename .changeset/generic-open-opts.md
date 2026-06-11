---
'@neovici/cosmoz-queue': minor
---

Make `ActionOpts.open` generic over `SyncOpenFn | AsyncOpenFn`. This allows `renderActions` to accept both `useFormDialogable().open` (sync) and `useFormDialogable$().open` (async).

New exported types: `SyncOpenFn`, `AsyncOpenFn`.

---
'@neovici/cosmoz-queue': patch
---

Revert `reqId` ref from `useFetchActions` — the `debounce$` + `AbortError` + `data: undefined` guards already prevent stale responses from overwriting current state. The `reqId` check was an unnecessary extra layer.

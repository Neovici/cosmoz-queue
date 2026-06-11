---
'@neovici/cosmoz-queue': patch
---

Fix stale actions bug in `useFetchActions` — clear `data` on new fetch and ignore `AbortError` to prevent clobbering state from in-flight requests.

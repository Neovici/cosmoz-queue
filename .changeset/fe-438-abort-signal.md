---
'@neovici/cosmoz-queue': minor
---

feat(list/more): add AbortSignal support to useMore

Pass an AbortSignal to the `list$` callback so consumers can cancel
in-flight fetches when params/list$ deps change simultaneously. The
previous fetch is aborted via AbortController, preventing stale
responses from clobbering newer data. The `signal` prop on `TList$`
is optional — existing consumers remain compatible without changes.

---
'@neovici/cosmoz-queue': patch
---

Fix stale request race condition in `useFetchActions` — add `reqId` ref to prevent stale responses from overwriting current state. When `ids` change rapidly, a previous fetch response could arrive after a new fetch has started, overwriting `fetching: true` and `data: undefined` with stale data. The `reqId` check ensures only the latest request's response updates state.

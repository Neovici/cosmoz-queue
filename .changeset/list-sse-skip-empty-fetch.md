---
'@neovici/cosmoz-queue': patch
---

`useListSSE` no longer fetches when none of the updated items are in the list. An empty `objectIds` filter was dropped from the query string, so each such update ran an unfiltered, unpaged search.

---
'@neovici/cosmoz-queue': minor
---

Add `keepDeparted` to keep the open item when it drops out of the list

Saving an item can make it miss the list for a moment while the backend
recalculates it, and the queue used to jump to the next item and drop the row.
With `keepDeparted`, the open item stays open and is re-checked after 2, 5 and
10 seconds. Only when a re-check confirms it is gone does the view get a
`.departure` prop (`{ next }`), so it can tell the user and let them move on.
Other items are still removed right away, and nothing changes without the
option.

`useListSSE` now passes a `check()` callback in the `list-item-remove` detail
to fetch the item again.

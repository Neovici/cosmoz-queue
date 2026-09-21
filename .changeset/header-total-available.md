---
'@neovici/cosmoz-queue': patch
---

feat(queue): pass `totalAvailable` to the `header` callback

Follow-up to the `header` render-prop: the parts object now includes
`totalAvailable`, so consumers can render a count badge without reaching
into queue state.

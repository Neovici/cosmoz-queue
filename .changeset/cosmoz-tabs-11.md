---
'@neovici/cosmoz-queue': minor
---

Move to `@neovici/cosmoz-tabs` 11

The built-in tab bar puts the heading in the `tabs` slot, and the stats and
pagination in the `stats` slot. Tabs 11 no longer routes extra children, and
treats anything in the default slot as a tab. Queues that pass their own
`header` are unaffected.

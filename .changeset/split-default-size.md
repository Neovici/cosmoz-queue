---
'@neovici/cosmoz-queue': patch
---

Fix: default split initialSize to 50% when sizes not provided

When `split` config is provided without `sizes`, `initialSize` was `undefined`, causing `flex-basis: auto` (intrinsic sizing) and a "dancing omnitable" layout feedback loop. Now defaults to `50%`, matching the no-split fallback.

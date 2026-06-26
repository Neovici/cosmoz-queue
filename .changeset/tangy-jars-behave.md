---
'@neovici/cosmoz-queue': patch
---

fix(list): gate load-more spinner on existing items

The load-more spinner no longer renders on initial/empty page loads. It only shows when there are already visible items (during "Load more" pagination) by gating on `hasItems = visibleItems.length > 0`.

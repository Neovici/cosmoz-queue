---
'@neovici/cosmoz-queue': patch
---

Fix: guard persist attribute with ifDefined in renderQueue

When `persistKey` was `undefined`, `persist=${persistKey}` rendered `persist=""` (empty attribute). pion's `attributeChangedCallback` converts `""` → `true`, so `cosmoz-resizable-view` received `persist = true` → persisted split state under a shared `cosmoz-resizable-view:true:horizontal` localStorage key, cross-contaminating all queue views that don't pass a `settingsId`.

Using `ifDefined` omits the attribute entirely when `persistKey` is `undefined`, so persistence stays disabled as intended.
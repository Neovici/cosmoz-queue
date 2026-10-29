---
'@neovici/cosmoz-queue': minor
---

List cores given a `settingsId` hold their first fetch until the omnitable reports `settingsReady`, so they fetch once with the saved sort instead of first with the default one.

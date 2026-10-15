---
'@neovici/cosmoz-queue': minor
---

Queues with a `settingsId` open on the tab the user last picked whenever the URL hash names no tab. The pick is stored next to the queue's resize persistence key (`<settingsId>-split-tab`), so queues without a `settingsId` behave exactly as before. The hash always wins when present, a remembered tab that is currently unavailable (mobile, or an empty queue) falls through to the `fallback` tab, and a remembered tab never opens the details (queue) view. `useTabs` and `useQueue` accept a new optional `persistKey`; `usePref` tolerates an undefined key and blocked storage.

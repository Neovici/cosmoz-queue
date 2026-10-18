---
'@neovici/cosmoz-queue': patch
---

Keep action buttons disabled and show progress while their dialog resolver or headless save is pending. Repeated clicks cannot start duplicate action checks. Async open handlers can return a promise to indicate when the operation finishes; synchronous handlers keep their existing behavior.

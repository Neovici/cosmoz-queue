---
'@neovici/cosmoz-queue': minor
---

Add async dialog support for actions via `useFormDialogable$` and `formDialog$`. Action `open` now accepts `Resolvable<Dialogable<T>>` to enable `check$()`-driven dialogs that resolve after BE validation.

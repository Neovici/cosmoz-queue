---
'@neovici/cosmoz-queue': minor
---

Render the item navigation and pagination arrows as icon-only buttons

The prev/next item buttons and the pagination arrows set `cosmoz-button`'s
`icon-only` attribute, so with cosmoz-button 2.x they are square (32×32, and
28×28 for `sm` pagination) and line up with the bottom bar's overflow button.
cosmoz-button 1.x ignores the attribute.

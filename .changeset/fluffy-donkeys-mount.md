---
'@neovici/cosmoz-queue': minor
---

Add an optional `breakpoints` prop to `renderListCore`: when set, a cosmoz-utils breakpoints directive is mounted on the omnitable and applies each tier's props and attrs as its container width crosses tier boundaries. The render is unchanged when the prop is omitted.

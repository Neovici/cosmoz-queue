---
'@neovici/cosmoz-queue': major
---

Render default actions as `cosmoz-button` and drop the copied `.button` styles

`defaultButton` renders a `<cosmoz-button>` instead of `<button class="button">`,
so actions look like every other button and, inside `cosmoz-bottom-bar` 13,
get their `variant` and `size` from where the bar places them.

**Breaking:** the list stylesheet (`style` from `@neovici/cosmoz-queue/list`)
no longer includes the `.button`, `.buttons`, `.button-ricon` and
`.actionButton` rules. They were a stale copy of cosmoz-frontend's styles:
40px, semibold and skeuomorphic, while the rest of the app is on the 32px flat
button. Views that render `class="button"` inside a list should switch to
`cosmoz-button`.

Requires `cosmoz-button` 2.1 and `cosmoz-tokens` 4.8. Use it together with
`cosmoz-bottom-bar` 13; older bars paint slotted `cosmoz-button`s a second time.

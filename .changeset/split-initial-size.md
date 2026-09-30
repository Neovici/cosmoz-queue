---
'@neovici/cosmoz-queue': patch
---

Honour `split.sizes` and `split.minSize` in the split layout

A leftover `#list` rule pinned the list pane to `flex-basis: 50%` and
`min-width: 100px`. Rules outside a shadow root beat `::slotted()` rules from
inside it, so it overrode the `initial-size` and `min-size` that
`<cosmoz-resizable-view>` applies, and every queue opened at 50% until the user
dragged the divider.

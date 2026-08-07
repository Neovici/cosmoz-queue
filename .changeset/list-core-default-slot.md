---
'@neovici/cosmoz-queue': minor
---

feat(list): always render an unnamed `<slot>` in renderListCore

`renderListCore` now always renders `html`<slot></slot>`` as a child of
`cosmoz-omnitable`, regardless of whether the `content` prop is provided.
Previously, every consumer had to include `html`<slot></slot>`` in their
`content` callback to provide the queue-to-omnitable projection conduit.
This removes that boilerplate — the slot is always available, and `content`
is a pure extension point for extras (action slots, bottom bar slots, etc.).

Existing consumers that still include `html`<slot></slot>``in`content` will
get a duplicate slot — harmless (content projects into the first), but should
be cleaned up.

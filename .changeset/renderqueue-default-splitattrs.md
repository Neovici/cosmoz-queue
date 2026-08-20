---
'@neovici/cosmoz-queue': patch
---

Fix: default splitAttrs in renderQueue to prevent layout feedback loop

`renderQueue` didn't default `splitAttrs` when omitted, leaving `initial-size`/`min-size` unset → `cosmoz-resizable-view` fell back to `flex-basis: auto` (content-sized) for the list pane. Combined with omnitable's fixed-px cell widths, this created a self-sustaining resize loop ("dancing omnitable").

Now defaults to `initialSize: '50%'` / `minSize: '100'`, matching the `queue()` helper's existing default (since 2.13.1). Direct `renderQueue` callers are now protected the same as `queue()` consumers.
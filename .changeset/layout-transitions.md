---
'@neovici/cosmoz-queue': minor
---

Animate switches between List, Split and Focus. In Chrome and Edge 147+ the switch runs as a view transition scoped to the panes: the old layout fades out, and the detail slides in from List or crossfades between Split and Focus. Opening the detail from List waits up to 250 ms for its details, so it arrives as content rather than the loader. Other browsers get a short CSS entrance on the incoming pane. Nothing animates under `prefers-reduced-motion`. `useQueue` takes an optional `details` for this wait.

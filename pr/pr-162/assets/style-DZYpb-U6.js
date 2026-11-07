import{t as e}from"./chunk-BvrOYcoh.js";import{t,y as n}from"./haunted-rI4MuGUq.js";var r,i,a,o=e((()=>{t(),r=n`
	:host {
		display: flex;
		flex-direction: column;
		height: 100%;
		position: relative;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	.tabn:not([variant='segmented']) {
		box-shadow: none;
		position: relative;
		padding-block: calc(var(--cz-spacing) * 2);
	}
	.tabn-tab:not([variant='segmented']) {
		flex: 0 1 0.000001px;
		flex: 0 1 min-content;
		padding: var(--cz-queue-tab-padding, 11px 16px);
		background: inherit;
		color: var(--cz-color-gray-400);
	}
	.tabn-tab:first-of-type {
		margin-left: auto;
	}

	.tabn-tab[active]:not([variant='segmented']) {
		color: var(--cz-color-text-primary);
		box-shadow: none;
	}
	.tabn-tab:hover:not([variant='segmented']) {
		color: var(--cz-color-text-secondary-hover);
	}
	.tabn-heading {
		font-size: var(--cz-text-lg);
		font-weight: var(--cz-font-weight-semibold);
		line-height: var(--cz-text-lg-line-height);
		color: var(--cz-color-text-secondary);
		white-space: nowrap;
		display: flex;
		align-items: center;
	}
	.tabn-stats {
		margin: 0 calc(var(--cz-spacing) * 4);
		color: var(--cz-color-text-secondary);
		white-space: nowrap;
		display: flex;
		align-items: center;
	}

	#list {
		flex-basis: var(--cz-queue-list-basis, 50%);
		min-width: var(--cz-queue-list-min-width, 100px);
	}

	#queue {
		border-top: 1px solid var(--cz-color-border-primary);
	}

	[data-active='split'] .view-core::part(header-bg) {
		border-top-left-radius: 0;
	}

	[data-active='overview'] #queue,
	[data-active='queue'] #list {
		display: none !important;
	}

	.button-nav.prev,
	.button-page.prev,
	.page-prev {
		transform: scaleX(-1);
		margin-right: calc(var(--cz-spacing) * 2);
	}

	.tabn-pagination {
		font-size: 0;
		display: flex;
	}
`,i=n`
	/* A named pane that hides aborts the transition, so a pane is named only
	   while it stays on screen: the list opening Split, the detail as
	   it opens from List. Split and Focus reflow the detail, so the whole pane
	   crossfades as one: naming it would snap its old snapshot into place. */
	[data-vt='overview-split'] > #list {
		view-transition-name: q-list;
	}
	[data-vt='overview-split'] > #queue,
	[data-vt='overview-queue'] > #queue {
		view-transition-name: q-detail;
	}
	[data-vt]::view-transition-group(*) {
		animation-duration: var(--cz-duration-fast, 150ms);
		animation-timing-function: var(
			--cz-ease-out,
			cubic-bezier(0.16, 1, 0.3, 1)
		);
	}
	[data-vt]::view-transition-old(*),
	[data-vt]::view-transition-new(*) {
		height: 100%;
		object-fit: none;
		object-position: left top;
	}
	/* The panes are translucent glass, so an old snapshot left under the new
	   one shows through. Every old snapshot fades out before the new settles. */
	[data-vt]::view-transition-new(root) {
		animation: none;
	}
	[data-vt]::view-transition-old(root) {
		animation: q-fade var(--cz-duration-exit, 120ms)
			var(--cz-ease-in, cubic-bezier(0.4, 0, 1, 1)) both;
	}
	[data-vt]::view-transition-new(q-detail):only-child {
		animation: q-in-right var(--cz-duration-fast, 150ms)
			var(--cz-ease-out, cubic-bezier(0.16, 1, 0.3, 1)) both;
	}
	/* List and Focus share nothing on screen, so Focus appears in place. */
	[data-vt='overview-queue']::view-transition-new(q-detail):only-child {
		animation: q-appear var(--cz-duration-fast, 150ms)
			var(--cz-ease-out, cubic-bezier(0.16, 1, 0.3, 1)) both;
	}
	:is([data-vt='split-queue'], [data-vt='queue-split'])::view-transition-new(
		root
	) {
		animation: q-fade-in var(--cz-duration-fast, 150ms)
			var(--cz-ease-out, cubic-bezier(0.16, 1, 0.3, 1)) both;
	}

	/* Without element-scoped view transitions, the incoming pane enters. */
	@media (prefers-reduced-motion: no-preference) {
		[data-vt-fallback='overview-split'] > #queue {
			animation: q-in-right var(--cz-duration-fast, 150ms)
				var(--cz-ease-out, cubic-bezier(0.16, 1, 0.3, 1)) both;
		}
		[data-vt-fallback='queue-split'] > #list {
			animation: q-in-left var(--cz-duration-fast, 150ms)
				var(--cz-ease-out, cubic-bezier(0.16, 1, 0.3, 1)) both;
		}
		[data-vt-fallback='overview-queue'] > #queue {
			animation: q-appear var(--cz-duration-fast, 150ms)
				var(--cz-ease-out, cubic-bezier(0.16, 1, 0.3, 1)) both;
		}
		[data-vt-fallback='split-queue'] > #queue {
			animation: q-fade-in var(--cz-duration-fast, 150ms)
				var(--cz-ease-out, cubic-bezier(0.16, 1, 0.3, 1)) both;
		}
	}

	@keyframes q-fade {
		to {
			opacity: 0;
			scale: 0.99;
		}
	}
	@keyframes q-fade-in {
		from {
			opacity: 0;
		}
	}
	@keyframes q-appear {
		from {
			opacity: 0;
			translate: 0 8px;
		}
	}
	@keyframes q-in-right {
		from {
			opacity: 0;
			translate: 32px 0;
		}
	}
	@keyframes q-in-left {
		from {
			opacity: 0;
			translate: -32px 0;
		}
	}
`,a=n`
	${r}

	#list::part(itemRow-active) {
		background: var(--cz-color-bg-tertiary);
	}

	:host([data-mobile]) .tabn-heading {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		margin-left: calc(var(--cz-spacing) * 3);
	}
	:host([data-mobile]) .tabn-tab {
		padding: 10px;
	}
	:host([data-mobile]) [name='split'] {
		display: none;
	}

	${i}
`}));export{o as n,a as r,r as t};
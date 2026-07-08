import { css } from '@pionjs/pion';

export const base = css`
	:host {
		display: flex;
		flex-direction: column;
		height: 100%;
		position: relative;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	.tabn {
		box-shadow: none;
		position: relative;
		padding-block: calc(var(--cz-spacing) * 2);
	}
	.tabn-tab {
		flex: 0 1 0.000001px;
		flex: 0 1 min-content;
		padding: 11px 16px;
		background: inherit;
		color: var(--cz-color-gray-400);
	}
	.tabn-tab:first-of-type {
		margin-left: auto;
	}

	.tabn-tab[active] {
		color: var(--cz-color-text-primary);
		box-shadow: none;
	}
	.tabn-tab:hover {
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
`;

export default ({ index }: { index?: number | string }) => css`
	${base}

	#list::part(itemRow-${index || '0'}) {
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
`;

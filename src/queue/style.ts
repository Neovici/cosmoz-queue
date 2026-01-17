import { css } from '@pionjs/pion';

export const base = css`
	:host {
		display: flex;
		flex-direction: column;
		height: 100%;
		position: relative;
		font-size: 14px;
	}

	.tabn {
		--cosmoz-tabs-bg-color: var(--cz-bg-color);
		box-shadow: none;
		position: relative;
		color: #959ba5;
	}
	.tabn-tab {
		flex: 0 1 0.000001px;
		flex: 0 1 min-content;
		padding: 11px 16px;
		background: inherit;
	}
	.tabn-tab:first-of-type {
		margin-left: auto;
	}
	.tabn-tab[active] {
		color: var(--cz-tabn-tab-active-color);
		box-shadow: none;
	}
	.tabn-heading {
		font-size: 17px;
		font-weight: 600;
		line-height: 25px;
		color: var(--cz-tabn-heading-color, var(--cz-text-secondary-color));
		margin-left: 18px;
		white-space: nowrap;
	}
	.tabn-stats {
		margin: 0 16px;
		color: var(--cz-text-color);
		white-space: nowrap;
	}

	.split {
		display: flex;
		flex: auto;
		flex-direction: row;
		min-height: 0;
	}

	.gutter {
		cursor: col-resize;
		flex: none;
		display: flex;
		background: var(--cz-queue-gutter-bg, var(--cz-header-bg-color, #fff));
		z-index: 2;
		position: relative;
	}
	.gutter::before {
		content: '';
		display: block;
		flex: none;
		background: var(--cz-queue-gutter-bg, var(--cz-header-bg-color, #bbb));
		width: 1px;
		margin-left: auto;
		pointer-events: none;
	}
	.gutter:hover::before {
		background: var(--cz-accent-color);
		box-shadow: -1px 0 0 1px var(--cz-accent-color);
	}
	.gutter:hover::after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: -2px;
		right: -2px;
		bottom: 0;
	}

	#list {
		min-width: 0;
	}
	#list,
	#queue {
		flex: auto;
	}

	[data-active='split'] .view-core::part(header-bg) {
		border-top-left-radius: 0;
	}

	[data-active='overview'] .view-core,
	[data-active='queue'] #list {
		display: none;
	}
	[data-active='overview'] #queue {
		flex: none;
	}

	.button-nav {
		width: 40px;
		height: 40px;
		cursor: pointer;
		outline: none;
	}

	.button-nav:active {
		background: rgba(52, 52, 52, 0.4);
	}
	.button-nav.prev,
	.button-page.prev,
	.page-prev {
		transform: scaleX(-1);
	}

	.tabn-pagination {
		font-size: 0;
		display: flex;
		border: var(--cz-pagination-border-color);
		border-radius: var(--cz-pagination-border-radius);
	}
	.button-page {
		width: 30px;
		height: 30px;
		padding: 0 5px;
		cursor: pointer;
		outline: none;
		border: none;
		border-radius: var(--cz-pagination-border);
		fill: var(--cz-pagination-color);
		position: relative;
		background-color: transparent;
	}
	.button-page[disabled] {
		opacity: 0.45;
		pointer-events: none;
		fill: var(--cz-pagination-inactive-color);
	}

	.button-page:active,
	.button-page:hover {
		fill: var(--cz-pagination-active-color);
	}

	.tabn-pagination .button-page + .button-page::before {
		content: '';
		position: absolute;
		width: 1px;
		height: 18.5px;
		background-color: var(--cz-pagination-border-divider-color);
		left: -0.5px;
		top: 50%;
		transform: translateY(-50%);
	}
`;

export default ({
	index,
	mobile,
}: {
	index?: number | string;
	mobile?: boolean;
}) => css`
	${base}

	#list::part(itemRow-${index || '0'}) {
		background: var(
			--cosmoz-omnitable-highlight-color,
			rgba(80, 138, 239, 0.4)
		);
	}

	${(mobile &&
		css`
		.tabn-heading {
			font-size: 14px;
			margin-left: 12px;
		}
		.tabn-tab {
			padding: 10px;
		}
		[name="split"] {
			display: none;
		}
	}`) ||
	''}
`;

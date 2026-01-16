import { css } from '@pionjs/pion';

export const styles = css`
	:host {
		display: block;
		height: 100%;
	}

	.tabn {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 16px;
		border-bottom: 1px solid var(--cosmoz-queue-border-color, #e0e0e0);
		background: var(--cosmoz-queue-header-bg, #fafafa);
	}

	.tabn-heading {
		font-weight: 500;
		font-size: 1.1em;
		margin-right: auto;
	}

	.tabn-tab {
		padding: 6px 12px;
		border: none;
		background: transparent;
		cursor: pointer;
		border-radius: 4px;
		transition: background 0.2s;
	}

	.tabn-tab:hover {
		background: var(--cosmoz-queue-tab-hover-bg, #e0e0e0);
	}

	.tabn-tab[active] {
		background: var(--cosmoz-queue-tab-active-bg, #1976d2);
		color: var(--cosmoz-queue-tab-active-color, white);
	}

	.tabn-tab[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.tabn-stats {
		font-size: 0.9em;
		color: var(--cosmoz-queue-stats-color, #666);
	}

	.tabn-pagination {
		display: flex;
		gap: 4px;
	}

	.button-nav,
	.button-page {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border: none;
		background: transparent;
		cursor: pointer;
		border-radius: 4px;
		transition: background 0.2s;
	}

	.button-nav:hover:not(:disabled),
	.button-page:hover:not(:disabled) {
		background: var(--cosmoz-queue-button-hover-bg, #e0e0e0);
	}

	.button-nav:disabled,
	.button-page:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.button-nav.prev svg,
	.button-page.page-prev svg {
		transform: rotate(180deg);
	}

	.split {
		display: flex;
		height: calc(100% - 60px);
		overflow: hidden;
	}

	.split[data-active='overview'] #queue {
		display: none;
	}

	.split[data-active='overview'] #list {
		width: 100%;
	}

	.split[data-active='queue'] #list {
		display: none;
	}

	.split[data-active='queue'] #queue {
		width: 100%;
	}

	.split[data-active='split'] #list,
	.split[data-active='split'] #queue {
		width: 50%;
	}

	#list {
		overflow: auto;
	}

	#queue {
		overflow: hidden;
	}

	.view-core {
		height: 100%;
		overflow: auto;
	}
`;

export default styles;

import { tagged as css } from '@neovici/cosmoz-utils';

export const statusStyle = css`
	cosmoz-omnitable::part(status),
	.status {
		margin-left: auto;
		font-size: 13px;
		border-radius: 12px;
		padding: 2px 12px;
		background: var(--cosmoz-omnitable-status-normal-bg-color);
		color: var(--cosmoz-omnitable-status-normal-text-color);
		border: 1px solid
			var(--cosmoz-omnitable-status-normal-border-color, transparent);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 100%;
		box-sizing: border-box;
		display: inline-block;
		vertical-align: middle;
	}

	.status > svg {
		display: inline-flex;
		margin-left: 4px;
		vertical-align: middle;
	}

	cosmoz-omnitable::part(status-error),
	[data-severity='error'] {
		background: var(--cosmoz-omnitable-status-error-bg-color);
		color: var(--cosmoz-omnitable-status-error-text-color);
		border-color: var(
			--cosmoz-omnitable-status-error-border-color,
			transparent
		);
	}

	cosmoz-omnitable::part(status-ok),
	[data-severity='ok'] {
		background: var(--cosmoz-omnitable-status-ok-bg-color);
		color: var(--cosmoz-omnitable-status-ok-text-color);
		border-color: var(--cosmoz-omnitable-status-ok-border-color, transparent);
	}

	cosmoz-omnitable::part(status-warning),
	cosmoz-omnitable::part(status-duplicate),
	cosmoz-omnitable::part(status-price_missing),
	cosmoz-omnitable::part(status-not_distribute),
	[data-severity='warning'],
	[data-status='duplicate'],
	[data-status='price_missing'],
	[data-status='not_distributed'] {
		background: var(
			--cosmoz-omnitable-status-warning-bg-color,
			rgba(255, 221, 181, 0.5)
		);
		color: var(--cosmoz-omnitable-status-warning-text-color, #e36000);
		border-color: var(
			--cosmoz-omnitable-status-warning-border-color,
			transparent
		);
	}

	cosmoz-omnitable::part(status-processing),
	.status[data-severity='processing'] {
		background: var(
			--cosmoz-omnitable-status-processing-bg-color,
			rgba(196, 181, 253, 0.5)
		);
		color: var(--cosmoz-omnitable-status-processing-text-color, #7c3aed);
		border-color: var(
			--cosmoz-omnitable-status-processing-border-color,
			transparent
		);
	}

	cosmoz-omnitable::part(status-inactive),
	[data-severity='inactive'] {
		background: var(--cosmoz-omnitable-status-inactive-bg-color);
		color: var(--cosmoz-omnitable-status-inactive-text-color);
		border-color: var(
			--cosmoz-omnitable-status-inactive-border-color,
			transparent
		);
	}

	cosmoz-omnitable::part(status-update),
	[data-severity='update'] {
		background: var(--cosmoz-omnitable-status-update-bg-color);
		color: var(--cosmoz-omnitable-status-update-text-color);
		border-color: var(
			--cosmoz-omnitable-status-update-border-color,
			transparent
		);
	}

	cosmoz-omnitable::part(status-handle),
	[data-severity='handle'] {
		background: var(--cosmoz-omnitable-status-handle-bg-color);
		color: var(--cosmoz-omnitable-status-handle-text-color);
		border-color: var(
			--cosmoz-omnitable-status-handle-border-color,
			transparent
		);
	}

	cosmoz-omnitable::part(status-name-Draft) {
		background: var(--cosmoz-omnitable-status-draft-bg-color, #ffaa00);
		color: var(--cosmoz-omnitable-status-draft-text-color, #7d370d);
		border-color: var(
			--cosmoz-omnitable-status-draft-border-color,
			transparent
		);
	}
`;

export const bottomBarInfoStyles = css`
	.bottom-bar-info {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
	}
	.bottom-bar-info p {
		max-width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		margin: 0;
	}
`;

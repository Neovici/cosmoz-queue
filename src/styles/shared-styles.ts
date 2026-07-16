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

export const buttonStyles = css`
	.button {
		font-family: inherit;
	}
	.button:not([slot='bottom-bar-menu']),
	.file::-webkit-file-upload-button,
	.file::file-selector-button {
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);
		box-sizing: border-box;
		cursor: pointer;
		outline: none;
		flex: none;
		border: none;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		border-radius: var(--cz-radius-md);
		height: 40px;
		min-width: 78px;
		font-family: inherit;
		font-size: var(--cz-text-sm);
		font-weight: var(--cz-font-weight-semibold);
		line-height: var(--cz-text-sm-line-height);
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.button:not([slot='bottom-bar-menu']):hover,
	.button:not([slot='bottom-bar-menu']):active,
	.file::-webkit-file-upload-button:hover,
	.file::file-selector-button:hover {
		background-color: var(--cz-color-bg-brand-solid-hover);
	}
	.button[disabled],
	.button:disabled {
		opacity: var(--cosmoz-button-disabled-opacity, 0.15);
		pointer-events: none;
	}
	a.button {
		text-decoration: none;
	}
	.buttons {
		display: flex;
		justify-content: flex-end;
		padding: 8px 8px 8px 24px;
	}
	.buttons .button {
		margin: 0 4px;
	}
	.button-ricon {
		border: none;
		border-radius: 50%;
		fill: var(--primary-button-icon-fill);
		padding: 8px;
		display: inline-flex;
		background: transparent;
		cursor: pointer;
		transition: background 0.15s ease;
	}
	.button-ricon:active {
		background: rgb(56, 62, 74, 0.15);
	}
	.actionButton {
		border: transparent;
		background: var(--cz-action-button-bg, #fff);
		border-radius: 500px;
		font-size: 1.08em;
		letter-spacing: -0.01em;
		padding: 0.5em 0.9em;
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
		justify-content: center;
		white-space: nowrap;
		transition: background 0.25s;
	}
	.actionButton:hover {
		background: var(--cz-action-button-hover-bg, #f0f0f0);
	}
	.actionButton span {
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 10px;
	}

	.actionButton iron-icon {
		margin-left: 4px;
		flex: none;
		--iron-icon-width: 18px;
		--iron-icon-height: 18px;
	}
	.actionButton iron-icon:hover {
		color: var(--cz-accent-color);
	}
	.expand-more-icon {
		fill: var(--cz-expand-more-icon-color, inherit);
	}
	cosmoz-tab-card::part(collapse-icon) svg {
		fill: var(--cz-expand-more-icon-color, inherit);
	}
`;

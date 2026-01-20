import '@neovici/cosmoz-spinner';
import { css } from '@pionjs/pion';
import { t } from 'i18next';
import { html, nothing } from 'lit-html';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';

export const style = css`
	.more {
		font-family: inherit;
		font-size: 14px;
		font-weight: 500;
		line-height: 40px;
		background: inherit;
		color: var(--cz-text-color);
		border: none;
		cursor: pointer;
	}
	.more:hover {
		color: var(--secondary-text-color);
	}
`;

export const renderLoadMore = ({
	loading,
	data$,
	onMore,
}: {
	loading?: boolean;
	data$?: PromiseLike<unknown>;
	onMore?: () => void;
}) =>
	html`<button
		class="more"
		slot="extraContent"
		?hidden="${!onMore}"
		@click="${onMore}"
	>
		${when(loading, () => html`<cosmoz-spinner></cosmoz-spinner>`)}
		${when(data$, (data$) =>
			until(
				data$.then(
					() => nothing,
					() => nothing,
				),
				html`<cosmoz-spinner></cosmoz-spinner>`,
			),
		)}
		<span>${t('Load more')}</span>
	</button>`;

import '@neovici/cosmoz-spinner';
import { css } from '@pionjs/pion';
import { t } from 'i18next';
import { html, nothing } from 'lit-html';
import { until } from 'lit-html/directives/until.js';

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

const renderSpinner = (loading?: boolean, data$?: PromiseLike<unknown>) => {
	if (loading) return html`<cosmoz-spinner></cosmoz-spinner>`;
	if (data$) {
		return until(
			data$.then(
				() => nothing,
				() => nothing,
			),
			html`<cosmoz-spinner></cosmoz-spinner>`,
		);
	}
	return nothing;
};

export const renderLoadMore = ({
	loading,
	data$,
	onMore,
	onAll,
}: {
	/** @deprecated Use data$ instead */
	loading?: boolean;
	data$?: PromiseLike<unknown>;
	onMore?: () => void;
	onAll?: () => void;
}) => html`
	<span slot="extraContent" class="more-container">
		${renderSpinner(loading, data$)}
		<button class="more" ?hidden="${!onMore}" @click="${onMore}">
			${t('Load more')}
		</button>
		<button class="more" ?hidden="${!onAll}" @click="${onAll}">
			${t('Load all')}
		</button>
	</span>
`;

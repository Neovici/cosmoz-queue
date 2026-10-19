import '@neovici/cosmoz-button';
import '@neovici/cosmoz-spinner';
import { t } from 'i18next';
import { html, nothing } from 'lit-html';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';

export const renderLoadMore = ({
	loading,
	data$,
	hasItems,
	onMore,
}: {
	loading?: boolean;
	data$?: PromiseLike<unknown>;
	hasItems?: boolean;
	onMore?: () => void;
}) =>
	html`<cosmoz-button
		variant="link"
		class="more"
		slot="extraContent"
		style="align-self: center; margin: calc(var(--cz-spacing) * 2);"
		?hidden="${!onMore}"
		@click="${onMore}"
	>
		${when(loading, () => html`<cosmoz-spinner></cosmoz-spinner>`)}
		${when(hasItems && data$, (data$) =>
			until(
				data$.then(
					() => nothing,
					() => nothing,
				),
				html`<cosmoz-spinner></cosmoz-spinner>`,
			),
		)}
		<span>${t('Load more')}</span>
	</cosmoz-button>`;

/** @deprecated Button presentation is provided by cosmoz-button. */
export const style = '';

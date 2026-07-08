import '@neovici/cosmoz-resizable';
import { slideInLeft, slideInRight } from '@neovici/cosmoz-slider';
import { renderTabs, RenderTabs } from '@neovici/cosmoz-tabs/next/index.js';
import { lazyUntil } from '@neovici/cosmoz-utils/directives/lazy-until';
import { t } from 'i18next';
import { html, nothing, TemplateResult } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { when } from 'lit-html/directives/when.js';
import { arrow } from './icon';
import renderStyles from './style';
import type { Pagination } from './types';
import type { Tab } from './use-tabs';

const _emptySlide = {
	id: 'empty',
	content: nothing,
	animation: slideInRight,
};
const emptySlide = () => _emptySlide;

export const renderNav = ({
	next,
	prev,
}: {
	next?: () => void;
	prev?: () => void;
}) =>
	html` <button
			class="button-nav prev"
			title="${t('Previous item')}"
			?disabled=${!prev}
			slot="extra"
			@click=${prev}
		>
			${arrow}
		</button>
		<button
			title="${t('Next item')}"
			class="button-nav next"
			?disabled=${!next}
			slot="extra"
			@click=${next}
		>
			${arrow}
		</button>`;

export const renderPagination = (pagination?: Pagination) => {
	if (!pagination) return nothing;
	const { pageNumber = -1, onPage } = pagination;
	const totalPages =
		pagination.totalPages ??
		Math.ceil((pagination.totalAvailable ?? 0) / (pagination.pageSize ?? 0));

	return html` <div class="tabn-pagination">
		<button
			title="${t('Previous page')}"
			class="button-page page-prev"
			?disabled=${!(pageNumber > 1)}
			@click=${(e: MouseEvent) => onPage!(e.ctrlKey ? 1 : pageNumber - 1)}
		>
			${arrow}
		</button>
		<button
			title="${t('Next page')}"
			class="button-page page-next"
			?disabled=${!(pageNumber < totalPages!)}
			@click=${(e: MouseEvent) =>
				onPage!(e.ctrlKey ? totalPages! : pageNumber + 1)}
		>
			${arrow}
		</button>
	</div>`;
};

export const renderStats = <I>({
	pagination,
	index,
	items,
	totalAvailable,
	nav,
	activeTab,
}: {
	pagination?: Pagination;
	totalAvailable?: number;
	index?: number;
	items: I[];
	nav: { items?: I[]; index: number };
	activeTab?: string;
}) => {
	if (items.length < 1) {
		return nothing;
	}
	return html`<div class="tabn-stats">
		${(() => {
			if (pagination) {
				const { pageNumber, pageSize } = pagination;
				const size = pageSize ?? items.length;
				const start = ((pageNumber ?? 1) - 1) * size + index! + 1;
				const end =
					items.length < size
						? pagination.totalAvailable
						: (pageNumber ?? 1) * size;
				return [start, end].join('-');
			}
			const qidx = nav.index;
			const qlen = nav.items?.length;
			return [
				qlen !== items.length && ['queue', 'split'].includes(activeTab || '')
					? [qidx < 0 ? '?' : qidx + 1, qlen].join('/')
					: [index! + 1, items.length].join('-'),
			];
		})()}
		${[t('of'), totalAvailable ?? t('many')].join(' ')}
	</div>`;
};

interface RenderView<I, D> {
	animationEnd$: Promise<unknown>;
	details?: (i: I) => PromiseLike<D>;
	item: I;
	next?: () => void;
	prev?: () => void;
	renderItem: (opts: {
		item: I | D;
		nav: TemplateResult;
		next?: () => void;
		prev?: () => void;
		animationEnd$?: Promise<unknown>;
	}) => TemplateResult;
	renderLoader: (opts: { item: I; nav: TemplateResult }) => TemplateResult;
}
export const renderView = <I, D>({
	animationEnd$,
	details,
	item,
	next,
	prev,
	renderItem,
	renderLoader,
}: RenderView<I, D>) => {
	const nav = renderNav({ next, prev });

	if (!details) {
		return renderItem({ item, nav, next, prev, animationEnd$ });
	}
	const detail$ = details(item);
	return guard([detail$, animationEnd$, next], () =>
		lazyUntil(
			Promise.all([detail$, animationEnd$]).then(([item]) =>
				renderItem({ item, nav, next, prev }),
			),
			renderLoader({ item, nav }),
		),
	);
};

interface RenderSlide<I, D> extends Omit<RenderView<I, D>, 'animationEnd$'> {
	id: (i: I) => unknown;
	forward?: boolean;
}
export const renderSlide = <I, D>({
	id,
	forward,
	item,
	...thru
}: RenderSlide<I, D>) =>
	item
		? {
				id: id(item),
				render: (rnd: { animationEnd$: Promise<unknown> }) =>
					renderView({
						...rnd,
						item,
						...thru,
					}),
				animation: forward ? slideInRight : slideInLeft,
			}
		: emptySlide();

export interface RenderQueue<I, D> extends Pick<
	RenderView<I, D>,
	'renderItem' | 'renderLoader' | 'details'
> {
	heading?: string;
	afterHeading?: unknown;
	index?: number;
	items: I[];
	totalAvailable?: number;
	list: TemplateResult;
	pagination?: Pagination;
	persistKey?: string;
	tabnav: RenderTabs<Tab>;
	nav: Omit<RenderSlide<I, D>, 'renderItem' | 'renderLoader' | 'details'> &
		Pick<RenderView<I, D>, 'details'> & { index: number };
}

export const renderQueue = <I, D>({
	heading,
	afterHeading,
	index,
	tabnav,
	items,
	totalAvailable,
	nav,
	list,
	renderLoader,
	renderItem,
	details = nav?.details,
	pagination: _pagination,
	persistKey,
}: RenderQueue<I, D>) => {
	const activeTab = tabnav.active?.name;
	const pagination = _pagination
		? { ..._pagination, totalAvailable }
		: undefined;
	return html`
		<style>
			${renderStyles({ index })}
		</style>

		<cosmoz-tabs-next class="tabn">
			<div class="tabn-heading">${heading}${afterHeading}</div>
			${renderTabs({ ...tabnav, className: 'tabn-tab' })}
			${renderStats({
				pagination,
				totalAvailable,
				index,
				items,
				nav,
				activeTab,
			})}
			${renderPagination(pagination)}
		</cosmoz-tabs-next>

		<cosmoz-resizable-view
			data-active=${activeTab}
			direction="horizontal"
			persist=${persistKey}
		>
			${list}
			<cosmoz-slider
				id="queue"
				slot="next"
				.slide=${when(
					activeTab !== 'overview',
					() => renderSlide({ ...nav, renderLoader, renderItem, details }),
					emptySlide,
				)}
			></cosmoz-slider>
		</cosmoz-resizable-view>
	`;
};

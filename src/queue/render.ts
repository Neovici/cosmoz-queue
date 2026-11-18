import '@neovici/cosmoz-button';
import '@neovici/cosmoz-resizable';
import { slideInLeft, slideInRight } from '@neovici/cosmoz-slider';
import { renderTabs, RenderTabs } from '@neovici/cosmoz-tabs/next/index.js';
import { lazyUntil } from '@neovici/cosmoz-utils/directives/lazy-until';
import { t } from 'i18next';
import { html, nothing, TemplateResult } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';
import { arrow } from './icon';
import { queueStyle } from './style';
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
	html` <cosmoz-button
			variant="tertiary"
			icon-only
			class="button-nav prev"
			title="${t('Previous item')}"
			?disabled=${!prev}
			slot="extra"
			@click=${prev}
		>
			${arrow}
		</cosmoz-button>
		<cosmoz-button
			variant="tertiary"
			icon-only
			title="${t('Next item')}"
			class="button-nav next"
			?disabled=${!next}
			slot="extra"
			@click=${next}
		>
			${arrow}
		</cosmoz-button>`;

export const renderPagination = (pagination?: Pagination) => {
	if (!pagination) return nothing;
	const { pageNumber = -1, onPage } = pagination;
	const totalPages =
		pagination.totalPages ??
		Math.ceil((pagination.totalAvailable ?? 0) / (pagination.pageSize ?? 0));

	return html` <div class="tabn-pagination" slot="stats">
		<cosmoz-button
			title="${t('Previous page')}"
			class="button-page page-prev"
			size="sm"
			variant="tertiary"
			icon-only
			?disabled=${!(pageNumber > 1)}
			@click=${(e: MouseEvent) => onPage!(e.ctrlKey ? 1 : pageNumber - 1)}
		>
			${arrow}
		</cosmoz-button>
		<cosmoz-button
			title="${t('Next page')}"
			variant="tertiary"
			icon-only
			class="button-page page-next"
			size="sm"
			?disabled=${!(pageNumber < totalPages!)}
			@click=${(e: MouseEvent) =>
				onPage!(e.ctrlKey ? totalPages! : pageNumber + 1)}
		>
			${arrow}
		</cosmoz-button>
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
	return html`<div class="tabn-stats" slot="stats">
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
const settled = new WeakMap<
	PromiseLike<unknown>,
	{ value: unknown } | undefined
>();
const track = <D>(promise: PromiseLike<D>) => {
	if (!settled.has(promise)) {
		settled.set(promise, undefined);
		promise.then(
			(value) => settled.set(promise, { value }),
			() => undefined,
		);
	}
	return settled.get(promise) as { value: D } | undefined;
};

const shown = new WeakSet<PromiseLike<unknown>>();
const afterPaint = () =>
	new Promise<void>((resolve) =>
		requestAnimationFrame(() => setTimeout(resolve)),
	);

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
	const detail$ = details(item),
		done = track(detail$);
	if (done && shown.has(detail$)) {
		return guard([detail$, next], () =>
			renderItem({ item: done.value, nav, next, prev }),
		);
	}
	// An item shown for the first time waits for a paint, so the click that
	// opened it is answered before the detail is built. The loader appears only
	// if the detail is still loading after that paint.
	return guard([detail$, animationEnd$, next], () => {
		const painted = afterPaint();
		return lazyUntil(
			Promise.all([detail$, painted]).then(([item]) => {
				shown.add(detail$);
				return renderItem({ item, nav, next, prev });
			}),
			painted.then(() =>
				settled.get(detail$) ? nothing : renderLoader({ item, nav }),
			),
			nothing,
		);
	});
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
				animation: (inEl: HTMLElement, outEl: HTMLElement) =>
					outEl.childElementCount === 0
						? undefined
						: (forward ? slideInRight : slideInLeft)(inEl, outEl),
			}
		: emptySlide();

export interface RenderQueue<I, D> extends Pick<
	RenderView<I, D>,
	'renderItem' | 'renderLoader' | 'details'
> {
	/** Render the header from its parts. Defaults to the tab row. */
	header?: (parts: {
		/** `prefetch` loads the selected item's details; bind it to the layout tabs. */
		tabnav: RenderTabs<Tab> & { prefetch?: () => void };
		heading?: string;
		afterHeading?: unknown;
		totalAvailable?: number;
		/** Currently selected list item. */
		item?: I;
		/** Hash parameter controlling the layout. */
		tabHashParam?: string;
	}) => TemplateResult;
	heading?: string;
	tabHashParam?: string;
	afterHeading?: unknown;
	index?: number;
	items: I[];
	totalAvailable?: number;
	list: TemplateResult;
	pagination?: Pagination;
	persistKey?: string;
	splitAttrs?: { initialSize?: string; minSize?: string };
	tabnav: RenderTabs<Tab>;
	nav: Omit<RenderSlide<I, D>, 'renderItem' | 'renderLoader' | 'details'> &
		Pick<RenderView<I, D>, 'details'> & { index: number };
}

export const renderQueue = <I, D>({
	header,
	heading,
	afterHeading,
	index,
	tabnav,
	items,
	totalAvailable,
	nav,
	tabHashParam,
	list,
	renderLoader,
	renderItem,
	details = nav?.details,
	pagination: _pagination,
	persistKey,
	splitAttrs,
}: RenderQueue<I, D>) => {
	const activeTab = tabnav.active?.name;
	const pagination = _pagination
		? { ..._pagination, totalAvailable }
		: undefined;
	const prefetch =
		activeTab === 'overview' && nav?.item && details
			? () => details(nav.item).then(undefined, () => undefined)
			: undefined;
	const tabn = html`
		<cosmoz-tabs-next class="tabn" @pointerenter=${prefetch}>
			<div class="tabn-heading" slot="tabs">${heading}${afterHeading}</div>
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
	`;
	return html`
		<style>
			${queueStyle}
		</style>

		${when(
			header,
			(header) =>
				header({
					tabnav: { ...tabnav, prefetch },
					heading,
					afterHeading,
					totalAvailable,
					item: nav?.item,
					tabHashParam,
				}),
			() => tabn,
		)}

		<cosmoz-resizable-view
			data-active=${activeTab}
			direction="horizontal"
			persist=${ifDefined(persistKey)}
			initial-size=${splitAttrs?.initialSize ?? '50%'}
			min-size=${splitAttrs?.minSize ?? '100'}
			handle-label=${t('Drag to resize')}
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

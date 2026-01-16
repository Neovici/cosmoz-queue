import { html, nothing, TemplateResult } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { arrowIcon } from './icons';
import type {
	Pagination,
	RenderQueueProps,
	RenderViewProps,
} from './types';
import { styles } from './styles.css.js';

const t = (key: string) => key;

const slideInRight = { name: 'slide-in-right' };
const slideInLeft = { name: 'slide-in-left' };

const lazyUntil = <T>(promise: Promise<T>, fallback: unknown) => promise;

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
	html`<button
			class="button-nav prev"
			title="${t('Previous item')}"
			?disabled=${!prev}
			slot="extra"
			@click=${prev}
		>
			${arrowIcon}
		</button>
		<button
			title="${t('Next item')}"
			class="button-nav next"
			?disabled=${!next}
			slot="extra"
			@click=${next}
		>
			${arrowIcon}
		</button>`;

export const renderPagination = (pagination?: Pagination) => {
	if (!pagination) return nothing;
	const { pageNumber = -1, onPage } = pagination;
	const totalPages =
		pagination.totalPages ??
		Math.ceil((pagination.totalAvailable ?? 0) / (pagination.pageSize ?? 0));

	return html`<div class="tabn-pagination">
		<button
			title="${t('Previous page')}"
			class="button-page page-prev"
			?disabled=${!(pageNumber > 1)}
			@click=${(e: MouseEvent) => onPage!(e.ctrlKey ? 1 : pageNumber - 1)}
		>
			${arrowIcon}
		</button>
		<button
			title="${t('Next page')}"
			class="button-page page-next"
			?disabled=${!(pageNumber < totalPages!)}
			@click=${(e: MouseEvent) =>
				onPage!(e.ctrlKey ? totalPages! : pageNumber + 1)}
		>
			${arrowIcon}
		</button>
	</div>`;
};

export const renderStats = <I>({
	pagination,
	index,
	items,
	totalAvailable,
	nav,
}: {
	pagination?: Pagination;
	totalAvailable?: number;
	index?: number;
	items: I[];
	nav: { items?: I[]; index: number };
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
				qlen !== items.length
					? [qidx < 0 ? '?' : qidx + 1, qlen].join('/')
					: [index! + 1, items.length].join('-'),
			];
		})()}
		${[t('of'), totalAvailable ?? t('many')].join(' ')}
	</div>`;
};

export const renderView = <I, D>({
	animationEnd$,
	details,
	item,
	next,
	prev,
	renderItem,
	renderLoader,
}: RenderViewProps<I, D>) => {
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

interface RenderSlideProps<I, D>
	extends Omit<RenderViewProps<I, D>, 'animationEnd$'> {
	id: (i: I) => unknown;
	forward?: boolean;
}

interface SlideResult {
	id: unknown;
	render?: (rnd: { animationEnd$: Promise<unknown> }) => unknown;
	content?: unknown;
	animation: { name: string };
}

export const renderSlide = <I, D>({
	id,
	forward,
	item,
	...thru
}: RenderSlideProps<I, D>): SlideResult =>
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

export const renderQueue = <I, D>({
	heading,
	afterHeading,
	index,
	mobile,
	tabnav,
	items,
	totalAvailable,
	nav,
	list,
	renderLoader,
	renderItem,
	details = nav?.details,
	pagination: _pagination,
}: RenderQueueProps<I, D>) => {
	const activeTab = tabnav.active?.name ?? 'overview';
	const pagination = _pagination
		? { ..._pagination, totalAvailable }
		: undefined;

	
	const renderTabButtons = () =>
		tabnav.tabs.map(
			(tab) => html`
				<button
					class="tabn-tab"
					?active=${tabnav.active?.name === tab.name}
					?disabled=${tab.disabled}
					@click=${() => !tab.disabled && tabnav.activate(tab.name)}
				>
					${tab.content ?? tab.title}
				</button>
			`,
		);

	return html`
		<style>
			${styles}
		</style>

		<div class="tabn">
			<div class="tabn-heading">${heading}${afterHeading}</div>
			${renderTabButtons()}
			${renderStats({
				pagination,
				totalAvailable,
				index,
				items,
				nav,
			})}
			${renderPagination(pagination)}
		</div>

		<div class="split" data-active=${ifDefined(activeTab)}>
			${list}
			<div id="queue">
				${nav.item
					? renderSlide({ ...nav, renderLoader, renderItem, details })?.render?.({
							animationEnd$: Promise.resolve(),
						})
					: nothing}
			</div>
		</div>
	`;
};

export default renderQueue;

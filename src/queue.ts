import { component, html } from '@pionjs/pion';
import { renderQueue } from './render';
import { useQueue, UseQueue } from './hooks/use-queue';
import { styles } from './styles.css';
import type { Pagination, RenderQueueProps } from './types';
import type { TemplateResult } from 'lit-html';

const updateWith =
	<T>(setter: (value: T) => void) =>
	(e: CustomEvent<T>) =>
		setter(e.detail);

type QueueReturnProps<I> = ReturnType<typeof useQueue<I>>;

interface ViewProps<I> extends Omit<QueueReturnProps<I>, 'nav'> {
	nav: TemplateResult;
	item: I;
}

export interface QueueComponentProps<I, D = I>
	extends Pick<UseQueue<I>, 'id' | 'api' | 'fallback' | 'split'>,
		Pick<RenderQueueProps<I, D>, 'details' | 'afterHeading'> {
	list: (
		thru: Record<string, unknown>,
		props: QueueReturnProps<I> & { onRef: (el?: Element) => void },
	) => TemplateResult;
	view: (thru: Record<string, unknown>, props: ViewProps<I>) => TemplateResult;
	loader: (
		thru: Record<string, unknown>,
		props: ViewProps<I>,
	) => TemplateResult;
	heading: string;
	settingsId?: string;
	idHashParam?: string;
	tabHashParam?: string;
	pagination?: Pagination;
}

export const queue = <I, D = I>(props: QueueComponentProps<I, D>) => {
	const {
		heading,
		afterHeading,
		settingsId,
		idHashParam = 'qid',
		tabHashParam = 'qtab',
		id,
		api,
		details,
		list,
		view,
		loader,
		pagination,
		fallback,
		split,
	} = props;

	const queueProps = useQueue({
		id,
		api,
		idHashParam,
		tabHashParam,
		fallback,
		split,
	});

	const {
		index,
		mobile,
		hideActions,
		items,
		setItems,
		setSelected,
		totalAvailable,
		setTotalAvailable,
		onItemClick,
		nav,
		tabnav,
	} = queueProps;

	let listRef: { current: Element | null } = { current: null };

	return renderQueue({
		details,
		heading,
		afterHeading,
		mobile,
		index,
		items,
		tabnav,
		totalAvailable,
		nav,
		pagination,
		list: list(
			{
				id: 'list',
				'.settingsId': settingsId,
				'@visible-items-changed': updateWith(setItems),
				'@selected-items-changed': updateWith(setSelected),
				'@total-available-changed': updateWith(setTotalAvailable),
				'@omnitable-item-click': onItemClick,
			},
			{
				...queueProps,
				onRef: (el) => (listRef.current = el ?? null),
			},
		),
		renderItem: ({ item, nav }) =>
			view(
				{
					class: 'view-core',
					'.hideActions': hideActions,
					'.item': item,
				},
				{ ...queueProps, nav, item: item as I },
			),
		renderLoader: ({ item, nav }) =>
			loader(
				{
					class: 'view-core',
					'.item': item,
				},
				{ ...queueProps, nav, item },
			),
	});
};

const QueueComponent = (host: Element) => {
	return html`<slot></slot>`;
};

export const CosmozQueue = component(QueueComponent, {
	observedAttributes: [],
	useShadowDOM: true,
	styleSheets: [styles],
});

customElements.define('cosmoz-queue', CosmozQueue);

export { CosmozQueue as Queue };
export default queue;

import type { TemplateResult } from 'lit-html';
import { updateWith } from '../util/polymer-property-changed-event.js';
import { renderQueue, RenderQueue } from './render';
import { computeSplitAttrs, SplitConfig } from './split';
import { Pagination } from './types';
import useAsyncAction, { Ot } from './use-async-action';
import useQueue, { UseQueue } from './use-queue';

type QueueProps<I> = ReturnType<typeof useQueue<I>>;
type ViewProps<I> = Omit<QueueProps<I>, 'nav'> & {
	nav: TemplateResult;
	item: I;
};

interface Props<I, D>
	extends
		Pick<UseQueue<I>, 'id' | 'api' | 'fallback'>,
		Pick<RenderQueue<I, D>, 'details' | 'afterHeading' | 'header'> {
	list: (
		thru: Record<string, any>,
		props: QueueProps<I> & { onRef: (el?: Element) => void },
	) => TemplateResult;
	view: (thru: Record<string, any>, props: ViewProps<I>) => TemplateResult;
	loader: (thru: Record<string, any>, props: ViewProps<I>) => TemplateResult;
	heading: string;
	settingsId?: string;
	idHashParam?: string;
	tabHashParam?: string;
	pagination?: Pagination;
	/** @deprecated Use `initial-size` / `min-size` attributes on `<cosmoz-resizable-view>` instead. */
	split?: SplitConfig;
}

interface Image extends HTMLElement {
	syncImageState: () => void;
}

export const queue = <I, D = I>(props: Props<I, D>) => {
	const {
		heading,
		afterHeading,
		header,
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

	// Shared by the resizable split persist and the remembered-tab persist;
	// queues without a settingsId persist neither.
	const persistKey = settingsId ? `${settingsId}-split` : undefined;

	const queueProps = useQueue({
		id,
		api,
		idHashParam,
		tabHashParam,
		fallback,
		persistKey,
	});

	const {
		index,
		hideActions,
		items,
		setItems,
		setSelected,
		totalAvailable,
		setTotalAvailable,
		onItemClick,
		rowPartFn,
		nav,
		tabnav,
	} = queueProps;

	const { listRef, onAsyncSimpleAction } = useAsyncAction(nav);

	const renderProps = {
		...queueProps,
		onAsyncSimpleAction,
	};

	const splitAttrs = computeSplitAttrs(split);

	return renderQueue({
		details,
		heading,
		afterHeading,
		header,
		index,
		items,
		tabnav,
		totalAvailable,
		nav,
		pagination,
		persistKey,
		splitAttrs,
		list: list(
			{
				id: 'list',
				slot: 'previous',
				'.rowPartFn': rowPartFn,
				'.exposedParts': 'itemRow, itemRow-active',
				'.settingsId': settingsId,
				'@visible-items-changed': updateWith(setItems),
				'@selected-items-changed': updateWith(setSelected),
				'@total-available-changed': updateWith(setTotalAvailable),
				'@async-simple-action': onAsyncSimpleAction,
				'@omnitable-item-click': onItemClick,
			},
			{
				...renderProps,
				onRef: (el) => (listRef.current = el as Ot),
			},
		),
		renderItem: ({ item, nav }) =>
			view(
				{
					class: 'view-core',
					exportparts: 'header, header-bg',
					'.hideActions': hideActions,
					'.item': item,
					'@async-simple-action': onAsyncSimpleAction,
					'@rendered': (event: Event) =>
						(event.target as Image).syncImageState(),
				},
				{ ...renderProps, nav, item: item as I },
			),
		renderLoader: ({ item, nav }) =>
			loader(
				{
					class: 'view-core',
					'.item': item,
				},
				{ ...renderProps, nav, item },
			),
	});
};

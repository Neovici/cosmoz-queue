import type { TemplateResult } from 'lit-html';
import { updateWith } from '../util/polymer-property-changed-event.js';
import { renderQueue, RenderQueue } from './render';
import { Pagination } from './types';
import useAsyncAction, { Ot } from './use-async-action';
import useQueue, { UseQueue } from './use-queue';

type QueueProps<I> = ReturnType<typeof useQueue<I>>;
type ViewProps<I> = Omit<QueueProps<I>, 'nav'> & {
	nav: TemplateResult;
	item: I;
};

/**
 * @deprecated Use CSS custom properties `--cz-queue-list-basis` and
 * `--cz-queue-list-min-width` on the host element instead.
 *
 * `expandToMin` and `snapOffset` have no equivalent in the CSS flex model
 * and are silently ignored.
 */
export interface SplitConfig {
	sizes?: [number, number];
	minSize?: [number] | number;
	expandToMin?: boolean;
	snapOffset?: number;
}

interface Props<I, D>
	extends
		Pick<UseQueue<I>, 'id' | 'api' | 'fallback'>,
		Pick<RenderQueue<I, D>, 'details' | 'afterHeading'> {
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
	/** @deprecated Use CSS custom properties `--cz-queue-list-basis` / `--cz-queue-list-min-width` instead. */
	split?: SplitConfig;
}

interface Image extends HTMLElement {
	syncImageState: () => void;
}

export const queue = <I, D = I>(props: Props<I, D>) => {
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
		nav,
		tabnav,
	} = queueProps;

	const { listRef, onAsyncSimpleAction } = useAsyncAction(nav);
	const renderProps = {
		...queueProps,
		onAsyncSimpleAction,
	};

	const splitStyle = split
		? [
				split.sizes?.[0] != null && `--cz-queue-list-basis: ${split.sizes[0]}%`,
				split.minSize != null &&
					`--cz-queue-list-min-width: ${
						Array.isArray(split.minSize) ? split.minSize[0] : split.minSize
					}px`,
			]
				.filter(Boolean)
				.join('; ')
		: undefined;

	return renderQueue({
		details,
		heading,
		afterHeading,
		index,
		items,
		tabnav,
		totalAvailable,
		nav,
		pagination,
		persistKey: settingsId ? `${settingsId}-split` : undefined,
		splitStyle,
		list: list(
			{
				id: 'list',
				slot: 'previous',
				'.exposedParts': `itemRow, itemRow-${index}`,
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

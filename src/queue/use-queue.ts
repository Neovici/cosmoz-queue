import { array } from '@neovici/cosmoz-utils/array';
import { memoize } from '@neovici/cosmoz-utils/memoize';
import { useViewInfo } from '@neovici/cosmoz-viewinfo';
import { useCallback, useMemo } from '@pionjs/pion';
import { json } from '../util/fetch/fetch';

import useDataNav, { Opts as UseDataNav } from './use-data-nav';
import useKeyNav from './use-key-nav';
import { useListState } from './use-list';
import useSplit, { SplitOpts } from './use-split';
import useTabs, { Options as UseTabsOptions } from './use-tabs';
import useUpdates from './use-updates';

import { getItems, normalizeHeaders } from './util';

type ActiveTab = ReturnType<typeof useTabs>['activeTab'];

const _id = <T>(item: T): T extends { id: infer I } ? I : undefined =>
	(item as { id: any })['id'];

const useQNav = <I>({
	id,
	api,
	items,
	...thru
}: {
	api?: (id: string, item: I) => string;
	items: I[];
} & UseDataNav<I>) => {
	const details = useMemo(
			() => api && memoize((item: I) => json(api(id(item), item))),
			[id, api],
		),
		pass = useDataNav(items, {
			...thru,
			id,
		});
	return { ...pass, id, details };
};

interface Opts<I>
	extends
		ReturnType<typeof useListState<I>>,
		Pick<UseTabsOptions<I>, 'fallback'> {
	tabHashParam?: string;
	idHashParam?: string;
	onActivate?: (name: string) => void;
	api?: (id: string, item: I) => string;
	id?: (i: I) => string;
	split?: SplitOpts;
}

const useQueue = <I>({
	id = _id as (i: I) => string,
	api,
	tabHashParam,
	idHashParam,
	fallback,
	onActivate,
	split,
	...thru
}: Opts<I>) => {
	const { items: _items, selected } = thru,
		{ mobile } = useViewInfo(),
		items = useMemo(() => normalizeHeaders(_items), [_items]),
		queueItems = useMemo(() => getItems(items, selected), [items, selected]),
		{ tabnav, activeTab } = useTabs({
			items: queueItems,
			hashParam: tabHashParam,
			fallback,
			onActivate,
			mobile,
		}),
		nav = useQNav({
			id,
			api,
			items: queueItems,
			hashParam: idHashParam,
			maintainSelection: ['queue', 'split'].includes(activeTab),
		}),
		{ item, setItem } = nav,
		ensue = useCallback(
			(itemId: string) => {
				if (id(item) !== itemId) {
					return;
				}
				const idx = items.indexOf(item);
				setItem(items[Math.min(idx + 1, items.length - 1)]);
			},
			[item, id, items],
		);
	useKeyNav({ activeTab, ...nav });
	useSplit({ activeTab, ...split });
	useUpdates({ ensue, ...nav });

	return {
		...thru,
		tabnav,
		activeTab,
		mobile,
		hideActions: selected?.length > 0 && activeTab === 'split',

		index: useMemo(() => items.indexOf(item), [item, items]),
		onItemClick: useCallback(
			(e: Event) => {
				const { index, activate: mustActivate } = (
					e as CustomEvent<{
						index: number;
						activate?: ActiveTab | ActiveTab[];
					}>
				).detail;
				const mini = e
					.composedPath()
					.find((el) => el instanceof Element && el.matches?.('[mini]'));
				const activate =
					mustActivate ?? (mini ? ['split', 'queue'] : undefined);
				setItem(items[index]);
				if (activate) {
					const next = array(activate).find((name) =>
						tabnav.tabs.find((tab) => tab.name === name && !tab.disabled),
					);
					if (next) tabnav.activate(next);
				}
				e.preventDefault();
			},
			[activeTab, items],
		),

		ensue,

		nav,
	};
};

export type UseQueue<I> = Omit<
	Parameters<typeof useQueue<I>>[0],
	keyof ReturnType<typeof useListState<I>>
>;

export default <I>(thru: UseQueue<I>) =>
	useQueue<I>({ ...thru, ...useListState<I>() });

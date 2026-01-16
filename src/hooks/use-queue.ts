import { useMemo, useCallback } from '@pionjs/pion';
import { memoize } from '@neovici/cosmoz-utils/memoize';
import { array } from '@neovici/cosmoz-utils/array';

import { useQueueTabs, UseTabsOptions } from './use-tabs';
import { useSplit } from './use-split';
import { useDataNav } from './use-data-nav';
import { useListState } from './use-list-state';

import type {
	QueueProps,
	ListState,
	SplitOptions,
} from '../types';

const defaultId = <T>(item: T): string =>
	(item as { id: string })['id'] ?? '';

// Simple fetch wrapper for JSON
const fetchJson = async (url: string) => {
	const response = await fetch(url);
	return response.json();
};

interface UseQueueInternalOptions<I>
	extends ListState<I>,
		Pick<UseTabsOptions<I>, 'fallback'> {
	tabHashParam?: string;
	idHashParam?: string;
	onActivate?: (name: string) => void;
	api?: (id: string, item: I) => string;
	id?: (i: I) => string;
	split?: SplitOptions;
	mobile?: boolean;
}

const useQueueInternal = <I>({
	id = defaultId,
	api,
	tabHashParam,
	idHashParam,
	fallback,
	onActivate,
	split,
	mobile = false,
	...thru
}: UseQueueInternalOptions<I>): QueueProps<I> => {
	const { items: _items, selected } = thru;

	const items = useMemo(() => _items, [_items]);

	const queueItems = useMemo(() => {
		if (selected && selected.length > 0) {
			return selected;
		}
		return items;
	}, [items, selected]);

	const { tabnav, activeTab } = useQueueTabs({
		items: queueItems,
		hashParam: tabHashParam,
		fallback,
		onActivate,
		mobile,
	});

	const details = useMemo(
		() => api && memoize((item: I) => fetchJson(api(id(item), item))),
		[id, api],
	);

	const nav = useDataNav({
		id,
		items: queueItems,
		hashParam: idHashParam,
		maintainSelection: ['queue', 'split'].includes(activeTab),
	});

	const { item, setItem } = nav;

	const ensue = useCallback(
		(itemId: string) => {
			if (id(item) !== itemId) {
				return;
			}
			const idx = items.indexOf(item);
			setItem(items[Math.min(idx + 1, items.length - 1)]);
		},
		[item, id, items],
	);

	useSplit({ activeTab, ...split });

	const onItemClick = useCallback(
		(e: Event) => {
			const { index, activate: mustActivate } = (
				e as CustomEvent<{
					index: number;
					activate?: string | string[];
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
		[activeTab, items, tabnav],
	);

	return {
		...thru,
		tabnav,
		activeTab,
		mobile,
		hideActions: selected?.length > 0 && activeTab === 'split',
		index: useMemo(() => items.indexOf(item), [item, items]),
		onItemClick,
		ensue,
		nav: { ...nav, details },
	};
};

export type UseQueue<I> = Omit<
	UseQueueInternalOptions<I>,
	keyof ListState<I>
>;

export const useQueue = <I>(opts: UseQueue<I>): QueueProps<I> =>
	useQueueInternal<I>({ ...opts, ...useListState<I>() });

export default useQueue;

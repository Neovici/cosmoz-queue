import { useState, useMemo, useCallback } from '@pionjs/pion';
import type { QueueNav } from '../types';

export interface UseDataNavOptions<I> {
	items: I[];
	id?: (i: I) => string;
	hashParam?: string;
	maintainSelection?: boolean;
}

const defaultId = <T>(item: T): string =>
	(item as { id: string })['id'] ?? '';

export const useDataNav = <I>({
	items,
	id = defaultId,
	hashParam,
	maintainSelection = false,
}: UseDataNavOptions<I>): QueueNav<I> => {
	const [item, setItem] = useState<I | undefined>(undefined);
	const [forward, setForward] = useState(true);

	const index = useMemo(
		() => (item ? items.indexOf(item) : -1),
		[item, items],
	);

	const next = useMemo(() => {
		if (index < 0 || index >= items.length - 1) return undefined;
		return () => {
			setForward(true);
			setItem(items[index + 1]);
		};
	}, [index, items]);

	const prev = useMemo(() => {
		if (index <= 0) return undefined;
		return () => {
			setForward(false);
			setItem(items[index - 1]);
		};
	}, [index, items]);

	// const setItemById = useCallback(
	// 	(itemId: string) => {
	// 		const found = items.find((i) => id(i) === itemId);
	// 		if (found) {
	// 			setItem(found);
	// 		}
	// 	},
	// 	[items, id],
	// );

	return {
		item: item as I,
		setItem,
		index,
		items,
		next,
		prev,
		forward,
		id,
	};
};

export default useDataNav;

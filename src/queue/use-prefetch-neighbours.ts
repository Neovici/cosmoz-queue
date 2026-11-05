import { useEffect } from '@pionjs/pion';

/**
 * Loads the previous and next items' details while idle, so that navigating
 * to them lands on content instead of the loader.
 */
export const usePrefetchNeighbours = <I>({
	items,
	item,
	details,
	enabled,
}: {
	items: I[];
	item?: I;
	details?: (item: I) => PromiseLike<unknown>;
	enabled: boolean;
}) =>
	useEffect(() => {
		if (!enabled || !item || !details) return;
		const idx = items.indexOf(item),
			idle = window.requestIdleCallback ?? ((cb) => setTimeout(cb, 200)),
			cancel = window.cancelIdleCallback ?? clearTimeout,
			handle = idle(() =>
				[items[idx + 1], items[idx - 1]].forEach(
					(n) => n && details(n).then(undefined, () => undefined),
				),
			);
		return () => cancel(handle);
	}, [item, enabled, items, details]);

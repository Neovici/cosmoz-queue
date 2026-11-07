const HOLD_MS = 1000,
	PREFETCH_MS = 30000;

type Details<I, D> = (item: I) => PromiseLike<D>;
interface Entry<I, D> {
	details: Details<I, D>;
	promise: PromiseLike<D>;
}

/**
 * Hands the details request the layout transition waits on, or a neighbour's
 * prefetched request, to the render that follows it, so a `details` that
 * doesn't cache isn't called twice for the same item. A request is handed only
 * to the `details` that made it, so a view that refreshes by passing a new
 * `details` still refetches. Every other call goes to the view's `details`.
 */
export const handoffDetails = <I, D>() => {
	let held: (Entry<I, D> & { item: I }) | undefined;
	const prefetched = new Map<I, Entry<I, D>>(),
		take = (details: Details<I, D>, item: I) => {
			const entry = prefetched.get(item);
			if (entry?.details !== details) return;
			prefetched.delete(item);
			return entry.promise;
		};
	return {
		hold: (details: Details<I, D>, item: I) => {
			const current = {
				item,
				details,
				promise: take(details, item) ?? details(item),
			};
			held = current;
			setTimeout(() => {
				if (held === current) held = undefined;
			}, HOLD_MS);
			return current.promise;
		},
		prefetch: (details: Details<I, D>, item: I) => {
			const hit = prefetched.get(item);
			if (hit?.details === details) return hit.promise;
			const promise = details(item),
				drop = () => {
					if (prefetched.get(item)?.promise === promise) {
						prefetched.delete(item);
					}
				};
			prefetched.set(item, { details, promise });
			setTimeout(drop, PREFETCH_MS);
			promise.then(undefined, drop);
			return promise;
		},
		// Re-renders of the open item reuse its request, so a `details` that
		// caches one item at a time isn't evicted by the neighbours' prefetch.
		wrap: (details: Details<I, D>) => {
			let last: { item: I; promise: PromiseLike<D> } | undefined;
			return (item: I): PromiseLike<D> => {
				if (last?.item === item) return last.promise;
				let promise;
				if (held?.item === item && held.details === details) {
					promise = held.promise;
					held = undefined;
				}
				promise ??= take(details, item) ?? details(item);
				const current = { item, promise };
				last = current;
				// A failed request is retried by the next render.
				promise.then(undefined, () => {
					if (last === current) last = undefined;
				});
				return promise;
			};
		},
	};
};

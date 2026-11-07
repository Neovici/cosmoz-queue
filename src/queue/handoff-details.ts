const HOLD_MS = 1000,
	PREFETCH_MS = 30000;

/**
 * Hands the details request the layout transition waits on, or a neighbour's
 * prefetched request, to the render that follows it, so a `details` that
 * doesn't cache isn't called twice for the same item. Every other call goes to
 * the view's `details` as before, so a view that refreshes by passing a new
 * `details` still refetches.
 */
export const handoffDetails = <I, D>() => {
	let held: { item: I; promise: PromiseLike<D> } | undefined;
	const prefetched = new Map<I, PromiseLike<D>>(),
		take = (item: I) => {
			const promise = prefetched.get(item);
			prefetched.delete(item);
			return promise;
		};
	return {
		hold: (details: (item: I) => PromiseLike<D>, item: I) => {
			const current = { item, promise: take(item) ?? details(item) };
			held = current;
			setTimeout(() => {
				if (held === current) held = undefined;
			}, HOLD_MS);
			return current.promise;
		},
		prefetch: (details: (item: I) => PromiseLike<D>, item: I) => {
			const hit = prefetched.get(item);
			if (hit) return hit;
			const promise = details(item),
				drop = () => {
					if (prefetched.get(item) === promise) prefetched.delete(item);
				};
			prefetched.set(item, promise);
			setTimeout(drop, PREFETCH_MS);
			promise.then(undefined, drop);
			return promise;
		},
		wrap:
			(details: (item: I) => PromiseLike<D>) =>
			(item: I): PromiseLike<D> => {
				if (held?.item === item) {
					const { promise } = held;
					held = undefined;
					return promise;
				}
				return take(item) ?? details(item);
			},
	};
};

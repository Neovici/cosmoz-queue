const HOLD_MS = 1000;

/**
 * Hands the details request the layout transition waits on to the render that
 * follows it, so a `details` that doesn't cache isn't called twice for the
 * opened item. Every other call goes to the view's `details` as before, so a
 * view that refreshes by passing a new `details` still refetches.
 */
export const handoffDetails = <I, D>() => {
	let held: { item: I; promise: PromiseLike<D> } | undefined;
	return {
		hold: (details: (item: I) => PromiseLike<D>, item: I) => {
			const current = { item, promise: details(item) };
			held = current;
			setTimeout(() => {
				if (held === current) held = undefined;
			}, HOLD_MS);
			return current.promise;
		},
		wrap:
			(details: (item: I) => PromiseLike<D>) =>
			(item: I): PromiseLike<D> => {
				if (held?.item !== item) return details(item);
				const { promise } = held;
				held = undefined;
				return promise;
			},
	};
};

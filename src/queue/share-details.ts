/**
 * Remembers the details of the last item asked for, so the layout transition
 * and the render that follows it share one request. A `details` that doesn't
 * cache would otherwise fetch the opened item twice. Asking for another item,
 * or a failed request, forgets it.
 */
export const shareDetails = <I, D>(details: (item: I) => PromiseLike<D>) => {
	let last: { item: I; promise: PromiseLike<D> } | undefined;
	return (item: I): PromiseLike<D> => {
		if (last?.item === item) return last.promise;
		const current = { item, promise: details(item) };
		last = current;
		current.promise.then(undefined, () => {
			if (last === current) last = undefined;
		});
		return current.promise;
	};
};

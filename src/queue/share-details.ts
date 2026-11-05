/**
 * Lets callers that ask for the same item while its details are loading share
 * one request. The render and the layout transition both ask for the opened
 * item, so a `details` that doesn't cache would otherwise fetch it twice. Once
 * the request settles, the next call fetches again.
 */
export const shareDetails = <I, D>(details: (item: I) => PromiseLike<D>) => {
	let pending: { item: I; promise: PromiseLike<D> } | undefined;
	return (item: I): PromiseLike<D> => {
		if (pending?.item === item) return pending.promise;
		const promise = details(item),
			current = { item, promise };
		pending = current;
		const clear = () => {
			if (pending === current) pending = undefined;
		};
		promise.then(clear, clear);
		return promise;
	};
};

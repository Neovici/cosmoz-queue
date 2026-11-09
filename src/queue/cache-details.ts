const CACHE_SIZE = 6,
	CACHE_TTL = 30000;

/**
 * Caches the details of the most recently requested items, so prefetching the
 * neighbours does not evict the open item. An entry expires when it has not
 * been requested for `CACHE_TTL` ms, so re-rendering the open item doesn't
 * refetch it and flash the loader.
 */
export const cacheDetails = <I, D>(fetch: (item: I) => Promise<D>) => {
	const cache = new Map<I, { promise: Promise<D>; at: number }>();
	return (item: I) => {
		const hit = cache.get(item),
			promise =
				hit && Date.now() - hit.at < CACHE_TTL ? hit.promise : fetch(item);
		cache.delete(item);
		cache.set(item, { promise, at: Date.now() });
		if (promise !== hit?.promise) {
			promise.catch(() => {
				if (cache.get(item)?.promise === promise) cache.delete(item);
			});
		}
		while (cache.size > CACHE_SIZE) cache.delete(cache.keys().next().value!);
		return promise;
	};
};

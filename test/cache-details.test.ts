import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cacheDetails } from '../src/queue/cache-details';

const items = Array.from({ length: 8 }, (_, id) => ({ id }));

describe('cacheDetails', () => {
	beforeEach(() => vi.useFakeTimers());
	afterEach(() => vi.useRealTimers());

	it('returns the cached promise for a recently requested item', () => {
		const fetch = vi.fn((item: { id: number }) => Promise.resolve(item.id));
		const details = cacheDetails(fetch);
		expect(details(items[0])).toBe(details(items[0]));
		expect(fetch).toHaveBeenCalledOnce();
	});

	it('keeps the open item and its neighbours apart', () => {
		const fetch = vi.fn((item: { id: number }) => Promise.resolve(item.id));
		const details = cacheDetails(fetch);
		const open = details(items[1]);
		details(items[0]);
		details(items[2]);
		expect(details(items[1])).toBe(open);
		expect(fetch).toHaveBeenCalledTimes(3);
	});

	it('refetches an item not requested for 30 seconds', () => {
		const fetch = vi.fn((item: { id: number }) => Promise.resolve(item.id));
		const details = cacheDetails(fetch);
		const first = details(items[0]);
		vi.advanceTimersByTime(29_000);
		expect(details(items[0])).toBe(first);
		vi.advanceTimersByTime(29_000);
		expect(details(items[0])).toBe(first);
		vi.advanceTimersByTime(30_000);
		expect(details(items[0])).not.toBe(first);
		expect(fetch).toHaveBeenCalledTimes(2);
	});

	it('evicts the least recently requested item beyond six entries', () => {
		const fetch = vi.fn((item: { id: number }) => Promise.resolve(item.id));
		const details = cacheDetails(fetch);
		items.slice(0, 6).forEach((item) => details(item));
		details(items[0]);
		details(items[6]);
		expect(fetch).toHaveBeenCalledTimes(7);
		details(items[0]);
		expect(fetch).toHaveBeenCalledTimes(7);
		details(items[1]);
		expect(fetch).toHaveBeenCalledTimes(8);
	});

	it('drops an entry whose request fails', async () => {
		const fetch = vi
			.fn<(item: { id: number }) => Promise<number>>()
			.mockRejectedValueOnce(new Error('offline'))
			.mockResolvedValue(1);
		const details = cacheDetails(fetch);
		await expect(details(items[0])).rejects.toThrow('offline');
		await expect(details(items[0])).resolves.toBe(1);
		expect(fetch).toHaveBeenCalledTimes(2);
	});
});

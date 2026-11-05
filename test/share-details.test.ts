import { describe, expect, it, vi } from 'vitest';
import { shareDetails } from '../src/queue/share-details';

const a = { id: 'a' },
	b = { id: 'b' };

describe('shareDetails', () => {
	it('shares one request between callers while it is loading', () => {
		const fetch = vi.fn((item: { id: string }) => Promise.resolve(item.id));
		const details = shareDetails(fetch);
		expect(details(a)).toBe(details(a));
		expect(fetch).toHaveBeenCalledOnce();
	});

	it('fetches again once the request has settled', async () => {
		const fetch = vi.fn((item: { id: string }) => Promise.resolve(item.id));
		const details = shareDetails(fetch);
		await details(a);
		details(a);
		expect(fetch).toHaveBeenCalledTimes(2);
	});

	it('fetches again after a failed request', async () => {
		const fetch = vi.fn(() => Promise.reject(new Error('nope')));
		const details = shareDetails(fetch);
		await details(a).then(undefined, () => undefined);
		await details(a).then(undefined, () => undefined);
		expect(fetch).toHaveBeenCalledTimes(2);
	});

	it('fetches another item at once', () => {
		const fetch = vi.fn((item: { id: string }) => Promise.resolve(item.id));
		const details = shareDetails(fetch);
		details(a);
		details(b);
		expect(fetch).toHaveBeenCalledTimes(2);
	});
});

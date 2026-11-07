import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { handoffDetails } from '../src/queue/handoff-details';

const a = { id: 'a' },
	b = { id: 'b' };
const fetcher = () => vi.fn((item: { id: string }) => Promise.resolve(item.id));

describe('handoffDetails', () => {
	beforeEach(() => vi.useFakeTimers());
	afterEach(() => vi.useRealTimers());

	it('hands the held request to the next render of that item', () => {
		const fetch = fetcher(),
			handoff = handoffDetails<{ id: string }, string>();
		const held = handoff.hold(fetch, a);
		expect(handoff.wrap(fetch)(a)).toBe(held);
		expect(fetch).toHaveBeenCalledOnce();
	});

	it('hands it over only once, so later renders fetch as before', () => {
		const fetch = fetcher(),
			handoff = handoffDetails<{ id: string }, string>(),
			details = handoff.wrap(fetch);
		handoff.hold(fetch, a);
		details(a);
		details(a);
		expect(fetch).toHaveBeenCalledTimes(2);
	});

	it('refetches through a new details function, as a refresh does', () => {
		const fetch = fetcher(),
			refreshed = fetcher(),
			handoff = handoffDetails<{ id: string }, string>();
		handoff.hold(fetch, a);
		handoff.wrap(fetch)(a);
		handoff.wrap(refreshed)(a);
		expect(refreshed).toHaveBeenCalledOnce();
	});

	it('does not hand over to another item', () => {
		const fetch = fetcher(),
			handoff = handoffDetails<{ id: string }, string>();
		handoff.hold(fetch, a);
		handoff.wrap(fetch)(b);
		expect(fetch).toHaveBeenCalledTimes(2);
	});

	it('drops a request no render picked up', () => {
		const fetch = fetcher(),
			handoff = handoffDetails<{ id: string }, string>();
		handoff.hold(fetch, a);
		vi.advanceTimersByTime(1000);
		handoff.wrap(fetch)(a);
		expect(fetch).toHaveBeenCalledTimes(2);
	});

	it('hands a prefetched request to the first render of that item only', () => {
		const fetch = fetcher(),
			handoff = handoffDetails<{ id: string }, string>(),
			details = handoff.wrap(fetch);
		const prefetched = handoff.prefetch(fetch, a);
		expect(handoff.prefetch(fetch, a)).toBe(prefetched);
		expect(details(a)).toBe(prefetched);
		details(a);
		expect(fetch).toHaveBeenCalledTimes(2);
	});

	it('lets the layout transition wait on a prefetched request', () => {
		const fetch = fetcher(),
			handoff = handoffDetails<{ id: string }, string>();
		const prefetched = handoff.prefetch(fetch, a);
		expect(handoff.hold(fetch, a)).toBe(prefetched);
		expect(fetch).toHaveBeenCalledOnce();
	});

	it('drops a failed prefetch', async () => {
		const fail = vi.fn(() => Promise.reject(new Error('offline'))),
			handoff = handoffDetails<{ id: string }, string>();
		handoff.prefetch(fail, a).then(undefined, () => undefined);
		await Promise.resolve();
		await Promise.resolve();
		handoff
			.wrap(fail)(a)
			.then(undefined, () => undefined);
		expect(fail).toHaveBeenCalledTimes(2);
	});

	it('does not hand a prefetch to a new details function', () => {
		const fetch = fetcher(),
			refreshed = fetcher(),
			handoff = handoffDetails<{ id: string }, string>();
		handoff.prefetch(fetch, a);
		handoff.wrap(refreshed)(a);
		expect(refreshed).toHaveBeenCalledOnce();
	});

	it('does not hand a held request to a new details function', () => {
		const fetch = fetcher(),
			refreshed = fetcher(),
			handoff = handoffDetails<{ id: string }, string>();
		handoff.hold(fetch, a);
		handoff.wrap(refreshed)(a);
		expect(refreshed).toHaveBeenCalledOnce();
	});
});

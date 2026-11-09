import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

let cleanup: (() => void) | void;
vi.mock('@pionjs/pion', () => ({
	useEffect: (fn: () => () => void) => {
		cleanup = fn();
	},
}));

const { usePrefetchNeighbours } =
	await import('../src/queue/use-prefetch-neighbours');

const items = ['a', 'b', 'c', 'd'];

describe('usePrefetchNeighbours', () => {
	beforeEach(() => vi.useFakeTimers());
	afterEach(() => vi.useRealTimers());

	it('loads the previous and next items while idle', () => {
		const details = vi.fn(() => Promise.resolve());
		usePrefetchNeighbours({ items, item: 'b', details, enabled: true });
		expect(details).not.toHaveBeenCalled();
		vi.runAllTimers();
		expect(details.mock.calls).toEqual([['c'], ['a']]);
	});

	it('skips missing neighbours at the ends', () => {
		const details = vi.fn(() => Promise.resolve());
		usePrefetchNeighbours({ items, item: 'd', details, enabled: true });
		vi.runAllTimers();
		expect(details.mock.calls).toEqual([['c']]);
	});

	it('does nothing when disabled', () => {
		const details = vi.fn(() => Promise.resolve());
		usePrefetchNeighbours({ items, item: 'b', details, enabled: false });
		vi.runAllTimers();
		expect(details).not.toHaveBeenCalled();
	});

	it('cancels the pending prefetch when the item changes', () => {
		const details = vi.fn(() => Promise.resolve());
		usePrefetchNeighbours({ items, item: 'b', details, enabled: true });
		cleanup?.();
		vi.runAllTimers();
		expect(details).not.toHaveBeenCalled();
	});
});

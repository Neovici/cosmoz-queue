import { describe, expect, it, vi } from 'vitest';

vi.mock('@pionjs/pion', () => ({
	useMemo: (fn: () => unknown) => fn(),
	useRef: (current: unknown) => ({ current }),
	useEffect: (fn: () => unknown) => fn(),
	useState: (initial: unknown) => {
		let state = initial;
		return [
			state,
			(update: unknown) => {
				state = typeof update === 'function' ? update(state) : update;
			},
		];
	},
}));

const { useMore } = await import('../src/list/more/use-more');

const list$ = vi.fn(() => Promise.resolve({ items: [], total: 0 })),
	more = (enabled?: boolean) =>
		useMore({
			params: { q: 1 },
			list$,
			setTotalAvailable: () => undefined,
			enabled,
		}),
	flush = () => new Promise((resolve) => setTimeout(resolve));

describe('useMore', () => {
	it('fetches when enabled is not set', async () => {
		list$.mockClear();
		more();
		await flush();
		expect(list$).toHaveBeenCalledOnce();
	});

	it('holds the fetch while disabled', async () => {
		list$.mockClear();
		more(false);
		await flush();
		expect(list$).not.toHaveBeenCalled();
		more(true);
		await flush();
		expect(list$).toHaveBeenCalledOnce();
	});
});

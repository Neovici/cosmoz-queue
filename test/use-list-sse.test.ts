import { describe, expect, it, vi } from 'vitest';

const host = document.createElement('div');

vi.mock('@pionjs/pion', () => ({
	useMemo: (fn: () => unknown) => fn(),
	useEffect: (fn: () => unknown) => fn(),
}));

vi.mock('@neovici/cosmoz-utils/hooks/use-host', () => ({
	useHost: () => host,
}));

vi.mock('@neovici/cosmoz-utils/hooks/use-meta', () => ({
	useMeta: (v: unknown) => v,
}));

vi.mock('@neovici/cosmoz-utils/promise', () => ({
	debounce$: (fn: () => unknown) => fn,
}));

const { useListSSE } = await import('../src/queue/use-list-sse');

const setup = (data: { id: string }[]) => {
	const list$ = vi.fn(() => Promise.resolve([]));
	const omnitable = Object.assign(document.createElement('div'), {
		data,
		replaceItemAtIndex: vi.fn(),
		removeItem: vi.fn(),
	});
	useListSSE({ entity: 'thing', params: { q: 1 }, list$, omnitable });
	return list$;
};

const update = (id: string) =>
	window.dispatchEvent(
		new CustomEvent('cosmoz-thing-updated', { detail: { id } }),
	);

describe('useListSSE', () => {
	it('fetches only the updated items that are listed', () => {
		const list$ = setup([{ id: '1' }, { id: '2' }]);
		update('2');
		expect(list$).toHaveBeenCalledWith({ q: 1, objectIds: ['2'] });
	});

	it('skips the fetch when no updated item is listed', () => {
		const list$ = setup([{ id: '1' }]);
		update('3');
		expect(list$).not.toHaveBeenCalled();
	});

	it('skips the fetch while the list is empty', () => {
		const list$ = setup([]);
		update('1');
		expect(list$).not.toHaveBeenCalled();
	});
});

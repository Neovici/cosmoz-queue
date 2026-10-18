import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const host = document.createElement('div');
const cleanups: (() => void)[] = [];

vi.mock('@pionjs/pion', () => ({
	useMemo: (fn: () => unknown) => fn(),
	useEffect: (fn: () => () => void) => cleanups.push(fn()),
}));

vi.mock('@neovici/cosmoz-utils/hooks/use-host', () => ({
	useHost: () => host,
}));

vi.mock('@neovici/cosmoz-utils/hooks/use-meta', () => ({
	useMeta: (v: unknown) => v,
}));

const { useListSSE } = await import('../src/queue/use-list-sse');

type Item = { id: string; value?: number };
const setup = (
	data: Item[],
	list$ = vi.fn<() => Promise<Item[]>>(() => Promise.resolve([])),
) => {
	const omnitable = Object.assign(document.createElement('div'), {
		data,
		replaceItemAtIndex: vi.fn(),
		removeItem: vi.fn(),
	});
	useListSSE({ entity: 'thing', params: { q: 1 }, list$, omnitable });
	return { list$, omnitable, cleanup: cleanups[cleanups.length - 1] };
};

const update = (id: string) =>
	window.dispatchEvent(
		new CustomEvent('cosmoz-thing-updated', { detail: { id } }),
	);

describe('useListSSE', () => {
	beforeEach(() => vi.useFakeTimers());
	afterEach(() => {
		cleanups.splice(0).forEach((cleanup) => cleanup());
		vi.useRealTimers();
	});

	it('fetches only the updated items that are listed', async () => {
		const { list$ } = setup([{ id: '1' }, { id: '2' }]);
		update('2');
		await vi.advanceTimersByTimeAsync(600);
		expect(list$).toHaveBeenCalledWith({ q: 1, objectIds: ['2'] });
	});

	it('skips the fetch when no updated item is listed', async () => {
		const { list$ } = setup([{ id: '1' }]);
		update('3');
		await vi.advanceTimersByTimeAsync(600);
		expect(list$).not.toHaveBeenCalled();
	});

	it('skips the fetch while the list is empty', async () => {
		const { list$ } = setup([]);
		update('1');
		await vi.advanceTimersByTimeAsync(600);
		expect(list$).not.toHaveBeenCalled();
	});

	it('cancels pending work and removes listeners during cleanup', async () => {
		const { list$, cleanup } = setup([{ id: '1' }]);
		update('1');
		await vi.advanceTimersByTimeAsync(100);
		cleanup();
		update('1');
		host.dispatchEvent(
			new CustomEvent('cosmoz-thing-check', { detail: { id: '1' } }),
		);
		await vi.advanceTimersByTimeAsync(1000);
		expect(list$).not.toHaveBeenCalled();
	});

	it('debounces and applies updates while active', async () => {
		const item = { id: '1', value: 2 };
		const { list$, omnitable } = setup(
			[{ id: '1', value: 1 }],
			vi.fn(() => Promise.resolve([item])),
		);
		update('1');
		await vi.advanceTimersByTimeAsync(300);
		update('1');
		await vi.advanceTimersByTimeAsync(599);
		expect(list$).not.toHaveBeenCalled();
		await vi.advanceTimersByTimeAsync(1);
		expect(list$).toHaveBeenCalledExactlyOnceWith({ q: 1, objectIds: ['1'] });
		expect(omnitable.replaceItemAtIndex).toHaveBeenCalledExactlyOnceWith(
			0,
			item,
		);
	});

	it('ignores an in-flight response after cleanup', async () => {
		let respond!: (items: Item[]) => void;
		const response = new Promise<Item[]>((resolve) => (respond = resolve));
		const { list$, omnitable, cleanup } = setup(
			[{ id: '1', value: 1 }],
			vi.fn(() => response),
		);
		update('1');
		await vi.advanceTimersByTimeAsync(600);
		expect(list$).toHaveBeenCalledOnce();
		cleanup();
		respond([{ id: '1', value: 2 }]);
		await vi.advanceTimersByTimeAsync(0);
		expect(omnitable.replaceItemAtIndex).not.toHaveBeenCalled();
		expect(omnitable.removeItem).not.toHaveBeenCalled();
	});
});

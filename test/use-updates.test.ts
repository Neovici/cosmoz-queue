import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// A minimal hook runtime: slots keyed by call order, effects run when deps change.
const slots: unknown[] = [];
let slot = 0;
const changed = (prev: unknown[] | undefined, deps?: unknown[]) =>
	!prev || !deps || deps.some((d, i) => d !== prev[i]);
const useMemo = (fn: () => unknown, deps?: unknown[]) => {
	const i = slot++;
	const s = slots[i] as { deps?: unknown[]; value: unknown } | undefined;
	if (!s || changed(s.deps, deps)) slots[i] = { deps, value: fn() };
	return (slots[i] as { value: unknown }).value;
};

vi.mock('@pionjs/pion', () => ({
	useMemo,
	useCallback: (fn: unknown, deps?: unknown[]) => useMemo(() => fn, deps),
	useState: (init: unknown) => {
		const i = slot++;
		if (!(i in slots)) slots[i] = init;
		return [slots[i], (v: unknown) => (slots[i] = v)];
	},
	useEffect: (fn: () => void, deps?: unknown[]) => {
		const i = slot++;
		if (changed(slots[i] as unknown[] | undefined, deps)) {
			slots[i] = deps;
			fn();
		}
	},
}));

const host = document.createElement('div');
vi.mock('@neovici/cosmoz-utils/hooks/use-host', () => ({
	useHost: () => host,
}));

const meta = {};
vi.mock('@neovici/cosmoz-utils/hooks/use-meta', () => ({
	useMeta: (v: object) => Object.assign(meta, v),
}));

const { default: useUpdates, RECHECK_DELAYS } =
	await import('../src/queue/use-updates');

const ensue = vi.fn();

const render = (opts: { activeId?: string; keepDeparted?: boolean }) => {
	slot = 0;
	return useUpdates({ ensue, ...opts });
};

const removeEvent = (id: string, check?: () => void) => {
	const remove = vi.fn();
	const e = new CustomEvent('list-item-remove', {
		cancelable: true,
		detail: { id, remove, check },
	});
	host.dispatchEvent(e);
	return { remove, e };
};

describe('useUpdates', () => {
	let cleanup: (() => void)[] = [];

	beforeEach(() => {
		slots.length = 0;
		ensue.mockClear();
		const add = host.addEventListener.bind(host);
		vi.spyOn(host, 'addEventListener').mockImplementation((type, fn) => {
			add(type, fn);
			cleanup.push(() => host.removeEventListener(type, fn));
		});
	});

	afterEach(() => {
		cleanup.forEach((fn) => fn());
		cleanup = [];
		vi.restoreAllMocks();
		vi.useRealTimers();
	});

	it('moves on and removes the active item by default', () => {
		render({ activeId: 'a' });
		const { remove, e } = removeEvent('a', vi.fn());
		expect(e.defaultPrevented).toBe(true);
		expect(ensue).toHaveBeenCalledWith('a');
		expect(remove).toHaveBeenCalled();
	});

	describe('with keepDeparted', () => {
		const opts = { activeId: 'a', keepDeparted: true };

		it('keeps the active item and re-checks it', () => {
			vi.useFakeTimers();
			render(opts);
			const check = vi.fn();
			const { remove } = removeEvent('a', check);
			vi.advanceTimersByTime(RECHECK_DELAYS[0]);
			expect(check).toHaveBeenCalledTimes(1);
			vi.advanceTimersByTime(RECHECK_DELAYS.at(-1)!);
			expect(check).toHaveBeenCalledTimes(RECHECK_DELAYS.length);
			expect(remove).not.toHaveBeenCalled();
			expect(ensue).not.toHaveBeenCalled();
			expect(render(opts)).toBeUndefined();
		});

		it('reports the departure once a re-check confirms it', () => {
			render(opts);
			removeEvent('a', vi.fn());
			const { remove } = removeEvent('a', vi.fn());
			const departure = render(opts);
			expect(departure).toBeDefined();

			departure!.next();
			expect(ensue).toHaveBeenCalledWith('a');
			expect(remove).toHaveBeenCalled();
			expect(render(opts)).toBeUndefined();
		});

		it('reports the departure right away when it cannot re-check', () => {
			render(opts);
			removeEvent('a');
			expect(render(opts)).toBeDefined();
		});

		it('forgets the departure when the item comes back', () => {
			render(opts);
			removeEvent('a');
			host.dispatchEvent(
				new CustomEvent('list-item-update', { detail: { id: 'a' } }),
			);
			expect(render(opts)).toBeUndefined();
		});

		it('removes a confirmed departure once the user moves on', () => {
			render(opts);
			const { remove } = removeEvent('a');
			render({ ...opts, activeId: 'b' });
			expect(remove).toHaveBeenCalled();
			expect(render({ ...opts, activeId: 'b' })).toBeUndefined();
		});

		it('leaves an unconfirmed departure to its re-checks when the user moves on', () => {
			render(opts);
			const { remove } = removeEvent('a', vi.fn());
			render({ ...opts, activeId: 'b' });
			expect(remove).not.toHaveBeenCalled();
		});

		it('removes other items right away', () => {
			render(opts);
			const { remove } = removeEvent('b', vi.fn());
			expect(remove).toHaveBeenCalled();
		});
	});
});

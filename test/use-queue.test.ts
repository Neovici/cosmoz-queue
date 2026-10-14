import { describe, expect, it, vi } from 'vitest';

// useQueue runs pion hooks; provide a synchronous stand-in and mock its
// stateful hook dependencies so the hook body can execute in jsdom.
vi.mock('@pionjs/pion', () => ({
	useCallback: (fn: unknown) => fn,
	useMemo: (compute: () => unknown) => compute(),
	useRef: (initial: unknown) => ({ current: initial }),
	useState: (initial: unknown) => [initial, () => undefined],
}));

vi.mock('../src/queue/use-list', () => ({
	useListState: () => ({}),
}));

vi.mock('../src/queue/use-mobile', () => ({
	useMobile: () => false,
}));

vi.mock('../src/queue/use-tabs', () => ({
	default: () => ({
		tabnav: { tabs: [], active: undefined, activate: () => undefined },
		activeTab: undefined,
	}),
}));

vi.mock('../src/queue/use-data-nav', () => ({
	default: () => ({ item: undefined, setItem: () => undefined }),
}));

vi.mock('../src/queue/use-key-nav', () => ({
	default: () => undefined,
}));

vi.mock('../src/queue/use-updates', () => ({
	default: () => undefined,
}));

const { default: useQueue } = await import('../src/queue/use-queue');
const { splitAttrs } = await import('../src/queue/split');

describe('useQueue split option', () => {
	it('returns splitAttrs mapping [300, 400] to minimums for both panes', () => {
		const { splitAttrs } = useQueue({ split: { minSize: [300, 400] } });
		expect(splitAttrs).toEqual({ initialSize: '50%', minSize: '300 400' });
	});

	it('returns the default splitAttrs when split is omitted', () => {
		const { splitAttrs } = useQueue({});
		expect(splitAttrs).toEqual({ initialSize: '50%', minSize: '100' });
	});

	it('does not echo the raw split option and keeps minSize undefined for split: {}', () => {
		const result = useQueue({ split: {} });
		expect('split' in result).toBe(false);
		expect(result.splitAttrs).toEqual({
			initialSize: '50%',
			minSize: undefined,
		});
	});
});

describe('splitAttrs helper', () => {
	it('maps a bare number to the previous pane minimum', () => {
		expect(splitAttrs({ minSize: 300 })).toEqual({
			initialSize: '50%',
			minSize: '300',
		});
	});

	it('maps a single-entry array unchanged', () => {
		expect(splitAttrs({ minSize: [300] }).minSize).toBe('300');
	});

	it('maps sizes to an initial-size percent', () => {
		expect(splitAttrs({ sizes: [30, 70] })).toEqual({
			initialSize: '30%',
			minSize: undefined,
		});
	});
});

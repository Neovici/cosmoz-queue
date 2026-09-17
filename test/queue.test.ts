import { describe, expect, it, vi } from 'vitest';

const useQueue = vi.fn(() => ({
	index: 0,
	hideActions: false,
	items: [],
	setItems: vi.fn(),
	setSelected: vi.fn(),
	totalAvailable: 0,
	setTotalAvailable: vi.fn(),
	onItemClick: vi.fn(),
	nav: {},
	tabnav: {},
}));

vi.mock('../src/queue/use-queue', () => ({ default: useQueue }));

vi.mock('../src/queue/use-async-action', () => ({
	default: () => ({
		listRef: { current: undefined },
		onAsyncSimpleAction: vi.fn(),
	}),
}));

vi.mock('../src/queue/render', () => ({ renderQueue: vi.fn() }));

const { queue } = await import('../src/queue/queue');

const render = (props: Record<string, unknown> = {}) =>
	queue({
		heading: 'Queue',
		list: () => ({}) as never,
		view: () => ({}) as never,
		loader: () => ({}) as never,
		...props,
	} as never);

describe('queue', () => {
	it('forwards onActivate to useQueue', () => {
		const onActivate = vi.fn();
		render({ onActivate });
		expect(useQueue).toHaveBeenCalledWith(
			expect.objectContaining({ onActivate }),
		);
	});

	it('leaves onActivate undefined when not given', () => {
		render();
		expect(useQueue).toHaveBeenLastCalledWith(
			expect.objectContaining({ onActivate: undefined }),
		);
	});
});

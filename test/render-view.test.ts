import { html, render } from 'lit-html';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@neovici/cosmoz-button', () => ({}));
vi.mock('@neovici/cosmoz-resizable', () => ({}));
vi.mock('@neovici/cosmoz-slider', () => ({
	slideInLeft: vi.fn(),
	slideInRight: vi.fn(),
}));
vi.mock('@neovici/cosmoz-tabs/next/index.js', () => ({ renderTabs: () => [] }));
vi.mock('../src/queue/style', () => ({ queueStyle: '' }));

const { slideInRight } = await import('@neovici/cosmoz-slider');
const { renderQueue, renderSlide, renderView } =
	await import('../src/queue/render');

interface Item {
	id: string;
}
const item = { id: '1' },
	never = new Promise(() => undefined),
	flush = () => new Promise((resolve) => setTimeout(resolve)),
	view = (details: (i: Item) => PromiseLike<Item>) => {
		const host = document.createElement('div');
		const renderLoader = vi.fn(() => html`<p>loading</p>`);
		render(
			renderView<Item, Item>({
				animationEnd$: never,
				details,
				item,
				renderItem: ({ item }) => html`<p>item ${(item as Item).id}</p>`,
				renderLoader,
			}),
			host,
		);
		return { host, renderLoader };
	};

describe('renderView', () => {
	it('renders the details without waiting for the slide to end', async () => {
		const detail$ = Promise.resolve(item);
		const { host } = view(() => detail$);
		expect(host.textContent).toContain('loading');
		await flush();
		expect(host.textContent).toContain('item 1');
	});

	it('renders settled details at once, without the loader', async () => {
		const detail$ = Promise.resolve(item);
		view(() => detail$);
		await flush();
		const { host, renderLoader } = view(() => detail$);
		expect(renderLoader).not.toHaveBeenCalled();
		expect(host.textContent).toContain('item 1');
	});
});

describe('renderSlide', () => {
	const slide = renderSlide<Item, Item>({
		id: (i) => i.id,
		item,
		forward: true,
		renderItem: () => html``,
		renderLoader: () => html``,
	}) as { animation: (inEl: HTMLElement, outEl: HTMLElement) => unknown };

	it('skips the animation when the outgoing slide is empty', () => {
		vi.mocked(slideInRight).mockClear();
		const inEl = document.createElement('div');
		slide.animation(inEl, document.createElement('div'));
		expect(slideInRight).not.toHaveBeenCalled();
	});

	it('slides in over a previous item', () => {
		vi.mocked(slideInRight).mockClear();
		const inEl = document.createElement('div'),
			outEl = document.createElement('div');
		outEl.append(document.createElement('p'));
		slide.animation(inEl, outEl);
		expect(slideInRight).toHaveBeenCalledWith(inEl, outEl);
	});
});

describe('tab prefetch', () => {
	const prefetchIn = (layout: string) => {
		const details = vi.fn(() => Promise.resolve(item));
		const header = vi.fn(() => html``);
		render(
			renderQueue<Item, Item>({
				header,
				details,
				tabnav: {
					tabs: [],
					active: { name: layout, content: '' },
					onActivate: vi.fn(),
				},
				items: [item],
				nav: { id: (i) => i.id, item, index: 0 },
				list: html``,
				renderItem: () => html``,
				renderLoader: () => html``,
			}),
			document.createElement('div'),
		);
		const [[{ tabnav }]] = header.mock.calls as unknown as [
			[{ tabnav: { prefetch?: () => void } }],
		];
		return { details, prefetch: tabnav.prefetch };
	};

	it('loads the selected item from the list', () => {
		const { details, prefetch } = prefetchIn('overview');
		prefetch!();
		expect(details).toHaveBeenCalledWith(item);
	});

	it('is not offered once the item is open', () => {
		expect(prefetchIn('split').prefetch).toBeUndefined();
	});
});

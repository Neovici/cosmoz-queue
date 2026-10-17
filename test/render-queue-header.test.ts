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

import { renderQueue, type RenderQueue } from '../src/queue/render';

interface Item {
	id: string;
	title: string;
}
const view = (layout: string, item?: Item): RenderQueue<Item, Item> => ({
	heading: 'Records',
	tabHashParam: 'record-layout',
	tabnav: {
		tabs: [],
		active: { name: layout, content: '' },
		onActivate: vi.fn(),
	},
	items: [],
	nav: { id: (i) => i.id, item: item!, index: item ? 0 : -1 },
	list: html``,
	renderItem: () => html``,
	renderLoader: () => html``,
});

describe('custom queue header', () => {
	for (const layout of ['overview', 'split', 'queue']) {
		it(`receives the selected item and layout key in ${layout}`, () => {
			const host = document.createElement('div');
			const item = { id: '42', title: 'Record 42' };
			const header = vi.fn(() => html``);
			render(renderQueue({ ...view(layout, item), header }), host);
			expect(header).toHaveBeenCalledWith(
				expect.objectContaining({ item, tabHashParam: 'record-layout' }),
			);
		});
	}

	it('updates the header when selection changes and permits an empty selection', () => {
		const host = document.createElement('div');
		const header = vi.fn(() => html``);
		const first = { id: '42', title: 'Record 42' };
		const next = { id: '43', title: 'Record 43' };
		for (const item of [first, next, undefined]) {
			render(renderQueue({ ...view('overview', item), header }), host);
			expect(header).toHaveBeenLastCalledWith(
				expect.objectContaining({ item }),
			);
		}
	});
});

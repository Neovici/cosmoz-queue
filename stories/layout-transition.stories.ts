import { component, useEffect } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import { queue } from '../src/queue/queue';

interface Item {
	id: string;
}
const items: Item[] = [{ id: '1' }, { id: '2' }];

const LayoutQueue = () =>
	queue<Item, Item>({
		heading: 'Layouts',
		tabHashParam: 'vt-layout',
		idHashParam: 'vt-id',
		details: (item) =>
			new Promise((resolve) => setTimeout(() => resolve(item), 100)),
		list: (_, { setItems }) => {
			useEffect(() => setItems(items), []);
			return html`<div id="list" slot="previous">List</div>`;
		},
		view: () => html`<div class="view-core">Detail</div>`,
		loader: () => html`<div class="view-core" data-loader>Loading</div>`,
	});

if (!customElements.get('layout-transition-test')) {
	customElements.define('layout-transition-test', component(LayoutQueue));
}

const meta: Meta = {
	title: 'Tests/LayoutTransition',
};

export default meta;

export const AnimatesLayoutSwitches: StoryObj = {
	render: () =>
		html`<layout-transition-test
			style="display: block; height: 400px"
		></layout-transition-test>`,
	async play({ canvasElement }) {
		const host = canvasElement.querySelector('layout-transition-test')!,
			root = host.shadowRoot!,
			scope = () => root.querySelector('cosmoz-resizable-view')!,
			tab = (name: string) =>
				root.querySelector(`.tabn-tab[name="${name}"]`) as HTMLElement;

		await waitFor(() =>
			expect(tab('split')?.hasAttribute('disabled')).toBe(false),
		);
		root.querySelector('#list')!.dispatchEvent(
			new CustomEvent('omnitable-item-click', {
				bubbles: true,
				composed: true,
				detail: { item: items[1] },
			}),
		);

		if (!('startViewTransition' in Element.prototype)) {
			tab('split').click();
			expect(scope().getAttribute('data-vt-fallback')).toBe('overview-split');
			return;
		}

		type Start = (opts: StartViewTransitionOptions) => ViewTransition;
		const el = scope() as HTMLElement & { startViewTransition: Start },
			start = el.startViewTransition.bind(el),
			outcomes: Promise<string>[] = [];
		el.startViewTransition = (opts) => {
			const vt = start(opts);
			outcomes.push(
				vt.ready.then(
					() => 'ran',
					(e: Error) => e.message,
				),
			);
			return vt;
		};
		const pick = async (from: string, to: string) => {
			tab(to).click();
			// Back to the list switches at once, with no transition.
			expect(el.getAttribute('data-vt')).toBe(
				to === 'overview' ? null : `${from}-${to}`,
			);
			await waitFor(() => expect(el.dataset.active).toBe(to));
			await waitFor(() => expect(el.hasAttribute('data-vt')).toBe(false));
		};

		await pick('overview', 'split');
		expect(root.querySelector('.view-core')?.textContent).toBe('Detail');
		await pick('split', 'queue');
		await pick('queue', 'overview');
		await pick('overview', 'queue');
		await pick('queue', 'split');
		await pick('split', 'overview');
		expect(await Promise.all(outcomes)).toEqual(Array(4).fill('ran'));
	},
};

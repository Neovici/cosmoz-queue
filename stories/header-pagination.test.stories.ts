import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, fn } from 'storybook/test';
import { renderPagination, renderQueue } from '../src/queue/render';

const onPage = fn();
export default { title: 'Tests/Custom header pagination' } satisfies Meta;
export const PreservesPagination: StoryObj = {
	render: () =>
		renderQueue({
			header: ({ pagination }) =>
				html`<header>${renderPagination(pagination)}</header>`,
			heading: 'Orders',
			items: [],
			totalAvailable: 41,
			pagination: { pageNumber: 1, pageSize: 20, onPage },
			tabnav: {
				tabs: [],
				active: { name: 'overview', content: 'List' },
				onActivate: () => undefined,
			},
			nav: { id: () => '', index: -1, item: undefined },
			list: html`<div>List</div>`,
			renderItem: () => html``,
			renderLoader: () => html``,
		}),
	play: async ({ canvasElement }) => {
		const next = canvasElement.querySelector<HTMLElement>('.page-next')!;
		expect(next.hasAttribute('disabled')).toBe(false);
		next.click();
		expect(onPage).toHaveBeenLastCalledWith(2);
		next.dispatchEvent(new MouseEvent('click', { ctrlKey: true }));
		expect(onPage).toHaveBeenLastCalledWith(3);
	},
};

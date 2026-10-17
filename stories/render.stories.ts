import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { expect, fn, userEvent, waitFor } from 'storybook/test';
import {
	type RenderQueue,
	renderNav,
	renderPagination,
	renderQueue,
} from '../src/queue/render';
import { computeSplitAttrs } from '../src/queue/split';

const meta: Meta = {
	title: 'Tests/Render',
};

export default meta;

export const RenderNavTest: StoryObj = {
	render: () => html`<div id="test-container">${renderNav({})}</div>`,
	async play({ canvasElement }) {
		const container = canvasElement.querySelector('#test-container');

		// Both buttons should be disabled when no callbacks are provided
		const buttons = container?.querySelectorAll('cosmoz-button.button-nav');
		expect(buttons).toHaveLength(2);

		const prevButton = container?.querySelector(
			'cosmoz-button.button-nav.prev',
		);
		const nextButton = container?.querySelector(
			'cosmoz-button.button-nav.next',
		);
		expect(prevButton).toHaveAttribute('disabled');
		expect(nextButton).toHaveAttribute('disabled');
	},
};

export const RenderNavWithCallbacks: StoryObj = {
	args: {
		prev: fn(),
		next: fn(),
	},
	render: (args) =>
		html`<div id="test-container">
			${renderNav(args as Parameters<typeof renderNav>[0])}
		</div>`,
	async play({ args, canvasElement }) {
		const container = canvasElement.querySelector('#test-container');

		const prevButton = container?.querySelector(
			'cosmoz-button.button-nav.prev',
		) as HTMLButtonElement;
		const nextButton = container?.querySelector(
			'cosmoz-button.button-nav.next',
		) as HTMLButtonElement;

		// Buttons should not be disabled when callbacks are provided
		expect(prevButton).not.toHaveAttribute('disabled');
		expect(nextButton).not.toHaveAttribute('disabled');

		// Test clicking
		await userEvent.click(prevButton);
		expect(args.prev).toHaveBeenCalled();

		await userEvent.click(nextButton);
		expect(args.next).toHaveBeenCalled();
	},
};

export const RenderPaginationNothing: StoryObj = {
	render: () =>
		html`<div id="test-container">
			${renderPagination() === nothing ? 'nothing' : renderPagination()}
		</div>`,
	async play({ canvasElement }) {
		const container = canvasElement.querySelector('#test-container');
		expect(container?.textContent?.trim()).toBe('nothing');
	},
};

export const RenderPaginationTest: StoryObj = {
	args: {
		onPage: fn(),
	},
	render: (args) =>
		html`<div id="test-container">
			${renderPagination({
				totalPages: 10,
				pageNumber: 3,
				onPage: args.onPage as (page: number) => void,
			})}
		</div>`,
	async play({ args, canvasElement }) {
		const container = canvasElement.querySelector('#test-container');

		const prevButton = container?.querySelector(
			'.page-prev',
		) as HTMLButtonElement;
		const nextButton = container?.querySelector(
			'.page-next',
		) as HTMLButtonElement;

		expect(prevButton).toBeTruthy();
		expect(nextButton).toBeTruthy();

		// Click next page
		await userEvent.click(nextButton);
		expect(args.onPage).toHaveBeenCalledWith(4);

		// Reset and click prev page
		(args.onPage as ReturnType<typeof fn>).mockClear();
		await userEvent.click(prevButton);
		expect(args.onPage).toHaveBeenCalledWith(2);
	},
};

export const RenderQueueSplitTest: StoryObj = {
	render: () => {
		const props: RenderQueue<unknown, unknown> = {
			heading: 'Split',
			index: 0,
			items: [],
			tabnav: {
				tabs: [],
				active: { name: 'overview', content: nothing },
				onActivate: () => undefined,
			},
			nav: { id: () => '', item: undefined, index: 0 },
			list: html`<div>list</div>`,
			renderItem: () => html`<div>item</div>`,
			renderLoader: () => html`<div>loading</div>`,
		};
		return html`<div id="test-container">
			${renderQueue({
				...props,
				splitAttrs: computeSplitAttrs({ minSize: [300, 400] }),
			})}
			${renderQueue(props)}
		</div>`;
	},
	async play({ canvasElement }) {
		const views = canvasElement.querySelectorAll<HTMLElement>(
			'cosmoz-resizable-view',
		);

		// first queue: both pane minimums forwarded, second: '100' fallback
		expect([...views].map((el) => el.getAttribute('min-size'))).toEqual([
			'300 400',
			'100',
		]);
		expect([...views].map((el) => el.getAttribute('initial-size'))).toEqual([
			'50%',
			'50%',
		]);
	},
};

export const NavigationStaysFlat: StoryObj = {
	render: () => html`
		<div id="test-container">
			${renderNav({ prev: fn(), next: fn() })}
			${renderPagination({ pageNumber: 2, totalPages: 3, onPage: fn() })}
		</div>
	`,
	async play({ canvasElement }) {
		await waitFor(() => {
			const controls = canvasElement.querySelectorAll(
				'.button-nav, .button-page',
			);
			expect(controls).toHaveLength(4);
			for (const control of controls) {
				const style = getComputedStyle(
					control.shadowRoot!.querySelector('button')!,
				);
				expect(style.backgroundColor).toBe('rgba(0, 0, 0, 0)');
				expect(style.backgroundImage).toBe('none');
				expect(style.boxShadow).toBe('none');
			}
		});
	},
};

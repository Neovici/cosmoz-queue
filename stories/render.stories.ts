import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import { expect as vitestExpect } from 'vitest';
import { renderNav, renderPagination } from '../src/queue/render';

const meta: Meta = {
	title: 'Tests/Render',
};

export default meta;

export const RenderNavTest: StoryObj = {
	render: () => html`<div id="test-container">${renderNav({})}</div>`,
	async play({ canvasElement }) {
		const container = canvasElement.querySelector('#test-container');

		// HTML snapshot
		vitestExpect(container?.innerHTML).toMatchSnapshot();

		// Both buttons should be disabled when no callbacks are provided
		const buttons = container?.querySelectorAll('button.button-nav');
		expect(buttons).toHaveLength(2);

		const prevButton = container?.querySelector('.button-nav.prev');
		const nextButton = container?.querySelector('.button-nav.next');
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

		// HTML snapshot (before interactions)
		vitestExpect(container?.innerHTML).toMatchSnapshot();

		const prevButton = container?.querySelector(
			'.button-nav.prev',
		) as HTMLButtonElement;
		const nextButton = container?.querySelector(
			'.button-nav.next',
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

		// HTML snapshot (before interactions)
		vitestExpect(container?.innerHTML).toMatchSnapshot();

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

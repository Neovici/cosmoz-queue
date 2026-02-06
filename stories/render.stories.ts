import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import { renderNav, renderPagination } from '../src/queue/render';

const meta: Meta = {
	title: 'Tests/Render',
};

export default meta;

export const RenderNavTest: StoryObj = {
	render: () => html`<div id="test-container">${renderNav({})}</div>`,
	async play({ canvasElement }) {
		const container = canvasElement.querySelector('#test-container');

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
	render: () => {
		const prev = fn();
		const next = fn();
		(window as unknown as Record<string, unknown>).__testPrev = prev;
		(window as unknown as Record<string, unknown>).__testNext = next;
		return html`<div id="test-container">${renderNav({ prev, next })}</div>`;
	},
	async play({ canvasElement }) {
		const container = canvasElement.querySelector('#test-container');

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
		expect(
			(window as unknown as Record<string, unknown>).__testPrev,
		).toHaveBeenCalled();

		await userEvent.click(nextButton);
		expect(
			(window as unknown as Record<string, unknown>).__testNext,
		).toHaveBeenCalled();
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
	render: () => {
		const onPage = fn();
		(window as unknown as Record<string, unknown>).__testOnPage = onPage;
		return html`<div id="test-container">
			${renderPagination({
				totalPages: 10,
				pageNumber: 3,
				onPage,
			})}
		</div>`;
	},
	async play({ canvasElement }) {
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
		expect(
			(window as unknown as Record<string, unknown>).__testOnPage,
		).toHaveBeenCalledWith(4);

		// Reset and click prev page
		(
			(window as unknown as Record<string, unknown>).__testOnPage as ReturnType<
				typeof fn
			>
		).mockClear();
		await userEvent.click(prevButton);
		expect(
			(window as unknown as Record<string, unknown>).__testOnPage,
		).toHaveBeenCalledWith(2);
	},
};

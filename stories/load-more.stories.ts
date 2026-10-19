import type { Meta, StoryObj } from '@storybook/web-components';
import i18next from 'i18next';
import { html } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import { renderLoadMore } from '../src/list/more/render-more';

const meta: Meta = {
	title: 'List/Load more',
	async beforeEach() {
		await i18next.init({ lng: 'en', resources: {} });
	},
};

export default meta;

export const Link: StoryObj = {
	args: { onMore: fn() },
	render: ({ onMore }) => html`
		<div style="display: flex; flex-direction: column; width: 100%;">
			${renderLoadMore({ onMore })}
		</div>
	`,
	async play({ canvasElement, args }) {
		const host = canvasElement.querySelector('cosmoz-button')!;
		const button = host.shadowRoot!.querySelector('button')!;
		const surface = getComputedStyle(button);

		expect(surface.backgroundColor).toBe('rgba(0, 0, 0, 0)');
		expect(surface.boxShadow).toBe('none');
		expect(host.getBoundingClientRect().width).toBeGreaterThan(24);
		expect(host.getBoundingClientRect().width).toBeLessThan(
			canvasElement.getBoundingClientRect().width / 2,
		);

		await userEvent.click(button);
		expect(args.onMore).toHaveBeenCalledOnce();
	},
};

import type { Meta, StoryObj } from '@storybook/web-components';
import { expect, fn, userEvent, waitFor } from 'storybook/test';
import { renderLoadMore } from '../src/list/more/render-more';

export default { title: 'Tests/Load more' } satisfies Meta;

export const LinkAppearance: StoryObj = {
	args: { onMore: fn() },
	render: (args) => renderLoadMore(args),
	async play({ args, canvasElement }) {
		const host = canvasElement.querySelector('cosmoz-button')!;
		await waitFor(() =>
			expect(host.shadowRoot?.querySelector('button')).toBeTruthy(),
		);
		const button = host.shadowRoot!.querySelector('button')!;
		const style = getComputedStyle(button);
		expect(style.backgroundColor).toBe('rgba(0, 0, 0, 0)');
		expect(style.backgroundImage).toBe('none');
		expect(style.boxShadow).toBe('none');
		await userEvent.click(button);
		expect(args.onMore).toHaveBeenCalledOnce();
	},
};

import { renderTabs } from '@neovici/cosmoz-tabs/next';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import * as icons from '../src/queue/icons';
import { queueStyle } from '../src/queue/style';

const tabs = [
	{ name: 'overview', title: 'List', content: icons.list },
	{ name: 'split', title: 'Split', content: icons.split },
	{ name: 'queue', title: 'Queue', content: icons.queue },
];

export default { title: 'Tests/SegmentedHeader' } satisfies Meta;

export const CenteredIcons: StoryObj = {
	render: () => html`
		<style>
			${queueStyle}
		</style>
		<cosmoz-tabs-next class="tabn" variant="segmented" size="sm" compact-width>
			${renderTabs({
				tabs,
				active: tabs[1],
				onActivate: () => undefined,
				className: 'tabn-tab',
			})}
		</cosmoz-tabs-next>
	`,
	async play({ canvasElement }) {
		const group = canvasElement.querySelector('cosmoz-tabs-next')!;
		await waitFor(() => {
			const outer = group.getBoundingClientRect();
			for (const tab of group.querySelectorAll('cosmoz-tab-next')) {
				const icon = tab.querySelector('svg')!.getBoundingClientRect();
				const top = icon.top - outer.top;
				const bottom = outer.bottom - icon.bottom;
				expect(Math.abs(top - bottom)).toBeLessThan(0.5);
				expect(tab.getBoundingClientRect().bottom).toBeLessThanOrEqual(
					outer.bottom,
				);
			}
		});
		const selected = group.querySelector<HTMLElement>('[active]')!;
		expect(getComputedStyle(selected).backgroundColor).not.toBe(
			getComputedStyle(group).backgroundColor,
		);
	},
};

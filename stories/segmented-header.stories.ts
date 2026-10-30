import { renderTabs, useTabs } from '@neovici/cosmoz-tabs/next';
import { component } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, userEvent, waitFor } from 'storybook/test';
import * as icons from '../src/queue/icons';
import { labelActive } from '../src/queue/label-active';
import { queueStyle } from '../src/queue/style';

const tabs = [
	{ name: 'overview', title: 'List', content: icons.list },
	{ name: 'split', title: 'Split', content: icons.split },
	{ name: 'queue', title: 'Queue', content: icons.queue },
];

const LabelledHeader = () => {
	const tabnav = useTabs(tabs, {});
	return html`
		<style>
			${queueStyle}
		</style>
		<cosmoz-tabs-next class="tabn" variant="segmented" size="sm" compact-width>
			${renderTabs({
				...tabnav,
				tabs: labelActive(tabnav.tabs, tabnav.active?.name),
				className: 'tabn-tab',
			})}
		</cosmoz-tabs-next>
	`;
};

if (!customElements.get('labelled-header-test')) {
	customElements.define(
		'labelled-header-test',
		component(LabelledHeader, { useShadowDOM: false }),
	);
}

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

/** Opt-in: `labelActive` names the active layout tab; the others stay icon-only. */
export const LabelledActive: StoryObj = {
	render: () => html`<labelled-header-test></labelled-header-test>`,
	async play({ canvasElement }) {
		const tab = (name: string) =>
			canvasElement.querySelector<HTMLElement>(
				`cosmoz-tab-next[name=${name}]`,
			)!;
		const labels = () =>
			[...canvasElement.querySelectorAll('cosmoz-tab-next')].map((t) =>
				t.textContent?.trim(),
			);

		await waitFor(() => expect(labels()).toEqual(['List', '', '']));

		await userEvent.click(tab('queue'));
		await waitFor(() => expect(labels()).toEqual(['', '', 'Queue']));
		expect(tab('overview').getAttribute('title')).toBe('List');
	},
};

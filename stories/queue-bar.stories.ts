import { component } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import { queue } from '../src/queue/queue';

const QueueBar = () =>
	queue({
		heading: 'Bar Queue',
		details: async (item: unknown) => item,
		list: () => html`<div></div>`,
		view: () => html`<div></div>`,
		loader: () => html`<div></div>`,
	});

if (!customElements.get('queue-bar-test')) {
	customElements.define('queue-bar-test', component(QueueBar));
}

const meta: Meta = {
	title: 'Tests/QueueBar',
};

export default meta;

export const HeadingSitsOutsideTheTabs: StoryObj = {
	render: () => html`<queue-bar-test></queue-bar-test>`,
	async play({ canvasElement }) {
		const root = canvasElement.querySelector('queue-bar-test')!.shadowRoot!;
		await waitFor(() =>
			expect(root.querySelector('.tabn-heading')?.assignedSlot?.name).toBe(
				'tabs',
			),
		);
		expect(root.querySelector('.tabn-heading')!.hasAttribute('role')).toBe(
			false,
		);
		expect(root.querySelector('.tabn-tab')!.getAttribute('role')).toBe('tab');
	},
};

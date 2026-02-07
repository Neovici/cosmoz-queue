import { renderHook } from '@neovici/testing';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect } from 'storybook/test';
import { usePref } from '../src/queue/use-pref';

const meta: Meta = {
	title: 'Tests/UsePref',
};

export default meta;

export const DefaultPref: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play() {
		localStorage.removeItem('pref-some');
		const { result, unmount } = await renderHook(() =>
			usePref('some', 'asdad'),
		);

		expect(result.current[0]).toBe('asdad');
		unmount();
	},
};

export const UpdatePref: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play() {
		localStorage.removeItem('pref-update');
		const { result, nextUpdate, unmount } = await renderHook(() =>
			usePref('update'),
		);

		// Initial value should be undefined
		expect(result.current[0]).toBeUndefined();

		// Update the pref
		result.current[1]('dads');
		await nextUpdate();

		expect(result.current[0]).toBe('dads');
		unmount();
	},
};

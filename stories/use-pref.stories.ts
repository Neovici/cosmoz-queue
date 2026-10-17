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

export const IgnoresUndefinedKey: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play() {
		localStorage.removeItem('pref-undefined');
		const { result, nextUpdate, unmount } = await renderHook(() =>
			usePref<string>(undefined, 'fallback-value'),
		);

		// An undefined key starts at the default, without touching storage
		expect(result.current[0]).toBe('fallback-value');

		// The setter updates the in-memory state only
		result.current[1]('changed');
		await nextUpdate();

		expect(result.current[0]).toBe('changed');
		expect(localStorage.getItem('pref-undefined')).toBeNull();
		unmount();
	},
};

export const BlockedStorageDoesNotCrash: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play() {
		const descriptor = Object.getOwnPropertyDescriptor(window, 'localStorage')!,
			throwing = () => {
				throw new DOMException('Access denied', 'SecurityError');
			};
		Object.defineProperty(window, 'localStorage', {
			configurable: true,
			get: throwing,
		});

		try {
			const { result, nextUpdate, unmount } = await renderHook(() =>
				usePref<string>('blocked', 'fallback-value'),
			);

			// A blocked storage degrades to the default instead of throwing
			expect(result.current[0]).toBe('fallback-value');

			// The setter keeps the in-memory state working
			result.current[1]('changed');
			await nextUpdate();

			expect(result.current[0]).toBe('changed');
			unmount();
		} finally {
			Object.defineProperty(window, 'localStorage', descriptor);
		}
	},
};

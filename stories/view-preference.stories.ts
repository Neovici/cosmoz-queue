import { renderHook, waitUntil } from '@neovici/testing';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect } from 'storybook/test';
import useQueue from '../src/queue/use-queue';

const meta: Meta = {
	title: 'Tests/ViewPreference',
};

export default meta;

const KEY = 'view-pref-test',
	STORED = `pref-${KEY}`,
	items = [{ id: 'a' }, { id: 'b' }];

const mount = async () => {
	localStorage.removeItem(STORED);
	location.hash = '';

	const rendered = await renderHook(() =>
		useQueue<{ id: string }>({
			persist: KEY,
			fallback: 'split',
			tabHashParam: 'view-pref-tab',
		}),
	);
	rendered.result.current.setItems(items);
	await rendered.nextUpdate();
	return rendered;
};

const clickTab = (name: string) =>
	({
		button: 0,
		metaKey: false,
		ctrlKey: false,
		currentTarget: { getAttribute: () => name },
	}) as unknown as Event;

const openRecord = () =>
	new CustomEvent('omnitable-item-click', {
		// what the consumer's invoice-number cell passes to `itemClick`
		detail: { item: items[0], index: 0, activate: ['split', 'queue'] },
	});

export const ATabClickIsRemembered: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play() {
		const { result, unmount } = await mount();

		result.current.tabnav.onActivate(clickTab('overview'));
		await waitUntil(() => result.current.activeTab === 'overview');

		expect(localStorage.getItem(STORED)).toBe('overview');
		localStorage.removeItem(STORED);
		unmount();
	},
};

export const OpeningARecordIsNot: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play() {
		const { result, unmount } = await mount();

		result.current.tabnav.onActivate(clickTab('overview'));
		await waitUntil(() => result.current.activeTab === 'overview');

		result.current.onItemClick(openRecord());
		await waitUntil(() => result.current.activeTab !== 'overview');

		// the record opened in another tab, but the picked one is still stored
		expect(localStorage.getItem(STORED)).toBe('overview');
		localStorage.removeItem(STORED);
		unmount();
	},
};

export const AStoredTabIsWhereItOpens: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play() {
		localStorage.setItem(STORED, 'overview');
		location.hash = '';

		const { result, nextUpdate, unmount } = await renderHook(() =>
			useQueue<{ id: string }>({
				persist: KEY,
				fallback: 'split',
				tabHashParam: 'view-pref-tab',
			}),
		);
		result.current.setItems(items);
		await nextUpdate();

		expect(result.current.activeTab).toBe('overview');
		localStorage.removeItem(STORED);
		unmount();
	},
};

import { renderTabs } from '@neovici/cosmoz-tabs/next/index.js';
import { renderHook } from '@neovici/testing';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect } from 'storybook/test';
import useTabs, { Options } from '../src/queue/use-tabs';

const meta: Meta = {
	title: 'Tests/UseTabs',
};

export default meta;

const items = [{ id: '1' }, { id: '2' }];

// Mounts the hook and renders its real tab row — the same `renderTabs`
// binding `render.ts` uses — into the story container.
const mountTabs = async (
	options: Omit<Options<unknown>, 'items'>,
	canvasElement: HTMLElement,
) => {
	const hooked = await renderHook(() => useTabs({ items, ...options }));
	render(
		renderTabs({ ...hooked.result.current.tabnav }),
		canvasElement.querySelector('#test-container') as HTMLElement,
	);
	return hooked;
};

const tab = (canvasElement: HTMLElement, name: string) =>
	canvasElement.querySelector(`cosmoz-tab-next[name="${name}"]`)!;

// A tab pick, as the browser delivers it to the binding renderTabs attaches
const clickTab = (el: Element) =>
	el.dispatchEvent(
		new MouseEvent('click', { bubbles: true, cancelable: true, button: 0 }),
	);

export const StoresPickedTab: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play({ canvasElement }) {
		localStorage.removeItem('pref-test-queue-tab');
		try {
			const { result, unmount, nextUpdate } = await mountTabs(
				{ persistKey: 'test-queue', fallback: 'overview' },
				canvasElement,
			);

			// No stored pick yet: the fallback tab opens
			expect(result.current.tabnav.active?.name).toBe('overview');

			// Clicking Split is remembered
			clickTab(tab(canvasElement, 'split'));
			await nextUpdate();

			expect(result.current.tabnav.active?.name).toBe('split');
			expect(localStorage.getItem('pref-test-queue-tab')).toBe('split');
			unmount();
		} finally {
			localStorage.removeItem('pref-test-queue-tab');
		}
	},
};

export const OpensOnStoredTab: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play({ canvasElement }) {
		localStorage.setItem('pref-test-queue-2-tab', 'split');
		try {
			const { result, unmount } = await mountTabs(
				{ persistKey: 'test-queue-2', fallback: 'overview' },
				canvasElement,
			);

			// A fresh mount opens on the remembered tab
			expect(result.current.tabnav.active?.name).toBe('split');
			unmount();
		} finally {
			localStorage.removeItem('pref-test-queue-2-tab');
		}
	},
};

export const HashWinsOverStored: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play({ canvasElement }) {
		localStorage.setItem('pref-test-queue-3-tab', 'split');
		const hash = location.hash;
		// the params live after an inner '#' in the routed hash format
		location.hash = '#!#qtab=overview';
		try {
			const { result, unmount } = await mountTabs(
				{ persistKey: 'test-queue-3', hashParam: 'qtab', fallback: 'split' },
				canvasElement,
			);

			// The hash names the tab — the stored pick and the fallback lose
			expect(result.current.tabnav.active?.name).toBe('overview');
			// and the visit does not overwrite the stored pick
			expect(localStorage.getItem('pref-test-queue-3-tab')).toBe('split');
			unmount();
		} finally {
			if (location.hash !== hash) {
				location.hash = hash;
			}
			localStorage.removeItem('pref-test-queue-3-tab');
		}
	},
};

export const InvalidStoredTabFallsThrough: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play({ canvasElement }) {
		localStorage.setItem('pref-test-queue-4-tab', 'split');
		try {
			const { result, unmount } = await mountTabs(
				{ persistKey: 'test-queue-4', mobile: true, fallback: 'overview' },
				canvasElement,
			);

			// The remembered Split is disabled on mobile — the fallback opens
			expect(result.current.tabnav.active?.name).toBe('overview');
			expect(
				result.current.tabnav.tabs.find((t) => t.name === 'split')?.disabled,
			).toBe(true);
			unmount();
		} finally {
			localStorage.removeItem('pref-test-queue-4-tab');
		}
	},
};

export const ProgrammaticActivateDoesNotStore: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play({ canvasElement }) {
		localStorage.removeItem('pref-test-queue-5-tab');
		try {
			const { result, unmount, nextUpdate } = await mountTabs(
				{ persistKey: 'test-queue-5', fallback: 'overview' },
				canvasElement,
			);

			// Opening a record from the list goes through tabnav.activate:
			// it switches the tab…
			result.current.tabnav.activate('split');
			await nextUpdate();
			expect(result.current.tabnav.active?.name).toBe('split');

			// …but does not count as a pick
			expect(localStorage.getItem('pref-test-queue-5-tab')).toBeNull();
			unmount();
		} finally {
			localStorage.removeItem('pref-test-queue-5-tab');
		}
	},
};

export const DetailsClickDoesNotChangeLanding: StoryObj = {
	render: () => html`<div id="test-container"></div>`,
	async play({ canvasElement }) {
		localStorage.removeItem('pref-test-queue-6-tab');
		try {
			const first = await mountTabs(
				{ persistKey: 'test-queue-6', fallback: 'overview' },
				canvasElement,
			);

			// Clicking the details (queue) tab is stored…
			clickTab(tab(canvasElement, 'queue'));
			await first.nextUpdate();
			expect(first.result.current.tabnav.active?.name).toBe('queue');
			expect(localStorage.getItem('pref-test-queue-6-tab')).toBe('queue');
			first.unmount();

			// …but a fresh visit never opens there: the fallback wins
			const second = await mountTabs(
				{ persistKey: 'test-queue-6', fallback: 'overview' },
				canvasElement,
			);
			expect(second.result.current.tabnav.active?.name).toBe('overview');
			second.unmount();
		} finally {
			localStorage.removeItem('pref-test-queue-6-tab');
		}
	},
};

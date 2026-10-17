import { renderTabs } from '@neovici/cosmoz-tabs/next/index.js';
import { renderHook, waitUntil } from '@neovici/testing';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html, render } from 'lit-html';
import { expect } from 'storybook/test';
import useQueue, { type UseQueue } from '../src/queue/use-queue';

const meta: Meta = {
	title: 'Tests/UseQueue',
};

export default meta;

interface Item {
	id: string;
}

const items: Item[] = [{ id: '1' }, { id: '2' }];

// Mounts the queue and renders its real tab row — the same `renderTabs`
// binding `render.ts` uses. Items arrive the way the list delivers them:
// after the mount.
const mountQueue = async (
	options: UseQueue<Item>,
	canvasElement: HTMLElement,
	seed = true,
) => {
	const hooked = await renderHook(() => useQueue<Item>(options));
	// useMobile measures the host element — renderHook mounts it with no
	// width, so give it desktop width before the ResizeObserver settles
	hooked.host.style.display = 'block';
	hooked.host.style.width = '800px';
	await waitUntil(() => hooked.result.current.mobile === false);
	if (seed) {
		hooked.result.current.setItems(items);
		await hooked.nextUpdate();
	}
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
			const { result, unmount, nextUpdate } = await mountQueue(
				{ persistKey: 'test-queue', fallback: 'overview' },
				canvasElement,
			);

			// No stored pick yet: the fallback tab opens
			expect(result.current.activeTab).toBe('overview');

			// Clicking Split is remembered
			clickTab(tab(canvasElement, 'split'));
			await nextUpdate();

			expect(result.current.activeTab).toBe('split');
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
			const { result, unmount } = await mountQueue(
				{ persistKey: 'test-queue-2', fallback: 'overview' },
				canvasElement,
			);

			// A fresh mount opens on the remembered tab
			expect(result.current.activeTab).toBe('split');
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
			const { result, unmount } = await mountQueue(
				{ persistKey: 'test-queue-3', tabHashParam: 'qtab', fallback: 'split' },
				canvasElement,
				false,
			);

			// The hash names the tab — the stored pick and the fallback lose
			expect(result.current.activeTab).toBe('overview');
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
			const { result, unmount } = await mountQueue(
				{ persistKey: 'test-queue-4', fallback: 'overview' },
				canvasElement,
				false,
			);

			// The remembered Split is disabled on an empty queue — the fallback opens
			expect(result.current.activeTab).toBe('overview');
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
			const { result, unmount, nextUpdate } = await mountQueue(
				{ persistKey: 'test-queue-5', fallback: 'overview' },
				canvasElement,
			);

			// Opening a record from the list goes through tabnav.activate:
			// it switches the tab…
			result.current.tabnav.activate('split');
			await nextUpdate();
			expect(result.current.activeTab).toBe('split');

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
			const first = await mountQueue(
				{ persistKey: 'test-queue-6', fallback: 'overview' },
				canvasElement,
			);

			// Clicking the details (queue) tab is stored…
			clickTab(tab(canvasElement, 'queue'));
			await first.nextUpdate();
			expect(first.result.current.activeTab).toBe('queue');
			expect(localStorage.getItem('pref-test-queue-6-tab')).toBe('queue');
			first.unmount();

			// …but a fresh visit never opens there: the fallback wins
			const second = await mountQueue(
				{ persistKey: 'test-queue-6', fallback: 'overview' },
				canvasElement,
			);
			expect(second.result.current.activeTab).toBe('overview');
			second.unmount();
		} finally {
			localStorage.removeItem('pref-test-queue-6-tab');
		}
	},
};

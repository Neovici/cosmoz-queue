import { component } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect } from 'storybook/test';
import { usePref } from '../src/queue/use-pref';

const meta: Meta = {
	title: 'Tests/UsePref',
};

export default meta;

// Counter for unique component names
let counter = 0;

// Store for hook results - keyed by component instance
const hookResults = new Map<
	string,
	[string | undefined, (v: string) => void]
>();

// Create unique component for each test run
const createPrefComponent = (key: string, defaultValue?: string) => {
	const id = counter++;
	const tagName = `test-pref-${id}`;
	const prefKey = `${key}-${id}`;
	const localStorageKey = `pref-${prefKey}`;

	// Clear localStorage BEFORE defining component
	localStorage.removeItem(localStorageKey);

	const TestComponent = component(() => {
		const result = usePref(prefKey, defaultValue!);
		hookResults.set(tagName, result);
		return html`<div data-value="${result[0] ?? 'undefined'}">
			${result[0] ?? 'undefined'}
		</div>`;
	});
	customElements.define(tagName, TestComponent);

	return tagName;
};

export const DefaultPref: StoryObj = {
	render: () => {
		const tagName = createPrefComponent('default-test', 'asdad');
		(window as Record<string, unknown>).__defaultPrefTagName = tagName;
		const el = document.createElement(tagName);
		return el;
	},
	async play({ canvasElement }) {
		// Wait for component to render
		await new Promise((r) => setTimeout(r, 100));

		const tagName = (window as Record<string, unknown>)
			.__defaultPrefTagName as string;

		// Query inside shadow DOM
		const hostEl = canvasElement.querySelector(tagName);
		const shadowRoot = hostEl?.shadowRoot;
		const el = shadowRoot?.querySelector('[data-value]');

		expect(el?.getAttribute('data-value')).toBe('asdad');
	},
};

export const UpdatePref: StoryObj = {
	render: () => {
		const tagName = createPrefComponent('update-test');
		(window as Record<string, unknown>).__updatePrefTagName = tagName;
		const el = document.createElement(tagName);
		return el;
	},
	async play() {
		// Wait for component to render
		await new Promise((r) => setTimeout(r, 100));

		const tagName = (window as Record<string, unknown>)
			.__updatePrefTagName as string;
		const result = hookResults.get(tagName);
		expect(result).toBeDefined();

		// Initial value should be undefined
		expect(result![0]).toBeUndefined();

		// Update the pref
		result![1]('dads');

		// Wait for re-render
		await new Promise((r) => setTimeout(r, 100));

		const newResult = hookResults.get(tagName);
		expect(newResult![0]).toBe('dads');
	},
};

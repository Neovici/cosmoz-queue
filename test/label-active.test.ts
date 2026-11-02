import { render } from 'lit-html';
import { describe, expect, it } from 'vitest';
import { labelActive } from '../src/queue/label-active';

const tabs = [
	{ name: 'overview', title: 'List', content: 'list-icon' },
	{ name: 'split', title: 'Split', content: 'split-icon' },
	{ name: 'queue', title: 'Focus', content: 'queue-icon' },
];

const text = (content: unknown) => {
	const host = document.createElement('div');
	render(content, host);
	return host.textContent;
};

describe('labelActive', () => {
	it('adds the title to the active tab only', () => {
		const result = labelActive(tabs, 'split');
		expect(text(result[1].content)).toBe('split-iconSplit');
		expect(result[0]).toBe(tabs[0]);
		expect(result[2]).toBe(tabs[2]);
	});

	it('leaves every tab icon-only without an active tab', () => {
		expect(labelActive(tabs, undefined)).toEqual(tabs);
	});
});

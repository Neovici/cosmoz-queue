import type { Dialogable } from '@neovici/cosmoz-form';
import { render } from 'lit-html';
import { describe, expect, it } from 'vitest';
import { actionCount, defaultButton, type Action } from '../src/actions/index';

const renderToContainer = (template: unknown) => {
	const container = document.createElement('div');
	render(template as Parameters<typeof render>[1], container);
	return container;
};

describe('actionCount', () => {
	it('renders nothing for single item when all applicable', () => {
		const items = [{ id: 1 }];
		const container = renderToContainer(actionCount(items));
		expect(container.textContent?.trim()).toBe('');
	});

	it('renders (N) when all N items are applicable and N > 1', () => {
		const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
		const container = renderToContainer(actionCount(items));
		expect(container.textContent).toContain('(3)');
	});

	it('renders (N/M) when some items are applicable', () => {
		const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
		const applicable = [{ id: 1 }, { id: 2 }];
		const container = renderToContainer(actionCount(items, applicable));
		expect(container.textContent).toContain('(2/3)');
	});

	it('renders (1/M) when only 1 of M items is applicable', () => {
		const items = [{ id: 1 }, { id: 2 }];
		const applicable = [{ id: 1 }];
		const container = renderToContainer(actionCount(items, applicable));
		expect(container.textContent).toContain('(1/2)');
	});

	it('renders (1/M) for single applicable out of many', () => {
		const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
		const applicable = [{ id: 1 }];
		const container = renderToContainer(actionCount(items, applicable));
		expect(container.textContent).toContain('(1/3)');
	});
});

describe('defaultButton', () => {
	const makeOpts = (overrides: Record<string, unknown> = {}) =>
		({
			title: () => 'Test',
			dialog: () => ({}) as Dialogable<object>,
			items: [{ id: 1 }, { id: 2 }],
			open: () => {
				/* noop */
			},
			...overrides,
		}) as Action<{ id: number }, object> & Parameters<typeof defaultButton>[0];

	it('renders data-priority when priority is set', () => {
		const opts = makeOpts({ priority: 42 });
		const container = renderToContainer(defaultButton(opts));
		const button = container.querySelector('button');
		expect(button?.getAttribute('data-priority')).toBe('42');
	});

	it('omits data-priority when priority is undefined', () => {
		const opts = makeOpts();
		const container = renderToContainer(defaultButton(opts));
		const button = container.querySelector('button');
		expect(button?.hasAttribute('data-priority')).toBe(false);
	});

	it('renders nothing when no items are applicable', () => {
		const opts = makeOpts({ applicable: () => false });
		const container = renderToContainer(defaultButton(opts));
		expect(container.querySelector('button')).toBeNull();
	});

	it('renders title attribute from title()', () => {
		const opts = makeOpts();
		const container = renderToContainer(defaultButton(opts));
		const button = container.querySelector('button');
		expect(button?.getAttribute('title')).toBe('Test');
	});
});

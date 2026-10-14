import { describe, expect, it, vi } from 'vitest';
import type { TemplateResult } from 'lit-html';

// Capture html`...` templates so we can inspect the rendered attributes
const templates: { strings: string[]; values: unknown[] }[] = [];
const htmlMock = (
	strings: string[],
	...values: unknown[]
): { strings: string[]; values: unknown[] } => {
	const template = { strings, values };
	templates.push(template);
	return template;
};

vi.mock('lit-html', () => ({
	html: htmlMock,
	nothing: Symbol('nothing'),
}));

vi.mock('lit-html/directives/guard.js', () => ({
	guard: () => () => false,
}));

vi.mock('lit-html/directives/if-defined.js', () => ({
	ifDefined: (v: unknown) => v,
}));

vi.mock('lit-html/directives/when.js', () => ({
	when: (_cond: unknown, truthy: unknown) => truthy,
}));

vi.mock('@neovici/cosmoz-button', () => ({}));

vi.mock('@neovici/cosmoz-resizable', () => ({}));

vi.mock('@neovici/cosmoz-slider', () => ({
	slideInLeft: 'slideInLeft',
	slideInRight: 'slideInRight',
}));

vi.mock('@neovici/cosmoz-tabs/next/index.js', () => ({
	renderTabs: () => null,
}));

vi.mock('@neovici/cosmoz-utils/directives/lazy-until', () => ({
	lazyUntil: (v: unknown) => v,
}));

vi.mock('i18next', () => ({
	t: (s: string) => s,
}));

vi.mock('../src/queue/style', () => ({
	queueStyle: '',
}));

vi.mock('../src/queue/use-queue', () => ({
	default: () => ({
		index: 0,
		hideActions: false,
		items: [],
		setItems: () => undefined,
		setSelected: () => undefined,
		totalAvailable: undefined,
		setTotalAvailable: () => undefined,
		onItemClick: () => undefined,
		rowPartFn: undefined,
		nav: { index: 0, items: [] },
		tabnav: { tabs: [], active: undefined },
	}),
}));

vi.mock('../src/queue/use-async-action', () => ({
	default: () => ({
		listRef: { current: undefined },
		onAsyncSimpleAction: () => undefined,
	}),
}));

const { queue } = await import('../src/queue/queue');
type Props = Parameters<typeof queue>[0];
type SplitConfig = NonNullable<Props['split']>;

const noop = () => ({}) as unknown as TemplateResult;
const baseProps = {
	heading: 'Test',
	list: noop,
	view: noop,
	loader: noop,
};

const rootTemplate = () =>
	templates.find((tpl) =>
		tpl.strings.join('').includes('<cosmoz-resizable-view'),
	);

const attrOf = (
	tpl: { strings: string[]; values: unknown[] },
	attr: string,
): unknown => {
	// Re-insert every interpolated value so `${value}` positions can be matched
	const joined = tpl.strings.reduce(
		(acc, string, index) =>
			index < tpl.values.length
				? `${acc}${string}__VALUE_${index}__`
				: `${acc}${string}`,
		'',
	);
	const match = joined.match(new RegExp(`${attr}=__VALUE_(\\d+)__`, 'u'));
	return match ? tpl.values[Number(match[1])] : undefined;
};

const callQueue = (split?: SplitConfig) => {
	templates.length = 0;
	queue({ ...baseProps, split });
	const root = rootTemplate();
	expect(root).toBeDefined();
	return {
		'initial-size': attrOf(root!, 'initial-size'),
		'min-size': attrOf(root!, 'min-size'),
	};
};

describe('queue split attrs', () => {
	it('falls back to min-size="100" when split is omitted', () => {
		const attrs = callQueue();
		expect(attrs).toEqual({ 'initial-size': '50%', 'min-size': '100' });
	});

	it('falls back to min-size="100" when split has no minSize', () => {
		const attrs = callQueue({});
		expect(attrs).toEqual({ 'initial-size': '50%', 'min-size': '100' });
	});

	it('maps minSize number to the previous pane minimum', () => {
		const attrs = callQueue({ minSize: 300 });
		expect(attrs['min-size']).toBe('300');
	});

	it('maps single-entry minSize array unchanged', () => {
		const attrs = callQueue({ minSize: [300] });
		expect(attrs['min-size']).toBe('300');
	});

	it('maps minSize array to minimums for both panes', () => {
		const attrs = callQueue({ minSize: [300, 400] });
		expect(attrs['min-size']).toBe('300 400');
	});

	it('maps an empty minSize array to the min-size="100" fallback (never an empty attr)', () => {
		const attrs = callQueue({ minSize: [] });
		expect(attrs['min-size']).toBe('100');
	});
});
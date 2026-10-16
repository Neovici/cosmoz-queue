import { describe, expect, it, vi } from 'vitest';

// Capture html`...` templates so we can inspect their contents
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

vi.mock('lit-html/directives/until.js', () => ({
	until: (v: unknown) => v,
}));

vi.mock('lit-html/directives/when.js', () => ({
	when: (_cond: unknown, truthy: unknown) => truthy,
}));

vi.mock('@neovici/cosmoz-form', () => ({
	formDialog$: () => null,
}));

vi.mock('@neovici/cosmoz-omnitable', () => ({}));

vi.mock('@pionjs/pion', () => ({
	lift: (fn: unknown) => fn,
}));

vi.mock('../src/list/more/render-more', () => ({
	renderLoadMore: () => null,
}));

vi.mock('@neovici/cosmoz-utils/directives/breakpoints', () => ({
	breakpoints: (...args: unknown[]) => ({ __breakpoints: args }),
}));

const { renderListCore } = await import('../src/list/render-list-core');
const { nothing } = await import('lit-html');

const minimalProps: Parameters<typeof renderListCore>[0] = {
	settingsId: 'test-list',
	exposedParts: '',
	enabledColumns: ['a'],
	noLocal: true,
	data$: Promise.resolve([{ id: '1' }]),
	columns: {},
	selectedItems: [],
	setSelectedItems: () => undefined,
	setVisibleItems: () => undefined,
	visibleItems: [],
	hasItems: false,
	setFilters: () => undefined,
	setIsMini: () => undefined,
	isMini: false,
	setTotalAvailable: () => undefined,
	sortOn: undefined,
	setSortOn: () => undefined,
	descending: false,
	setDescending: () => undefined,
	groupOn: undefined,
	setGroupOn: () => undefined,
	filters: undefined,
	params: {},
	paramsMeta: {},
	compareItemsFn: undefined,
	loadMore: undefined,
	dialog: undefined,
	open: () => undefined,
};

const getOmnitableChildren = (result: unknown[]): unknown[] => {
	const omnitableTemplate = result[0] as {
		strings: string[];
		values: unknown[];
	};
	// The children array is the last value (the >${[...]}< slot content)
	const children = omnitableTemplate.values.at(-1);
	return Array.isArray(children) ? children : [];
};

const hasSlotTemplate = (children: unknown[]): boolean =>
	children.some(
		(v) =>
			v != null &&
			typeof v === 'object' &&
			'strings' in (v as object) &&
			(v as { strings: string[] }).strings.join('').includes('<slot></slot>'),
	);

describe('renderListCore', () => {
	it('renders an unnamed <slot> even when content is omitted', () => {
		templates.length = 0;
		const result = renderListCore(minimalProps) as unknown[];
		expect(hasSlotTemplate(getOmnitableChildren(result))).toBe(true);
	});

	it('renders an unnamed <slot> when content is provided', () => {
		templates.length = 0;
		const result = renderListCore({
			...minimalProps,
			content: () => null,
		}) as unknown[];
		expect(hasSlotTemplate(getOmnitableChildren(result))).toBe(true);
	});

	it('does not mount the breakpoints directive when breakpoints is omitted', () => {
		templates.length = 0;
		const result = renderListCore(minimalProps) as unknown[];
		const omnitable = result[0] as { values: unknown[] };
		// The gate sits between the @descending-changed and .miniBreakpoint
		// parts; when tiers are unset it renders as nothing.
		expect(omnitable.values.at(-4)).toBe(nothing);
		const directiveParts = omnitable.values.filter(
			(v) =>
				v != null && typeof v === 'object' && '__breakpoints' in (v as object),
		);
		expect(directiveParts).toHaveLength(0);
	});

	it('mounts the breakpoints directive with tiers when breakpoints is set', () => {
		templates.length = 0;
		const tiers: Parameters<typeof renderListCore>[0]['breakpoints'] = () => [
			{ name: 'mini', maxWidth: 480, props: { renderItem: null } },
			{ props: { renderItem: null } },
		];
		const result = renderListCore({
			...minimalProps,
			breakpoints: tiers,
		}) as unknown[];
		const omnitable = result[0] as { values: unknown[] };
		const directivePart = omnitable.values.find(
			(v) =>
				v != null && typeof v === 'object' && '__breakpoints' in (v as object),
		) as { __breakpoints: unknown[] } | undefined;
		expect(directivePart?.__breakpoints[0]).toBe(tiers);
		expect(directivePart?.__breakpoints[1]).toEqual([]);
	});
});

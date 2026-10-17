import { breakpoints } from '@neovici/cosmoz-utils/directives/breakpoints';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@neovici/cosmoz-utils/directives/breakpoints', () => ({
	breakpoints: vi.fn(),
}));

vi.mock('@neovici/cosmoz-button', () => ({}));

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

const { renderListCore } = await import('../src/list/render-list-core');

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
		const result = renderListCore(minimalProps) as unknown[];
		expect(hasSlotTemplate(getOmnitableChildren(result))).toBe(true);
	});

	it('renders an unnamed <slot> when content is provided', () => {
		const result = renderListCore({
			...minimalProps,
			content: () => null,
		}) as unknown[];
		expect(hasSlotTemplate(getOmnitableChildren(result))).toBe(true);
	});

	it('does not mount the breakpoints directive when omitted', () => {
		renderListCore(minimalProps);
		expect(breakpoints).not.toHaveBeenCalled();
	});

	it('mounts the breakpoints directive with the given tiers', () => {
		const tiers = () => [
			{ name: 'mini', maxWidth: 480, props: { renderItem: null } },
			{ props: { renderItem: null } },
		];
		renderListCore({ ...minimalProps, breakpoints: tiers });
		expect(breakpoints).toHaveBeenCalledWith(tiers, []);
	});
});

import type { StateUpdater } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, fn } from 'storybook/test';
import type { Columns } from '../src/list/column';
import {
	renderListCore,
	type RenderListCore,
} from '../src/list/render-list-core';

const mockProps = (): RenderListCore<Columns, object> => ({
	settingsId: 'test',
	data$: Promise.resolve([]),
	columns: {} as Columns,

	selectedItems: [],
	sortOn: undefined,
	descending: false,
	groupOn: undefined,
	filters: undefined,
	isMini: false,

	setSortOn: fn(),
	setDescending: fn(),
	setGroupOn: fn(),
	setSelectedItems: fn(),
	setVisibleItems: fn(),
	setFilters: fn(),
	setTotalAvailable: fn(),
	setIsMini: fn(),

	dialog: undefined,
	open: fn() as RenderListCore<Columns, object>['open'],
	loadMore: undefined,
});

const meta: Meta = {
	title: 'Tests/RenderListCore',
};

export default meta;

export const MiniBreakpointBinding: StoryObj = {
	render: () =>
		html`<div id="test-container">
			${renderListCore({ ...mockProps(), miniBreakpoint: 600 })}
		</div>`,
	async play({ canvasElement }) {
		const omnitable = canvasElement.querySelector(
			'cosmoz-omnitable',
		) as HTMLElement & { miniBreakpoint: number };
		expect(omnitable).toBeTruthy();
		expect(omnitable.miniBreakpoint).toBe(600);
	},
};

export const IsMiniChangedEvent: StoryObj = {
	args: {
		setIsMini: fn(),
	},
	render: (args) =>
		html`<div id="test-container">
			${renderListCore({
				...mockProps(),
				setIsMini: args.setIsMini as StateUpdater<boolean>,
			})}
		</div>`,
	async play({ args, canvasElement }) {
		const omnitable = canvasElement.querySelector(
			'cosmoz-omnitable',
		) as HTMLElement;
		expect(omnitable).toBeTruthy();

		omnitable.dispatchEvent(
			new CustomEvent('is-mini-changed', {
				detail: { value: true },
			}),
		);
		expect(args.setIsMini).toHaveBeenCalledWith(true);
	},
};

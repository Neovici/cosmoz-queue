import { renderLoadMore } from '#cz/render/load-more.ts';
import '@neovici/cosmoz-omnitable';
import { formDialog } from '@neovici/cosmoz-form';
import { lift } from '@pionjs/pion';
import { html } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import { Action, renderActions } from '../actions';
import type { Column, Columns } from './column';
import { renderGenericActions } from './render-generic-actions';
import { UseListCoreResult } from './use-list-core';

export interface RenderListCoreProps<TItem extends object> {
	settingsId: string;
	exposedParts?: string;
	hashParam?: string;
	csvFilename?: string;
	enabledColumns?: string[];
	noLocal?: boolean;
	// TODO: replace any
	actions?: Action<TItem, any>[];
}

export interface RenderListCore<TColumns extends Columns, TItem extends object>
	extends UseListCoreResult<TColumns, TItem>, RenderListCoreProps<TItem> {}

export const renderColumns = <T extends Columns>(columns: T) =>
	Object.entries(columns).map(([name, column]) =>
		(column as Column<unknown>).render({ ...column, name }),
	);

export const renderListCore = <TColumns extends Columns, TItem extends object>({
	settingsId,
	hashParam,
	enabledColumns,
	csvFilename,
	exposedParts,
	data$,
	noLocal = true,

	sortOn,
	setSortOn,
	descending,
	setDescending,
	groupOn,
	setGroupOn,
	selectedItems,
	setSelectedItems,
	setVisibleItems,
	setFilters,

	columns,

	actions,
	dialog,
	open,

	genericActions$,

	loadMore,
}: RenderListCore<TColumns, TItem>) => [
	html`<cosmoz-omnitable
		id="omnitable"
		?no-local=${noLocal}
		.hashParam=${hashParam}
		.data=${until(data$)}
		.csvFilename=${csvFilename}
		.enabledColumns=${enabledColumns}
		?loading=${until(
			Promise.resolve(data$).then(
				() => false,
				() => false,
			),
			true,
		)}
		.compareItemsFn=${guard(
			[],
			() => (a: { id: string }, b: { id: string }) => a.id === b.id,
		)}
		.settingsId=${settingsId}
		exportparts=${exposedParts}
		@visible-data-changed=${lift(setVisibleItems)}
		@filters-changed=${lift(setFilters)}
		.selectedItems=${selectedItems}
		@selected-items-changed=${lift(setSelectedItems)}
		.groupOn=${groupOn}
		@group-on-changed=${lift(setGroupOn)}
		.sortOn=${sortOn}
		@sort-on-changed=${lift(setSortOn)}
		descending=${descending}
		@descending-changed=${lift(setDescending)}
		>${[
			renderColumns(columns),
			when(
				actions,
				renderActions({ open, items: selectedItems, slot: 'actions' }),
			),
			renderGenericActions(genericActions$, 'actions'),
			renderLoadMore({ data$, onMore: loadMore }),
		]}</cosmoz-omnitable
	>`,
	formDialog(dialog),
];

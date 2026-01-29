import { useFormDialogable } from '@neovici/cosmoz-form';
import { useCallback, useMemo } from '@pionjs/pion';
import type { ColumnFilters, ColumnNames, Columns } from './column';
import { TList$, useMore } from './more/use-more';
import { ListCoreState, useListCoreState } from './use-list-state';

export interface ParamsOptions<C> {
	descending?: boolean;
	sortOn?: ColumnNames<C>;
	columns: C;
	filters?: ColumnFilters<C>;
}

export type GenericActionsCallback<
	TItem,
	TAction extends object = object,
> = readonly [
	(opts: { selectedItems: TItem[] }) => Promise<TAction[]>,
	readonly unknown[],
];

export interface UseListCore<
	TColumns extends Columns,
	TParams extends object,
	TItem extends object,
	TAction extends object = object,
> {
	pageSize?: number;
	params: readonly [(opts: ParamsOptions<TColumns>) => TParams, unknown[]];
	columns: readonly [() => TColumns, unknown[]];
	list$: readonly [TList$<TParams, TItem>, unknown[]];
	genericActions$?: GenericActionsCallback<TItem, TAction>;
}

type UseFormDialogable = ReturnType<typeof useFormDialogable>;

export interface UseListCoreResult<
	TColumns extends Columns,
	TItem extends object,
	TAction extends object = object,
>
	extends
		ListCoreState<TItem, TColumns>,
		Pick<UseFormDialogable, 'dialog' | 'open'> {
	data$: PromiseLike<TItem[]>;
	columns: TColumns;
	loadMore: (() => void) | undefined;
	genericActions$: Promise<TAction[]>;
}

const noGenericActions = [async () => [], []] as const;
const useGenericActions$ = <TItem, TAction extends object>(
	[fn, values]: GenericActionsCallback<
		TItem,
		TAction
	> = noGenericActions as GenericActionsCallback<TItem, TAction>,
	selectedItems: TItem[],
): Promise<TAction[]> =>
	useMemo(
		async () => fn?.({ selectedItems }) ?? [],
		[...values, selectedItems],
	);

export const useListCore = <
	TColumns extends Columns,
	TParams extends object,
	TItem extends object,
	TAction extends object = object,
>({
	columns: _columns,
	params: __params,
	list$: _list$,
	genericActions$: _genericActions$,
	pageSize,
}: UseListCore<TColumns, TParams, TItem, TAction>): UseListCoreResult<
	TColumns,
	TItem,
	TAction
> => {
	const state = useListCoreState<TItem, TColumns>();
	const { filters, descending, sortOn, setTotalAvailable } = state;

	const columns = useMemo(..._columns);
	const _params = useCallback(...__params);
	const { rtkn, dialog, open } = useFormDialogable();

	const params = useMemo(
		() =>
			_params({
				filters,
				descending,
				sortOn,
				columns,
			}),
		[_params, filters, descending, sortOn, columns, rtkn],
	);
	const list$ = useCallback(..._list$);
	const { data$, loadMore } = useMore({
		list$,
		setTotalAvailable,
		params,
		pageSize,
	});

	const genericActions$ = useGenericActions$(
		_genericActions$,
		state.selectedItems,
	);

	return {
		...state,
		data$,
		columns,
		dialog,
		open,
		loadMore,
		genericActions$,
	};
};

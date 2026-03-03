import { useFormDialogable } from '@neovici/cosmoz-form';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect, useMemo } from '@pionjs/pion';
import type { ColumnFilters, ColumnNames, Columns } from './column';
import { TList$, useMore } from './more/use-more';
import { ListCoreState, useListCoreState } from './use-list-state';

export interface ParamsOptions<C> {
	descending?: boolean;
	sortOn?: ColumnNames<C>;
	columns: C;
	filters?: ColumnFilters<C>;
}

export interface UseListCore<
	TColumns extends Columns,
	TParams extends object,
	TItem extends object,
> {
	pageSize?: number;
	params: readonly [(opts: ParamsOptions<TColumns>) => TParams, unknown[]];
	columns: readonly [(opts: { paramsMeta: TParams }) => TColumns, unknown[]];
	list$: readonly [TList$<TParams, TItem>, unknown[]];
}

type UseFormDialogable = ReturnType<typeof useFormDialogable>;

export interface UseListCoreResult<
	TColumns extends Columns,
	TItem extends object = object,
	TParams extends object = object,
>
	extends
		ListCoreState<TItem, TColumns>,
		Pick<UseFormDialogable, 'dialog' | 'open'> {
	data$: PromiseLike<TItem[]>;
	columns: TColumns;
	params: TParams;
	paramsMeta: TParams;
	loadMore: (() => void) | undefined;
}

export const useListCore = <
	TColumns extends Columns,
	TParams extends object,
	TItem extends object,
>({
	columns: _columns,
	params: __params,
	list$: _list$,
	pageSize,
}: UseListCore<TColumns, TParams, TItem>): UseListCoreResult<
	TColumns,
	TItem,
	TParams
> => {
	const state = useListCoreState<TItem, TColumns>();
	const { filters, descending, sortOn, setTotalAvailable } = state;

	const paramsMeta = useMeta({} as TParams);
	const columns = useMemo(() => _columns[0]({ paramsMeta }), _columns[1]);
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
	useEffect(() => {
		Object.assign(paramsMeta, params);
	}, [paramsMeta, params]);
	const list$ = useCallback(..._list$);
	const { data$, loadMore } = useMore({
		list$,
		setTotalAvailable,
		params,
		pageSize,
	});

	return {
		...state,
		data$,
		columns,
		params,
		paramsMeta,
		dialog,
		open,
		loadMore,
	};
};

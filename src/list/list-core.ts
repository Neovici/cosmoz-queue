import type { Columns } from './column';
import { renderListCore, RenderListCoreProps } from './render-list-core';
import { useListCore, UseListCore } from './use-list-core';

export type ListCore<
	TColumns extends Columns,
	TParams extends object,
	TItem extends object,
	TAction extends object = object,
> = UseListCore<TColumns, TParams, TItem, TAction> &
	RenderListCoreProps<TItem, TAction>;

export const listCore = <
	TColumns extends Columns,
	TParams extends object,
	TItem extends object,
	TAction extends object = object,
>(
	props: ListCore<TColumns, TParams, TItem, TAction>,
) => {
	const list = useListCore(props);
	return renderListCore({ ...props, ...list });
};

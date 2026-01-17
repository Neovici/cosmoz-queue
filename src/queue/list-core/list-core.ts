import type { Columns } from './column';
import { renderListCore, RenderListCoreProps } from './render-list-core';
import { useListCore, UseListCore } from './use-list-core';

export type ListCore<
	TColumns extends Columns,
	TParams extends object,
	TItem extends object,
> = UseListCore<TColumns, TParams, TItem> & RenderListCoreProps<TItem>;

export const listCore = <
	TColumns extends Columns,
	TParams extends object,
	TItem extends object,
>(
	props: ListCore<TColumns, TParams, TItem>,
) => {
	const list = useListCore(props);
	return renderListCore({ ...props, ...list });
};

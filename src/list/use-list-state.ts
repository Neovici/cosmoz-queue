import { useProperty } from '@pionjs/pion';
import { ColumnFilters, ColumnNames } from './column';

interface ListCoreDefaults<TColumns extends object> {
	filters: ColumnFilters<TColumns>;
	sortOn?: ColumnNames<TColumns>;
	groupOn?: ColumnNames<TColumns>;
	descending?: boolean;
}

export const useListCoreState = <TItem extends object, TColumns extends object>(
	defaults?: ListCoreDefaults<TColumns>,
) => {
	const [filters, setFilters] = useProperty('filters', () => defaults?.filters);
	const [descending, setDescending] = useProperty(
		'descending',
		() => defaults?.descending ?? false,
	);
	const [groupOn, setGroupOn] = useProperty('groupOn', () => defaults?.groupOn);
	const [sortOn, setSortOn] = useProperty('sortOn', () => defaults?.sortOn);
	const [, setVisibleItems] = useProperty<TItem[]>('visibleItems', []);
	const [selectedItems, setSelectedItems] = useProperty<TItem[]>(
		'selectedItems',
		[],
	);
	// TODO: use pagination
	const [, setTotalAvailable] = useProperty<number>('totalAvailable');

	return {
		filters,
		setFilters,
		descending,
		setDescending,
		sortOn,
		setSortOn,
		groupOn,
		setGroupOn,
		selectedItems,
		setSelectedItems,
		setVisibleItems,
		setTotalAvailable,
	};
};

export type ListCoreState<
	TItem extends object,
	TColumns extends object,
> = ReturnType<typeof useListCoreState<TItem, TColumns>>;

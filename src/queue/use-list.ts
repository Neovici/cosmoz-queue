import { useMemo, useState, useCallback } from '@pionjs/pion';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { Rec } from '@neovici/cosmoz-utils/object';
import { updateWith } from '../util/polymer-property-changed-event.js';

type NewState<T> = T | ((previousState?: T) => T);
type StateUpdater<T> = (value: NewState<T>) => void;

interface FilterMeta<F extends Rec<string>> {
	filters: F;
	onFilter: (name: PropertyKey, value: any) => void;
	setFilters: StateUpdater<F>;
}

export const filter =
	<F extends Rec<string>>(meta: FilterMeta<F>) =>
	(name: keyof F) =>
	(e: CustomEvent<{ value: F[typeof name] }>) => {
		const { value } = e.detail;
		if (value === meta.filters?.[name]) return;
		meta.setFilters((f) => ({ ...f, [name]: value }) as F);
		meta.onFilter(name, value);
	};

export const notify =
	(host: EventTarget) => (name: string) => (e: CustomEvent) => {
		host.dispatchEvent(new CustomEvent(name, { detail: e.detail }));
	};

export const useList = <F extends Rec<string>>() => {
	const host = useHost();
	const [sortOn, setSortOn] = useState<string>();
	const [descending, setDescending] = useState(false);
	const [filters, setFilters] = useState<F>({} as F);

	const onFilter = useCallback<FilterMeta<F>['onFilter']>(
		(name, value) =>
			host.dispatchEvent(
				new CustomEvent('filter', { detail: { name, value } }),
			),
		[],
	);
	const meta = useMeta({ filters, setFilters, onFilter });

	return {
		sortOn,
		descending,
		filters,
		onSort: useMemo(() => updateWith(setSortOn), []),
		onDescending: useMemo(() => updateWith(setDescending), []),
		filter: useMemo(() => filter(meta as any), []),
		notify: useMemo(() => notify(host), []),
	};
};

export const useListState = <I>() => {
	const [totalAvailable, setTotalAvailable] = useState<number>(),
		[items, setItems] = useState<I[]>([]),
		[selected, setSelected] = useState<I[]>([]);

	return {
		totalAvailable,
		setTotalAvailable,
		items,
		setItems,
		selected,
		setSelected,
	};
};

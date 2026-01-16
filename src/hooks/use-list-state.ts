import { useState } from '@pionjs/pion';
import type { ListState } from '../types';

export const useListState = <I>(): ListState<I> => {
	const [totalAvailable, setTotalAvailable] = useState<number>();
	const [items, setItems] = useState<I[]>([]);
	const [selected, setSelected] = useState<I[]>([]);

	return {
		totalAvailable,
		setTotalAvailable,
		items,
		setItems,
		selected,
		setSelected,
	};
};

export default useListState;

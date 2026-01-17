import { useEffect, useMemo, useRef, useState } from '@pionjs/pion';
import { identity } from '@neovici/cosmoz-utils/function';
import { useHashParam, link } from '@neovici/cosmoz-router/use-hash-param';
import { navigate } from '@neovici/cosmoz-router';

export interface MapId<I> {
	(i: I): string;
}

const useLastValue = <T>(value: T) => {
	const lastValue = useRef<T | undefined>(undefined);
	// eslint-disable-next-line no-void
	useEffect(() => void (lastValue.current = value), [value]);
	return lastValue.current;
};

const find = <I>(list: I[], item: I, id: MapId<I>, index: number) =>
	list.find((i) => id(i) === id(item)) ?? list[index] ?? list[0];

const findByParam = <I>(list: I[], param: string, id: MapId<I>) =>
	list.find((i) => id(i) === param) ?? list[0];

export interface Opts<I> {
	id: MapId<I>;
	hashParam: Parameters<typeof useHashParam>['0'];
	maintainSelection?: boolean;
}

export default <I>(
	items: I[],
	{ id = identity as MapId<I>, hashParam, maintainSelection }: Opts<I>,
) => {
	const [item, setItem] = useState(() => items[0]),
		[param] = useHashParam(hashParam),
		index = useMemo(() => items.indexOf(item as I), [items, item]),
		prevIndex = useLastValue(index),
		{ prev, next } = useMemo(() => {
			const end = items.length - 1;
			return {
				...(index > 0 && {
					prev: () =>
						setItem(items[Math.max(0, Math.min(end, index - 1))] as I),
				}),
				...(index < end && {
					next: () =>
						setItem(items[Math.max(0, Math.min(end, index + 1))] as I),
				}),
			};
		}, [items, index]);

	useEffect(() => {
		if (!item || !hashParam) {
			return;
		}
		navigate(link(hashParam, id(item as I) as string) as string, null, {
			notify: false,
		});
	}, [item]);

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setItem((item) => {
			if (!item && param != null) {
				return findByParam(items, param as string, id);
			}

			if (items.indexOf(item!) >= 0) {
				return item as I;
			}

			if (!item || !maintainSelection) {
				return items[0];
			}

			return find(items, item, id, prevIndex as number);
		});
	}, [items, param]);

	return {
		forward: index > prevIndex!,
		index,
		item,
		items,
		setItem,
		prev,
		next,
	};
};

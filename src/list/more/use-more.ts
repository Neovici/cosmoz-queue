import { StateUpdater, useEffect, useMemo, useState } from '@pionjs/pion';

export interface TList$<TParams extends object, TItem extends object> {
	(props: {
		params: TParams;
		page: number;
		pageSize: number;
	}): PromiseLike<{ items: TItem[]; total: number }>;
}

interface UseMore<TParams extends object, TItem extends object> {
	pageSize?: number;
	params: TParams;
	list$: TList$<TParams, TItem>;
	setTotalAvailable: StateUpdater<number | undefined>;
}

interface Data<TItem extends object, TParams extends object> {
	page: number;
	totalAvailable: number;
	data$: PromiseLike<TItem[]>;
	params: TParams;
}

export const useMore = <TParams extends object, TItem extends object>({
	params: _params,
	list$,
	pageSize = 50,
	setTotalAvailable,
}: UseMore<TParams, TItem>) => {
	const [{ page, data$, totalAvailable, params }, setData] = useState<
		Data<TItem, TParams>
	>({
		page: 0,
		data$: Promise.resolve([]),
		totalAvailable: Infinity,
		params: _params,
	});
	const hasMore =
		pageSize > 0 &&
		totalAvailable < Infinity &&
		totalAvailable >= pageSize &&
		page < Math.ceil(totalAvailable / pageSize);

	const loadMore = useMemo(
		() =>
			hasMore ? () => setData((s) => ({ ...s, page: s.page + 1 })) : undefined,
		[hasMore],
	);
	useEffect(
		() =>
			setData((d) => ({
				...d,
				params: _params,
				page: 0,
				data$: Promise.resolve([]),
			})),
		[_params, list$],
	);

	useEffect(() => {
		setData(({ data$, params, page, ...thru }) => ({
			...thru,
			params,
			page,
			data$: Promise.resolve(data$).then((prev) =>
				list$({
					params,
					page,
					pageSize,
				}).then((data) => {
					const totalAvailable = data.total;
					setTotalAvailable(totalAvailable);
					setData((s) => ({
						...s,
						totalAvailable,
					}));
					return [...prev, ...data.items];
				}),
			),
		}));
	}, [page, params, list$, pageSize]);

	return { data$, loadMore };
};

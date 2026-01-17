import { debounce$ } from '@neovici/cosmoz-utils/promise';
import { useEffect, useMemo, useState } from '@pionjs/pion';
import { jsonPost } from '../util/fetch/fetch';
import { apiUrl } from '../util/fetch/url';

import { nothing } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';
import { until } from 'lit-html/directives/until.js';
import { when } from 'lit-html/directives/when.js';
import { Performable } from '../types/performable';

interface Data<TAvailableAction> {
	[key: string]: Performable<TAvailableAction>[];
}
export interface Item {
	id: string;
}
export interface Props<I extends Item> {
	pathLocator: string;
	selected: I[];
	api: string;
}
interface State<TAvailableAction> {
	fetching?: boolean;
	data?: Data<TAvailableAction>;
	api$?: Promise<unknown>;
	error?: Error;
}

const mapActions = <TAvailableAction>(
	ids: string[],
	data?: Data<TAvailableAction>,
) => {
	const acts = { ...data };
	const rows = ids.map((id) => {
		const ac = (acts[id] ??= []);
		return { id, actions: ac };
	});
	return { actions: acts, actionRows: rows };
};

export default <I extends Item, TAvailableAction>({
	pathLocator,
	selected,
	api: url,
}: Props<I>): {
	actions: Data<TAvailableAction>;
	actionRows: {
		id: string;
		actions: Performable<TAvailableAction>[];
	}[];
	actionsFetching: boolean | undefined;
} => {
	const [{ fetching: actionsFetching, data }, setApi$] = useState<
			State<TAvailableAction>
		>({}),
		ids = useMemo(() => selected?.map((i) => i.id) ?? [], [selected]),
		{ actions, actionRows } = useMemo(
			() => mapActions(ids, data),
			[ids.length, ...ids, data],
		);
	const post$ = useMemo(() => debounce$(jsonPost, 320), []);

	useEffect(() => {
		if (ids.length < 1) {
			setApi$({});
			return;
		}
		const ac = new AbortController();
		setApi$(() => ({
			api$: (
				post$(apiUrl(url, { pathLocator }), ids, {
					signal: ac.signal,
				}) as Promise<Data<TAvailableAction>>
			).then(
				(data) => setApi$((api) => ({ ...api, fetching: false, data })),
				(err) => setApi$({ error: err }),
			),
			fetching: true,
		}));

		return () => ac.abort();
	}, [ids.length, pathLocator, ...ids]);

	return { actions, actionRows, actionsFetching };
};

export const actions$ = <TAvailableAction>({
	api,
	pathLocator,
	ids,
	renderActions,
	deps = [],
}: {
	api: string;
	pathLocator: string;
	ids: string[];
	renderActions: (opts: ReturnType<typeof mapActions>) => unknown;
	deps?: unknown[];
}) =>
	when(ids?.length > 0, () =>
		guard([ids.length, ...ids, pathLocator, ...deps], () =>
			until(
				(
					jsonPost(
						apiUrl(api, {
							pathLocator,
						}),
						ids,
					) as Promise<Data<TAvailableAction>>
				).then(
					(data) => renderActions(mapActions(ids, data)),
					() => nothing,
				),
			),
		),
	);

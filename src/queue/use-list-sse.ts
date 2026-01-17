import { useMemo, useEffect } from '@pionjs/pion';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { Rec } from '@neovici/cosmoz-utils/object';
import { debounce$ } from '@neovici/cosmoz-utils/promise';
import { get } from '../util/path';

export interface ListEventHandlersMap {
	'list-item-update': CustomEvent<{
		id: string;
		item: unknown;
		update: (i: unknown) => void;
	}>;
	'list-item-remove': CustomEvent<{
		id: string;
		item: unknown;
		remove: () => void;
	}>;
}

interface Item extends Rec {
	id: string;
}

interface Omnitable<T extends Rec> extends HTMLElement {
	data?: T[];
	replaceItemAtIndex: (index: number, update: T) => void;
	removeItem: (i: T) => void;
}

interface List$<I, P> {
	(params: P & { objectIds: string[] }): PromiseLike<I[] | { items: I[] }>;
}

const process$ = <I extends Item>({
	updates,
	objectIds,
	omnitable,
	host,
	idProperty,
}: {
	updates: I[];
	omnitable: Omnitable<I>;
	objectIds: string[];
	host: HTMLElement;
	idProperty: string;
}) => {
	for (const id of objectIds) {
		const update = updates.find((i) => get(i, idProperty) === id),
			index = omnitable.data?.findIndex((i) => get(i, idProperty) === id) ?? -1;
		if (index < 0) {
			continue;
		}
		const item = omnitable.data![index];
		if (update) {
			omnitable.replaceItemAtIndex(index, {
				...item,
				...update,
			});
			host.dispatchEvent(
				new CustomEvent('list-item-update', {
					bubbles: true,
					composed: true,
					detail: {
						id,
						item,
						update,
					},
				}),
			);
		} else {
			const remove = () => omnitable.removeItem(item);
			if (
				host.dispatchEvent(
					new CustomEvent('list-item-remove', {
						bubbles: true,
						composed: true,
						cancelable: true,
						detail: {
							id,
							item,
							remove,
						},
					}),
				)
			) {
				remove();
			}
		}
	}
};

interface Base<I extends Item, P extends Rec> {
	omnitable: Omnitable<I>;
	params: P;
	list$: List$<I, P>;
	idMapper?: <T extends I>(id: string, item: T) => string;
	idProperty?: string;
}

interface Check<I extends Item, P extends Rec> extends Base<I, P> {
	host: HTMLElement;
	ids: Set<string>;
}

const check$$ = async <I extends Item, P extends Rec>(opts: Check<I, P>) => {
	const { ids, params, omnitable, list$, idMapper, idProperty = 'id' } = opts,
		objectIds = [...ids].flatMap((id) => {
			if (idMapper) {
				return (
					omnitable?.data?.flatMap((i) => {
						const mapped = idMapper(id, i);
						return mapped ? [mapped] : [];
					}) ?? []
				);
			}
			if (omnitable?.data?.find((i) => get(i, idProperty) === id)) return [id];
			return [];
		});
	ids.clear();
	const res = await list$({ ...params, objectIds });
	const updates = Array.isArray(res) ? res : res.items ?? [];
	return process$({ ...opts, idProperty, objectIds, updates });
};

interface Opts<I extends Item, P extends Rec>
	extends Omit<Base<I, P>, 'omnitable'> {
	entity: string;
	omnitable?: Omnitable<I>;
}

export const useListSSE = <I extends Item, P extends Rec>({
	entity,
	...thru
}: Opts<I, P>) => {
	const host = useHost(),
		ids = useMemo(() => new Set<string>(), []),
		meta = useMeta(thru),
		check$ = useMemo(
			() =>
				debounce$(
					() =>
						check$$({
							...meta,
							host,
							ids,
							omnitable:
								meta.omnitable ??
								host.shadowRoot!.querySelector<Omnitable<I>>(
									'cosmoz-omnitable',
								)!,
						}),
					600,
				),
			[],
		);

	useEffect(() => {
		const ev = `cosmoz-${entity}-updated`,
			evc = `cosmoz-${entity}-check`,
			onUpdate = (e: Event) => {
				ids.add((e as CustomEvent<{ id: string }>).detail.id);
				check$();
			};
		window.addEventListener(ev, onUpdate);
		host.addEventListener(evc, onUpdate);

		return () => {
			window.removeEventListener(ev, onUpdate);
			host.removeEventListener(evc, onUpdate);
		};
	}, [entity, check$]);
};

import type { Rec } from '@neovici/cosmoz-utils/object';

export const getItems = <I>(items: I[], selected: I[]) =>
	(selected?.length > 0 ? selected : items) ?? [];

export const normalizeHeaders = <I>(headers?: I[]): I[] => {
	if (!headers) return [];
	const items = (headers as { items: I[] }[])[0]?.['items'];
	return Array.isArray(items)
		? (headers as { items: I[] }[]).flatMap((group) => group.items ?? [])
		: headers;
};

interface Ot extends HTMLElement {
	data: { id: string }[];
	replaceItem: <T extends Rec>(a: T, b: T) => void;
}
export const touch = <L extends HTMLElement>(list: L, id: string) => {
	const ot = list?.shadowRoot?.querySelector('cosmoz-omnitable') as Ot,
		item = ot?.data?.find((i) => id === i.id);
	if (!item) {
		return;
	}
	ot.replaceItem(item, { ...item });
};

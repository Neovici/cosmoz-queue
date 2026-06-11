import { Performable } from '../types/performable';

export interface Data<TAvailableAction> {
	[key: string]: Performable<TAvailableAction>[];
}

export type TMapActions<T> = {
	actions: Data<T>;
	actionRows: { id: string; actions: Performable<T>[] }[];
};

export const noActions: TMapActions<never> = {
	actions: {},
	actionRows: [],
};

export const mapActions = <TAvailableAction>(
	ids: string[],
	data?: Data<TAvailableAction>,
): TMapActions<TAvailableAction> => {
	if (!data) return noActions as TMapActions<TAvailableAction>;
	const acts = { ...data };
	const rows = ids.map((id) => {
		const ac = (acts[id] ??= []);
		return { id, actions: ac };
	});
	return { actions: acts, actionRows: rows };
};

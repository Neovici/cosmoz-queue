import { useEffect } from '@pionjs/pion';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { Rec } from '@neovici/cosmoz-utils/object';

interface Item extends Rec {
	id: string;
}
interface Update<I extends Item> {
	type: string;
	id: string;
	data: { header: I & { actions: { action: string }[] } };
}
interface Listener<I extends Item> {
	(update: Update<I>): void;
}
interface DataService<I extends Item> {
	subscribe: (listener: Listener<I>, ids: string[]) => void;
	unsubscribe: (listener: Listener<I>, ids: string[]) => void;
}

interface Opts<I extends Item> {
	items: I[];
	dataService: DataService<I>;
	intendedActions: string[];
	remove: (i: I) => void;
}

export default <I extends Item>(opts: Opts<I>) => {
	const { items, dataService } = opts,
		meta = useMeta(opts);

	useEffect(() => {
		const { intendedActions, remove } = meta,
			onUpdate = (update: Update<I>) => {
				switch (update.type) {
					case 'ITEM_UPDATE': {
						if (!intendedActions) {
							return;
						}
						const header = items.find((i) => i.id === update.id);
						if (!header) {
							return;
						}
						const actions = update.data?.header?.actions ?? header?.actions;
						if (actions?.every((a) => !intendedActions.includes(a.action))) {
							remove(header);
						}
					}
				}
			},
			ids = items?.map((i) => i.id) || [];
		dataService.subscribe(onUpdate, ids);
		return () => dataService.unsubscribe(onUpdate, ids);
	}, [items]);
};

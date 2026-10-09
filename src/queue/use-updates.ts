import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect, useMemo, useState } from '@pionjs/pion';
import { ListEventHandlersMap } from './use-list-sse';

export interface ListItemDetail {
	id: string;
	remove: () => void;
	check?: () => void;
}

export interface Departure {
	/** Moves on from the departed item and removes it from the list. */
	next: () => void;
}

interface Departed extends ListItemDetail {
	confirmed?: boolean;
}

export const RECHECK_DELAYS = [2000, 5000, 10000];

interface Opts {
	ensue: (id: string) => void;
	activeId?: string;
	/**
	 * Keep the active item open when it drops out of the list. Saving an item
	 * can make it miss the list for a moment while the backend recalculates it,
	 * so it is re-checked, and reported as a `Departure` only once a re-check
	 * confirms it. The view then lets the user move on.
	 */
	keepDeparted?: boolean;
}

export default ({ ensue, activeId, keepDeparted }: Opts) => {
	const host = useHost(),
		meta = useMeta({ ensue, activeId, keepDeparted }),
		[departed, setDeparted] = useState<Departed>(),
		current = useMemo(() => ({}) as { departed?: Departed }, []),
		depart = useCallback((d?: Departed) => {
			current.departed = d;
			setDeparted(d);
		}, []);

	useEffect(() => {
		const onRemove = (e: Event) => {
			const { id, remove, check } = (
				e as ListEventHandlersMap['list-item-remove']
			).detail;
			e.preventDefault();
			if (!meta.keepDeparted || id !== meta.activeId) {
				meta.ensue(id);
				return remove();
			}
			if (current.departed?.id === id || !check) {
				return depart({ id, remove, confirmed: true });
			}
			depart({ id, remove });
			RECHECK_DELAYS.forEach((delay) => setTimeout(check, delay));
		};
		const onUpdate = (e: Event) => {
			const { id } = (e as ListEventHandlersMap['list-item-update']).detail;
			if (id === current.departed?.id) depart();
		};

		host.addEventListener('list-item-remove', onRemove);
		host.addEventListener('list-item-update', onUpdate);

		return () => {
			host.removeEventListener('list-item-remove', onRemove);
			host.removeEventListener('list-item-update', onUpdate);
		};
	}, []);

	useEffect(() => {
		const d = current.departed;
		if (!d || d.id === activeId) return;
		// Unconfirmed ones are left to the pending re-checks.
		if (d.confirmed) d.remove();
		depart();
	}, [activeId]);

	const next = useCallback(() => {
		const d = current.departed;
		if (!d) return;
		meta.ensue(d.id);
		d.remove();
		depart();
	}, []);

	return useMemo<Departure | undefined>(
		() => (departed?.confirmed ? { next } : undefined),
		[departed],
	);
};

import { useEffect } from '@pionjs/pion';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { ListEventHandlersMap } from './use-list-sse';

export interface ListItemDetail {
	id: string;
	remove: () => void;
}

export default ({ ensue }: { ensue: (id: string) => void }) => {
	const host = useHost(),
		meta = useMeta({ ensue });

	useEffect(() => {
		const onRemove = (e: Event) => {
			const { id, remove } = (e as ListEventHandlersMap['list-item-remove'])
				.detail;
			e.preventDefault();
			meta?.ensue(id);
			remove();
		};

		host.addEventListener('list-item-remove', onRemove);

		return () => host.removeEventListener('list-item-remove', onRemove);
	}, []);
};

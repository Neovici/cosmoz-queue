import { useRef, useCallback } from '@pionjs/pion';
import type { Rec } from '@neovici/cosmoz-utils/object';

export interface Ot extends HTMLElement {
	removeItem: <T>(item: T) => void;
}

interface Props {
	next?: () => void;
	property?: string;
}

export default ({ next, property = 'id' }: Props) => {
	const listRef = useRef<Ot | undefined>(undefined),
		remove = useCallback(
			<T extends Rec>(item: T) => {
				next?.();
				listRef.current?.removeItem?.(item);
			},
			[next],
		);
	return {
		listRef,
		remove,
		onAsyncSimpleAction: useCallback(
			(e: CustomEvent) => {
				const id = e.detail[property];
				if (id) {
					remove({ id });
				}
			},
			[property, remove],
		),
	};
};

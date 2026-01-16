import { useRef, useEffect } from '@pionjs/pion';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import Split from 'split.js';
import type { SplitOptions } from '../types';

interface UseSplitOptions extends SplitOptions {
	activeTab: string;
}


export const useSplit = ({ activeTab, ...opts }: UseSplitOptions) => {
	const splitRef = useRef<Split.Instance | undefined>(undefined);
	const host = useHost();
	const meta = useMeta(opts);

	useEffect(() => {
		if (activeTab !== 'split') return;

		const root = host.shadowRoot!;
		const list = root.querySelector<HTMLElement>('#list');
		const queue = root.querySelector<HTMLElement>('#queue');

		const listMinWidth = Array.isArray(meta.minSize)
			? meta.minSize[0]
			: undefined;

		if (listMinWidth != null && list) {
			list.style.minWidth = `${listMinWidth}px`;
		}

		splitRef.current = Split([list!, queue!], {
			gutterSize: 2,
			...meta,
		});

		return () => {
			splitRef.current?.destroy();
			if (list) {
				list.style.minWidth = '';
			}
		};
	}, [activeTab]);
};

export default useSplit;

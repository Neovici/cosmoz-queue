import { useRef, useEffect } from '@pionjs/pion';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import Split from 'split.js';

export type SplitOpts = Pick<
	Split.Options,
	'sizes' | 'minSize' | 'expandToMin' | 'snapOffset'
>;

interface Opts extends SplitOpts {
	activeTab: string;
}

export default ({ activeTab, ...opts }: Opts) => {
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
			list!.style.minWidth = `${listMinWidth}px`;
		}
		splitRef.current = Split([list!, queue!], {
			gutterSize: 2,
			...meta,
		});
		return () => {
			splitRef.current?.destroy();
			list!.style.minWidth = '';
		};
	}, [activeTab]);
};

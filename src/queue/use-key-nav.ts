import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useEffect } from '@pionjs/pion';
import activeElement from '../util/dom/active-element';

type Tab = 'overview' | 'queue' | 'split';

const keys = <L, Q>(tab: Tab, listKeys: L[], queueKeys: Q[]) => [
	...(['overview', 'split'].includes(tab) ? listKeys : []),
	...(['queue', 'split'].includes(tab) ? queueKeys : []),
];

const overlaps = (host: HTMLElement) => {
	const root = host.shadowRoot!,
		button = root.querySelector('.button-nav')!,
		bounds = button.getBoundingClientRect();
	return (
		root
			.elementFromPoint(
				bounds.x + bounds.width / 2,
				bounds.y + bounds.height / 2,
			)
			?.closest('.button-nav') !== button
	);
};

const permits = (host: HTMLElement) => {
	const active = activeElement() as HTMLElement | null;
	return (
		!active?.isContentEditable &&
		!active?.matches('input, textarea') &&
		!overlaps(host)
	);
};

export default ({
	next,
	prev,
	activeTab,
}: {
	next?: () => void;
	prev?: () => void;
	activeTab: Tab;
}) => {
	const meta = useMeta({ next, prev, activeTab }),
		host = useHost();
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.defaultPrevented) {
				return;
			}
			const { key } = e,
				{ next, prev, activeTab } = meta;
			switch (true) {
				case next &&
					keys(
						activeTab,
						['ArrowDown', 'Down'],
						['ArrowRight', 'Right'],
					).includes(key) &&
					permits(host): {
					e.preventDefault();
					return next!();
				}
				case prev &&
					keys(activeTab, ['ArrowUp', 'Up'], ['ArrowLeft', 'Left']).includes(
						key,
					) &&
					permits(host): {
					e.preventDefault();
					return prev!();
				}
			}
		};
		document.addEventListener('keydown', handler, true);
		return () => document.removeEventListener('keydown', handler, true);
	}, []);
};

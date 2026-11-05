import type { Result, Tab } from '@neovici/cosmoz-tabs/next/index.js';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useMemo, useRef } from '@pionjs/pion';
import {
	reducedMotion,
	scopedTransition,
	supportsScopedTransition,
} from '../util/scoped-transition';

type Ready = () => PromiseLike<unknown> | undefined;

/**
 * Switches the layout from `from` to `to`, animated by the `[data-vt]` rules
 * in the queue style. Without element-scoped view transitions it marks the
 * scope with `data-vt-fallback` for a CSS entrance instead. Leaving the list,
 * the new state waits briefly for `ready`, so the detail doesn't arrive as a
 * loader.
 */
export const switchLayout = ({
	scope,
	from,
	to,
	update,
	ready,
}: {
	scope?: Element | null;
	from?: string;
	to: string;
	update: () => void;
	ready?: Ready;
}) => {
	if (!scope || !from || from === to) return update();
	const key = `${from}-${to}`;
	if (!supportsScopedTransition(scope)) {
		scope.setAttribute('data-vt-fallback', key);
		return update();
	}
	if (reducedMotion()) return update();
	scope.setAttribute('data-vt', key);
	const detail$ = from === 'overview' ? ready?.() : undefined;
	scopedTransition(scope, update, {
		ready: detail$ && Promise.resolve(detail$),
	}).finally(() => {
		if (scope.getAttribute('data-vt') === key) scope.removeAttribute('data-vt');
	});
};

/**
 * Animates the layout switches made through `tabnav`. `activate` takes an
 * optional `ready` for when the item changes in the same tick.
 */
export const useLayoutTransition = <T extends Tab>(
	tabnav: Result<T>,
	{ onActivate, ready }: { onActivate?: (name: string) => void; ready: Ready },
) => {
	const host = useHost(),
		latest = useRef({ from: tabnav.active?.name, ready });
	latest.current = { from: tabnav.active?.name, ready };

	return useMemo(() => {
		const go = (to: string, update: () => void, ready?: Ready) => {
			const current = latest.current!;
			switchLayout({
				scope: host.shadowRoot?.querySelector('cosmoz-resizable-view'),
				from: current.from,
				to,
				update,
				ready: ready ?? current.ready,
			});
		};
		return {
			...tabnav,
			activate: (name: string, ready?: Ready) =>
				go(name, () => tabnav.activate(name), ready),
			onActivate: (e: Event) => {
				const { button, metaKey, ctrlKey } = e as MouseEvent,
					name = (e.currentTarget as Element | null)?.getAttribute('name');
				if (button !== 0 || metaKey || ctrlKey || !name) return;
				go(name, () => {
					onActivate?.(name);
					tabnav.activate(name);
				});
			},
		};
	}, [tabnav, onActivate]);
};

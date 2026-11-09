import type { Result, Tab } from '@neovici/cosmoz-tabs/next/index.js';
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useMemo, useRef } from '@pionjs/pion';
import {
	reducedMotion,
	scopedTransition,
	supportsScopedTransition,
} from '../util/scoped-transition';

type Ready = () => PromiseLike<unknown> | undefined;

const ms = (v: string) => parseFloat(v) * (v.endsWith('ms') ? 1 : 1000);

/**
 * Returns to the list without a view transition: its snapshots would hold the
 * old view (and the detail behind the translucent panes) while the table fits
 * its columns. The live list instead opens from the width it had beside the
 * detail, or fades in from Focus.
 */
const revealList = (scope: Element, from: string, update: () => void) => {
	const pane = () => scope.querySelector<HTMLElement>(':scope > #list'),
		width = from === 'split' ? pane()?.getBoundingClientRect().width : 0;
	update();
	if (reducedMotion()) return;
	// After the render the update schedules, in the frame that first paints it.
	requestAnimationFrame(() => {
		const list = pane();
		if (!list?.animate) return;
		const style = getComputedStyle(list),
			token = (name: string, fallback: string) =>
				style.getPropertyValue(name).trim() || fallback,
			clip = width ? list.getBoundingClientRect().width - width : 0;
		list.animate(
			clip > 0
				? { clipPath: [`inset(0 ${clip}px 0 0)`, 'inset(0)'] }
				: { opacity: [0, 1] },
			{
				duration: ms(token('--cz-duration-fast', '150ms')),
				easing: token('--cz-ease-out', 'cubic-bezier(0.16, 1, 0.3, 1)'),
			},
		);
	});
};

/**
 * Switches the layout from `from` to `to`, animated by the `[data-vt]` rules
 * in the queue style. Without element-scoped view transitions it marks the
 * scope with `data-vt-fallback` for a CSS entrance instead. Leaving the list,
 * the new state waits briefly for `ready`, so the detail doesn't arrive as a
 * loader. Returning to the list animates the live list (`revealList`).
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
	if (!scope || !from || from === to) {
		scope?.removeAttribute('data-vt-fallback');
		return update();
	}
	if (to === 'overview') {
		scope.removeAttribute('data-vt-fallback');
		return revealList(scope, from, update);
	}
	const key = `${from}-${to}`;
	if (!supportsScopedTransition(scope)) {
		scope.setAttribute('data-vt-fallback', key);
		// Cleared after the pane's entrance, so a later route change doesn't replay it.
		const clear = (e: Event) => {
			if ((e.target as Element).parentElement !== scope) return;
			scope.removeEventListener('animationend', clear);
			scope.removeEventListener('animationcancel', clear);
			if (scope.getAttribute('data-vt-fallback') === key) {
				scope.removeAttribute('data-vt-fallback');
			}
		};
		scope.addEventListener('animationend', clear);
		scope.addEventListener('animationcancel', clear);
		return update();
	}
	if (reducedMotion()) return update();
	scope.setAttribute('data-vt', key);
	const detail$ = from === 'overview' ? ready?.() : undefined;
	scopedTransition(scope, update, {
		ready: detail$ && Promise.resolve(detail$),
	})
		.catch(() => undefined)
		.finally(() => {
			if (scope.getAttribute('data-vt') === key) {
				scope.removeAttribute('data-vt');
			}
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
		const { select } = tabnav as { select?: (name: string) => void };
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
			// Newer cosmoz-tabs switch in place with `select` (e.g. a list breadcrumb).
			...(select && {
				select: (name: string) => go(name, () => select(name)),
			}),
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

// To move to @neovici/cosmoz-utils/motion.

/** The longest a transition holds the new state back for `ready`. */
export const READY_CAP = 250;

type Scope = Element & {
	startViewTransition?: (opts: StartViewTransitionOptions) => ViewTransition;
};

export const supportsScopedTransition = (scope: Element) =>
	typeof (scope as Scope).startViewTransition === 'function';

export const reducedMotion = () =>
	!!globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const noop = () => undefined;

/**
 * Runs `update` as a view transition scoped to `scope`. The new state is
 * captured once `ready` settles, but no later than `READY_CAP` ms after the
 * update, so motion never holds back data. Without element-scoped view
 * transitions, or under reduced motion, `update` runs at once.
 */
export const scopedTransition = async (
	scope: Element,
	update: () => void | Promise<void>,
	{ ready, types }: { ready?: Promise<unknown>; types?: string[] } = {},
): Promise<void> => {
	if (!supportsScopedTransition(scope) || reducedMotion()) return update();

	const settled = ready?.then(noop, noop),
		vt = (scope as Required<Scope>).startViewTransition({
			update: async () => {
				await update();
				if (settled) {
					let timer: ReturnType<typeof setTimeout> | undefined;
					await Promise.race([
						settled,
						new Promise((resolve) => (timer = setTimeout(resolve, READY_CAP))),
					]);
					clearTimeout(timer);
				}
				// Lets the render triggered by `update` commit before the capture.
				await new Promise((resolve) => setTimeout(resolve));
			},
			types,
		});
	vt.ready.catch(noop);
	await vt.finished;
};

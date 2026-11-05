import { vi } from 'vitest';

// Runs the update callback the way the browser does: after the old state is
// captured, so never in the same tick as startViewTransition.
export const withVT = (el: Element) => {
	const start = vi.fn(
		({ update }: { update: () => Promise<void>; types?: string[] }) => {
			const done = new Promise<void>((resolve) => setTimeout(resolve)).then(
				update,
			);
			return { ready: done, finished: done, updateCallbackDone: done };
		},
	);
	Object.assign(el, { startViewTransition: start });
	return start;
};

export const reduceMotion = (reduce: boolean) =>
	vi.stubGlobal(
		'matchMedia',
		vi.fn(() => ({ matches: reduce })),
	);

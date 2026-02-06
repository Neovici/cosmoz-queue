import { component } from '@pionjs/pion';

interface RenderHookResult<T> {
	result: { current: T };
	nextUpdate: () => Promise<void>;
	unmount: () => void;
}

export const renderHook = async <T>(
	callback: () => T,
): Promise<RenderHookResult<T>> => {
	let current: T;
	let resolver: (() => void) | null = null;

	const tagName = `test-hook-${Math.random().toString(36).slice(2)}`;

	const TestComponent = component(() => {
		current = callback();
		resolver?.();
		resolver = null;
		return null;
	});

	customElements.define(tagName, TestComponent);
	const el = document.createElement(tagName);
	document.body.appendChild(el);

	// Wait for initial render
	await new Promise((r) => setTimeout(r, 0));

	return {
		result: {
			get current() {
				return current;
			},
		},
		nextUpdate: () =>
			new Promise((r) => {
				resolver = r as () => void;
			}),
		unmount: () => el.remove(),
	};
};

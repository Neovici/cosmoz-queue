import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@pionjs/pion', () => ({ useEffect: (fn: () => unknown) => fn() }));
vi.mock('@neovici/cosmoz-utils/hooks/use-meta', () => ({
	useMeta: (meta: unknown) => meta,
}));
vi.mock('@neovici/cosmoz-utils/hooks/use-host', () => ({
	useHost: () => document.createElement('div'),
}));

const { default: useKeyNav } = await import('../src/queue/use-key-nav');

const press = (target: Element) =>
	target.dispatchEvent(
		new KeyboardEvent('keydown', {
			key: 'ArrowDown',
			bubbles: true,
			composed: true,
		}),
	);

afterEach(() => document.body.replaceChildren());

describe('useKeyNav', () => {
	it('moves to the next item on ArrowDown, except inside a menu', () => {
		const next = vi.fn(),
			cleanup = useKeyNav({ next, activeTab: 'split' }) as unknown as
				| (() => void)
				| undefined,
			row = document.createElement('div'),
			menu = document.createElement('div'),
			item = document.createElement('button');
		menu.setAttribute('role', 'menu');
		menu.append(item);
		document.body.append(row, menu);

		press(row);
		press(item);

		expect(next).toHaveBeenCalledOnce();
		cleanup?.();
	});
});

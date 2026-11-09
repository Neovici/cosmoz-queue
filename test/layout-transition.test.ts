import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { reduceMotion, withVT } from './vt';

vi.mock('@pionjs/pion', () => ({}));
vi.mock('@neovici/cosmoz-utils/hooks/use-host', () => ({}));

const { switchLayout } = await import('../src/queue/use-layout-transition');

describe('switchLayout', () => {
	beforeEach(() => vi.useFakeTimers());
	afterEach(() => {
		vi.useRealTimers();
		vi.unstubAllGlobals();
	});

	it('marks the scope with <from>-<to> while the transition runs', async () => {
		const scope = document.createElement('div');
		withVT(scope);
		let during: string | null = null;
		switchLayout({
			scope,
			from: 'overview',
			to: 'split',
			update: () => (during = scope.getAttribute('data-vt')),
		});
		expect(scope.getAttribute('data-vt')).toBe('overview-split');
		await vi.runAllTimersAsync();
		expect(during).toBe('overview-split');
		expect(scope.hasAttribute('data-vt')).toBe(false);
	});

	it('waits for the details when opening the detail from the list', async () => {
		const scope = document.createElement('div');
		withVT(scope);
		let resolve!: () => void;
		const ready = vi.fn(() => new Promise<void>((r) => (resolve = r)));
		switchLayout({
			scope,
			from: 'overview',
			to: 'queue',
			update: vi.fn(),
			ready,
		});
		expect(ready).toHaveBeenCalledOnce();
		await vi.advanceTimersByTimeAsync(100);
		expect(scope.getAttribute('data-vt')).toBe('overview-queue');
		resolve();
		await vi.advanceTimersByTimeAsync(5);
		expect(scope.hasAttribute('data-vt')).toBe(false);
	});

	it('does not wait for the details between split and focus', () => {
		const scope = document.createElement('div');
		withVT(scope);
		const ready = vi.fn(() => Promise.resolve());
		switchLayout({ scope, from: 'split', to: 'queue', update: vi.fn(), ready });
		expect(ready).not.toHaveBeenCalled();
	});

	it('switches at once under reduced motion', () => {
		reduceMotion(true);
		const scope = document.createElement('div'),
			start = withVT(scope),
			update = vi.fn();
		switchLayout({ scope, from: 'overview', to: 'split', update });
		expect(update).toHaveBeenCalledOnce();
		expect(start).not.toHaveBeenCalled();
		expect(scope.hasAttribute('data-vt')).toBe(false);
	});

	it('marks the scope for the CSS entrance without scoped view transitions', () => {
		const scope = document.createElement('div'),
			update = vi.fn();
		switchLayout({ scope, from: 'overview', to: 'split', update });
		expect(update).toHaveBeenCalledOnce();
		expect(scope.hasAttribute('data-vt')).toBe(false);
		expect(scope.getAttribute('data-vt-fallback')).toBe('overview-split');
	});

	it('clears the CSS entrance when the pane finishes or is cancelled', () => {
		const scope = document.createElement('div'),
			pane = scope.appendChild(document.createElement('div')),
			inner = pane.appendChild(document.createElement('div'));
		switchLayout({ scope, from: 'overview', to: 'split', update: vi.fn() });
		inner.dispatchEvent(new Event('animationend', { bubbles: true }));
		expect(scope.getAttribute('data-vt-fallback')).toBe('overview-split');
		pane.dispatchEvent(new Event('animationcancel', { bubbles: true }));
		expect(scope.hasAttribute('data-vt-fallback')).toBe(false);
	});

	it('clears a pending CSS entrance on the way back to the list', () => {
		const scope = document.createElement('div');
		switchLayout({ scope, from: 'overview', to: 'split', update: vi.fn() });
		switchLayout({ scope, from: 'split', to: 'overview', update: vi.fn() });
		expect(scope.hasAttribute('data-vt-fallback')).toBe(false);
	});

	const withList = (...widths: number[]) => {
		const scope = document.createElement('div'),
			list = scope.appendChild(document.createElement('div')),
			animate = vi.fn();
		let resized: () => void = vi.fn();
		list.id = 'list';
		Object.assign(list, { animate });
		vi.spyOn(list, 'getBoundingClientRect').mockImplementation(
			() =>
				({ width: widths.length > 1 ? widths.shift() : widths[0] }) as DOMRect,
		);
		vi.stubGlobal(
			'ResizeObserver',
			class {
				constructor(cb: () => void) {
					resized = cb;
				}
				observe = vi.fn();
				disconnect = vi.fn();
			},
		);
		return { scope, animate, resize: () => resized(), start: withVT(scope) };
	};

	it('returns to the list without a view transition', () => {
		const { scope, start } = withList(600),
			update = vi.fn();
		switchLayout({ scope, from: 'split', to: 'overview', update });
		expect(update).toHaveBeenCalledOnce();
		expect(start).not.toHaveBeenCalled();
		expect(scope.hasAttribute('data-vt')).toBe(false);
	});

	it('opens the list from its split width once it lays out wider', () => {
		const { scope, animate, resize } = withList(600, 600, 1000);
		switchLayout({ scope, from: 'split', to: 'overview', update: vi.fn() });
		resize();
		expect(animate).not.toHaveBeenCalled();
		resize();
		expect(animate).toHaveBeenCalledWith(
			{ clipPath: ['inset(0 calc(100% - 600px) 0 0)', 'inset(0)'] },
			expect.objectContaining({ duration: 250 }),
		);
	});

	it('fades the list in from focus', () => {
		const { scope, animate, resize } = withList(0, 1000);
		switchLayout({ scope, from: 'queue', to: 'overview', update: vi.fn() });
		resize();
		expect(animate).toHaveBeenCalledWith(
			{ opacity: [0, 1] },
			expect.objectContaining({ duration: 150 }),
		);
	});

	it('does not animate the list under reduced motion', () => {
		reduceMotion(true);
		const { scope, animate, resize } = withList(600, 1000),
			update = vi.fn();
		switchLayout({ scope, from: 'split', to: 'overview', update });
		resize();
		expect(update).toHaveBeenCalledOnce();
		expect(animate).not.toHaveBeenCalled();
	});

	it('does not animate a pick of the active layout', () => {
		const scope = document.createElement('div'),
			start = withVT(scope),
			update = vi.fn();
		switchLayout({ scope, from: 'split', to: 'split', update });
		expect(update).toHaveBeenCalledOnce();
		expect(start).not.toHaveBeenCalled();
	});
});

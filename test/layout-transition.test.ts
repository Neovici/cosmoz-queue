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

	it('switches back to the list at once', () => {
		const scope = document.createElement('div'),
			start = withVT(scope),
			update = vi.fn();
		switchLayout({ scope, from: 'split', to: 'overview', update });
		switchLayout({ scope, from: 'queue', to: 'overview', update });
		expect(update).toHaveBeenCalledTimes(2);
		expect(start).not.toHaveBeenCalled();
		expect(scope.hasAttribute('data-vt')).toBe(false);
		expect(scope.hasAttribute('data-vt-fallback')).toBe(false);
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

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { READY_CAP, scopedTransition } from '../src/util/scoped-transition';
import { reduceMotion, withVT } from './vt';

describe('scopedTransition', () => {
	beforeEach(() => vi.useFakeTimers());
	afterEach(() => {
		vi.useRealTimers();
		vi.unstubAllGlobals();
	});

	it('runs the update at once without element-scoped view transitions', () => {
		const update = vi.fn();
		scopedTransition(document.createElement('div'), update);
		expect(update).toHaveBeenCalledOnce();
	});

	it('runs the update at once under reduced motion', () => {
		reduceMotion(true);
		const el = document.createElement('div'),
			start = withVT(el),
			update = vi.fn();
		scopedTransition(el, update);
		expect(update).toHaveBeenCalledOnce();
		expect(start).not.toHaveBeenCalled();
	});

	it('starts a scoped view transition with the types', async () => {
		const el = document.createElement('div'),
			start = withVT(el),
			update = vi.fn();
		const done = scopedTransition(el, update, { types: ['a-b'] });
		expect(update).not.toHaveBeenCalled();
		await vi.runAllTimersAsync();
		await done;
		expect(update).toHaveBeenCalledOnce();
		expect(start.mock.calls[0][0].types).toEqual(['a-b']);
	});

	it('captures the new state once ready settles', async () => {
		const el = document.createElement('div');
		withVT(el);
		let finished = false;
		const ready = new Promise((resolve) => setTimeout(resolve, 100));
		scopedTransition(el, () => undefined, { ready }).then(
			() => (finished = true),
		);
		await vi.advanceTimersByTimeAsync(90);
		expect(finished).toBe(false);
		await vi.advanceTimersByTimeAsync(20);
		expect(finished).toBe(true);
	});

	it('never waits longer than the cap', async () => {
		const el = document.createElement('div');
		withVT(el);
		let finished = false;
		scopedTransition(el, () => undefined, {
			ready: new Promise(() => undefined),
		}).then(() => (finished = true));
		await vi.advanceTimersByTimeAsync(READY_CAP - 10);
		expect(finished).toBe(false);
		await vi.advanceTimersByTimeAsync(20);
		expect(finished).toBe(true);
	});

	it('does not hold the transition on a failed ready', async () => {
		const el = document.createElement('div');
		withVT(el);
		let finished = false;
		scopedTransition(el, () => undefined, {
			ready: Promise.reject(new Error('nope')),
		}).then(() => (finished = true));
		await vi.advanceTimersByTimeAsync(5);
		expect(finished).toBe(true);
	});
});

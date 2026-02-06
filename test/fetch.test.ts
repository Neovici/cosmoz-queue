import {
	afterEach,
	beforeEach,
	describe,
	expect,
	it,
	vi,
	type MockInstance,
} from 'vitest';
import { fetch, setBaseInit } from '../src/util/fetch/fetch';

describe('fetch', () => {
	let fetchSpy: MockInstance;

	beforeEach(() => {
		fetchSpy = vi.spyOn(window, 'fetch').mockResolvedValue(new Response());
	});

	afterEach(() => {
		fetchSpy.mockRestore();
	});

	describe('getHeaders callback', () => {
		it('invokes getHeaders on each request', async () => {
			const getHeaders = vi.fn().mockReturnValue({ 'X-Dynamic': 'value1' });
			setBaseInit({ getHeaders });

			await fetch('/api/test1');
			await fetch('/api/test2');

			expect(getHeaders).toHaveBeenCalledTimes(2);
		});

		it('includes dynamic headers in request', async () => {
			setBaseInit({
				getHeaders: () => ({ 'X-Dynamic': 'dynamic-value' }),
			});

			await fetch('/api/test');

			const [, opts] = fetchSpy.mock.calls[0];
			expect(opts.headers).toHaveProperty('X-Dynamic', 'dynamic-value');
		});

		it('dynamic headers override static headers', async () => {
			setBaseInit({
				headers: { 'X-Header': 'static' },
				getHeaders: () => ({ 'X-Header': 'dynamic' }),
			});

			await fetch('/api/test');

			const [, opts] = fetchSpy.mock.calls[0];
			expect(opts.headers).toHaveProperty('X-Header', 'dynamic');
		});

		it('per-request headers override dynamic headers', async () => {
			setBaseInit({
				getHeaders: () => ({ 'X-Header': 'dynamic' }),
			});

			await fetch('/api/test', {
				headers: { 'X-Header': 'per-request' },
			});

			const [, opts] = fetchSpy.mock.calls[0];
			expect(opts.headers).toHaveProperty('X-Header', 'per-request');
		});

		it('per-request headers override both static and dynamic headers', async () => {
			setBaseInit({
				headers: { 'X-Header': 'static' },
				getHeaders: () => ({ 'X-Header': 'dynamic' }),
			});

			await fetch('/api/test', {
				headers: { 'X-Header': 'per-request' },
			});

			const [, opts] = fetchSpy.mock.calls[0];
			expect(opts.headers).toHaveProperty('X-Header', 'per-request');
		});

		it('returns different values on subsequent calls', async () => {
			let counter = 0;
			setBaseInit({
				getHeaders: () => ({ 'X-Request-Id': String(++counter) }),
			});

			await fetch('/api/test1');
			await fetch('/api/test2');

			const [, opts1] = fetchSpy.mock.calls[0];
			const [, opts2] = fetchSpy.mock.calls[1];
			expect(opts1.headers).toHaveProperty('X-Request-Id', '1');
			expect(opts2.headers).toHaveProperty('X-Request-Id', '2');
		});

		it('merges static, dynamic, and per-request headers', async () => {
			setBaseInit({
				headers: { 'X-Static': 'static-value' },
				getHeaders: () => ({ 'X-Dynamic': 'dynamic-value' }),
			});

			await fetch('/api/test', {
				headers: { 'X-Request': 'request-value' },
			});

			const [, opts] = fetchSpy.mock.calls[0];
			expect(opts.headers).toHaveProperty('X-Static', 'static-value');
			expect(opts.headers).toHaveProperty('X-Dynamic', 'dynamic-value');
			expect(opts.headers).toHaveProperty('X-Request', 'request-value');
		});
	});
});

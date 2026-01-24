import { expect } from '@open-wc/testing';
import { stub, type SinonStub } from 'sinon';
import { fetch, setBaseInit } from '../src/util/fetch/fetch';

describe('fetch', () => {
	let fetchStub: SinonStub;

	beforeEach(() => {
		fetchStub = stub(window, 'fetch').resolves(new Response());
	});

	afterEach(() => {
		fetchStub.restore();
	});

	describe('getHeaders callback', () => {
		it('invokes getHeaders on each request', async () => {
			const getHeaders = stub().returns({ 'X-Dynamic': 'value1' });
			setBaseInit({ getHeaders });

			await fetch('/api/test1');
			await fetch('/api/test2');

			expect(getHeaders.callCount).to.equal(2);
		});

		it('includes dynamic headers in request', async () => {
			setBaseInit({
				getHeaders: () => ({ 'X-Dynamic': 'dynamic-value' }),
			});

			await fetch('/api/test');

			const [, opts] = fetchStub.firstCall.args;
			expect(opts.headers).to.have.property('X-Dynamic', 'dynamic-value');
		});

		it('dynamic headers override static headers', async () => {
			setBaseInit({
				headers: { 'X-Header': 'static' },
				getHeaders: () => ({ 'X-Header': 'dynamic' }),
			});

			await fetch('/api/test');

			const [, opts] = fetchStub.firstCall.args;
			expect(opts.headers).to.have.property('X-Header', 'dynamic');
		});

		it('per-request headers override dynamic headers', async () => {
			setBaseInit({
				getHeaders: () => ({ 'X-Header': 'dynamic' }),
			});

			await fetch('/api/test', {
				headers: { 'X-Header': 'per-request' },
			});

			const [, opts] = fetchStub.firstCall.args;
			expect(opts.headers).to.have.property('X-Header', 'per-request');
		});

		it('per-request headers override both static and dynamic headers', async () => {
			setBaseInit({
				headers: { 'X-Header': 'static' },
				getHeaders: () => ({ 'X-Header': 'dynamic' }),
			});

			await fetch('/api/test', {
				headers: { 'X-Header': 'per-request' },
			});

			const [, opts] = fetchStub.firstCall.args;
			expect(opts.headers).to.have.property('X-Header', 'per-request');
		});

		it('returns different values on subsequent calls', async () => {
			let counter = 0;
			setBaseInit({
				getHeaders: () => ({ 'X-Request-Id': String(++counter) }),
			});

			await fetch('/api/test1');
			await fetch('/api/test2');

			const [, opts1] = fetchStub.firstCall.args;
			const [, opts2] = fetchStub.secondCall.args;
			expect(opts1.headers).to.have.property('X-Request-Id', '1');
			expect(opts2.headers).to.have.property('X-Request-Id', '2');
		});

		it('merges static, dynamic, and per-request headers', async () => {
			setBaseInit({
				headers: { 'X-Static': 'static-value' },
				getHeaders: () => ({ 'X-Dynamic': 'dynamic-value' }),
			});

			await fetch('/api/test', {
				headers: { 'X-Request': 'request-value' },
			});

			const [, opts] = fetchStub.firstCall.args;
			expect(opts.headers).to.have.property('X-Static', 'static-value');
			expect(opts.headers).to.have.property('X-Dynamic', 'dynamic-value');
			expect(opts.headers).to.have.property('X-Request', 'request-value');
		});
	});
});

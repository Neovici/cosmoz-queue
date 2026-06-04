import { describe, expect, it } from 'vitest';

const syncParamsMeta = (
	paramsMeta: Record<string, unknown>,
	params: Record<string, unknown>,
) => {
	Object.keys(paramsMeta).forEach((k) => delete paramsMeta[k]);
	Object.assign(paramsMeta, params);
};

describe('paramsMeta sync', () => {
	it('adds new keys from params', () => {
		const paramsMeta: Record<string, unknown> = {};
		syncParamsMeta(paramsMeta, { statusName: ['Open'], pathLocator: '/a' });
		expect(paramsMeta).toEqual({ statusName: ['Open'], pathLocator: '/a' });
	});

	it('overwrites existing keys', () => {
		const paramsMeta: Record<string, unknown> = { statusName: ['Open'] };
		syncParamsMeta(paramsMeta, { statusName: ['Closed'] });
		expect(paramsMeta).toEqual({ statusName: ['Closed'] });
	});

	it('removes stale keys not present in params', () => {
		const paramsMeta: Record<string, unknown> = {
			statusName: ['Open'],
			pathLocator: '/a',
		};
		syncParamsMeta(paramsMeta, { pathLocator: '/a' });
		expect(paramsMeta).toEqual({ pathLocator: '/a' });
		expect('statusName' in paramsMeta).toBe(false);
	});

	it('clears all keys when params is empty', () => {
		const paramsMeta: Record<string, unknown> = { a: 1, b: 2 };
		syncParamsMeta(paramsMeta, {});
		expect(paramsMeta).toEqual({});
	});

	it('handles swapping keys between params updates', () => {
		const paramsMeta: Record<string, unknown> = {};
		syncParamsMeta(paramsMeta, { statusName: ['Open'], pathLocator: '/a' });
		expect(paramsMeta).toEqual({ statusName: ['Open'], pathLocator: '/a' });

		syncParamsMeta(paramsMeta, { assignedToUserId: ['u1'], pathLocator: '/a' });
		expect(paramsMeta).toEqual({ assignedToUserId: ['u1'], pathLocator: '/a' });
		expect('statusName' in paramsMeta).toBe(false);
	});
});

describe('Object.assign accumulation (old behavior)', () => {
	it('demonstrates stale key accumulation with plain Object.assign', () => {
		const paramsMeta: Record<string, unknown> = {};
		Object.assign(paramsMeta, { statusName: ['Open'], pathLocator: '/a' });
		Object.assign(paramsMeta, { assignedToUserId: ['u1'], pathLocator: '/a' });
		expect(paramsMeta).toEqual({
			statusName: ['Open'],
			assignedToUserId: ['u1'],
			pathLocator: '/a',
		});
		expect('statusName' in paramsMeta).toBe(true);
	});
});

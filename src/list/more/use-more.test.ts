import { describe, expect, it } from 'vitest';

describe('hasMore logic', () => {
	const calcHasMore = (
		totalAvailable: number,
		pageSize: number,
		page: number,
	) =>
		pageSize > 0 &&
		totalAvailable < Infinity &&
		totalAvailable >= pageSize &&
		page < Math.ceil(totalAvailable / pageSize) - 1;

	describe('60 items, pageSize 50', () => {
		it('hasMore is true on page 0', () => {
			expect(calcHasMore(60, 50, 0)).toBe(true);
		});

		it('hasMore is false on page 1 (last page)', () => {
			expect(calcHasMore(60, 50, 1)).toBe(false);
		});
	});

	describe('50 items, pageSize 50 (exactly one page)', () => {
		it('hasMore is false on page 0', () => {
			expect(calcHasMore(50, 50, 0)).toBe(false);
		});
	});

	describe('100 items, pageSize 50 (exactly two pages)', () => {
		it('hasMore is true on page 0', () => {
			expect(calcHasMore(100, 50, 0)).toBe(true);
		});

		it('hasMore is false on page 1 (last page)', () => {
			expect(calcHasMore(100, 50, 1)).toBe(false);
		});
	});

	describe('10 items, pageSize 50 (fewer than pageSize)', () => {
		it('hasMore is false on page 0', () => {
			expect(calcHasMore(10, 50, 0)).toBe(false);
		});
	});

	describe('edge cases', () => {
		it('returns false when pageSize is 0', () => {
			expect(calcHasMore(60, 0, 0)).toBe(false);
		});

		it('returns false when totalAvailable is Infinity', () => {
			expect(calcHasMore(Infinity, 50, 0)).toBe(false);
		});
	});
});

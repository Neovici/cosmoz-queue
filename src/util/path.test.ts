import { describe, expect, it } from 'vitest';
import { get, normalize, split } from './path';

describe('path', () => {
	describe('normalize', () => {
		it('returns string path as-is', () => {
			expect(normalize('foo.bar.0.baz')).toBe('foo.bar.0.baz');
		});

		it('returns empty string as-is', () => {
			expect(normalize('')).toBe('');
		});

		it('converts array path to flattened string', () => {
			expect(normalize(['foo.bar', 0, 'baz'])).toBe('foo.bar.0.baz');
		});

		it('handles array with single element', () => {
			expect(normalize(['foo'])).toBe('foo');
		});

		it('handles array with dotted strings and numbers', () => {
			expect(normalize(['a.b', 1, 'c.d', 2])).toBe('a.b.1.c.d.2');
		});

		it('handles empty array', () => {
			expect(normalize([])).toBe('');
		});
	});

	describe('split', () => {
		it('splits string path into array', () => {
			expect(split('foo.bar.0.baz')).toEqual(['foo', 'bar', '0', 'baz']);
		});

		it('splits array path into flat array', () => {
			expect(split(['foo.bar', 0, 'baz'])).toEqual(['foo', 'bar', '0', 'baz']);
		});

		it('handles single segment string', () => {
			expect(split('foo')).toEqual(['foo']);
		});

		it('handles array with single element', () => {
			expect(split(['foo'])).toEqual(['foo']);
		});

		it('handles empty string', () => {
			expect(split('')).toEqual(['']);
		});
	});

	describe('get', () => {
		it('retrieves nested value with string path', () => {
			const obj = { foo: { bar: { baz: 'value' } } };
			expect(get(obj, 'foo.bar.baz')).toBe('value');
		});

		it('retrieves nested value with array path', () => {
			const obj = { foo: { bar: { baz: 'value' } } };
			expect(get(obj, ['foo', 'bar', 'baz'])).toBe('value');
		});

		it('retrieves nested value with dotted string in array path', () => {
			const obj = { foo: { bar: { baz: 'value' } } };
			expect(get(obj, ['foo.bar', 'baz'])).toBe('value');
		});

		it('retrieves array element by index', () => {
			const obj = { items: ['a', 'b', 'c'] };
			expect(get(obj, 'items.1')).toBe('b');
		});

		it('retrieves array element with array path', () => {
			const obj = { items: ['a', 'b', 'c'] };
			expect(get(obj, ['items', 0])).toBe('a');
		});

		it('returns undefined for non-existent path', () => {
			const obj = { foo: { bar: 'value' } };
			expect(get(obj, 'foo.baz.qux')).toBeUndefined();
		});

		it('returns undefined when intermediate property is undefined', () => {
			const obj = { foo: undefined };
			expect(get(obj, 'foo.bar')).toBeUndefined();
		});

		it('returns undefined when intermediate property is null', () => {
			const obj = { foo: null };
			expect(get(obj, 'foo.bar')).toBeUndefined();
		});

		it('returns undefined with empty string path', () => {
			const obj = { foo: 'bar' };
			expect(get(obj, '')).toBeUndefined();
		});

		it('handles complex nested structure', () => {
			const obj = {
				users: [
					{ name: 'Alice', address: { city: 'NYC' } },
					{ name: 'Bob', address: { city: 'LA' } },
				],
			};
			expect(get(obj, 'users.1.address.city')).toBe('LA');
		});

		it('returns undefined for null root', () => {
			expect(get(null, 'foo')).toBeUndefined();
		});

		it('returns undefined for undefined root', () => {
			expect(get(undefined, 'foo')).toBeUndefined();
		});
	});
});

import { assert } from '@open-wc/testing';
import { get, normalize, split } from '../path';

describe('path', () => {
	describe('normalize', () => {
		it('returns string path as-is', () => {
			assert.equal(normalize('foo.bar.0.baz'), 'foo.bar.0.baz');
		});

		it('returns empty string as-is', () => {
			assert.equal(normalize(''), '');
		});

		it('converts array path to flattened string', () => {
			assert.equal(normalize(['foo.bar', 0, 'baz']), 'foo.bar.0.baz');
		});

		it('handles array with single element', () => {
			assert.equal(normalize(['foo']), 'foo');
		});

		it('handles array with dotted strings and numbers', () => {
			assert.equal(normalize(['a.b', 1, 'c.d', 2]), 'a.b.1.c.d.2');
		});

		it('handles empty array', () => {
			assert.equal(normalize([]), '');
		});
	});

	describe('split', () => {
		it('splits string path into array', () => {
			assert.deepEqual(split('foo.bar.0.baz'), ['foo', 'bar', '0', 'baz']);
		});

		it('splits array path into flat array', () => {
			assert.deepEqual(split(['foo.bar', 0, 'baz']), [
				'foo',
				'bar',
				'0',
				'baz',
			]);
		});

		it('handles single segment string', () => {
			assert.deepEqual(split('foo'), ['foo']);
		});

		it('handles array with single element', () => {
			assert.deepEqual(split(['foo']), ['foo']);
		});

		it('handles empty string', () => {
			assert.deepEqual(split(''), ['']);
		});
	});

	describe('get', () => {
		it('retrieves nested value with string path', () => {
			const obj = { foo: { bar: { baz: 'value' } } };
			assert.equal(get(obj, 'foo.bar.baz'), 'value');
		});

		it('retrieves nested value with array path', () => {
			const obj = { foo: { bar: { baz: 'value' } } };
			assert.equal(get(obj, ['foo', 'bar', 'baz']), 'value');
		});

		it('retrieves nested value with dotted string in array path', () => {
			const obj = { foo: { bar: { baz: 'value' } } };
			assert.equal(get(obj, ['foo.bar', 'baz']), 'value');
		});

		it('retrieves array element by index', () => {
			const obj = { items: ['a', 'b', 'c'] };
			assert.equal(get(obj, 'items.1'), 'b');
		});

		it('retrieves array element with array path', () => {
			const obj = { items: ['a', 'b', 'c'] };
			assert.equal(get(obj, ['items', 0]), 'a');
		});

		it('returns undefined for non-existent path', () => {
			const obj = { foo: { bar: 'value' } };
			assert.equal(get(obj, 'foo.baz.qux'), undefined);
		});

		it('returns undefined when intermediate property is undefined', () => {
			const obj = { foo: undefined };
			assert.equal(get(obj, 'foo.bar'), undefined);
		});

		it('returns undefined when intermediate property is null', () => {
			const obj = { foo: null };
			assert.equal(get(obj, 'foo.bar'), undefined);
		});

		it('returns undefined with empty string path', () => {
			const obj = { foo: 'bar' };
			assert.equal(get(obj, ''), undefined);
		});

		it('handles complex nested structure', () => {
			const obj = {
				users: [
					{ name: 'Alice', address: { city: 'NYC' } },
					{ name: 'Bob', address: { city: 'LA' } },
				],
			};
			assert.equal(get(obj, 'users.1.address.city'), 'LA');
		});

		it('returns undefined for null root', () => {
			assert.equal(get(null, 'foo'), undefined);
		});

		it('returns undefined for undefined root', () => {
			assert.equal(get(undefined, 'foo'), undefined);
		});
	});
});

import { assert } from '@open-wc/testing';
import { get, normalize, split } from '../path';

suite('path', () => {
	suite('normalize', () => {
		test('returns string path as-is', () => {
			assert.equal(normalize('foo.bar.0.baz'), 'foo.bar.0.baz');
		});

		test('returns empty string as-is', () => {
			assert.equal(normalize(''), '');
		});

		test('converts array path to flattened string', () => {
			assert.equal(normalize(['foo.bar', 0, 'baz']), 'foo.bar.0.baz');
		});

		test('handles array with single element', () => {
			assert.equal(normalize(['foo']), 'foo');
		});

		test('handles array with dotted strings and numbers', () => {
			assert.equal(normalize(['a.b', 1, 'c.d', 2]), 'a.b.1.c.d.2');
		});

		test('handles empty array', () => {
			assert.equal(normalize([]), '');
		});
	});

	suite('split', () => {
		test('splits string path into array', () => {
			assert.deepEqual(split('foo.bar.0.baz'), ['foo', 'bar', '0', 'baz']);
		});

		test('splits array path into flat array', () => {
			assert.deepEqual(split(['foo.bar', 0, 'baz']), [
				'foo',
				'bar',
				'0',
				'baz',
			]);
		});

		test('handles single segment string', () => {
			assert.deepEqual(split('foo'), ['foo']);
		});

		test('handles array with single element', () => {
			assert.deepEqual(split(['foo']), ['foo']);
		});

		test('handles empty string', () => {
			assert.deepEqual(split(''), ['']);
		});
	});

	suite('get', () => {
		test('retrieves nested value with string path', () => {
			const obj = { foo: { bar: { baz: 'value' } } };
			assert.equal(get(obj, 'foo.bar.baz'), 'value');
		});

		test('retrieves nested value with array path', () => {
			const obj = { foo: { bar: { baz: 'value' } } };
			assert.equal(get(obj, ['foo', 'bar', 'baz']), 'value');
		});

		test('retrieves nested value with dotted string in array path', () => {
			const obj = { foo: { bar: { baz: 'value' } } };
			assert.equal(get(obj, ['foo.bar', 'baz']), 'value');
		});

		test('retrieves array element by index', () => {
			const obj = { items: ['a', 'b', 'c'] };
			assert.equal(get(obj, 'items.1'), 'b');
		});

		test('retrieves array element with array path', () => {
			const obj = { items: ['a', 'b', 'c'] };
			assert.equal(get(obj, ['items', 0]), 'a');
		});

		test('returns undefined for non-existent path', () => {
			const obj = { foo: { bar: 'value' } };
			assert.equal(get(obj, 'foo.baz.qux'), undefined);
		});

		test('returns undefined when intermediate property is undefined', () => {
			const obj = { foo: undefined };
			assert.equal(get(obj, 'foo.bar'), undefined);
		});

		test('returns undefined when intermediate property is null', () => {
			const obj = { foo: null };
			assert.equal(get(obj, 'foo.bar'), undefined);
		});

		test('returns undefined with empty string path', () => {
			const obj = { foo: 'bar' };
			assert.equal(get(obj, ''), undefined);
		});

		test('handles complex nested structure', () => {
			const obj = {
				users: [
					{ name: 'Alice', address: { city: 'NYC' } },
					{ name: 'Bob', address: { city: 'LA' } },
				],
			};
			assert.equal(get(obj, 'users.1.address.city'), 'LA');
		});

		test('returns undefined for null root', () => {
			assert.equal(get(null, 'foo'), undefined);
		});

		test('returns undefined for undefined root', () => {
			assert.equal(get(undefined, 'foo'), undefined);
		});
	});
});

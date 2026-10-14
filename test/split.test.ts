import { describe, expect, it } from 'vitest';
import { splitAttrs } from '../src/queue/split';

describe('splitAttrs', () => {
	it('maps no option to the default initial size and min size', () => {
		expect(splitAttrs(undefined)).toEqual({
			initialSize: '50%',
			minSize: '100',
		});
	});

	it('maps a bare option without minSize to no min size (fallback applies)', () => {
		expect(splitAttrs({})).toEqual({
			initialSize: '50%',
			minSize: undefined,
		});
	});

	it('maps minSize: [] to undefined, never an empty min-size attribute', () => {
		expect(splitAttrs({ minSize: [] }).minSize).toBeUndefined();
	});

	it('maps a bare number to the previous pane minimum only', () => {
		expect(splitAttrs({ minSize: 300 })).toEqual({
			initialSize: '50%',
			minSize: '300',
		});
	});

	it('maps a single-entry array to the previous pane minimum only', () => {
		expect(splitAttrs({ minSize: [300] })).toEqual({
			initialSize: '50%',
			minSize: '300',
		});
	});

	it('maps both pane minimums into the min-size attribute', () => {
		expect(splitAttrs({ minSize: [300, 400] })).toEqual({
			initialSize: '50%',
			minSize: '300 400',
		});
	});

	it('takes the initial size from the first size entry when present', () => {
		expect(splitAttrs({ sizes: [25, 75], minSize: [300, 400] })).toEqual({
			initialSize: '25%',
			minSize: '300 400',
		});
	});
});

import { renderHook } from '@neovici/testing';
import { assert } from '@open-wc/testing';
import { usePref } from '../use-pref';

describe('use-pref', () => {
	it('default pref', async () => {
		const { result } = await renderHook(() => usePref('some', 'asdad'));
		assert.equal(result.current[0], 'asdad');
	});

	it('update pref', async () => {
		const { result, nextUpdate } = await renderHook(() =>
			usePref('somethingelse'),
		);
		assert.equal(result.current[0], undefined);
		setTimeout(() => result.current[1]('dads'));
		await nextUpdate();
		assert.equal(result.current[0], 'dads');
	});
});

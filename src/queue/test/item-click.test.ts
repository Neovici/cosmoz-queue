import { assert, oneEvent } from '@open-wc/testing';
import { oneDefaultPreventedEvent } from '@open-wc/testing-helpers';
import { itemClick } from '../item-click';

suite('item-click', () => {
	test('fires event', async () => {
		const el = document.createElement('div');
		el.addEventListener('click', itemClick({ index: 2, activate: 'queue' }));
		setTimeout(() => el.click());
		const { detail } = await oneEvent(el, 'omnitable-item-click');
		assert.equal(detail.index, 2);
		assert.equal(detail.activate, 'queue');
	});

	test('prevents default', async () => {
		const el = document.createElement('div');
		const ev = new MouseEvent('click');
		el.addEventListener('click', itemClick({ index: 3, activate: 'list' }));
		setTimeout(() => el.dispatchEvent(ev));
		const { detail } = await oneDefaultPreventedEvent(
			el,
			'omnitable-item-click',
		);
		assert.equal(detail.index, 3);
		assert.equal(detail.activate, 'list');
	});

	test('does not fire event', async () => {
		const el = document.createElement('div');
		const ev = new MouseEvent('click', { ctrlKey: true });
		el.addEventListener('click', itemClick({ index: 3, activate: 'list' }));
		setTimeout(() => el.dispatchEvent(ev));
	});
});

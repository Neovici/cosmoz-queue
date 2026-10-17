import { render } from 'lit-html';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { renderLoadMore } from '../src/list/more/render-more';

vi.mock('@neovici/cosmoz-button', () => ({}));
vi.mock('@neovici/cosmoz-spinner', () => ({}));
const root = document.createElement('div');
afterEach(() => render(null, root));

describe('load more control', () => {
	it('invokes its callback and hides when there is no next page', () => {
		const onMore = vi.fn();
		render(renderLoadMore({ onMore }), root);
		root.querySelector<HTMLElement>('cosmoz-button')!.click();
		expect(onMore).toHaveBeenCalledOnce();
		render(renderLoadMore({}), root);
		expect(root.querySelector('cosmoz-button')!.hasAttribute('hidden')).toBe(
			true,
		);
	});
});

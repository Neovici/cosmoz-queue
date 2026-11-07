import '@neovici/cosmoz-tokens';
import { html, render } from 'lit-html';
import { afterEach, expect, it, vi } from 'vitest';
import { renderNav } from '../src/queue/render';
import { queueStyle } from '../src/queue/style';

afterEach(() => {
	document.body.replaceChildren();
});

it('keeps both note navigation controls touch-sized and functional', async () => {
	const host = document.createElement('div');
	const root = host.attachShadow({ mode: 'open' });
	document.body.append(host);
	const next = vi.fn(),
		prev = vi.fn();
	render(
		html`<style>
				${queueStyle}</style
			>${renderNav({ next, prev })}`,
		root,
	);
	await expect
		.poll(() =>
			root.querySelector('cosmoz-button')?.shadowRoot?.querySelector('button'),
		)
		.toBeTruthy();
	const touch = matchMedia('(pointer: coarse)').matches;
	for (const control of root.querySelectorAll('cosmoz-button')) {
		const button = control.shadowRoot!.querySelector('button')!;
		const rect = button.getBoundingClientRect();
		expect(rect.height).toBeGreaterThanOrEqual(touch ? 44 : 24);
		expect(rect.width).toBeGreaterThanOrEqual(touch ? 44 : 24);
		if (!touch) expect(rect.height).toBeLessThan(44);
		button.click();
	}
	expect(next).toHaveBeenCalledOnce();
	expect(prev).toHaveBeenCalledOnce();
});

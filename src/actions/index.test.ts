import { render } from 'lit-html';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { defaultButton } from './index';

vi.mock('@neovici/cosmoz-button', () => ({}));
vi.mock('i18next', () => ({ t: (key: string) => key }));

afterEach(() => {
	document.body.replaceChildren();
});

describe('default action button', () => {
	it('shows progress and deduplicates clicks through resolution and saving', async () => {
		const container = document.createElement('div');
		document.body.append(container);
		let finish!: () => void;
		const dialog = vi.fn(() => ({
			heading: 'Approve',
			initial: {},
			fields: [],
		}));
		const open = vi.fn(
			() => new Promise<void>((resolve) => (finish = resolve)),
		);
		render(
			defaultButton({
				items: [{ id: 'invoice' }],
				title: () => 'Approve',
				dialog,
				open,
			}),
			container,
		);
		const button = container.querySelector('cosmoz-button')! as HTMLElement & {
			disabled: boolean;
		};
		const progress = button.querySelector<HTMLElement>(
			'[data-action-progress]',
		)!;
		expect(progress.hidden).toBe(true);
		button.click();
		button.click();
		expect(open).toHaveBeenCalledTimes(1);
		expect(dialog).toHaveBeenCalledTimes(1);
		expect(button.disabled).toBe(true);
		expect(button.getAttribute('aria-busy')).toBe('true');
		expect(progress.hidden).toBe(false);
		finish();
		await Promise.resolve();
		expect(button.disabled).toBe(false);
		expect(button.hasAttribute('aria-busy')).toBe(false);
		expect(progress.hidden).toBe(true);
	});
});

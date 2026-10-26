import { html } from 'lit-html';

interface LabelledTab {
	name: string;
	title?: unknown;
	content?: unknown;
}

/** Icon-only tabs, except the active one, which also names its layout. */
export const labelActive = <T extends LabelledTab>(
	tabs: readonly T[],
	active?: string,
) =>
	tabs.map((tab) =>
		tab.name === active
			? { ...tab, content: html`${tab.content}<span>${tab.title}</span>` }
			: tab,
	);

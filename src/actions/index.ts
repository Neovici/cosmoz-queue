import { html, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';
import type { Dialogable } from '@neovici/cosmoz-form';

export const actionCount = <T>(items: T[], applicableItems: T[] = items) =>
	when(applicableItems.length > 1, () =>
		when(
			applicableItems.length === items.length,
			() => html`(${applicableItems.length})`,
			() => html`(${applicableItems.length}/${items.length})`,
		),
	);

export interface ActionOpts<TItem extends object> {
	items: TItem[];
	open: <T extends object>(dialog: Dialogable<T>) => void;
	slot?: string;
}

export interface DialogOpts<TItem extends object> {
	items: TItem[];
	title: string;
}

export interface Action<TItem extends object, TDialog extends object = object> {
	title: () => string;
	applicable?: (item: TItem) => boolean;
	button?: (opts: Action<TItem, TDialog> & ActionOpts<TItem>) => unknown;
	dialog: (
		opts: Omit<Action<TItem, TDialog>, 'title'> & DialogOpts<TItem>,
	) => Dialogable<TDialog> | Promise<Dialogable<TDialog>>;
}

export const defaultButton = <
	TItem extends object,
	TDialog extends object = object,
>(
	opts: Action<TItem, TDialog> & ActionOpts<TItem>,
) => {
	const { open, dialog, items, applicable, slot } = opts;
	const title = opts.title();
	const applicableItems = applicable ? items.filter(applicable) : items;
	if (!applicableItems.length) return nothing;
	return html`<button
		class="button"
		slot="${ifDefined(slot)}"
		@click=${async () =>
			open(await dialog({ ...opts, items: applicableItems, title }))}
	>
		${title} ${actionCount(items, applicableItems)}
	</button>`;
};

export const action = <TItem extends object, TAction extends object>(
	action: Action<TItem, TAction>,
) => action;

export const renderActions =
	<TItem extends object, TDialog extends object = object>(
		opts: ActionOpts<TItem>,
	) =>
	(actions: Action<TItem, TDialog>[]) =>
		actions.map((action) =>
			(action.button ?? defaultButton)({ ...action, ...opts }),
		);

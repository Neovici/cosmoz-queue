import type { Dialogable, Resolvable } from '@neovici/cosmoz-form';
import { html, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const actionCount = <T>(items: T[], applicableItems: T[] = items) =>
	when(
		applicableItems.length > 1 || applicableItems.length < items.length,
		() =>
			when(
				applicableItems.length === items.length,
				() => html`(${applicableItems.length})`,
				() => html`(${applicableItems.length}/${items.length})`,
			),
	);

export type SyncOpenFn = <T extends object>(dialog: Dialogable<T>) => void;
export type AsyncOpenFn = <T extends object>(
	dialog: Resolvable<Dialogable<T>>,
) => void;

export interface ActionOpts<
	TItem extends object,
	TOpen extends SyncOpenFn | AsyncOpenFn = AsyncOpenFn,
> {
	items: TItem[];
	open: TOpen;
	slot?: string;
}

export interface DialogOpts<TItem extends object> {
	items: TItem[];
	title: string;
}

export interface Action<TItem extends object, TDialog extends object = object> {
	title: () => string;
	applicable?: (item: TItem) => boolean;
	priority?: number;
	button?: (
		opts: Action<TItem, TDialog> & ActionOpts<TItem, SyncOpenFn | AsyncOpenFn>,
	) => unknown;
	dialog: (
		opts: Omit<Action<TItem, TDialog>, 'title'> & DialogOpts<TItem>,
	) => Dialogable<TDialog> | Promise<Dialogable<TDialog>>;
}

export const defaultButton = <
	TItem extends object,
	TDialog extends object = object,
	TOpen extends SyncOpenFn | AsyncOpenFn = AsyncOpenFn,
>(
	opts: Action<TItem, TDialog> & ActionOpts<TItem, TOpen>,
) => {
	const { open, dialog, items, applicable, slot } = opts;
	const title = opts.title();
	const applicableItems = applicable ? items.filter(applicable) : items;
	if (!applicableItems.length) return nothing;
	return html`<button
		class="button"
		slot="${ifDefined(slot)}"
		title="${title}"
		data-priority="${ifDefined(opts.priority)}"
		@click=${() =>
			(open as AsyncOpenFn)(dialog({ ...opts, items: applicableItems, title }))}
	>
		${title} ${actionCount(items, applicableItems)}
	</button>`;
};

export const action = <TItem extends object, TAction extends object>(
	action: Action<TItem, TAction>,
) => action;

export const renderActions =
	<
		TItem extends object,
		TDialog extends object = object,
		TOpen extends SyncOpenFn | AsyncOpenFn = AsyncOpenFn,
	>(
		opts: ActionOpts<TItem, TOpen>,
	) =>
	(actions: Action<TItem, TDialog>[]) =>
		actions.map((action) => {
			const merged = { ...action, ...opts } as Action<TItem, TDialog> &
				ActionOpts<TItem, TOpen>;
			return (action.button ?? defaultButton)(merged);
		});

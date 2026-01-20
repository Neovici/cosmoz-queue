import { czAction, RowAction } from '#cz/cz-components/cz-actions';
import { errorIcon } from '#cz/cz-components/cz-attachments/icons/error.ts';
import '@neovici/cosmoz-omnitable';
import { html } from 'lit-html';
import { extract } from '../../utils';

const renderRowActions = (slot: string) => (rowActions: RowAction[]) =>
	rowActions.map(({ title, ids = {}, action }) =>
		czAction({
			slot,
			action,
			actionTitle: title,
			objectIds: ids,
		}),
	);

export const renderGenericActions = (
	genericActions$: Promise<RowAction[]>,
	slot = '',
) =>
	extract(
		genericActions$,
		renderRowActions(slot),
		() => html`<cosmoz-spinner slot="${slot}" unstyled></cosmoz-spinner>`,
		(e) =>
			html`<span slot="${slot}" unstyled style="background: transparent"
				>${errorIcon({ title: e.message ?? e })}</span
			>`,
	);

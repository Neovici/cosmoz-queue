import {
	filterSimpleActions,
	getRowActions,
	Row,
} from '#components/cz-actions';
import { BootInfo } from '@neovici/core/context/boot-info.js';
import { useContext } from '@pionjs/pion';
import { GenericActionsCallback } from './use-list-core';

export const useInlineActions = <TItem extends Row>(
	rowIdProperty: keyof TItem,
): GenericActionsCallback<TItem> => {
	const boot = useContext(BootInfo);
	return [
		async ({ selectedItems }) =>
			getRowActions(
				boot.reasonCodes,
				boot.actions,
				selectedItems,
				rowIdProperty,
				filterSimpleActions(boot),
			),
		[boot],
	];
};

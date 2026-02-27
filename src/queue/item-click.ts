export type ItemClickOpts =
	| { item: unknown; index?: never; activate: string | string[] }
	| { item?: never; index: number; activate: string | string[] };

export const itemClick =
	({ item, index, activate }: ItemClickOpts) =>
	<E extends KeyboardEvent | MouseEvent>(e: E) => {
		if (e.ctrlKey || e.metaKey) {
			return;
		}
		const clickEvent = new CustomEvent('omnitable-item-click', {
			cancelable: true,
			bubbles: true,
			composed: true,
			detail: { item, index, activate },
		});

		e.currentTarget?.dispatchEvent(clickEvent);
		if (clickEvent.defaultPrevented) {
			e.preventDefault();
		}
	};

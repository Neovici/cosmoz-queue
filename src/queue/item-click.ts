export const itemClick =
	({ index, activate }: { index: number; activate: string | string[] }) =>
	<E extends KeyboardEvent | MouseEvent>(e: E) => {
		if (e.ctrlKey || e.metaKey) {
			return;
		}
		const clickEvent = new CustomEvent('omnitable-item-click', {
			cancelable: true,
			bubbles: true,
			composed: true,
			detail: { index, activate },
		});

		e.currentTarget?.dispatchEvent(clickEvent);
		if (clickEvent.defaultPrevented) {
			e.preventDefault();
		}
	};

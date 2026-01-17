const getActiveElement = (
	root: Document | ShadowRoot = document,
): HTMLElement | null => {
	const activeEl = root.activeElement;

	if (!activeEl) {
		return null;
	}

	if (activeEl.shadowRoot) {
		return getActiveElement(activeEl.shadowRoot);
	}

	return activeEl as HTMLElement;
};

export default getActiveElement;

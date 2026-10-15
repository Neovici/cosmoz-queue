import { useCallback, useState } from '@pionjs/pion';

type Returned<T> = [T, (v: T) => void];

// window.localStorage throws a SecurityError where storage is blocked, so
// both of these degrade to no-ops: the read runs during render, the write
// from event handlers — neither may take the hook tree down.
const loadPref = (key: string | undefined) => {
	try {
		return key ? localStorage.getItem(`pref-${key}`) : undefined;
	} catch {
		return undefined;
	}
};

const savePref = (key: string | undefined, value: string) => {
	if (!key) return;
	try {
		localStorage.setItem(`pref-${key}`, value);
	} catch {
		// storage is blocked — the in-memory state keeps working
	}
};

/**
 * State for the preference under `pref-${key}` in localStorage. An
 * undefined key disables persistence (the hook degrades to plain
 * in-memory state, so it can be called unconditionally — hooks must
 * not be conditional) and blocked storage disables it silently.
 */
export function usePref<T extends string>(key?: string): Returned<T>;
export function usePref<T extends string>(
	key: string | undefined,
	defaultValue: T,
): Returned<T>;
export function usePref<T extends string>(
	key: string | undefined,
	defaultValue?: T,
) {
	const [pref, setPref] = useState(() => loadPref(key) || defaultValue);

	return [
		pref,
		useCallback(
			(value: T) => {
				savePref(key, value);
				setPref(value);
			},
			[key, setPref],
		),
	] as const;
}

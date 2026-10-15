import { useCallback, useState } from '@pionjs/pion';

type Returned<T> = [T, (v: T) => void];

/**
 * Reads (and writes) the preference under `pref-${key}` in localStorage.
 * An undefined key disables persistence: the hook degrades to plain
 * in-memory state, so it can be called unconditionally (hooks must not
 * be conditional). Storage access is guarded — browsers throw a
 * SecurityError where storage is blocked, and this runs during render.
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
	const [pref, setPref] = useState(() => {
		try {
			return (key && localStorage.getItem(`pref-${key}`)) || defaultValue;
		} catch {
			return defaultValue;
		}
	});

	return [
		pref,
		useCallback(
			(value: T) => {
				try {
					if (key) localStorage.setItem(`pref-${key}`, value);
				} catch {
					// storage is blocked — keep the in-memory state working
				}
				setPref(value);
			},
			[key, setPref],
		),
	] as const;
}

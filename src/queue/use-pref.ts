import { useCallback, useState } from '@pionjs/pion';

type Returned<T> = [T, (v: T) => void];

const storageKey = (key: string) => `pref-${key}`;

const read = (key?: string) => {
	if (!key) {
		return null;
	}
	try {
		return localStorage.getItem(storageKey(key));
	} catch {
		return null;
	}
};

/** Passing no key disables persistence; the value then behaves as plain state. */
export function usePref<T extends string>(key?: string): Returned<T>;
export function usePref<T extends string>(
	key: string | undefined,
	defaultValue: T,
): Returned<T>;
export function usePref<T extends string>(key?: string, defaultValue?: T) {
	const [pref, setPref] = useState(() => read(key) || defaultValue);

	return [
		pref,
		useCallback(
			(value: T) => {
				try {
					if (key) {
						localStorage.setItem(storageKey(key), value);
					}
				} catch {
					// a full or unavailable store must not break the caller
				}
				setPref(value);
			},
			[key, setPref],
		),
	] as const;
}

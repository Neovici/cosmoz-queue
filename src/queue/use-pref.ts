import { useCallback, useState } from '@pionjs/pion';

type Returned<T> = [T, (v: T) => void];

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
		// storage blocked
	}
};

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

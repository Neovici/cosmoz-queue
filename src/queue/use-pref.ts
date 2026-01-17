import { useState, useCallback } from '@pionjs/pion';

type Returned<T> = [T, (v: T) => void];
export function usePref<T extends string>(key: string): Returned<T>;
export function usePref<T extends string>(
	key: string,
	defaultValue: T,
): Returned<T>;
export function usePref<T extends string>(key: string, defaultValue?: T) {
	const [pref, setPref] = useState(
		() => localStorage.getItem(`pref-${key}`) || defaultValue,
	);

	return [
		pref,
		useCallback(
			(value: T) => {
				localStorage.setItem(`pref-${key}`, value);
				setPref(value);
			},
			[setPref],
		),
	] as const;
}

export type ParamValue =
	| string
	| string[]
	| boolean
	| number
	| null
	| undefined;

export const toURLSearchParams = <T extends Record<string, ParamValue>>(
	obj: T,
) => {
	const entries = Object.entries(obj),
		simpleParams = Object.fromEntries(
			entries.filter(
				([, value]) => !Array.isArray(value) && value !== undefined,
			),
		) as Record<string, string>,
		allParams = new URLSearchParams(simpleParams);

	// handle arrays
	entries
		.filter((entry): entry is [string, string[]] => Array.isArray(entry[1]))
		.forEach(([key, values]) =>
			values.forEach((value) => allParams.append(key, value)),
		);

	return allParams;
};

declare global {
	interface Cz {
		options: {
			backendBaseUri: string;
			googleClientId?: string;
			idp?: string;
		};
		state: {
			currentLocationPath: string;
		};
	}
	interface Window {
		cz: Cz;
	}
}

/**
 * @deprecated
 */
export function apiUrl(api: string): string;
/**
 * @deprecated
 */
export function apiUrl(
	api: string,
	params?: Record<string, ParamValue>,
): string;
/**
 * @deprecated
 */
export function apiUrl(
	api: string,
	params: Record<PropertyKey, ParamValue> = {},
): string {
	const baseUrl = window.cz.options.backendBaseUri,
		url = new URL(api, baseUrl);

	url.search = toURLSearchParams({
		...Object.fromEntries(url.searchParams as unknown as [string, string][]),
		...params,
	}) as unknown as string;

	return `${url}`;
}

/**
 * @deprecated This is a bad pattern to use and it's present only for legacy purposes.
 */
export function guardUrl(
	url: string,
	deps: unknown[] = [],
): string | undefined {
	// bail if any required dependencies are undefined
	if (deps.some((dep) => dep == null)) {
		return;
	}
	return url;
}

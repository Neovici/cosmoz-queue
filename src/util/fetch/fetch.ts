export class RequestError extends Error {
	response: Response;
	data: unknown;
	constructor(message: string, response: Response, data?: unknown) {
		super(message);
		this.name = 'RequestError';
		this.response = response;
		this.data = data;
	}
}

type errorResponse = Partial<{
	message: string;
	Message: string;
	friendlyMessage: string;
	error: Partial<{ httpMessage: string }>;
	errors: Partial<{ errorType: string; message: string }>[];
}>;

export const notice = (data: unknown) => {
	if (data && typeof data === 'object') {
		const obj = data as errorResponse,
			message =
				obj.message ??
				obj.Message ??
				obj.friendlyMessage ??
				obj.error?.httpMessage ??
				obj.errors?.map((err) => err.message).join(' ');
		if (message) return message;
	}
	return 'Unknown error';
};

const baseInit: Partial<RequestInit> = {};

type BaseInitOptions = Partial<RequestInit> & {
	getHeaders?: () => Record<string, string>;
};

let getHeadersFn: (() => Record<string, string>) | undefined;

export const setBaseInit = <T extends BaseInitOptions>(init: T) => {
	const { getHeaders, ...rest } = init;
	if (getHeaders) getHeadersFn = getHeaders;
	const mergedObject = {
		...baseInit,
		...rest,
		headers: { ...baseInit.headers, ...(rest as RequestInit).headers },
	};
	return Object.assign(baseInit, mergedObject);
};

export const fetch = (url: string, opts?: RequestInit) =>
	window.fetch(url, {
		...baseInit,
		mode: 'cors',
		credentials: 'include',
		...opts,
		headers: {
			...baseInit?.headers,
			...getHeadersFn?.(),
			...opts?.headers,
		},
	});

export const handleJSON = (res: Response) => {
	if (res.status === 204) {
		return '';
	}
	const json = res.json();
	return res.ok
		? json.catch(() => '')
		: json.then(
				(data) => Promise.reject(new RequestError(notice(data), res, data)),
				(error) => {
					if (res.status === 404) {
						return Promise.reject(
							new RequestError('URL not found: ' + res.url, res),
						);
					}
					return Promise.reject(error);
				},
			);
};

/**
 * @deprecated
 */
export const json = (
	url: string,
	{
		fetch: _fetch = fetch,
		handleJSON: _handleJSON = handleJSON,
		...opts
	}: RequestInit & {
		fetch?: typeof fetch;
		handleJSON?: typeof handleJSON;
	} = {},
) => _fetch(url, opts).then(_handleJSON);

/**
 * @deprecated
 */
export const jsonPost = (
	url: string,
	body?: object | BodyInit,
	opts?: Omit<RequestInit, 'body'>,
) =>
	json(url, {
		method: 'POST',
		...(body ? { body: JSON.stringify(body) } : {}),
		...opts,
		headers: {
			'Content-Type': 'application/json',
			...opts?.headers,
		},
	});

export const jsonPut = (
	url: string,
	body?: object | BodyInit,
	opts?: Omit<RequestInit, 'body'>,
) => jsonPost(url, body, { method: 'PUT', ...opts });

export const jsonPatch = (
	url: string,
	body: object | BodyInit,
	opts?: Omit<RequestInit, 'body'>,
) => jsonPost(url, body, { method: 'PATCH', ...opts });

export const jsonDelete = (
	url: string,
	body?: object | BodyInit,
	opts?: Omit<RequestInit, 'body'>,
) => jsonPost(url, body, { method: 'DELETE', ...opts });

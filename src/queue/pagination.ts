import { useCallback, useMemo } from '@pionjs/pion';
import { useHashParam } from '@neovici/cosmoz-router/use-hash-param';
import { parse as parseNumber } from '@neovici/cosmoz-utils/number';

export const usePagination = () => {
	const [_page, setPageNumber] = useHashParam('page') as [
		string,
		(v: string | number | undefined) => void,
	];
	return {
		page: useMemo(() => Math.max(1, parseNumber(_page) || 1), [_page]),
		onPage: useCallback(
			(page: number = 0) => setPageNumber(page < 2 ? undefined : page),
			[],
		),
	};
};

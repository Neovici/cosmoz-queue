import { useCallback } from '@pionjs/pion';

import { usePref } from './use-pref';

interface Opts {
	persistKey?: string;
	fallback?: string;
	except?: string;
	onActivate?: (name: string) => void;
}

export default ({ persistKey, fallback, except, onActivate }: Opts) => {
	const [stored, setStored] = usePref<string>(
		persistKey ? `${persistKey}-tab` : undefined,
	);

	return {
		fallback: stored && stored !== except ? stored : fallback,
		onActivate: useCallback(
			(name: string) => {
				setStored(name);
				onActivate?.(name);
			},
			[setStored, onActivate],
		),
	};
};

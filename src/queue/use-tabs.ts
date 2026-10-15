import { RenderTab, useTabs } from '@neovici/cosmoz-tabs/next/index.js';
import { useCallback, useMemo } from '@pionjs/pion';

import { t } from 'i18next';
import * as icons from './icons';
import { usePref } from './use-pref';

export interface Options<I> {
	items: I[];
	hashParam?: string;
	mobile?: boolean;
	onActivate?: (name: string) => void;
	fallback?: string;
	persistKey?: string;
	sizes?: { list?: string; view?: string };
}

export interface Tab extends RenderTab {
	content: unknown;
}

export default <I = unknown>({
	items,
	hashParam,
	mobile,
	fallback,
	onActivate,
	persistKey,
}: Options<I>) => {
	const [stored, setStored] = usePref<string>(
			persistKey ? `${persistKey}-tab` : undefined,
		),
		defaultTab = stored && stored !== 'queue' ? stored : fallback,
		tabs = useMemo(
			() =>
				(
					[
						{
							name: 'overview',
							title: t('List'),
							disabled: false,
							content: icons.list,
						},
						{
							name: 'split',
							disabled: mobile || !(items.length > 0),
							title: t('Split'),
							content: icons.split,
						},
						{
							name: 'queue',
							disabled: !(items.length > 0),
							title: t('Queue'),
							content: icons.queue,
						},
					] as const
				).map((tab) =>
					tab.name === defaultTab ? { ...tab, fallback: true } : tab,
				),
			[items.length, mobile, defaultTab],
		),
		_onActivate = useCallback(
			(name: string) => {
				setStored(name);
				onActivate?.(name);
			},
			[setStored, onActivate],
		),
		_tabnav = useTabs(tabs, { hashParam, onActivate: _onActivate }),
		tabnav = useMemo(() => _tabnav, Object.values(_tabnav)),
		activeTab = tabnav.active?.name;

	return {
		activeTab,
		tabnav,
	};
};

import { RenderTab, useTabs } from '@neovici/cosmoz-tabs/next/index.js';
import { useCallback, useMemo, useState } from '@pionjs/pion';

import { t } from 'i18next';
import * as icons from './icons';
import { usePref } from './use-pref';

export const tabNames = ['overview', 'split', 'queue'] as const;

export type TabName = (typeof tabNames)[number];

const isTabName = (value?: string): value is TabName =>
	tabNames.includes(value as TabName);

export interface Options<I> {
	items: I[];
	hashParam?: string;
	mobile?: boolean;
	onActivate?: (name: string) => void;
	fallback?: string;
	/**
	 * Storage key for the tab the queue opens on. When set, activating a tab
	 * remembers it under this key and later mounts fall back to it. Only a tab
	 * click counts — `tabnav.activate`, which is how a row or link click opens a
	 * record, deliberately does not.
	 */
	persist?: string;
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
	persist,
}: Options<I>) => {
	const [stored, remember] = usePref<TabName>(persist),
		// the stored tab decides where the queue opens, so it is taken at mount:
		// letting a later pick move that target would rewrite what Back means
		[atMount] = useState(stored),
		opensOn = isTabName(atMount) ? atMount : fallback;

	const tabs = useMemo(
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
			).map((tab) => (tab.name === opensOn ? { ...tab, fallback: true } : tab)),
		[items.length, mobile, opensOn],
	);

	const activated = useCallback(
			(name: string) => {
				if (isTabName(name)) {
					remember(name);
				}
				onActivate?.(name);
			},
			[remember, onActivate],
		),
		_tabnav = useTabs(tabs, { hashParam, onActivate: activated }),
		tabnav = useMemo(() => _tabnav, Object.values(_tabnav)),
		activeTab = tabnav.active?.name;

	return {
		activeTab,
		tabnav,
	};
};

import { useMemo, useState, useCallback } from '@pionjs/pion';
import type { Tab, TabNav } from '../types';
import { listIcon, splitIcon, queueIcon } from '../icons';

const t = (key: string) => key;

export interface UseTabsOptions<I> {
	items: I[];
	hashParam?: string;
	mobile?: boolean;
	onActivate?: (name: string) => void;
	fallback?: string;
}

export const useQueueTabs = <I = unknown>({
	items,
	hashParam,
	mobile,
	fallback,
	onActivate,
}: UseTabsOptions<I>): { activeTab: string; tabnav: TabNav } => {
	const tabs = useMemo(
		(): Tab[] =>
			(
				[
					{
						name: 'overview',
						title: t('List'),
						disabled: false,
						content: listIcon,
					},
					{
						name: 'split',
						disabled: mobile || !(items.length > 0),
						title: t('Split'),
						content: splitIcon,
					},
					{
						name: 'queue',
						disabled: !(items.length > 0),
						title: t('Queue'),
						content: queueIcon,
					},
				] as const
			).map((tab) =>
				tab.name === fallback ? { ...tab, fallback: true } : tab,
			),
		[items.length, mobile, fallback],
	);

	const defaultTab = useMemo(
		() => tabs.find((tab) => tab.fallback && !tab.disabled) ?? tabs.find((tab) => !tab.disabled) ?? tabs[0],
		[tabs],
	);

	const [active, setActive] = useState<Tab | undefined>(defaultTab);

	const activate = useCallback(
		(name: string) => {
			const tab = tabs.find((t) => t.name === name);
			if (tab && !tab.disabled) {
				setActive(tab);
				onActivate?.(name);
			}
		},
		[tabs, onActivate],
	);

	const tabnav: TabNav = useMemo(
		() => ({
			tabs,
			active,
			activate,
		}),
		[tabs, active, activate],
	);

	const activeTab = active?.name ?? 'overview';

	return {
		activeTab,
		tabnav,
	};
};

export default useQueueTabs;

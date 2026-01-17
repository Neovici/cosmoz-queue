import { useMemo } from '@pionjs/pion';
import { useTabs, RenderTab } from '@neovici/cosmoz-tabs/next/index.js';

import { _ } from '@neovici/cosmoz-i18next';
import * as icons from './icons';

export interface Options<I> {
	items: I[];
	hashParam?: string;
	mobile?: boolean;
	onActivate?: (name: string) => void;
	fallback?: string;
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
}: Options<I>) => {
	const tabs = useMemo(
		() =>
			(
				[
					{
						name: 'overview',
						title: _('List'),
						disabled: false,
						content: icons.list,
					},
					{
						name: 'split',
						disabled: mobile || !(items.length > 0),
						title: _('Split'),
						content: icons.split,
					},
					{
						name: 'queue',
						disabled: !(items.length > 0),
						title: _('Queue'),
						content: icons.queue,
					},
				] as const
			).map((tab) =>
				tab.name === fallback ? { ...tab, fallback: true } : tab,
			),
		[items.length, mobile, fallback],
	);

	const _tabnav = useTabs(tabs, { hashParam, onActivate }),
		tabnav = useMemo(() => _tabnav, Object.values(_tabnav)),
		activeTab = tabnav.active?.name;

	return {
		activeTab,
		tabnav,
	};
};

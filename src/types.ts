import type { TemplateResult } from 'lit-html';

export interface Pagination {
	pageNumber?: number;
	pageCount?: number;
	pageSize?: number;
	totalPages?: number;
	totalCount?: number;
	totalAvailable?: number;
	onPage?: (page: number) => void;
}

export interface Tab {
	name: string;
	title: string;
	disabled?: boolean;
	content?: unknown;
	fallback?: boolean;
}

export interface ListState<I> {
	items: I[];
	setItems: (items: I[]) => void;
	selected: I[];
	setSelected: (selected: I[]) => void;
	totalAvailable?: number;
	setTotalAvailable: (total: number) => void;
}

export interface QueueNav<I> {
	item: I;
	setItem: (item: I) => void;
	index: number;
	items: I[];
	next?: () => void;
	prev?: () => void;
	forward?: boolean;
	id: (i: I) => string;
	details?: (i: I) => PromiseLike<unknown>;
}

export interface QueueProps<I> extends ListState<I> {
	nav: QueueNav<I>;
	activeTab: string;
	mobile: boolean;
	tabnav: TabNav;
	hideActions: boolean;
	index: number;
	onItemClick: (e: Event) => void;
	ensue: (itemId: string) => void;
}

export interface TabNav {
	tabs: Tab[];
	active?: Tab;
	activate: (name: string) => void;
}

export interface RenderViewProps<I, D = I> {
	animationEnd$: Promise<unknown>;
	details?: (i: I) => PromiseLike<D>;
	item: I;
	next?: () => void;
	prev?: () => void;
	renderItem: (opts: {
		item: I | D;
		nav: TemplateResult;
		next?: () => void;
		prev?: () => void;
		animationEnd$?: Promise<unknown>;
	}) => TemplateResult;
	renderLoader: (opts: { item: I; nav: TemplateResult }) => TemplateResult;
}

export interface RenderQueueProps<I, D = I> {
	heading?: string;
	afterHeading?: unknown;
	index?: number;
	mobile?: boolean;
	items: I[];
	totalAvailable?: number;
	list: TemplateResult;
	pagination?: Pagination;
	tabnav: TabNav;
	nav: QueueNav<I> & { details?: (i: I) => PromiseLike<D> };
	renderItem: RenderViewProps<I, D>['renderItem'];
	renderLoader: RenderViewProps<I, D>['renderLoader'];
	details?: (i: I) => PromiseLike<D>;
}

export interface UseQueueOptions<I> {
	id?: (i: I) => string;
	api?: (id: string, item: I) => string;
	tabHashParam?: string;
	idHashParam?: string;
	fallback?: string;
	onActivate?: (name: string) => void;
	split?: SplitOptions;
}

export interface SplitOptions {
	sizes?: number[];
	minSize?: number | number[];
	expandToMin?: boolean;
	snapOffset?: number;
}

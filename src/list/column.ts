import { LitRenderable } from '../types/lit';

export interface Render<T> {
	(spec: T & { name: string }): LitRenderable;
}

export interface Column<F, R = F> {
	readonly order?: number;
	readonly sort?: string;
	readonly filter?: (f: F) => R;
	readonly render: Render<Omit<Column<F, R>, 'render' | 'name' | 'filter'>>;
}

export interface NamedColumn<F, R> extends Column<F, R> {
	name: string;
}

export type Columns<F = object> = {
	[K in keyof F]: Column<F[K]>;
};

export const column = <F = never, R = F>(spec: Column<F, R>) => spec;

type InferFilter<T> = T extends Column<infer F, any> ? F : never;
export type ColumnFilters<T> = T extends object
	? {
			[K in keyof T as InferFilter<T[K]> extends never
				? never
				: K]?: InferFilter<T[K]>;
		}
	: never;

type InferFilterResult<T> = T extends Column<any, infer F> ? F : never;
export type ColumnFilterResults<T> = T extends object
	? {
			[K in keyof T as InferFilterResult<T[K]> extends never
				? never
				: K]: InferFilterResult<T[K]>;
		}
	: never;

export type ColumnNames<T> = T extends object ? keyof T : never;

type Values<T> = T extends object ? T[keyof T][] : never;
export const mappedFilters = <T, C extends Columns<T>>(
	columns: C,
	filters?: ColumnFilters<C>,
) =>
	Object.entries(columns)
		.map(([name, column]) => {
			const filterValue = (filters as any)?.[name as ColumnNames<C>];
			const filter: Column<any, any>['filter'] = (column as any).filter;
			if (filter && filterValue != null) return filter(filterValue);
		})
		.filter((v) => v != null) as Values<ColumnFilterResults<C>>;

type Unarray<T> = T extends readonly (infer E)[]
	? (E extends readonly (infer B)[] ? B : E)[]
	: never;
export const flat = <T extends unknown[]>(arr: T) => arr.flat() as Unarray<T>;

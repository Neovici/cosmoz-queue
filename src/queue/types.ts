export interface Pagination {
	// Current page  1 indexed
	pageNumber?: number;
	// How many pages are there in total
	pageCount?: number;
	// How many items are there in a page
	pageSize?: number;
	// How many pages are there in total
	// If not set computed from totalAvailable / pageSize
	totalPages?: number;
	// Another way to specify how many items there are in total used in meso
	totalCount?: number;
	// How many items there are in total
	totalAvailable?: number;
	onPage?: (page: number) => void;
}

import { html, render } from 'lit-html';
import { expect, userEvent } from 'storybook/test';
import { renderLoadMore, style } from '../src/list/more/render-more';

export default {
	title: 'Components/LoadMore',
};

interface Item {
	id: string;
	name: string;
}

// Simulates paginated data fetching
const createMockList = (
	totalItems: number,
	delay = 300,
): ((props: {
	page: number;
	pageSize: number;
}) => Promise<{ items: Item[]; total: number }>) => {
	const allItems = Array.from({ length: totalItems }, (_, i) => ({
		id: `item-${i + 1}`,
		name: `Item ${i + 1}`,
	}));

	return async ({ page, pageSize }) => {
		await new Promise((resolve) => setTimeout(resolve, delay));
		const start = page * pageSize;
		const items = allItems.slice(start, start + pageSize);
		return { items, total: totalItems };
	};
};

// Helper to create a stateful demo
const createLoadMoreDemo = (
	container: HTMLElement,
	options: { totalItems: number; pageSize: number },
) => {
	const { totalItems, pageSize } = options;
	const list$ = createMockList(totalItems);

	let state = {
		items: [] as Item[],
		page: 0,
		data$: undefined as Promise<Item[]> | undefined,
		totalAvailable: Infinity,
	};

	const renderDemo = () => {
		const hasMore =
			state.totalAvailable < Infinity &&
			state.totalAvailable > state.items.length;

		const loadMore = hasMore
			? () => {
					state.data$ = list$({ page: state.page, pageSize }).then((result) => {
						state = {
							...state,
							items: [...state.items, ...result.items],
							page: state.page + 1,
							totalAvailable: result.total,
							data$: undefined,
						};
						renderDemo();
						return result.items;
					});
					renderDemo();
				}
			: undefined;

		const loadAll = hasMore
			? () => {
					state.data$ = list$({ page: 0, pageSize: state.totalAvailable }).then(
						(result) => {
							state = {
								...state,
								items: result.items,
								totalAvailable: result.total,
								data$: undefined,
							};
							renderDemo();
							return result.items;
						},
					);
					renderDemo();
				}
			: undefined;

		render(
			html`
				<style>
					${style} .demo-container {
						font-family: sans-serif;
						padding: 16px;
						max-width: 400px;
					}
					.item-list {
						border: 1px solid #e0e0e0;
						border-radius: 4px;
						margin-bottom: 16px;
						max-height: 300px;
						overflow-y: auto;
					}
					.item {
						padding: 8px 12px;
						border-bottom: 1px solid #f0f0f0;
					}
					.item:last-child {
						border-bottom: none;
					}
					.stats {
						color: #666;
						font-size: 14px;
						margin-bottom: 8px;
					}
					.buttons {
						display: flex;
						gap: 8px;
					}
				</style>
				<div class="demo-container">
					<div class="stats" data-testid="stats">
						Showing ${state.items.length} of ${state.totalAvailable} items
					</div>
					<div class="item-list">
						${state.items.map(
							(item) => html`<div class="item">${item.name}</div>`,
						)}
					</div>
					<div class="buttons">
						${renderLoadMore({
							data$: state.data$,
							onMore: loadMore,
							onAll: loadAll,
						})}
					</div>
				</div>
			`,
			container,
		);
	};

	// Initial load
	state.data$ = list$({ page: 0, pageSize }).then((result) => {
		state = {
			...state,
			items: result.items,
			page: 1,
			totalAvailable: result.total,
			data$: undefined,
		};
		renderDemo();
		return result.items;
	});
	renderDemo();
};

// Stories
export const Default = {
	render: () => html`<div id="demo-container"></div>`,
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const container = canvasElement.querySelector(
			'#demo-container',
		) as HTMLElement;
		createLoadMoreDemo(container, { totalItems: 100, pageSize: 10 });
	},
};

export const WithCallbacks = {
	render: () => html`<div id="demo-container"></div>`,
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const container = canvasElement.querySelector(
			'#demo-container',
		) as HTMLElement;
		createLoadMoreDemo(container, { totalItems: 100, pageSize: 10 });

		// Wait for initial load
		await new Promise((resolve) => setTimeout(resolve, 500));

		// Find buttons
		const loadMoreButton = container.querySelector(
			'button.more:not([hidden])',
		) as HTMLButtonElement;
		expect(loadMoreButton).not.toBeNull();
		expect(loadMoreButton.textContent).toContain('Load more');

		// Click "Load more"
		await userEvent.click(loadMoreButton);

		// Wait for load to complete
		await new Promise((resolve) => setTimeout(resolve, 500));

		// Verify more items loaded
		const stats = container.querySelector(
			'[data-testid="stats"]',
		) as HTMLElement;
		expect(stats.textContent).toContain('Showing 20 of 100 items');
	},
};

export const LoadAllTest = {
	render: () => html`<div id="demo-container"></div>`,
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const container = canvasElement.querySelector(
			'#demo-container',
		) as HTMLElement;
		createLoadMoreDemo(container, { totalItems: 100, pageSize: 10 });

		// Wait for initial load
		await new Promise((resolve) => setTimeout(resolve, 500));

		// Find Load all button (second .more button)
		const buttons = container.querySelectorAll('button.more:not([hidden])');
		const loadAllButton = Array.from(buttons).find((b) =>
			b.textContent?.includes('Load all'),
		) as HTMLButtonElement;
		expect(loadAllButton).not.toBeNull();

		// Click "Load all"
		await userEvent.click(loadAllButton);

		// Wait for load to complete
		await new Promise((resolve) => setTimeout(resolve, 500));

		// Verify all items loaded
		const stats = container.querySelector(
			'[data-testid="stats"]',
		) as HTMLElement;
		expect(stats.textContent).toContain('Showing 100 of 100 items');

		// Buttons should be hidden now
		const visibleButtons = container.querySelectorAll(
			'button.more:not([hidden])',
		);
		expect(visibleButtons.length).toBe(0);
	},
};

export const AllDataLoaded = {
	render: () => html`<div id="demo-container"></div>`,
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const container = canvasElement.querySelector(
			'#demo-container',
		) as HTMLElement;
		createLoadMoreDemo(container, { totalItems: 5, pageSize: 10 });

		// Wait for initial load
		await new Promise((resolve) => setTimeout(resolve, 500));

		// Buttons should be hidden when all data is already loaded
		const visibleButtons = container.querySelectorAll(
			'button.more:not([hidden])',
		);
		expect(visibleButtons.length).toBe(0);
	},
};

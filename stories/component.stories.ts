import { html } from 'lit-html';
import { component, useState } from '@pionjs/pion';
import { useQueueTabs } from '../src/hooks/use-tabs';
import { useListState } from '../src/hooks/use-list-state';
import { useDataNav } from '../src/hooks/use-data-nav';
import { renderNav, renderStats, renderPagination } from '../src/render';
import { styles } from '../src/styles.css';

export default {
	title: 'Components/Queue',
	component: 'cosmoz-queue',
};

interface Item {
	id: string;
	name: string;
	description: string;
	status: string;
}

const sampleItems: Item[] = [
	{ id: '1', name: 'Task Alpha', description: 'Complete the project setup', status: 'active' },
	{ id: '2', name: 'Task Beta', description: 'Review code changes', status: 'pending' },
	{ id: '3', name: 'Task Gamma', description: 'Write documentation', status: 'active' },
	{ id: '4', name: 'Task Delta', description: 'Run tests', status: 'completed' },
	{ id: '5', name: 'Task Epsilon', description: 'Deploy to staging', status: 'pending' },
];

// Demo Queue Component
const DemoQueue = () => {
	const listState = useListState<Item>();
	const { items, setItems, selected, setSelected, totalAvailable, setTotalAvailable } = listState;
	
	if (items.length === 0) {
		setItems(sampleItems);
		setTotalAvailable(sampleItems.length);
	}

	const { activeTab, tabnav } = useQueueTabs({
		items: items.length > 0 ? items : sampleItems,
		fallback: 'overview',
	});

	const nav = useDataNav({
		items: items.length > 0 ? items : sampleItems,
		id: (item) => item.id,
	});

	const handleItemClick = (item: Item) => {
		nav.setItem(item);
		if (activeTab === 'overview') {
			tabnav.activate('queue');
		}
	};

	return html`
		<style>${styles}</style>
		<div style="height: 100%; display: flex; flex-direction: column;">
			<!-- Header with tabs -->
			<div class="tabn">
				<div class="tabn-heading">Demo Queue</div>
				${tabnav.tabs.map(
					(tab) => html`
						<button
							class="tabn-tab"
							?active=${tabnav.active?.name === tab.name}
							?disabled=${tab.disabled}
							@click=${() => !tab.disabled && tabnav.activate(tab.name)}
						>
							${tab.title}
						</button>
					`,
				)}
				${renderStats({
					index: nav.index,
					items: items.length > 0 ? items : sampleItems,
					totalAvailable: totalAvailable ?? sampleItems.length,
					nav,
				})}
			</div>

			<!-- Content area -->
			<div class="split" data-active=${activeTab}>
				<!-- List view -->
				<div id="list" style="padding: 16px;">
					<h3 style="margin-top: 0;">Items</h3>
					${(items.length > 0 ? items : sampleItems).map(
						(item) => html`
							<div
								style="
									padding: 12px;
									margin-bottom: 8px;
									background: ${nav.item?.id === item.id ? '#e3f2fd' : '#f5f5f5'};
									border-radius: 4px;
									cursor: pointer;
									border-left: 3px solid ${item.status === 'active' ? '#4caf50' : item.status === 'completed' ? '#2196f3' : '#ff9800'};
								"
								@click=${() => handleItemClick(item)}
							>
								<strong>${item.name}</strong>
								<div style="font-size: 0.9em; color: #666;">${item.description}</div>
								<span style="
									display: inline-block;
									margin-top: 4px;
									padding: 2px 8px;
									border-radius: 12px;
									font-size: 0.75em;
									background: ${item.status === 'active' ? '#e8f5e9' : item.status === 'completed' ? '#e3f2fd' : '#fff3e0'};
									color: ${item.status === 'active' ? '#388e3c' : item.status === 'completed' ? '#1976d2' : '#f57c00'};
								">${item.status}</span>
							</div>
						`,
					)}
				</div>

				<!-- Detail view -->
				<div id="queue" style="padding: 16px;">
					${nav.item
						? html`
								<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
									<h2 style="margin: 0;">${nav.item.name}</h2>
									<div>
										<button
											style="padding: 8px 16px; margin-right: 8px; cursor: pointer;"
											?disabled=${!nav.prev}
											@click=${nav.prev}
										>
											← Previous
										</button>
										<button
											style="padding: 8px 16px; cursor: pointer;"
											?disabled=${!nav.next}
											@click=${nav.next}
										>
											Next →
										</button>
									</div>
								</div>
								<div style="background: #f5f5f5; padding: 16px; border-radius: 8px;">
									<p><strong>ID:</strong> ${nav.item.id}</p>
									<p><strong>Description:</strong> ${nav.item.description}</p>
									<p><strong>Status:</strong> ${nav.item.status}</p>
								</div>
							`
						: html`
								<div style="text-align: center; padding: 40px; color: #666;">
									<p>Select an item from the list to view details</p>
								</div>
							`}
				</div>
			</div>
		</div>
	`;
};

// Register the demo component
const CosmozQueueDemo = component(DemoQueue, {
	observedAttributes: [],
	useShadowDOM: true,
	styleSheets: [styles],
});

if (!customElements.get('cosmoz-queue-demo')) {
	customElements.define('cosmoz-queue-demo', CosmozQueueDemo);
}

// Stories
export const Demo = () => html`
	<div style="height: 600px; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
		<cosmoz-queue-demo></cosmoz-queue-demo>
	</div>
`;

export const Documentation = () => html`
	<div style="padding: 20px; max-width: 800px; font-family: sans-serif;">
		<h1>Cosmoz Queue</h1>
		<p>
			A reusable queue component for master-detail views with list, split, and
			queue modes.
		</p>

		<h2>Features</h2>
		<ul>
			<li><strong>List Mode (Overview)</strong>: Traditional list view showing all items</li>
			<li><strong>Split Mode</strong>: Side-by-side list and detail view with resizable panels</li>
			<li><strong>Queue Mode</strong>: Full-screen detail view with prev/next navigation</li>
		</ul>

		<h2>Available Hooks</h2>
		<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
			<thead>
				<tr style="background: #f5f5f5;">
					<th style="padding: 8px; text-align: left; border: 1px solid #e0e0e0;">Hook</th>
					<th style="padding: 8px; text-align: left; border: 1px solid #e0e0e0;">Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style="padding: 8px; border: 1px solid #e0e0e0;"><code>useQueue</code></td>
					<td style="padding: 8px; border: 1px solid #e0e0e0;">Main hook combining all queue functionality</td>
				</tr>
				<tr>
					<td style="padding: 8px; border: 1px solid #e0e0e0;"><code>useListState</code></td>
					<td style="padding: 8px; border: 1px solid #e0e0e0;">Manages items, selection, and total count</td>
				</tr>
				<tr>
					<td style="padding: 8px; border: 1px solid #e0e0e0;"><code>useQueueTabs</code></td>
					<td style="padding: 8px; border: 1px solid #e0e0e0;">Tab state management (list/split/queue modes)</td>
				</tr>
				<tr>
					<td style="padding: 8px; border: 1px solid #e0e0e0;"><code>useSplit</code></td>
					<td style="padding: 8px; border: 1px solid #e0e0e0;">Split.js integration for resizable panels</td>
				</tr>
				<tr>
					<td style="padding: 8px; border: 1px solid #e0e0e0;"><code>useDataNav</code></td>
					<td style="padding: 8px; border: 1px solid #e0e0e0;">Prev/next navigation through items</td>
				</tr>
			</tbody>
		</table>

		<h2>Basic Usage</h2>
		<pre style="background: #f5f5f5; padding: 16px; border-radius: 4px; overflow-x: auto;"><code>import { useQueue } from '@neovici/cosmoz-queue';

const MyQueueComponent = () => {
  const queueProps = useQueue({
    id: (item) => item.id,
    fallback: 'overview',
  });

  return html\`...\`;
};</code></pre>
	</div>
`;

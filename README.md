# cosmoz-queue

[![Build Status](https://github.com/Neovici/cosmoz-queue/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/cosmoz-queue/actions?workflow=Github+CI)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A reusable queue component for master-detail views with list, split, and queue modes.

## Features

- **List Mode (Overview)**: Traditional list view showing all items
- **Split Mode**: Side-by-side list and detail view with resizable panels
- **Queue Mode**: Full-screen detail view with prev/next navigation
- **Keyboard Navigation**: Arrow key support in queue mode
- **URL Hash Sync**: Tab and item selection persisted in URL

## Getting Started

### Installation

```bash
npm install --save @neovici/cosmoz-queue
```

### Basic Usage

```javascript
import { component } from '@pionjs/pion';
import { html } from 'lit-html';
import { useQueue, useListState, base as styles } from '@neovici/cosmoz-queue';

const MyQueue = component(
	() => {
		const { items, setItems, ...listState } = useListState();

		// Fetch items...

		const queue = useQueue({
			id: (item) => item.id,
			fallback: 'overview',
			...listState,
		});

		return html`
			<div class="split" data-active=${queue.activeTab}>
				<div id="list"><!-- List content --></div>
				<div id="queue"><!-- Detail content --></div>
			</div>
		`;
	},
	{ styleSheets: [styles] },
);
```

## API Reference

### Hooks

| Hook           | Description                                                           |
| -------------- | --------------------------------------------------------------------- |
| `useQueue`     | Main hook combining all queue functionality (tabs, navigation, split) |
| `useListState` | Manages `items`, `selected`, and `totalAvailable` state               |
| `useTabs`      | Tab state management for list/split/queue modes                       |
| `useSplit`     | Split.js integration for resizable panels in split mode               |
| `useDataNav`   | Prev/next navigation through items with URL hash sync                 |
| `useList`      | List sorting and filtering state management                           |

### useQueue Options

| Option         | Type                   | Description                                                          |
| -------------- | ---------------------- | -------------------------------------------------------------------- |
| `id`           | `(item) => string`     | Function to extract unique ID from item                              |
| `api`          | `(id, item) => string` | Optional API endpoint for fetching item details                      |
| `tabHashParam` | `string`               | URL hash parameter for active tab                                    |
| `idHashParam`  | `string`               | URL hash parameter for selected item ID                              |
| `fallback`     | `string`               | Default tab when none is active (`'overview'`, `'split'`, `'queue'`) |
| `onActivate`   | `(name) => void`       | Callback when tab is activated                                       |
| `split`        | `SplitOpts`            | Options passed to Split.js                                           |

### useQueue Returns

| Property      | Type           | Description                                                 |
| ------------- | -------------- | ----------------------------------------------------------- |
| `activeTab`   | `string`       | Currently active tab name                                   |
| `tabnav`      | `object`       | Tab navigation API (`tabs`, `activate`, `active`)           |
| `mobile`      | `boolean`      | Whether viewport is mobile-sized                            |
| `nav`         | `object`       | Navigation API (`item`, `setItem`, `prev`, `next`, `index`) |
| `index`       | `number`       | Current item index                                          |
| `onItemClick` | `(e) => void`  | Handler for `omnitable-item-click` events                   |
| `ensue`       | `(id) => void` | Navigate to next item after current is removed              |

### Subpath Exports

```javascript
// Individual hooks
import useQueue from '@neovici/cosmoz-queue/use-queue';
import useTabs from '@neovici/cosmoz-queue/use-tabs';
import useSplit from '@neovici/cosmoz-queue/use-split';
import useDataNav from '@neovici/cosmoz-queue/use-data-nav';
import useList from '@neovici/cosmoz-queue/use-list';

// Utilities
import { json, text } from '@neovici/cosmoz-queue/util/fetch';

// Actions
import { ... } from '@neovici/cosmoz-queue/actions';

// List components
import { ... } from '@neovici/cosmoz-queue/list';
import { useMore } from '@neovici/cosmoz-queue/list/more';
import { renderMore } from '@neovici/cosmoz-queue/list/more/render';
```

## Development

### Scripts

```bash
# Run all tests
npm test

# Run unit tests only (jsdom)
npm run test:unit

# Run storybook tests only (browser)
npm run test:storybook

# Run tests in watch mode
npm run test:watch

# Start Storybook
npm run dev

# Lint and type-check
npm run lint

# Build
npm run build
```

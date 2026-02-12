# @neovici/cosmoz-queue

A hooks-based UI component library for building **master-detail views** with list, split, and queue navigation modes. Built on [`@pionjs/pion`](https://github.com/pionjs/pion) and [`lit-html`](https://lit.dev/docs/libraries/standalone-templates/).

> **What is a "queue"?** Not a data structure -- a UI pattern. Users work through a list of items one-by-one, like processing a queue of tasks. The component provides three view modes: a data table, a side-by-side split, and a full-screen sequential navigator.

## Installation

```sh
npm install @neovici/cosmoz-queue
```

Peer dependencies: `@pionjs/pion`, `lit-html`, `i18next`.

## Quick start

The `queue()` factory is the recommended high-level API. It composes all the internal hooks and renders the complete queue UI -- tabs, navigation, list, and detail view.

```ts
import { queue } from '@neovici/cosmoz-queue';
import { spread } from '@open-wc/lit-helpers';
import { component, useCallback } from '@pionjs/pion';
import { html } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { fetchOrderDetails$ } from './api';
import type { OrderListItem } from './types';

const OrderListQueue = ({ heading }: { heading: string }) =>
  queue<OrderListItem>({
    // Title displayed above the list
    heading,

    // Unique key for persisting table column settings
    settingsId: 'order-list',

    // URL hash parameter names (enables deep-linking and back/forward)
    idHashParam: 'id',
    tabHashParam: 'qtab',

    // Async function that fetches full details for a list item.
    // Results are memoized per item identity.
    details: useCallback(
      (item: OrderListItem) => fetchOrderDetails$(item.id),
      [],
    ),

    // Render the list component. `thru` contains bindings that wire
    // the omnitable events to queue state (items, selection, clicks).
    // Spread them onto your list component.
    list: (thru, { onRef }) =>
      html`<order-list-core ${spread(thru)} ${ref(onRef)}></order-list-core>`,

    // Render the detail view. `nav` contains prev/next buttons --
    // place them in a slot or wherever navigation belongs in your view.
    view: (thru, { nav }) =>
      html`<order-view-core ${spread(thru)}>${nav}</order-view-core>`,

    // Render a loading skeleton shown while `details` resolves.
    loader: (thru, { nav }) =>
      html`<order-view-skeleton ${spread(thru)}>${nav}</order-view-skeleton>`,
  });

customElements.define('order-list-queue', component(OrderListQueue));
```

### `queue()` props

| Prop | Type | Default | Description |
|---|---|---|---|
| `heading` | `string` | -- | Title displayed above the tabs |
| `settingsId` | `string?` | -- | Key for persisting omnitable column settings |
| `idHashParam` | `string` | `'qid'` | URL hash param for the selected item ID |
| `tabHashParam` | `string` | `'qtab'` | URL hash param for the active tab |
| `details` | `(item: I) => PromiseLike<D>` | -- | Fetches full details for a list item |
| `api` | `(id: string, item: I) => string` | -- | Alternative to `details`: returns a URL, queue fetches JSON internally |
| `list` | `(thru, props) => TemplateResult` | -- | Renders the list component |
| `view` | `(thru, props) => TemplateResult` | -- | Renders the detail view |
| `loader` | `(thru, props) => TemplateResult` | -- | Renders the loading skeleton |
| `pagination` | `Pagination?` | -- | Server-side pagination config |
| `fallback` | `string?` | -- | Default tab when none is set in URL hash |
| `split` | `SplitOpts?` | -- | Split.js configuration (sizes, min sizes) |
| `afterHeading` | `unknown?` | -- | Extra content rendered after the heading |

Use **`details`** when you control the fetch (most common). Use **`api`** when you want the queue to handle fetching via URL.

### The `thru` bindings

The `list`, `view`, and `loader` render functions receive a `thru` object as their first argument. This object contains property and event bindings that wire the child component to queue state:

**For `list`:**
- `.settingsId`, `.exposedParts` -- table configuration
- `@visible-items-changed`, `@selected-items-changed`, `@total-available-changed` -- sync items/selection back to queue
- `@omnitable-item-click` -- item click handler
- `@async-simple-action` -- action completion handler

**For `view`:**
- `.item` -- the current detail item (list item or resolved detail)
- `.hideActions` -- whether to hide actions (true when items are selected in split mode)
- `@async-simple-action` -- action completion handler

Spread these onto your component with `${spread(thru)}` from `@open-wc/lit-helpers`.

## View modes

The queue provides three tab-based view modes:

| Mode | Tab name | Behavior |
|---|---|---|
| **List** | `overview` | Full-width data table (`cosmoz-omnitable`). The default view. |
| **Split** | `split` | Side-by-side: resizable list on the left, detail view on the right. Disabled on mobile. |
| **Queue** | `queue` | Full-screen detail view with prev/next navigation and keyboard arrow keys. |

The active tab is synced to the URL hash (e.g. `#qtab=split&id=abc-123`), enabling deep-linking and browser back/forward navigation.

On mobile viewports, the split tab is disabled and falls back to queue mode automatically.

## List module

The `@neovici/cosmoz-queue/list` entry point provides a managed `cosmoz-omnitable` with built-in state management, data fetching, pagination, and action rendering.

### `listCore()`

The high-level factory that combines `useListCore()` + `renderListCore()`:

```ts
import { itemClick } from '@neovici/cosmoz-queue';
import { column, listCore, style } from '@neovici/cosmoz-queue/list';
import { component, html } from '@pionjs/pion';
import { t } from 'i18next';
import type { OrderListItem } from './types';

interface Props {
  exposedParts: string;
  api: (params: { pathLocator: string }) => Promise<{
    items: OrderListItem[];
    metaData: { totalAvailable: number };
  }>;
}

const OrderListCore = ({ exposedParts, api }: Props) => {
  return listCore({
    // Unique key for persisting column settings
    settingsId: 'order-list-core',

    // CSS parts to expose for external styling
    exposedParts,

    // When false, omnitable applies its own local filtering
    noLocal: false,

    // Column definitions. The tuple is [factory, deps] -- same pattern
    // as useMemo. The factory returns an object where each key becomes
    // a column name.
    columns: [
      () => ({
        title: column({
          render: ({ name }) =>
            html`<cosmoz-omnitable-column
              name="${name}"
              title=${t('Title')}
              flex="2"
              .renderCell=${(
                _col: unknown,
                { item, index }: { item: OrderListItem; index: number },
              ) =>
                html`<a
                  @click="${itemClick({
                    index,
                    activate: ['split', 'queue'],
                  })}"
                  >${item.title}</a
                >`}
            ></cosmoz-omnitable-column>`,
        }),

        status: column({
          render: ({ name }) =>
            html`<cosmoz-omnitable-column-autocomplete
              name="${name}"
              title=${t('Status')}
              value-path="status.name"
            ></cosmoz-omnitable-column-autocomplete>`,
        }),

        createdAt: column({
          render: ({ name }) =>
            html`<cosmoz-omnitable-column-date
              name="${name}"
              title=${t('Date created')}
            ></cosmoz-omnitable-column-date>`,
        }),
      }),
      [], // dependency array (empty = compute once)
    ],

    // Reactive query parameters. Recomputed when deps change,
    // which triggers a new data fetch.
    params: [() => ({ pathLocator: '/some/path' }), []],

    // Data fetcher. Receives { params, page, pageSize }.
    // Must return { items, total }.
    list$: [
      ({ params }) =>
        api(params).then((r) => ({
          items: r.items ?? [],
          total: r.metaData?.totalAvailable ?? 0,
        })),
      [api],
    ],

    // Batch actions shown when items are selected
    actions: [myAction()],
  });
};

customElements.define(
  'order-list-core',
  component(OrderListCore, { styleSheets: [style] }),
);
```

### `listCore()` props

| Prop | Type | Description |
|---|---|---|
| `settingsId` | `string` | Persistence key for column settings |
| `exposedParts` | `string?` | CSS `exportparts` value |
| `noLocal` | `boolean` | Skip omnitable local filtering (default: `true`) |
| `columns` | `[() => Columns, deps[]]` | Column definitions (memoized) |
| `params` | `[(opts) => Params, deps[]]` | Query parameters (memoized). The `opts` include `{ filters, descending, sortOn, columns }` |
| `list$` | `[(props) => Promise<{ items, total }>, deps[]]` | Data fetcher. Receives `{ params, page, pageSize }` |
| `pageSize` | `number?` | Items per page for "load more" (default: `50`) |
| `actions` | `Action[]?` | Batch actions |
| `content` | `(opts) => Renderable` | Extra content inside the omnitable |
| `hashParam` | `string?` | URL hash param for omnitable state |
| `csvFilename` | `string?` | Filename for CSV export |
| `enabledColumns` | `string[]?` | Initially visible columns |

### `column()`

Type-safe column definition helper:

```ts
import { column } from '@neovici/cosmoz-queue/list';

const myColumn = column({
  // Optional ordering hint
  order: 1,

  // Optional sort key
  sort: 'name',

  // Optional filter transform: receives the raw filter value,
  // returns the value sent to the API
  filter: (value: string) => ({ name: value }),

  // Render function -- receives { name } where name is the object key
  render: ({ name }) =>
    html`<cosmoz-omnitable-column
      name="${name}"
      title="Name"
    ></cosmoz-omnitable-column>`,
});
```

### `useListCore()` / `useListCoreState()`

For cases where you need more control over the list without `renderListCore()`:

- **`useListCore(props)`** -- manages columns, params, data fetching, pagination, and form dialog state. Returns `{ data$, columns, loadMore, dialog, open, ...state }`.
- **`useListCoreState(defaults?)`** -- lower-level state: `filters`, `sortOn`, `descending`, `groupOn`, `selectedItems`, plus their setters and `setTotalAvailable`.

## Actions module

The `@neovici/cosmoz-queue/actions` entry point provides a declarative system for defining user actions that open form dialogs.

### Defining an action

```ts
import { action, Action, defaultButton } from '@neovici/cosmoz-queue/actions';
import { t } from 'i18next';
import { when } from 'lit-html/directives/when.js';

// action() is an identity function that provides type inference
export const approveOrder = action<OrderItem, ApproveFields>({
  // Label shown on the button
  title: () => t('Approve'),

  // Optional: filter which items this action applies to.
  // If provided, non-applicable items are excluded and the button
  // shows a count badge like "Approve (3/5)".
  applicable: (item) => item.status === 'pending',

  // Optional: custom button renderer. Defaults to `defaultButton()`.
  // Return `nothing` to hide the button conditionally.
  button: (opts) =>
    when(opts.items.length >= 1, () => defaultButton(opts)),

  // Dialog configuration. Opens a `cosmoz-form` dialog.
  // `items` contains only the applicable items.
  dialog: ({ items, title }) => ({
    heading: title,
    description: t('Approve the selected orders'),
    fields: [
      // cosmoz-form field definitions
    ],
    initial: {},
    onSave: async (values) => {
      await approveOrders(items.map((i) => i.id), values);
    },
  }),
});
```

### Rendering actions

Actions are rendered automatically by `listCore()` when passed as the `actions` prop. For manual rendering (e.g. in a detail view's bottom bar):

```ts
import { renderActions } from '@neovici/cosmoz-queue/actions';
import { approveOrder } from './actions';

// In a view component:
const bottomBar = renderActions({ items: [currentItem], open })([
  approveOrder,
]);
```

### Action types

```ts
interface Action<TItem, TDialog> {
  title: () => string;
  applicable?: (item: TItem) => boolean;
  button?: (opts: Action & ActionOpts) => unknown;
  dialog: (opts: DialogOpts) => Dialogable | Promise<Dialogable>;
}

interface ActionOpts<TItem> {
  items: TItem[];
  open: (dialog: Dialogable) => void;
  slot?: string;
}
```

## Advanced: composing with hooks

When `queue()` is too opinionated, use the individual hooks directly.

### `useQueue()` + `renderQueue()`

```ts
import { useQueue, renderQueue, renderNav } from '@neovici/cosmoz-queue';

const MyQueue = ({ heading }: { heading: string }) => {
  const {
    index, mobile, tabnav, items, setItems,
    setSelected, setTotalAvailable, totalAvailable,
    onItemClick, nav,
  } = useQueue<MyItem>({
    idHashParam: 'id',
    tabHashParam: 'tab',
  });

  return renderQueue({
    heading,
    mobile,
    index,
    items,
    tabnav,
    totalAvailable,
    nav,
    list: html`<my-list
      @visible-items-changed=${updateWith(setItems)}
      @selected-items-changed=${updateWith(setSelected)}
      @total-available-changed=${updateWith(setTotalAvailable)}
      @omnitable-item-click=${onItemClick}
    ></my-list>`,
    renderItem: ({ item, nav }) =>
      html`<my-view .item=${item}>${nav}</my-view>`,
    renderLoader: ({ item, nav }) =>
      html`<my-skeleton .item=${item}>${nav}</my-skeleton>`,
  });
};
```

### Individual hooks

| Hook | Import | Purpose |
|---|---|---|
| `useTabs({ items, hashParam, mobile, fallback })` | `@neovici/cosmoz-queue` | Manages overview/split/queue tabs. Returns `{ tabnav, activeTab }`. |
| `useDataNav(items, opts)` | `@neovici/cosmoz-queue` | Item navigation with prev/next, URL hash sync. Returns `{ item, setItem, next, prev, forward, index }`. |
| `useSplit({ activeTab, ...splitOpts })` | `@neovici/cosmoz-queue` | Initializes Split.js when in split mode. |
| `useListState()` | `@neovici/cosmoz-queue` | Creates `items`, `selected`, `totalAvailable` state with setters. |
| `useListSSE({ entity, params, list$ })` | `@neovici/cosmoz-queue` | Subscribes to Server-Sent Events (`cosmoz-${entity}-updated`) for real-time list updates. |
| `useFetchActions({ pathLocator, selected, api })` | `@neovici/cosmoz-queue` | Fetches available actions for selected items from an API. Returns `{ actions, actionRows, actionsFetching }`. |
| `useAsyncAction(nav)` | `@neovici/cosmoz-queue` | Handles async action completion with automatic item removal from the list. Returns `{ listRef, onAsyncSimpleAction }`. |
| `usePagination()` | `@neovici/cosmoz-queue` | URL hash-based page state. Returns `{ page, onPage }`. |

## Utilities

### Fetch helpers (`@neovici/cosmoz-queue/util/fetch`)

Pre-configured `fetch` wrapper with CORS and credentials:

```ts
import {
  fetch,
  setBaseInit,
  handleJSON,
  RequestError,
} from '@neovici/cosmoz-queue/util/fetch';

// Configure default headers (call once at app startup)
setBaseInit({
  headers: { 'X-Custom-Header': 'value' },
  // Or use dynamic headers:
  getHeaders: () => ({ Authorization: `Bearer ${getToken()}` }),
});

// fetch() includes mode: 'cors', credentials: 'include' by default
const response = await fetch('/api/orders');
const data = await handleJSON(response);
```

`RequestError` extends `Error` with `.response` and `.data` properties for structured error handling.

### `itemClick()`

Makes list cells clickable, dispatching `omnitable-item-click` events that the queue listens for:

```ts
import { itemClick } from '@neovici/cosmoz-queue';

// In an omnitable cell renderer:
html`<a @click="${itemClick({ index, activate: ['split', 'queue'] })}">
  ${item.title}
</a>`;
```

The `activate` option specifies which tab to switch to. The queue picks the first non-disabled tab from the array.

### Other utilities

| Function | Description |
|---|---|
| `getItems(items, selected)` | Returns `selected` if non-empty, otherwise `items` |
| `touch(list, id)` | Forces an omnitable item refresh by replacing it with a shallow copy |

## Architecture

```
queue() factory
  |
  +---> useQueue()                     State orchestration
  |       |
  |       +---> useListState()         items, selected, totalAvailable
  |       +---> useTabs()              overview | split | queue
  |       +---> useDataNav()           current item, prev/next, URL hash
  |       +---> useKeyNav()            arrow key navigation
  |       +---> useSplit()             Split.js initialization
  |       +---> useUpdates()           list-item-remove events
  |
  +---> useAsyncAction()               Post-action item removal
  |
  +---> renderQueue()                  Template composition
          |
          +---> cosmoz-tabs-next       Tab bar (List / Split / Queue)
          +---> renderStats()          "3-5 of 120"
          +---> renderPagination()     Page prev/next
          +---> <div.split>
                 +---> list            cosmoz-omnitable (user-provided)
                 +---> cosmoz-slider   Animated detail view
                        +---> renderSlide() --> renderView()
                                                  |
                                                  +---> details()   Async fetch
                                                  +---> renderItem  or renderLoader
```

## Entry points

| Import path | Description |
|---|---|
| `@neovici/cosmoz-queue` | Main: `queue()`, `useQueue()`, `renderQueue()`, navigation hooks, SSE, utilities |
| `@neovici/cosmoz-queue/actions` | `action()`, `renderActions()`, `defaultButton()`, `actionCount()` |
| `@neovici/cosmoz-queue/list` | `listCore()`, `column()`, `useListCore()`, `useListCoreState()`, `renderListCore()` |
| `@neovici/cosmoz-queue/list/more` | `useMore()` -- progressive "load more" pagination |
| `@neovici/cosmoz-queue/list/more/render` | `renderLoadMore()` -- "Load more" button |
| `@neovici/cosmoz-queue/util/fetch` | `fetch()`, `setBaseInit()`, `handleJSON()`, `RequestError` |

## License

[Apache-2.0](LICENSE)

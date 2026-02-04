# Migration: `api` → `details`

The `api` property on `useQueue()` / `queue()` is deprecated and will be removed in v2.0.0.

## Quick reference

| `api` (deprecated) | `details` (recommended) |
| --- | --- |
| `(id, item) => urlString` | `(item) => Promise<data>` |
| Two params — `id` and `item` | One param — `item` |
| Returns a URL string | Returns a Promise resolving to data |
| Uses internal `json()` utility | Uses standard `fetch()` or any async source |

## Migration patterns

### Basic URL

```ts
// Before
api: (id, item) => `/api/items/${id}`

// After
details: (item) => fetch(`/api/items/${item.id}`).then(r => r.json())
```

### With `apiUrl` helper

```ts
// Before
api: (id, item) => apiUrl(`api/items/${id}`, { includeDetails: true })

// After
details: (item) =>
  fetch(apiUrl(`api/items/${item.id}`, { includeDetails: true }))
    .then(r => r.json())
```

### Async / await with error handling

```ts
details: async (item) => {
  const response = await fetch(`/api/items/${item.id}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};
```

## Timeline

| Version | Status |
| --- | --- |
| **v1.7.0** | `api` deprecated — runtime `console.warn` emitted |
| **v1.x** | `api` continues to work with warnings |
| **v2.0.0** | `api` removed — migrate before this release |

# Tanstack Query Notes

TanStack Query (formerly known as React Query) makes fetching, caching, synchronizing and updating server state in your web applications a breeze.

With zero dependencies, TanStack Query is extremely lean given the dense feature set it provides.

- Backend agnostic
- Dedicated Devtools
- Auto Caching
- Auto Refetching
- Window Focus Refetching
- Polling/Realtime Queries
- Parallel Queries
- Dependent Queries
- Mutations API
- Automatic Garbage Collection
- Paginated/Cursor Queries
- Load-More/Infinite Scroll Queries
- Scroll Recovery
- Request Cancellation
- Suspense Ready!
- Render-as-you-fetch
- Prefetching
- Variable-length Parallel Queries
- Offline Support
- SSR Support
- Data Selectors

## Query

A query is a declarative dependency on an asynchronous source of data that is tied to a __unique key__. A query can be used with any Promise based method to fetch data from a server. If your method modifies data on the server, it is recommended using Mutations instead.

See https://tanstack.com/query/latest/docs/framework/react/guides/queries for details.

## Query Keys

TanStack Query manages query caching for you based on query keys. Query keys have to be an Array at the top level, and can be as simple as an Array with a single string, or as complex as an array of many strings and nested objects. As long as the query key is serializable using `JSON.stringify`, and unique to the query's data, you can use it!

Note that query keys act as dependencies for your query functions. Adding dependent variables to your query key will ensure that queries are cached independently, and that any time a variable changes, queries will be refetched automatically (depending on your `staleTime` settings).

For a library to create typesafe standardized query keys, useful for cache management in TanStack Query, check out https://www.npmjs.com/package/@lukemorales/query-key-factory.

See https://tanstack.com/query/latest/docs/framework/react/guides/query-keys for details.

## Query Functions

A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.

See https://tanstack.com/query/latest/docs/framework/react/guides/query-functions for details.

## Query Options

One of the best ways to share `queryKey` and `queryFn` between multiple places, yet keep them co-located to one another, is to use the `queryOptions` helper.

See https://tanstack.com/query/latest/docs/framework/react/guides/query-options for details.

## Network Mode

TanStack Query provides three different network modes (online, always, offlineFirst) to distinguish how queries and mutations should behave if you have no network connection. This mode can be set for each query / mutation individually, or globally via the query / mutation defaults.

See https://tanstack.com/query/latest/docs/framework/react/guides/network-mode for details.

## Parallel Queries

See https://tanstack.com/query/latest/docs/framework/react/guides/parallel-queries for details.

## Dependent Queries

Dependent (or serial) queries depend on previous ones to finish before they can execute. To achieve this, it's as easy as using the enabled option to tell a query when it is ready to run:

```tsx
// Get the user
const { data: user } = useQuery({
  queryKey: ["user", email],
  queryFn: getUserByEmail,
});

const userId = user?.id;

// Then get the user's projects
const {
  status,
  fetchStatus,
  data: projects,
} = useQuery({
  queryKey: ["projects", userId],
  queryFn: getProjectsByUser,
  // The query will not execute until the userId exists
  enabled: !!userId,
});
```

See https://tanstack.com/query/latest/docs/framework/react/guides/dependent-queries for details.

## Disabling/Pausing Queries

If you ever want to disable a query from automatically running, you can use the `enabled = false` option. The enabled option also accepts a callback that returns a boolean.

See https://tanstack.com/query/latest/docs/framework/react/guides/disabling-queries for details.

## Query Retries

When a `useQuery` query fails (the query function throws an error), TanStack Query will automatically retry the query if that query's request has not reached the max number of consecutive retries (defaults to 3) or a function is provided to determine if a retry is allowed.

You can configure retries both on a global level and an individual query level.

See https://tanstack.com/query/latest/docs/framework/react/guides/query-retries for details.

## Paginated / Lagged Queries

See https://tanstack.com/query/latest/docs/framework/react/guides/paginated-queries for details.

## Infinite Queries

See https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries for details.

## Initial Query Data

There are many ways to supply initial data for a query to the cache before you need it:

- Declaratively:
  + Provide `initialData` to a query to prepopulate its cache if empty.
- Imperatively:
  + Prefetch the data using `queryClient.prefetchQuery`.
  + Manually place the data into the cache using `queryClient.setQueryData`.

See https://tanstack.com/query/latest/docs/framework/react/guides/initial-query-data for details.

## Placeholder Query Data

**What is placeholder data?**

Placeholder data allows a query to behave as if it already has data, similar to the initialData option, but the data is not persisted to the cache. This comes in handy for situations where you have enough partial (or fake) data to render the query successfully while the actual data is fetched in the background.

There are a few ways to supply placeholder data for a query to the cache before you need it:

- Declaratively:
  + Provide `placeholderData` to a query to prepopulate its cache if empty.
- Imperatively:
  + Prefetch or fetch the data using `queryClient` and the `placeholderData` option.

When using `placeholderData`, the Query will not be in the `pending` state - it will start out as being in the `success` state, because there is `data` to display - even if that data is just "placeholder" data. To distinguish it from "real" data, the `isPlaceholderData` flag is set to `true` on the Query result.

See https://tanstack.com/query/latest/docs/framework/react/guides/placeholder-query-data for details.

## Query Invalidation

The `invalidateQueries` method of a `QueryClient` instance allows you to intelligently mark queries as stale and potentially refetch them too!

```ts
// Invalidate every query in the cache
queryClient.invalidateQueries();

// Invalidate every query with a key that starts with `todos`
queryClient.invalidateQueries({ queryKey: ["todos"] })
```

When a query is invalidated with invalidateQueries, two things happen:

- It is marked as stale. This stale state overrides any `staleTime` configurations being used in `useQuery` or related hooks.
- If the query is currently being rendered via `useQuery` or related hooks, it will also be refetched in the background.

See https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation for details.


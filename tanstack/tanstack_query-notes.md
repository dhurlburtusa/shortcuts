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

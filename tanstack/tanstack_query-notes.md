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

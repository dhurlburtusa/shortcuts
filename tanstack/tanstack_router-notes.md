# Tanstack Router Notes

TanStack Router is a router for building React and Solid applications. Some of its features include:

- 100% inferred TypeScript support
- Typesafe navigation
- Nested routes, layout routes (with pathless layouts), and grouped routes
- Built-in Route Loaders w/ SWR Caching
- Designed for client-side data caches (TanStack Query, SWR, etc.)
- Parallel data loading
- Automatic route prefetching
- Asynchronous route elements and error boundaries
- File-based Route Generation
- Typesafe JSON-first Search Params state management APIs
- Path and Search Parameter Schema Validation
- Search Param Navigation APIs
- Custom Search Param parser/serializer support
- Search param middleware
- Route matching/loading middleware

## Why TanStack Router?

See https://tanstack.com/router/latest/docs/framework/react/overview#why-tanstack-router for details.

Some reasons are highlighted below.

### 1st-Class Search Parameters

Search parameters are a first-class citizen in TanStack Router. While still based on standard URLSearchParams, TanStack Router uses a powerful parser/serializer to manage deeper and more complex data structures in your search params, all while keeping them type-safe and easy to work with.

It's like having `useState` right in the URL!

Search parameters are:

- Automatically parsed and serialized as JSON
- Validated and typed
- Inherited from parent routes
- Accessible in loaders, components, and hooks
- Easily modified with the useSearch hook, Link, navigate, and router.navigate APIs
- Customizable with a custom search filters and middleware
- Subscribed via fine-grained search param selectors for efficient re-renders

## Installation

```sh
npm install @tanstack/react-router
```

## Quick Start

See https://tanstack.com/router/latest/docs/framework/react/quick-start.

## Concepts

### Root Route

The root route is the top-most route in the entire tree and encapsulates all other routes as children.

- It has no path
- It is always matched
- Its `component` is always rendered

To create a root route, call the `createRootRoute` function and export it as the `Route` variable in your route file:

```ts
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute();
```

### Basic Routes

Basic routes match a specific path, for example `/about`, `/settings`, `/settings/notifications` are all basic routes as they match the path exactly.

```ts
import { createFileRoute } from "@tanstack/react-router";

function AboutComponent() {
  return <div>About</div>;
}

const Route = createFileRoute('/about')({
  component: AboutComponent,
});

export { Route };
```

### Index Routes

Index routes specifically target their parent route when it is matched exactly and no child route is matched.

Let's take a look at an index route for a `/posts` URL:

```tsx
// posts.index.tsx
import { createFileRoute } from "@tanstack/react-router";

function PostsIndexComponent() {
  return <div>Please select a post!</div>;
}

// Note the trailing slash, which is used to target index routes
const Route = createFileRoute("/posts/")({
  component: PostsIndexComponent,
});

export { Route };
```

This route will be matched when the URL is `/posts` exactly.

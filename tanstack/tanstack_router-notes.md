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

### Dynamic Route Segments

Route path segments that start with a `$` followed by a label are dynamic and capture that section of the URL into the `params` object for use in your application. For example, a pathname of `/posts/123` would match the `/posts/$postId` route, and the `params` object would be `{ postId: "123" }`.

These params are then usable in your route's configuration and components.

```tsx
// posts.$postId.tsx
import { createFileRoute } from "@tanstack/react-router";

function PostComponent() {
  // In a component!
  const { postId } = Route.useParams();
  return <div>Post ID: {postId}</div>;
}

const Route = createFileRoute("/posts/$postId")({
  // In a loader
  loader: ({ params }) => fetchPost(params.postId),
  // Or in a component
  component: PostComponent,
});

export { Route };
```

### Splat / Catch-All Routes

A route with a path of only `$` is called a "splat" route because it always captures any remaining section of the URL pathname from the `$` to the end. The captured pathname is then available in the `params` object under the special `_splat` property.

For example, a route targeting the `files/$` path is a splat route. If the URL pathname is `/files/documents/hello-world`, the `params` object would contain `documents/hello-world` under the special `_splat` property:

```js
{ _splat: "documents/hello-world" }
```

### Optional Path Parameters

Optional path parameters allow you to define route segments that may or may not be present in the URL. They use the `{-$paramName}` syntax and provide flexible routing patterns where certain parameters are optional.

```tsx
// posts.{-$category}.tsx - Optional category parameter
import { createFileRoute } from "@tanstack/react-router";

function PostsComponent() {
  const { category } = Route.useParams();

  return <div>{category ? `Posts in ${category}` : "All Posts"}</div>;
}

const Route = createFileRoute("/posts/{-$category}")({
  component: PostsComponent,
});

export { Route };
```

This route will match both `/posts` (`category` is `undefined`) and `/posts/tech` (`category` is `"tech"`).

You can also define multiple optional parameters in a single route:

```tsx
// posts.{-$category}.{-$slug}.tsx
export const Route = createFileRoute("/posts/{-$category}/{-$slug}")({
  component: PostsComponent,
});
```

This route matches `/posts`, `/posts/tech`, and `/posts/tech/hello-world`.

### Layout Routes

Layout routes are used to wrap child routes with additional components and logic. They are useful for:

- Wrapping child routes with a layout component.
- Enforcing a loader requirement before displaying any child routes.
- Validating and providing search params to child routes.
- Providing fallbacks for error components or pending elements to child routes.
- Providing shared context to all child routes.
- And more!

See https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts#layout-routes for details.

### Pathless Layout Routes

Like Layout Routes, Pathless Layout Routes are used to wrap child routes with additional components and logic. However, pathless layout routes do not require a matching `path` in the URL and are used to wrap child routes with additional components and logic without requiring a matching `path` in the URL.

Pathless Layout Routes are prefixed with an underscore (`_`) to denote that they are "pathless".

See https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts#pathless-layout-routes for details.

### Non-Nested Routes

Non-nested routes can be created by suffixing a parent file route segment with a `_` and are used to un-nest a route from its parents and render its own component tree.

See https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts#non-nested-routes for details.

### Excluding Files and Folders from Routes

Files and folders can be excluded from route generation with a `-` prefix attached to the file name. This gives you the ability to colocate logic in the route directories.

See https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts#excluding-files-and-folders-from-routes for details.

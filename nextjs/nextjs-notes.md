# Next.js Notes

The React framework for SEO-friendly sites, server-side rendered apps, PWAs, Electron, static websites, light-weight apps, the desktop, and the mobile web.

Next.js is built around the concept of pages. A page is a React Component exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the `./pages` directory.

See https://nextjs.org/ for details.


## Features

- Zero Setup.
- Automatic code splitting.
- Client-side routing with optimized page prefetching.
- File-system routing.
- API routes to build your API with serverless functions, with the same simple router used for pages.
- Server side rendering (pre-rendering).
- Static exporting (pre-rendering).
- CSS-in-JS.
- Progressive-web-app (PWA).
- Webpack-based dev environment which supports Hot Module Replacement (HMR).
- Fully extensible.


## Installation

```sh
npm install --save next react react-dom
```


## Routing

```js
import Link from 'next/link';

<Link href="/about">
  <a>About Page</a>
</Link>
```

Having brackets ([]) in the page name makes it a dynamic route.

In Next.js every file inside `pages/api` is an API Route. API Routes are lambdas (a.k.a serverless functions) running on Node.


## Static Generation

Generally used for:

- Static marketing pages.
- Static blog.
- Dashboards (Really? Dashboards? Those are usually data driven).

Referred to as:

- Static site generation (SSG).
- Static generation.
- Static websites.

The page is rendered to static HTML when `next build` is ran. `next build` will output the HTML into a `.html` file and that file will be served consistently without changes.


## Server-Side Rendering

Generally used for:

- Frequently updated data.
- CMS backed pages.

Referred to as:

- Server-side rendering (SSR).
- Dynamic rendering.
- On-demand rendering.

When a request comes in to the server the page is rendered on-demand, meaning the user that requests the page always gets the latest data. This mode is opted into by adding a blocking data requirement to the page via an async `getInitialProps` function on the page component exported as the default of the page/route module.


## Data Fetching

With `getInitialProps`, we can fetch data for a given page via a remote data source and pass it as props to our page. `getInitialProps` needs to work on both server and client, since it is called in both environments.

<p class="note warning">
  `getInitialProps` can only be added to the default component exported by a page (really a route), adding it to any other component won't work.
</p>


## Next.js CLI

```sh
next {command}
# where {command} is one of `build`, `dev`, `export`, `start`, and `telemetry`.
```

```sh
next build [{dir}]
# where {dir} is the compiled directory. It defaults to `.next`. It can be changed
# in `next.config.js`.
```

```sh
next dev [{dir}] [-H {hostname}] [-p {port}]
# where {dir} is the compiled directory. It defaults to `.next`. It can be changed
# in `next.config.js`.
```

```sh
next export -s -o {dir}
# where {dir} is the compiled directory. It defaults to `out`.
```

```sh
next start [{dir}] [-H {hostname}] [-p {port}]
# where {dir} is directory that contains the compiled directory created by running
# `next build`. It defaults to the current directory. It can be changed in
# `next.config.js`.
```

See https://nextjs.org/docs/api-reference/cli for details.

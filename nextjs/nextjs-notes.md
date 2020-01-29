# Next.js Notes

The React framework for SEO-friendly sites, server-side rendered apps, PWAs, Electron, static websites, light-weight apps, the desktop, and the mobile web.

See https://nextjs.org/ for details.


## Features

- Zero Setup.
- Automatic code splitting.
- Client-side routing with optimized page prefetching.
- File-system routing.
- API routes to build your API with serverless functions, with the same simple router used for pages.
- Server side rendering.
- Static exporting.
- CSS-in-JS.
- Progressive-web-app (PWA).
- Webpack-based dev environment which supports Hot Module Replacement (HMR).
- Fully extensible.


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

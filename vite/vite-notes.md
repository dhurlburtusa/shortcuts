# Vite Notes

Vite (French word for "quick", pronounced like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

- A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).
- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

## Browser Support

During development, Vite sets `esnext` as the transform target, because we assume a modern browser is used and it supports all of the latest JavaScript and CSS features. This prevents syntax lowering, letting Vite serve modules as close as possible to the original source code.

For the production build, by default Vite targets browsers that support native ES Modules, native ESM dynamic import, and import.meta. Legacy browsers can be supported via the official [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy). See the [Building for Production](https://vite.dev/guide/build.html) section for more details.

## Scaffolding a Vite Project

```sh
npm create vite@latest
npm create vite@latest my-app -- --template react-ts
```

## Features

At the very basic level, developing using Vite is not that different from using a static file server. However, Vite provides many enhancements over native ESM imports to support various features that are typically seen in bundler-based setups.

### NPM Dependency Resolving and Pre-Bundling

Native ES imports do not support bare module imports like the following:

```js
import { someMethod } from 'my-dep'
```

The above will throw an error in the browser. Vite will detect such bare module imports in all served source files and perform the following:

1. [Pre-bundle](https://vite.dev/guide/dep-pre-bundling.html) them to improve page loading speed and convert CommonJS / UMD modules to ESM. The pre-bundling step is performed with [esbuild](http://esbuild.github.io/) and makes Vite's cold start time significantly faster than any JavaScript-based bundler.

1. Rewrite the imports to valid URLs like `/node_modules/.vite/deps/my-dep.js?v=f3sf2ebd` so that the browser can import them properly.

**Dependencies are Strongly Cached**

Vite caches dependency requests via HTTP headers, so if you wish to locally edit/debug a dependency, follow the steps [here](https://vite.dev/guide/dep-pre-bundling.html#browser-cache).

# Vite Notes

Vite (French word for "quick", pronounced like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

- A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).
- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

## Browser Support

During development, Vite sets `esnext` as the transform target, because we assume a modern browser is used and it supports all of the latest JavaScript and CSS features. This prevents syntax lowering, letting Vite serve modules as close as possible to the original source code.

For the production build, by default Vite targets browsers that support native ES Modules, native ESM dynamic import, and import.meta. Legacy browsers can be supported via the official [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy). See the [Building for Production](https://vite.dev/guide/build.html) section for more details.

## Trying Vite Online

See https://vite.dev/guide/#trying-vite-online for details.

## Scaffolding a Vite Project

```sh
npm create vite@latest
npm create vite@latest my-app -- --template react-ts
```

You can use `.` for the project name to scaffold in the current directory.

### Supported Templates

- lit
- lit-ts
- preact
- preact-ts
- qwik
- qwik-ts
- react
- react-ts
- react-swc
- react-swc-ts
- solid
- solid-ts
- svelte
- svelte-ts
- vanilla
- vanilla-ts
- vue
- vue-ts

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

### Hot Module Replacement

Vite provides an [HMR API](https://vite.dev/guide/api-hmr.html) over native ESM. Frameworks with HMR capabilities can leverage the API to provide instant, precise updates without reloading the page or blowing away application state.

### TypeScript

Vite supports importing `.ts` files out of the box.

#### Transpile Only

Note that Vite only performs transpilation on `.ts` files and does NOT perform type checking. It assumes type checking is taken care of by your IDE and build process.

The reason Vite does not perform type checking as part of the transform process is because the two jobs work fundamentally differently. Transpilation can work on a per-file basis and aligns perfectly with Vite's on-demand compile model. In comparison, type checking requires knowledge of the entire module graph.

Vite uses [esbuild](http://esbuild.github.io/) to transpile TypeScript into JavaScript which is about 20~30x faster than vanilla `tsc`, and HMR updates can reflect in the browser in under 50ms.

#### TypeScript Compiler Options

Some configuration fields under compilerOptions in `tsconfig.json` require special attention.

See https://vite.dev/guide/features.html#typescript-compiler-options for details.

Note: TypeScript-based Vite starter templates correctly set the TypeScript configuration.

### JSX

`.jsx` and `.tsx` files are also supported out of the box. JSX transpilation is also handled via [esbuild](http://esbuild.github.io/).

### CSS

Importing `.css` files will inject its content to the page via a `<style>` tag with HMR support.

#### `@import` Inlining and Rebasing

Vite is pre-configured to support CSS `@import` inlining via `postcss-import`. Vite aliases are also respected for CSS `@import`. In addition, all CSS `url()` references, even if the imported files are in different directories, are always automatically rebased to ensure correctness.

`@import` aliases and URL rebasing are also supported for Sass and Less files (see [CSS Pre-processors](https://vite.dev/guide/features.html#css-pre-processors)).

#### PostCSS

If the project contains valid PostCSS config (any format supported by `postcss-load-config`, e.g. `postcss.config.js`), it will be automatically applied to all imported CSS.

Note that CSS minification will run after PostCSS and will use [build.cssTarget](https://vite.dev/config/build-options.html#build-csstarget) option.

### CSS Code Splitting

Vite automatically extracts the CSS used by modules in an async chunk and generates a separate file for it. The CSS file is automatically loaded via a `<link>` tag when the associated async chunk is loaded, and the async chunk is guaranteed to only be evaluated after the CSS is loaded to avoid FOUC.

### Preload Directives Generation

Vite automatically generates `<link rel="modulepreload">` directives for entry chunks and their direct imports in the built HTML.

### Async Chunk Loading Optimization

Basically, allows common chunks to be fetched in parallel with the chunks that depends on it instead of waterfalling.

See https://vite.dev/guide/features.html#async-chunk-loading-optimization for details.

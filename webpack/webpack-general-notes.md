# Webpack General Notes

webpack is a module bundler for modern JavaScript applications.  When webpack
processes your application, it recursively builds a dependency graph that
includes every module your application needs, then packages all of those
modules into a small number of bundles - often only one - to be loaded by the
browser.

The starting point of the dependency graph is known as an entry point.  A
project may have more than one entry point.

webpack treats every file (.css, .html, .scss, .jpg, etc.) as a module.
However, webpack itself only understands JavaScript.  webpack uses loaders to
transform these files into modules before they are added to the dependency
graph.


## Installation

```bash
npm install --save-dev webpack
```

It is not recommended to install globally.


## Configuration

Create a JavaScript file that uses CommonJS module syntax.  The following is an example.

```js
module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  }
};
```

**Managing Assets**

A typical web app/site will have multiple files of various types (HTML, CSS,
JavaScript, Fonts, Images, Audio, Video).  All the different files will need
processing to some extent.  It may be as simple as a no-op (the file is good
as is), to a simple copy (just needs copied to the destination directory), or
a full-blown processing step involving many steps such as code generation,
compilation, concatenation, minification, or more.

Webpack uses various loaders to handle different file types.


## Module Styles

### ES6 (Recommended)

**import**

Version 2 of webpack supports ES6 module syntax natively, meaning you can use
`import` and `export` without a tool like babel to handle this for you.

```js
import MyModule from './my-module.js'
import { NamedExport } from './other-module.js'
```

**export**

```js
// Named exports
export var Count = 5
export function Multiply(a, b) {
  return a * b
}

// Default export
export default {
  // Some data...
}
```

**import()**

Calls to `import()` are treated as split points, meaning the requested module
and it's children are split out into a separate chunk.

The spec for `import()` doesn't allow control over the chunk's name or other
properties as "chunks" are only a concept within webpack.  Luckily webpack
allows some special parameters via comments so as to not break the spec:

```js
import(
  /* webpackChunkName: string // May contain the `[index]` and `[request]` placeholders. */
  /* webpackMode: 'eager' | 'lazy' | 'lazy-once' | 'weak' // Defaults to 'lazy'. */
  'module'
)
```

### AMD define (with factory)

See https://webpack.js.org/api/module-methods/#define-with-factory- for details.

```js
define(
  'mod_name', // Optional.  Ignored by webpack.
  ['./dep_1', 'dep_2', 'etc'],
  function (dep1, dep2, etc) {
    // Do something with dep1, dep2, etc
    
    // Return whatever is intended to be exported:
    return {
      bar,
      foo,
      qux
    }
  }
);
```

### AMD define (with value)

See https://webpack.js.org/api/module-methods/#define-with-value- for details.

```js
// Syntax:
// define(value: !Function)
define({
  bar,
  foo,
  qux
})
```

### AMD Require

See https://webpack.js.org/api/module-methods/#require-amd-version- for details.

```js
require(
  ['./mod1', './mod2', './etc'],
  function (mod1, mod2, etc) {
  }
);
```

### CommonJS

See https://webpack.js.org/api/module-methods/#commonjs for details.

```js
const myModule = require('./my-module')
```


## Code Splitting (aka Chunking)

### Defining Split Points

#### CommonJS

Use `require.ensure(dependencies, callback)` to define a split point.

```js
const a = require('module-a');
...
require.ensure(['module-a', 'module-b'], function (require) {
  const a = require('module-a'); // Already available from parent bundle.
  const b = require('module-b'); // Is available by time this callback is called.
});
```

The modules are loaded but not evaluated.

#### AMD

Use `require(dependencies, [callback])`  to define a split point.

```js
require(["module-a", "module-b"], function (a, b) {
    // ...
});
```

The modules are loaded **and** evaluated.

# Webpack Notes


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

### AMD Define

See http://webpack.github.io/docs/amd.html for details.

```js
define(
  'mod_name',
  ['./dep_1', 'dep_2', 'etc'],
  function (dep1, dep2, etc) {
    // Do something...
    return 456;
  }
);
```

### AMD Require

See http://webpack.github.io/docs/amd.html for details.

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

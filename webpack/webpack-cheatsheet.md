# Webpack Cheat Sheet

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
    path: './bin',
    filename: 'app.bundle.js'
  }
};
```

## Module Styles

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

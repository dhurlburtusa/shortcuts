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

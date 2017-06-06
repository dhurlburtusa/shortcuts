# JavaScript Misc Snippets


## Arguments

### Convert arguments into an Array:

```js
let args = Array.prototype.slice.call(arguments, 0);
```


## JSHint

// jshint unused: false


## Preprocessor Directives

Some common directives for [preprocess](https://www.npmjs.com/package/preprocess).

```js
// @if DEBUG
// @endif
```

```js
// @ifdef DEBUG
// @endif
```

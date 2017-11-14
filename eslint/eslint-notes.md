# ESLint Notes


## Snippets

**Set Environment**

```js
/* eslint-env node, mocha, jest, etc */
```

**Declare Global Variables**

```js
/* global myGlobal, CONST:false, etc */
```

**Disable Region**

```js
/* eslint-disable */

alert('foo');
...

/* eslint-enable */
```

**Disable Certain Rules in a Region**

```js
/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */
```

**Disable Lines**

```js
alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');
```

# ESLint Notes


## Installing

```sh
yarn add --dev eslint
```

**Add Configuration**

You can let ESLint generate one for you using:

```sh
./node_modules/.bin/eslint --init
```

Or you can bring your own config (perhaps from an existing project).

**Update `package.json`**

Add something like the following to the `scripts` section of your `package.json`
file.

```json5
    "lint": "eslint --max-warnings 0 src/",
```


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

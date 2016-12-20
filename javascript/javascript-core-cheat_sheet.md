# Core JavaScript Cheat Sheet


## Exports

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export for details.

```js
// Syntax
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```


## Imports

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import for details.

```js
// Syntax
import defaultMember from 'module-name';
import * as name from 'module-name';
import { member } from 'module-name';
import { member as alias } from 'module-name';
import { member1 , member2 } from 'module-name';
import { member1 , member2 as alias2 , [...] } from 'module-name';
import defaultMember, { member [ , [...] ] } from 'module-name';
import defaultMember, * as name from 'module-name';
import 'module-name';
```


## Functions

### Arrow Functions

```js
// Syntax
([param[, param]]) => {
   statements
}

param => expression
```

### Getter

```js
// Syntax
{get prop() { ... } }
{get [expression]() { ... } }
```


## Iteration Protocols

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols for details.

There are two protocols: The iterable protocol and the iterator protocol.

### The Iterable Protocol

The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such as what values
are looped over in a `for..of` construct.

In order to be iterable, an object must implement the `@@iterator` method, meaning that the object (or one of the
objects up its prototype chain) must have a property with a `Symbol.iterator` key.

Whenever an object needs to be iterated (such as at the beginning of a `for..of` loop), its `@@iterator` method is
called with no arguments, and the returned iterator is used to obtain the values to be iterated.

### The Iterator Protocol

The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).

An object is an iterator when it implements a `next()` method with the following semantics:

<table>
  <tr>
    <th>Property</th>
    <th>Value</th>
  </tr>
  <tr>
    <td></td>
    <td>
      <p>A zero arguments function that returns an object with two properties:</p>
      <ul>
        <li>
          <p>done (boolean)</p>
          <p>
            Has the value <code>true</code> if the iterator is past the end of the iterated sequence.  In this case <code>value</code>
            optionally specifies the return value of the iterator.  The return values are explained here.
          </p>
          <p>
            Has the value <code>false</code> if the iterator was able to produce the next value in the sequence.  This is equivalent
            of not specifying the <code>done</code> property altogether.
          </p>
        </li>
        <li>
          <p>value</p>
          <p>
            Any JavaScript value returned by the iterator.  Can be omitted when done is <code>true</code>.
          </p>
        </li>
      </ul>
    </td>
  </tr>
</table>

### Builtin Iterables

`String`, `Array`, `TypedArray`, `Map`, and `Set` are all built-in iterables, because the prototype objects of them
all have an @@iterator method.

### Builtin APIs Accepting Iterables

For example: `Array.from()`, `Map([iterable])`, `WeakMap([iterable])`, `Set([iterable])`, `WeakSet([iterable])`,
`Promise.all(iterable)`, `Promise.race(iterable)`.

### Syntaxes Expecting Iterables

For example the `for-of` loops, spread operator, `yield*`, and destructuring assignment.


## Regular Expressions

NOTE: When a regular expression has the global flag set, then it is stateful.

```js
var results = (/[a-zA-Z0-9]*/g).exec('some string');
// results is `null` or an array.

var matches = (/[a-zA-Z0-9]*/g).test('some string');
// matches is `true` or `false`.
```

## Strings

### Interpolations (aka Template Strings)

```js
// Syntax
`...${expr}...`

// Examples
const noun = ...;
const adjective = ...;
var msg = `The ${noun} is ${adjective}.`;
```


## Misc

### Parameter Checking

#### Default boolean

```js
// Flag parameter defaults to `true`.
typeof flag == 'boolean' ? flag : true;

// Flag parameter defaults to `false`.
typeof flag == 'boolean' ? flag : false;
```

## Quirks

Here are somethings about JavaScript that I find to be quirky.

**The type of NaN is 'number'**

```js
typeof NaN == 'number';   // true
```

**The month of Date is zero-based**

```js
new Date(2000, 0, 1);   // January 1st, 2000
```

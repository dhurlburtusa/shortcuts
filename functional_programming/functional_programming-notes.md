# Functional Programming Notes


**Currying**

Currying is the technique of translating the evaluation of a function that
takes multiple arguments (or a tuple of arguments) into evaluating a sequence
of functions, each with a single argument.

```js
// An n-ary function:
(x, y) => x + y
// may be curried to:
x => y => x + y
```

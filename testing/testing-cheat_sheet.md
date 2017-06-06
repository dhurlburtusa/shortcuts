# Testing Cheat Sheet


## List of Common Test Values

* Arrays
  - Empty
  - Non-empty
* Booleans
  - False
    + `false`
  - True
    + `true`
* Dates
  - Specific
  - Now
  - Past
  - Future
* Errors/Exceptions
* Functions
* Function Arguments
  - `arguments`
* Numbers
  - Positive
  - Zero
  - Negative
  - `Number.MAX_VALUE`
  - `Number.MIN_VALUE`
  - Infinity
    + `Infinity`
    + `Number.NEGATIVE_INFINITY`
    + `Number.POSITIVE_INFINITY`
  - `NaN`
* Objects
  - Empty
  - Non-empty
* Regular Expressions
* Strings
  - Empty
  - Non-empty
* Nulls
  - `nil`
  - `None`
  - `null`
  - `undefined`

### Sample of JavaScript Test Values

let test_values = [
  [],
  ['not empty'],
  true,
  false,
  new Date(),
  new Error('Help!'),
  function () {},
  arguments,
  Infinity,
  Number.POSITIVE_INFINITY,
  Number.MAX_VALUE,
  1,
  0,
  -1,
  Number.MIN_VALUE,
  Number.NEGATIVE_INFINITY,
  NaN,
  Number.NaN,
  {},
  { prop: 'not empty', },
  /regexp/,
  '',
  'Infinity',
  '-Infinity',
  'NaN',
  'not empty',
  null,
  undefined,
];

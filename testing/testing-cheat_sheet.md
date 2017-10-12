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

```js
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
```


## In Browser with Mocha

```html
    ...
    <link crossorigin="anonymous" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/4.0.0/mocha.css" integrity="sha256-XxZgFmkmXZlR6jVPH+k+HULjy6Lc2IadEc+Ph/KINXk=" rel="stylesheet">
    ...
    <div id="mocha"></div>
    <script crossorigin="anonymous" integrity="sha256-MGFalYJhOGLDwV/wMNDhZ+15oeepvR43ET5/Sjb5P98=" src="https://cdnjs.cloudflare.com/ajax/libs/chai/4.1.2/chai.js"></script>
    <script crossorigin="anonymous" integrity="sha256-0lUDoVLVwnIh07q7KeUOUoBl2S+tTlOn+VRJuhJSpzw=" src="https://cdnjs.cloudflare.com/ajax/libs/mocha/4.0.0/mocha.js"></script>
    <script>
      ;(function (global, mocha) {
        'use strict'

        var expect = chai.expect

        mocha.setup({
          // allowUncaught: true,
          // asyncOnly: true,
          // bail: true,
          // checkLeaks: true,
          // delay: true,
          // enableTimeouts: true,
          // fgrep: 'asdf',
          // forbidOnly: true,
          // forbidPending: true,
          // fullTrace: true,
          globals: ['d3', 'jQuery', 'vue'],
          // grep: 'asdf',
          // ignoreLeaks: true,
          // invert: true,
          // noHighlighting: true,
          // retries: 2,
          // slow: 75,
          // timeout: 2000,
          ui: 'bdd', // 'bdd' | 'exports' | 'qunit' | 'tdd'
          // useColors: true, // Doesn't seem to have an effect in browser.
          // useInlineDiffs: true,
        })

        describe('...', function () {

          describe('...', function () {

            it('should ...', function () {
              // ...
            })

          })
  
        })

        mocha.run(function (/*: void */) {
          console.log('Testing completed!')
        })
      })(this || self, mocha)
    </script>
  </body>
</html>
```

# JavaScript Promises Notes

A Promise is an object representing the eventual completion or failure of an
asynchronous operation.  A promise may be created using its constructor.
However, most people are consumers of already-created promises returned from
functions.  Essentially, a promise is a returned object you attach callbacks
to, instead of passing callbacks into a function.

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
for details.


## Guarantees

Unlike old-style passed-in callbacks, a promise comes with some guarantees:

* Callbacks will never be called before the completion of the current run of the
  JavaScript event loop.
* Callbacks added with `.then` even _after_ the success or failure of the
  asynchronous operation, will be called, as above.
* Multiple callbacks may be added by calling `.then` several times, to be
  executed independently in insertion order.
* Chaining of asynchronous operations will be called back to back when the
  previous operation succeeds.


## Chaining

A common need is to execute two or more asynchronous operations back to back,
where each subsequent operation starts when the previous operation succeeds,
with the result from the previous step.  We accomplish this by creating a
promise chain.

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Chaining
for more details.

```js
doSomething().then(function (result) {
  // Returns a Promise which resolves to newResult
  return doSomethingElse(result);
})
.then(function (newResult) {
  // Returns a Promise which resolves to finalResult
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```


## Error Propagation

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Error_propagation
for details.

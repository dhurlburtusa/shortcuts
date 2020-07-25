# Redux-Saga Notes

`redux-saga` is a library that aims to make application side effects (i.e. asynchronous things like data fetching) easier to manage, more efficient to execute, easy to test, and better at handling failures.

The mental model is that a saga is like a separate thread in your application that's solely responsible for side effects. `redux-saga` is a redux middleware, which means this thread can be started, paused, and cancelled from the main application with normal redux actions, it has access to the full redux application state, and it can dispatch redux actions as well.


## Effects

Sagas are implemented using Generator functions. To express the Saga logic, we yield plain JavaScript Objects from the Generator. We call those Objects Effects. An Effect is an object that contains some information to be interpreted by the middleware.

To create Effects, you use the functions provided by the library in the `redux-saga/effects` package.

Sagas can yield Effects in multiple forms. The easiest way is to yield a Promise.


## Using Saga Helpers

`redux-saga` provides some helper effects wrapping internal functions to spawn tasks when some specific actions are dispatched to the Store.

### `call`

Creates an Effect description that instructs the middleware to call the function fn with args as arguments.

If the function is a generator function, the parent generator is suspended (aka blocked) until the child generator terminates.

If the function is a normal function and returns a `Promise`, then generator is suspended until the promise is settled.

If the result is not an iterator object nor a promise, the middleware will immediately return that value back to the saga, so that it can resume its execution synchronously.

```
import { call } from 'redux-saga/effects'

function* saga () {
  try {
    const result = yield call(some_fn, arg1, arg2, ...)
    ...
  }
  catch (err) {
    ...
  }
}
```

### `fork`

Creates an Effect description that instructs the middleware to perform a non-blocking call on `fn`. That is, it's similar to `call` but will not block.

```
import { call } from 'redux-saga/effects'

function* saga () {
  try {
    const task = yield fork(some_fn, arg1, arg2, ...)
    ...
  }
  catch (err) {
    ...
  }
}
```


### `take`

Suspends the generator until a matching action is dispatched.

```
import { take } from 'redux-saga/effects'

function* saga () {
  // With `take`, actions are "pulled". The generator is blocked until a matching
  // action is dispatched.
  const action = yield take('some_pattern_to_match_action_type')
}
```

## Misc

- Note that unlike in redux-thunk, our component dispatches a plain object action. (TODO: Confirm that this generally applies to redux-saga.)
- When a Promise is yielded to the middleware, the middleware will suspend the Saga until the Promise completes.
- `put` is one example of what we call an Effect. Effects are plain JavaScript objects which contain instructions to be fulfilled by the middleware. When a middleware retrieves an Effect yielded by a Saga, the Saga is paused until the Effect is fulfilled.

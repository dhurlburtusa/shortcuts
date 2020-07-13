# Redux-Saga Notes

`redux-saga` is a library that aims to make application side effects (i.e. asynchronous things like data fetching) easier to manage, more efficient to execute, easy to test, and better at handling failures.

The mental model is that a saga is like a separate thread in your application that's solely responsible for side effects. `redux-saga` is a redux middleware, which means this thread can be started, paused, and cancelled from the main application with normal redux actions, it has access to the full redux application state, and it can dispatch redux actions as well.


## Using Saga Helpers

`redux-saga` provides some helper effects wrapping internal functions to spawn tasks when some specific actions are dispatched to the Store.



## Misc

- Note that unlike in redux-thunk, our component dispatches a plain object action. (TODO: Confirm that this generally applies to redux-saga.)
- When a Promise is yielded to the middleware, the middleware will suspend the Saga until the Promise completes.
- `put` is one example of what we call an Effect. Effects are plain JavaScript objects which contain instructions to be fulfilled by the middleware. When a middleware retrieves an Effect yielded by a Saga, the Saga is paused until the Effect is fulfilled.

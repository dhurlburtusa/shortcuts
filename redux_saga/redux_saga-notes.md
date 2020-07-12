# Redux-Saga Notes

`redux-saga` is a library that aims to make application side effects (i.e. asynchronous things like data fetching) easier to manage, more efficient to execute, easy to test, and better at handling failures.

The mental model is that a saga is like a separate thread in your application that's solely responsible for side effects. `redux-saga` is a redux middleware, which means this thread can be started, paused, and cancelled from the main application with normal redux actions, it has access to the full redux application state, and it can dispatch redux actions as well.

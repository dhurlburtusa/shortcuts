# Redux Notes

Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different
environments (client, server, and native), and are easy to test.

Redux is a tool/library for managing both data-state and UI-state in 
JavaScript applications.

Redux stores all your application state in one place, called a "store".
Components then "dispatch" state changes to the store, not directly to other
components.  The components that need to be aware of state changes can
"subscribe" to the store.

The whole state of your app is stored in an object tree inside a single store.
The only way to change the state tree is to emit an action, an object
describing what happened.  To specify how the actions transform the state
tree, you write pure reducers.

That's it!


## Installation

```sh
npm install --save redux
```


## Three Guiding Principles

1) **Single Source of Truth**: The state of your whole application is stored in
   an object tree within a single store.

2) **State is Read-Only**: The only way to change the state is to emit an action,
   an object describing what happened.

3) **Changes are made with Pure Functions**: To specify how the state tree is
   transformed by actions, you write pure reducers.


## Actions

[Actions][action] are payloads of information that send data from your
application to your store.  Actions are just plain JavaScript objects with a
globally unique `type` property.

```js
{
  type: 'ADD_TODO',
  text: 'Demo an action'
}
```

In order to enable tooling, you can shape your actions to match the [Flux
Standard Action][fsa] (FSA).

```js
{
  type: 'ADD_TODO',
  payload: {
    text: 'Demo an FSA'
  }
}
```

See https://redux.js.org/docs/basics/Actions.html and
http://redux.js.org/docs/recipes/ReducingBoilerplate.html#actions for more
details.

**Action Creators**

Action creators are functions that create actions.  They are a good way to
hide details about the structure of the action.  This makes it easy to switch
to using FSAs in the future.

```js
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text: 'Demo action creators'
  }
}
```


## Reducers

Reducers specify how the application's state changes in response to actions.

A reducer is a pure function that takes the previous state and an action, and
returns the next state.

```js
(prevState, action) => nextState
```

It's very important that the reducer stays pure.  Things you should never do
inside a reducer:

* Mutate its arguments.
* Perform side effects like API calls and routing transitions.
* Call non-pure functions, e.g. `Date.now()` or `Math.random()`.

**Splitting Reducers**

As the application grows, a single reducer can become very verbose making it
hard to comprehend.  A technique called reducer composition can help by
breaking the main reducer into smaller, more managable reducers that each
handle a small portion of the state tree.  See
https://redux.js.org/docs/basics/Reducers.html#splitting-reducers for details
on how this is done.

Making use of `combineReducers` can help reduce some boilerplate.

```js
// ./reducers/index.js
import React from 'react'
import Redux from 'redux'

import bar from './reducers/bar'
import foo from './reducers/foo'

const rootStateReducer = Redux.combineReducers({
  foo,
  bar,
})

export default rootStateReducer
```

See https://redux.js.org/docs/api/combineReducers.html for details.



[action]: https://redux.js.org/docs/Glossary.html#action
[fsa]: https://github.com/acdlite/flux-standard-action

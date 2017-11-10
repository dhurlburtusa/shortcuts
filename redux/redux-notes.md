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


[action]: https://redux.js.org/docs/Glossary.html#action
[fsa]: https://github.com/acdlite/flux-standard-action

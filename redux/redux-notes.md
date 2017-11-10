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

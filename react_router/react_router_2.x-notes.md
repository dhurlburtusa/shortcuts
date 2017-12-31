# react-router 2.x Notes


## Misc

```js
function handleOnEnter(nextRouterState, replace[, done]) {
  ...
  // If a 3rd parameter is declared, then it must be called either with
  // no arguments or with an error argument.
  
  // On success:
  done();
  
  // On error:
  done(Error(...));
}
```
```js
function handleOnLeave(prevRouterState) {
  ...
}
```

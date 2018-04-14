# JavaScript Web Storage API Notes

The Web Storage API provides mechanisms by which browsers can securely store
key/value pairs.  These mechanisms are available via the `Window.sessionStorage`
and `Window.localStorage` properties.

## Example

```js
let storage = window.localStorage; # Or window.sessionStorage;

let item = storage.getItem('item-name');
...
storage.setItem('item-name', item);
...
storage.removeItem('item-name');
storage.clear();
```

The `StorageEvent` is fired whenever a change is made to the `localStorage`.
It doesn't work on the same page that made the changes but on other pages in the
same domain.

```js
window.addEventListener('storage', (evt) => {
  
});
```

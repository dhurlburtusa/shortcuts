# JavaScript Page Visibility API Notes

See https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API for
details.

The Page Visibility API adds the following properties to the `Document`
interface:

* **`Document.hidden`** Read only.

  Returns `true` if the page is in a state considered to be hidden to the user,
  and `false` otherwise.

* **`Document.visibilityState`** Read only.

  A `DOMString` indicating the document's current visibility state.  Possible
  values are:

  + `visible`

    The page content may be at least partially visible.  In practice this means that
    the page is the foreground tab of a non-minimized window.

  + `hidden`

    The page content is not visible to the user, either due to the document's tab
    being in the background or part of a window that is minimized, or because the
    device's screen is off.

  + `prerender`

    The page content is being prerendered and is not visible to the user.  A
    document may start in the prerender state, but will never switch to this state
    from any other state, since a document can only prerender once.

    Note: Not all browsers support prerendering.

  + `unloaded`

    The page is in the process of being unloaded from memory.

    Note: Not all browsers support the unloaded value.

* **`Document.onvisibilitychange`**

  An `EventListener` providing the code to be called when the `visibilitychange`
  event is fired.

**`visibilitychange` Event**

```js
document.addEventListener("visibilitychange", function (evt) {
  console.log(document.visibilityState);
  console.log(document.hidden);
});
```


## Related Libraries

* https://www.npmjs.com/package/visibilityjs
* https://www.npmjs.com/package/react-page-visibility

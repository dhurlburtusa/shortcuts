# Fullscreen Notes

From [MDN]:

> The Fullscreen API provides an easy way for web content to be presented using
> the user's entire screen.  The API lets you easily direct the browser to make
> an element and its children, if any, occupy the fullscreen, eliminating all
> browser user interface and other applications from the screen for the
> duration.

**Prefixing**

As of this writing (2017-10-04), all browsers supporting fullscreen use a
prefixed API.  See [MDN][mdn-prefix] for details.


## Polyfill

There are many libraries available that provide x-browser support of
fullscreen.  However, most are wrappers and not true polyfills, although some
claim to be.

The only true polyfill I found was [Fullscreen-API-Polyfill][polyfill].  If
your browser is capable of fullscreen mode, then this polyfill will allow you
to use the standard Fullscreen API without any prefixes.  If your browser is
not capable, it does not try to provide a fallback.

The one feature this polyfill does not support is use of the
`document.onfullscreenchange` and the `document.onfullscreenerror` event
handlers.  However, you can still listen for the `fullscreenchange` and the
`fullscreenerror` events by using the `Document#addEventListener` method.


## Example Usage

The following demonstrates some example usage using the standard API (use the
polyfill above until browsers drop the prefixes).

```js
// If browser is capable of fullscreen mode, then ...
if (document.fullscreenEnabled) {
  // Toggles the body element in and out of fullscreen mode.
  document.addEventListener('click', () => {
    // If we are in fullscreen mode (because the property is not null),
    // then exit fullscreen node.
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
    // Otherwise put into fullscreen mode.
    else {
      // Note: Element#requestFullscreen() only succeeds in an event handler.
      // I assume this is a security feature to prevent a rogue script from
      // starting fullscreen mode without user interaction.
      document.body.requestFullscreen()
    }
  })
}
```


## Styling

When you place an element into fullscreen mode, it can be selected using the
`:fullscreen` pseudo-class.  Also, when an element is in fullscreen mode, it
has a backdrop psuedo-element which can be selected <sup>1</sup> using the
`::backdrop` pseudo-element selector.

```css
::backdrop {
  /* Properties to style the backdrop. */
}
.MyFullscreenElement {
  /* Normal properties. */
}
.MyFullscreenElement:fullscreen {
  /* Fullscreen mode specific properties. */
}
```

Unfortunately, very few browsers (Edge) support the standard selectors.  Thus
vendor prefixes are required for x-browser styling.

```css
::-moz-backdrop { /* ... */ }
::-ms-backdrop { /* ... */ }
::-webkit-backdrop { /* ... */ }
::backdrop { /* ... */ }
.MyFullscreenElement:-moz-full-screen { /* ... */ }
.MyFullscreenElement:-ms-fullscreen { /* ... */ }
.MyFullscreenElement:-webkit-full-screen { /* ... */ }
.MyFullscreenElement:fullscreen { /* ... */ }
```

1. Unfortunately, no current browser seems to select the backdrop.  Therefore,
you can't style it.


## Misc

* Click events and probably others still bubble up through the backdrop
  pseudo-element.  Therefore, the element put into fullscreen mode should
  probably stop propagation of certain events to prevent unexpected behavior.
* Elements in an `iframe` are allowed to enter fullscreen mode if the iFrame
  has the `allowfullscreen` attribute set.

```html
<!-- For modern browsers: -->
<iframe allowfullscreen src="..."></iframe>
<!-- For IE 11 (according to MDN): -->
<iframe msallowfullscreen src="..."></iframe>
```


[mdn]: https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
[mdn-prefix]: https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API#Prefixing
[polyfill]: https://github.com/neovov/Fullscreen-API-Polyfill

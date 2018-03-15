# JavaScript DOM/Web Snippets


## DOM Content Loaded

Using jQuery:

```js
jQuery(document).ready(function ($) {
  // DOM from initial markup is ready.
});
```

Using native DOM API:

```js
document.addEventListener('DOMContentLoaded', function () {
  // DOM from initial markup is ready.
});
```

## Element Selection

var elmts = document.querySelectorAll("<selector>");


## Media Query

See https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia,
https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList,
https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries,
https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries,
and https://developer.mozilla.org/en-US/docs/Web/CSS/@media
for more info.

**Browser Compatibility**

* Chrome: 9
* Edge: Yes
* Firefox: 6.0
* IE: 10
* Opera: 12.1
* Safari: 5.1

```js
let mql = window.matchMedia('(min-width: 992px)');
let onMatchChange = (evt) => {
  if (evt.matches) {
    // ....
  }
  else {
    // ...
  }
};
mql.addListener(onMatchChange);

// Run once on document load:
// Note: The following will work as long as only `matches` and/or `media`
// are used from the first parameter of the handler.
onMatchChange(mql);
```

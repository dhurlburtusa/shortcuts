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

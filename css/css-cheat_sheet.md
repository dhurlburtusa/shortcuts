# CSS Cheat Sheet


## Stacking Context

See https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context for details.

A stacking context is formed, anywhere in the document, by any element which is either

* The root element (HTML)
* Positioned (absolutely or relatively) with a `z-index` value other than `"auto"`
* `position: fixed`
* A flex item with a `z-index` value other than `"auto"`
* Elements with an `opacity` value less than `1`
* Elements with a `transform` value other than `"none"`
* Elements with a `mix-blend-mode` value other than `"normal"`
* Elements with a `filter` value other than `"none"`
* Elements with a `perspective` value other than `"none"`
* Elements with `isolation` set to `"isolate"`
* Specifying any attribute above in `will-change` even if you don't specify values for these attributes directly
* Elements with `-webkit-overflow-scrolling` set to `"touch"`

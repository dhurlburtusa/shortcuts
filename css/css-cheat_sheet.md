# CSS Cheat Sheet


## Stacking Context

See https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context for details.

A stacking context is formed, anywhere in the document, by any element which is either

* The root element (HTML)
* [Positioned][position] (absolutely or relatively) with a `z-index` value other than `"auto"`
* `position: fixed`
* A flex item with a [`z-index`][z_index] value other than `"auto"`
* Elements with an [`opacity`][opacity] value less than `1`
* Elements with a [`transform`][transform] value other than `"none"`
* Elements with a [`mix-blend-mode`][mix_blend_mode] value other than `"normal"`
* Elements with a [`filter`][filter] value other than `"none"`
* Elements with a [`perspective`][perspective] value other than `"none"`
* Elements with [`isolation`][isolation] set to `"isolate"`
* Specifying any attribute above in [`will-change`][will_change] even if you don't specify values for these attributes directly
* Elements with [`-webkit-overflow-scrolling`][webkit_overflow_scrolling] set to `"touch"`

[filter]: https://developer.mozilla.org/en-US/docs/Web/CSS/filter
[isolation]: https://developer.mozilla.org/en-US/docs/Web/CSS/isolation
[mix_blend_mode]: https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
[opacity]: https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
[perspective]: https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
[position]: https://developer.mozilla.org/en-US/docs/Web/CSS/position
[transform]: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
[webkit_overflow_scrolling]: https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling
[will_change]: https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
[z_index]: https://developer.mozilla.org/en-US/docs/Web/CSS/z-index

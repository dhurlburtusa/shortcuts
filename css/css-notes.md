# CSS Notes


## Some New CSS Features

Here are some new (at least new to me) CSS psuedo-classes, pseudo-elements,
keywords, properties, rules, and values I recently came across.

### Implemented in at Least One Browser

**box-decoration-break**

The `box-decoration-break` CSS property specifies how the `background`,
`padding`, `border`, `border-image`, `box-shadow`, `margin`, and `clip-path`
of an element are applied when the box for the element is fragmented.

See https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break for
details.

```css
div {
  box-decoration-break: clone;
}
```

**caret-color**

The `caret-color` CSS property sets the color of the insertion caret within an
element such as `<input>`, `<select>`, `<textarea>`, or one with the
`contenteditable` attribute set.

See https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color for details.

```css
textarea {
  caret-color: red;
}
```

**currentColor**

The `currentColor` keyword represents the value of an element's `color`
property.  This lets you use the `color` value on properties that do not
receive it by default.

See https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword
for details.

```css
html {
  color: maroon;
}
p {
  border: 1px solid currentColor;
}
```

**display: contents**

See https://drafts.csswg.org/css-display/#box-generation for details.

```css
.wrapper {
  display: contents;
}
```

**object-fit**

See https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit for details.

```css
img,
video {
  object-fit: cover;
}
```

**object-position**

See https://developer.mozilla.org/en-US/docs/Web/CSS/object-position for
details.

```css
img,
video {
  object-position: center top;
}
```

**::placeholder**

See https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder for
details.

```css
input::placeholder,
textarea::placeholder {
  font: ...;
}
```

**:placeholder-shown**

See https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown for
details.

```css
input:placeholder-shown,
textarea:placeholder-shown {
  text-overflow: ellipsis;
}
```

**scroll-behavior**

See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior for
details.

```css
div {
  overflow-y: scroll;
  scroll-behavior: smooth;
}
```

**touch-action**

The `touch-action` CSS property specifies whether, and in what ways, a given
region can be manipulated by the user via a touchscreen (for instance, by
panning or zooming features built into the browser).

See https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action for details.

```css
div {
  touch-action: pan-y;
}
```

**@viewport**

The `@viewport` rule is like a CSS alternative to
`<meta name="viewport" content="...">`.

See https://www.w3.org/TR/css-device-adapt/#atviewport-rule for details.

```css
@viewport {
  width: 320px auto;
}
```

**will-change**

The `will-change` CSS property provides a way for authors to hint browsers
about the kind of changes to be expected on an element, so that the browser
can set up appropriate optimizations ahead of time before the element is
actually changed.  These kind of optimizations can increase the responsiveness
of a page by doing potentially expensive work ahead of time before they are
actually required.  `will-change` is intended to be used as something of a
last resort.

See https://developer.mozilla.org/en-US/docs/Web/CSS/will-change for details.

```css
.sidebar {
  will-change: transform;
}
```

**wrap-flow and wrap-through**

The `wrap-flow` and `wrap-through` properties are a part of the CSS Exclusions
module.  Exclusions defines how inline content flows around elements.  It
extends the content wrapping ability of floats to any block-level element.

```css
div {
  wrap-flow: clear;
  wrap-through: none;
}
```


## Stacking Context

See https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context for details.

A stacking context is formed, anywhere in the document, by any element which is either

* The root element (HTML)
* [Positioned][position] (absolutely or relatively) with a `z-index` value other than `"auto"`
* `position: fixed` or `position: sticky`
* A flex item with a [`z-index`][z_index] value other than `"auto"`
* Elements with an [`opacity`][opacity] value less than `1`
* Elements with a [`mix-blend-mode`][mix_blend_mode] value other than `"normal"`
* Elements with any of the following properties with a value other than `"none"`:
  + [`clip-path`][clip_path]
  + [`filter`][filter]
  + [`mask`][mask], [`mask-image`][mask_image], [`mask-border`][mask_border]
  + [`perspective`][perspective]
  + [`transform`][transform]
* Elements with [`isolation`][isolation] set to `"isolate"`
* Elements with [`-webkit-overflow-scrolling`][webkit_overflow_scrolling] set to `"touch"`
* Specifying any attribute above in [`will-change`][will_change] even if you don't specify values for these attributes directly


[clip_path]: https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
[filter]: https://developer.mozilla.org/en-US/docs/Web/CSS/filter
[isolation]: https://developer.mozilla.org/en-US/docs/Web/CSS/isolation
[mask]: https://developer.mozilla.org/en-US/docs/Web/CSS/mask
[mask_border]: https://www.w3.org/TR/css-masking-1/#the-mask-border
[mask_image]: https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image
[mix_blend_mode]: https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
[opacity]: https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
[perspective]: https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
[position]: https://developer.mozilla.org/en-US/docs/Web/CSS/position
[transform]: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
[webkit_overflow_scrolling]: https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling
[will_change]: https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
[z_index]: https://developer.mozilla.org/en-US/docs/Web/CSS/z-index

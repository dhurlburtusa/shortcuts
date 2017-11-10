# CSS Animation Notes

CSS Animations is a module of CSS that lets you animate the values of CSS
properties over time, using keyframes.

See https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations for
details.


## Configuring

To create a CSS animation sequence, you style the element you want to animate
with the `animation` property or its sub-properties.  This lets you configure
the timing, duration, and other details of how the animation sequence should
progress.  This does not configure the actual appearance of the animation,
which is done using the `@keyframes` at-rule

**Play Configuration**

The `animation` property lets you configure how the animation will be played.

```css
.example {
  animation-delay: 1s;
  animation-direction: alternate;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-name: fade;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
```

**Appearance Configuration**

The `@keyframes` at-rule lets you configure the appearance of the element as
the animation is being played.

```css
@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

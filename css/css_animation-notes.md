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


## `animation` Property

The [`animation`][anim] CSS property is a shorthand property for the
various animation properties:

* [`animation-name`][anim-name]
* [`animation-duration`][anim-duration]
* [`animation-timing-function`][anim-timing-func]
* [`animation-delay`][anim-delay]
* [`animation-iteration-count`][anim-iter-count]
* [`animation-direction`][anim-dir]
* [`animation-fill-mode`][anim-fill-mode]
* [`animation-play-state`][anim-play-state].

The `animation` property is specified as one or more single animations,
separated by commas.

Each individual animation is specified as:

* zero or one occurrences of the following values:
  + &lt;transition-timing-function>
  + &lt;animation-iteration-count>
  + &lt;animation-direction>
  + &lt;animation-fill-mode>
  + &lt;animation-play-state>
* an optional name for the animation, which may be none, a &lt;custom-ident>, or
  a &lt;string>
* zero, one, or two &lt;time> values

The order of values within each animation definition is important: the first
value that can be parsed as a `<time>` is assigned to the
`animation-duration`, and the second one is assigned to `animation-delay`.

The order within each animation definition is also important for
distinguishing `animation-name` values from other keywords.  When parsed,
keywords that are valid for properties other than `animation-name`, and whose
values were not found earlier in the shorthand, must be accepted for those
properties rather than for `animation-name`.  Furthermore, when serialized,
default values of other properties must be output in at least the cases
necessary to distinguish an animation-name that could be a value of another
property, and may be output in additional cases.

| Property        | Initial Value | Possible Values             |
| --------------- | ------------- | --------------------------- |
| `...-name`      | `none`        | Valid identifier.           |
| `...-duration`  | `0s`          | `<num>s` or `<num>ms`.  `0` or positive.  Unit required. |
| `...-delay`     | `0s`          | `<num>s` or `<num>ms`.  A negative value causes the animation to begin immediately, but partway through its cycle.  Unit required. |
| `...-timing-function` | `ease`  | `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(#, #, #, #)`, `step-start`, `step-end`, `steps(#, [start\|end])` |
| `...-iteration-count` | `1`     | Positive, real number or `infinite`. |
| `...-direction` | `normal`      | `alternate`, `alternate-reverse`, `normal`, `reverse` |
| `...-fill-mode` | `none`        | `backwards`, `both`, `forwards`, `none` |
| `...-play-state` | `running`    | `paused`, `running` |


## `@keyframes` At-Rule

The `@keyframes` CSS at-rule controls the intermediate steps in a CSS
animation sequence by defining styles for keyframes (or waypoints) along the
animation sequence. 

```css
@keyframes identifier {
  0% {
    /* Animatable property declarations */
  }
  ...
  50% {
    /* Animatable property declarations */
  }
  ...
  100% {
    /* Animatable property declarations */
  }
}
@keyframes identifier {
  from {
    /* Animatable property declarations */
  }
  to {
    /* Animatable property declarations */
  }
}
```

If a keyframe rule doesn't specify the start or end states of the animation
(that is, `0%`/`from` and `100%`/`to`, browsers will use the element's
existing styles for the start/end states.  This can be used to animate an
element from its initial state and back.

If multiple keyframe sets exist for a given name, the last one encountered by
the parser is used.  `@keyframes` rules don't cascade, so animations never
derive keyframes from more than one rule set.

If a given animation time offset is duplicated, the last keyframe in the
`@keyframes` rule for that percentage is used for that frame.  There's no
cascading within a `@keyframes` rule if multiple keyframes specify the same
percentage values.

Properties that aren't specified in every keyframe are interpolated if
possible.

Declarations in a keyframe qualified with `!important` are ignored.


## Animatable CSS Properties

See https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
for a complete list.

**Select List of Non-Animatable CSS Properties**

* `box-sizing`
* `clear`
* `display`
* `float`
* `font-kerning`


[anim]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
[anim-delay]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay
[anim-dir]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction
[anim-duration]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
[anim-fill-mode]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
[anim-iter-count]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count
[anim-name]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name
[anim-play-state]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
[anim-timing-func]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function


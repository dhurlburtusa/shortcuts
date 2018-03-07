# Font Awesome Notes


## Usage (v4.x)

To use FA, you simply add the `fa` CSS class and the CSS class of the icon you
want to an empty inline element.

```html
<i class="fa fa-star" aria-hidden="true"/>
```

Optionally, you can add more CSS classes for different effects.

| Class                | Behavior                       |
| -------------------- | ------------------------------ |
| `fa-fw`              | Makes each icon a fixed width. |
| `fa-lg`              | Makes icon 33% larger.         |
| `fa-2x`              | Makes icon 100% larger.        |
| `fa-3x`              | Makes icon 3 times larger.     |
| `fa-4x`              | Makes icon 4 times larger.     |
| `fa-5x`              | Makes icon 5 times lareger.    |
| `fa-border`          | Adds a border around the icon. |
| `fa-pull-left`       | Floats the icon to the left.   |
| `fa-pull-right`      | Floats the icon to the right.  |
| `fa-spin`            | Continuously rotates the icon. |
| `fa-pulse`           | Rotates the icon in 8 steps.   |
| `fa-rotate-90`       | Rotates the icon by 90°.       |
| `fa-rotate-180`      | Rotates the icon by 180°.      |
| `fa-rotate-270`      | Rotates the icon by 270°.      |
| `fa-flip-horizontal` | Flips the icon horizontally.   |
| `fa-flip-vertical`   | Flips the icon vertically.     |

**Making Icons Animatable**

You can make an icon animate from its normal orientation to its an orientation rotated 90°, 180°, and 270° by adding the following rule to your stylesheet and adding or removing the approprate class such as `fa-rotate-90`.

```css
.fa {
  transition: transform .2s linear;
}
```

Adjust the timing and easing function as you like.  If you want to animate other properties, then add then like so.

```css
.fa {
  transition: transform .2s linear, font-size .5s ease;
}
```

# CSS Font Notes


## Browser Default Fonts

CSS defines five generic names for fonts:  `serif`, `sans-serif`, `monospace`,
`cursive`, and `fantasy`.


## Web Safe Fonts

There are only a certain number of fonts that are generally available across
all systems, and can therefore be used without much worry.  These are the
so-called web safe fonts.

| Name                                            | Generic Family |
| ----------------------------------------------- | -------------- |
| `Arial`, `Helvetica`, `Trebuchet MS`, `Verdana` | `sans-serif`   |
| `Georgia`, `Times New Roman`                    | `serif`        |
| `Courier New`, `Courier`                        | `monospace`    |


## Font Stacks

Since you can't guarantee the availability of the fonts you want to use, you
can supply a font stack so that the browser has multiple fonts it can choose
from.  This simply involves a `font-family` value consisting of multiple font
names separated by commas.

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

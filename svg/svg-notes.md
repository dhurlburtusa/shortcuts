# SVG Notes


## Scaling

See https://css-tricks.com/scale-svg/ for details.


## Misc

* MIME type: image/svg+xml
* SVG Namespace: http://www.w3.org/2000/svg
* Public Identifier for SVG 1.1: PUBLIC "-//W3C//DTD SVG 1.1//EN"
* System Identifier for the SVG 1.1 Recommendation:
  http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd
* The fill is painted first, then the stroke, and then the marker symbols.  The
  marker symbols are rendered in order along the outline of the shape, from the
  start of the shape to the end of the shape.


## SVG Elements

See https://www.w3.org/TR/SVG11/eltindex.html for the full list of elements.

**svg**

The `svg` element can be used to embed an SVG fragment inside the current
document (for example, an HTML document).  This SVG fragment has its own
viewport and coordinate system.

```svg
<svg xmlns="http://www.w3.org/2000/svg" class="..." preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 50">
  ...
</svg>
```

Include the `xlink` namespace when using `xlink` attributes that have not been
deprecated or the SVG document is required to validate against a version such as
1.1.

Note: `href` should be used in place of `xlink:href` and CSS `white-space` 
should be used in place of `xlink:space`.

```
<svg ... xmlns:xlink="http://www.w3.org/1999/xlink" ...>
  ...
</svg>
```

**circle**

The `circle` element is a shape element that defines a circle based on a center
point and a radius.

```svg
...
<circle r="25"/>
<circle cx="10" cy="10" r="25"/>
...
```

**defs**

The `defs` element is a container element for referenced elements.  Elements
that are descendants of a `defs` are not rendered directly;

```svg
...
<defs>
  ...
</defs>
...
```

**desc**

The `desc` element is a descriptive element which provides supplementary
descriptive information about its parent.  It may be used by assistive
technologies to help with accessibility, among other uses.

```svg
<svg ...>
  <desc>Description of svg element.</desc>
  ...
  <g>
    <desc>Description of g element.</desc>
    ...
  </g>
</svg>
```

**ellipse**

The `ellipse` element is a shape element that defines an ellipse which is
axis-aligned with the current user coordinate system based on a center point and
two radii.

```svg
...
<ellipse rx="20" ry="30" />
<ellipse cx="10" cy="10" rx="20" ry="30" />
...
```


**g**

The `g` element is a container element for grouping together related graphics
elements.

```svg
...
<g class="..." id="...">
  ...
</g>
...
```

**line**

The `line` element is a shape element that defines a line segment that starts at
one point and ends at another.

```svg
...
<line x1="10" y1="10" x2="20" y2="30"/>
...
```

**path**

The `path` element is a shape element that represents the outline of a shape
which can be filled, stroked, used as a clipping path, or any combination of the
three.

```svg
...
<path d="..."/>
...
```

**polygon**

The `polygon` element is a shape element that defines a closed shape consisting
of a set of connected straight line segments.

```svg
...
<polygon points="0,0 10,0 10,10 0,10"/>
...
```

**polyline**

The `polyline` element is a shape element that defines a set of connected
straight line segments.

```svg
...
<polyline points="0,0 10,0 10,10 0,10"/>
...
```

**rect**

The `rect` element is a shape element that defines a rectangle which is
axis-aligned with the current user coordinate system.  Rounded rectangles can be
achieved by setting appropriate values for attributes `rx` and `ry`.

```svg
...
<rect width="20" height="30"/>
<rect x="10" y="10" width="20" height="30"/>
<rect x="10" y="10" width="20" height="30" rx="3" ry="3"/>
...
```

**symbol**

The `symbol` element is a container element used to define graphical template
objects which can be instantiated by a `use` element.  `symbol` elements are
never rendered directly.

The `symbol` is very similar to the `g` element.  The key distinctions between
the two are:

- A `symbol` element itself is not rendered.
- A `symbol` element has attributes `viewBox` and `preserveAspectRatio` which
  allow a `symbol` to scale-to-fit within a rectangular viewport defined by the
  referencing `use` element.

It is common to declare `symbol`s as children of a `defs` element.

**title**

The `title` element is a descriptive element which provides supplementary
descriptive information about its parent.  User agents may, however, for
example, display the `title` element as a tooltip, as the pointing device moves
over particular elements.

```svg
<svg ...>
  <title>Example SVG Document</title>
  ...
  <g>
    <title>A Group of SVG Elements</title>
    ...
  </g>
</svg>
```

In conforming SVG document fragments, any `title` element should be the first
child element of its parent.

Authors should always provide a `title` child element to the outermost `svg`
element within a stand-alone SVG document.

**use**

The `use` element references another element and indicates that the graphical
contents of that element is included/drawn at that given point in the document.

The `use` element has optional attributes `x`, `y`, `width`, and `height` to
define the rectangular region within the current coordinate system.

The SVG DOM will have a `use` element as opposed to the graphical elements the
`use` element references.

The referenced element inherits properties from the `use` element and the `use`
element's ancestors.  An instance of a referenced element does not inherit
properties from the referenced element's original parents.

### Container Elements

Container elements are those elements which can have graphics elements and other
container elements as child elements.

* `a`
* `defs`
* `glyph`
* `g`
* `marker`
* `mask`
* `missing-glyph`
* `pattern`
* `svg`
* `switch`
* `symbol`

### Descriptive Elements

Descriptive elements are those elements which provides supplementary descriptive
information about its parent.

* `desc`
* `metadata`
* `title`

### Gradient Elements

Gradient elements are those elements that defines a gradient paint server.

* `linearGradient`
* `radialGradient`

### Graphics Elements

Graphics elements are those elements that can cause graphics to be drawn onto
the target canvas.

* `circle`
* `ellipse`
* `image`
* `line`
* `path`
* `polygon`
* `polyline`
* `rect`
* `text`
* `use`

Note: Includes the shape elements plus the `image`, `text`, and `use` elements.

### Referenced Elements

Referenced elements are those elements that are referenced from elsewhere in the
SVG document.  Typically, these elements are declared as child elements of a
`defs` element.

* `altGlyphDef`
* `clipPath`
* `cursor`
* `filter`
* `linearGradient`
* `marker`
* `mask`
* `pattern`
* `radialGradient`
* `symbol`

### Shape Elements

Shape elements are those that define graphics elements which are defined by some
combination of straight lines and curves.

* `circle`
* `ellipse`
* `line`
* `path`
* `polygon`
* `polyline`
* `rect`

### Structural Elements

Structural elements are those elements which define the primary structure of an
SVG document.

* `defs`
* `g`
* `svg`
* `symbol`
* `use`

### Text Content Elements

Text content elements are those elements that causes a text string to be
rendered onto the canvas.

* `altGlyph`
* `text`
* `textPath`
* `tref`
* `tspan`

### Viewport Elements

Certain elements establish a viewport.  See
https://www.w3.org/TR/SVG/coords.html#ElementsThatEstablishViewports.

* `svg`
* `symbol` when instanced by a `use` element
* `image` that references an SVG file
* `foreignObject`


## DOCTYPE

Note:  It is not recommended that a DOCTYPE declaration be included in SVG
documents.

```xml
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
```


## Path Commands

The shape of a `path` element is defined by one attribute: `d`.  The `d`
attribute contains a series of commands and parameters used by those commands.

All of the commands also come in two variants.  An **uppercase letter**
specifies absolute coordinates and a **lowercase letter** specifies relative
coordinates.

Coordinates in the `d` attribute are always unitless and hence in the user
coordinate system.

| Command                | Letter | Syntax                                             |
| ---------------------- | ------ | -------------------------------------------------- |
| Move To                | M, m   | `M x y`; `m dx dy`                                 |
| Line To                | L, l   | `L x y`; `l dx dy`                                 |
| Horizontal Line        | H, h   | `H x`; `h dx`                                      |
| Vertical Line          | V, v   | `V y`; `v dy`                                      |
| Close Path             | Z, z   | `Z`; `z` (no difference in meaning)                |
| Cubic Bezier Curve     | C, c   | `C x1 y1, x2 y2, x y`; `c dx1 dy1, dx2 dy2, dx dy` |
| Shortcut CB Curve      | S, s   | `S x2 y2, x y`; `s dx2 dy2, dx dy`                 |
| Quadratic Bezier Curve | Q, q   | `Q x1 y1, x y`; `q dx1 dy1, dx dy`                 |
| Shortcut QB Curve      | T, t   | `T x y`; `t dx dy`                                 |


## Attributes

* `fill`
* `fill-opacity`
* `fill-rule`, one of 'evenodd', 'nonzero'
* `stroke`
* `stroke-dasharray`, must be comma-separated
* `stroke-dashoffset`
* `stroke-linecap`, one of 'butt', 'round', 'square'
* `stroke-linejoin`, one of 'bevel', 'miter', 'round'
* `stroke-miterlimit`
* `stroke-opacity`
* `stroke-width`

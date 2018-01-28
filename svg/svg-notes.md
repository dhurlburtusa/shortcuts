# SVG Notes


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
<svg xmlns="http://www.w3.org/2000/svg" class="..." version="1.1" viewBox="0 0 100 50">
  ...
</svg>
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

**symbol**

The `symbol` element is a container element used to define graphical template
objects which can be instantiated by a `use` element.  `symbol` elements are
never rendered directly.


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
* `svg`

### Structural Elements

Structural elements are those elements which define the primary structure of an
SVG document.

* `defs`
* `g`
* `svg`
* `symbol`
* `use`


## DOCTYPE

Note:  It is not recommended that a DOCTYPE declaration be included in SVG
documents.

```xml
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
```

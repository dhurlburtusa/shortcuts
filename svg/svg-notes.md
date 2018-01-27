# SVG Notes


## Misc

* MIME type: image/svg+xml
* SVG Namespace: http://www.w3.org/2000/svg
* Public Identifier for SVG 1.1: PUBLIC "-//W3C//DTD SVG 1.1//EN"
* System Identifier for the SVG 1.1 Recommendation:
  http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd


## SVG Elements

**svg**

The `svg` element can be used to embed an SVG fragment inside the current
document (for example, an HTML document).  This SVG fragment has its own
viewport and coordinate system.

```svg
<svg xmlns="http://www.w3.org/2000/svg" class="..." viewBox="0 0 100 50">
  ...
</svg>
```


## DOCTYPE

Note:  It is not recommended that a DOCTYPE declaration be included in SVG
documents.

```xml
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
```

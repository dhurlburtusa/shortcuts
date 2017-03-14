# CSS Snippets

## Block-Level Centering

**Hardcoded Width**
```css
.Block { width: ...; margin-left: auto; margin-right: auto; }
```

**Hardcoded Left/Right Spacing**
```css
.Block { margin-left: x; margin-right: x; }

/*
 * Alternatively:
 * @dependency A positioned ancestor element.  Offsets are relative to this element for an absolutely positioned
 *   block and relative to the viewport for a fixed positioned block.
 */
.Block { position: absolute|fixed; left: x; right: x; }
```

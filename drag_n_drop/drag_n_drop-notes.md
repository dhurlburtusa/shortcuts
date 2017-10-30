# Drag and Drop Notes


## Steps

**Declaring an Element Draggable**

The `draggable` global attribute is an *enumerated* attribute that indicates
whether the element can be dragged.  It can have the following values:

* `true`, which indicates the element may be dragged.
* `false`, which indicates the element may not be dragged.

If this attribute is not set, its default value is `auto`, meaning the
behavior should be the one defined by default by the browser.

Note: This attribute is an enumerated one and not a Boolean one.

```html
<div class="Dialog" draggable="true">...</div>
```

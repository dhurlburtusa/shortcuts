# HTML Cheat Sheet

## Sectioning

### Sectioning Roots

Sectioning roots can have their own outlines, but the sections and headings inside these elements do not contribute to
the outlines of their ancestors.

* `blockquote`
* `body`
* `details`
* `dialog`
* `fieldset`
* `figure`
* `td`

### Sectioning Content

Sectioning content is content that defines the scope of headings and footers.

Sectioning content elements are always considered subsections of their nearest ancestor sectioning root or their
nearest ancestor element of sectioning content, whichever is nearest, regardless of what implied sections other
headings may have created.

* `article`
* `aside`
* `nav`
* `section`

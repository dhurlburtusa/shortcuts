# HTML Cheat Sheet


## Conditional Comments

See https://en.wikipedia.org/wiki/Conditional_comment and
https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx.

They are supported from IE 5 up until IE9 (inclusive).

There are two types of "conditional comments": downlevel-hidden and
downlevel-revealed.

**Syntax**

| Comment type                     | Syntax or possible value                              |
| -------------------------------- | ----------------------------------------------------- |
| standard HTML comment            | &lt;!-- Comment content -->                           |
| downlevel-hidden                 | &lt;!--[if expr]> HTML <![endif]-->                   |
| downlevel-revealed               | <![if expr]> HTML <![endif]>                          |
| downlevel-revealed (alternative) | &lt;!--[if expr]>&lt;!--> HTML &lt;!--&lt;![endif]--> |

**Expression Examples**

| Item/Operator  | Example                  | Comment                             |
| -------------- | ------------------------ | ----------------------------------- |
| IE             | [if IE]                  | IE (ver 5, 6, 7, 8, & 9).           |
| version        | [if IE 7]                | IE of a particular version.         |
| WindowsEdition | [if WindowsEdition]      | IE 8 on Windows 7.                  |
| edition        | [if WindowsEdition 1]    | Edition 1.                          |
| true           | [if true]                | Always evaluates to true.           |
| false          | [if false]               | Always evaluates to false.          |
| !              | [if !IE]                 | The NOT operator.                   |
| lt             | [if lt IE 5.5]           | The less-than operator.             |
| lte            | [if lte IE 6]            | The less-than or equal operator.    |
| gt             | [if gt IE 5]             | The greater-than operator.          |
| gte            | [if gte IE 7]            | The greater-than or equal operator. |
| ( )            | [if !(IE 7)]             | Subexpression operators.            |
| &              | [if (gt IE 5)&(lt IE 7)] | The AND operator.                   |
| \|             | [if (IE 6)\|(IE 7)]      | The OR operator.                    |


## Sectioning

### Sectioning Roots

Sectioning roots can have their own outlines, but the sections and headings
inside these elements do not contribute to the outlines of their ancestors.

* `blockquote`
* `body`
* `details`
* `fieldset`
* `figure`
* `td`

### Sectioning Content

Sectioning content is content that defines the scope of headings and footers.

Sectioning content elements are always considered subsections of their nearest
ancestor sectioning root or their nearest ancestor element of sectioning
content, whichever is nearest, regardless of what implied sections other
headings may have created.

* `article`
* `aside`
* `nav`
* `section`

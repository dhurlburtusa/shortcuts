# Text Conventions


## Line Ending

I use the CRLF (aka Windows) line-ending where possible and only use the LF (aka
Unix) line-ending when required, like with script files.  On rare occasion, I'll
leave out the CR when a real need arises like improved performance from reduced
bandwidth.


## Line Wrapping

I will wrap after 80 characters within a particular _context_.  To clarify, this
means there may be more than 80 characters per line depending on the context and
its indentation level.  I start the line-wrap count after the indentation and at
the beginning of the context.  Context is illustrated below.

### Contexts

What constituents a context is best illustrated by example.

**Comments**

When writing a multiline comment using syntax like is used with JavaDoc, the
actual text of the comment will be indented by n characters.

```java
/**
 * I start counting characters beginning with "I".  Therefore, this line can
 * contain up to 83 characters since the first three characters are ignored for the
 * line-wrapping count.
 */
class ... {

  /**
   * Counting starts with "C", ignoring the first five characters.  Therefore, the
   * lines within this comment context can contain up to 85 characters.
   */
  public ... { ... }

}
```

**Markdown**

Markdown has several different contexts.  For example, blockquotes, lists, and
paragraphs.  Because blockquotes begin with "`> `", two extra characters are
allowed.  Because the top-level items of an unordered list begin with "`* `,
three extra characters are allowed.  The second-level allows four extra 
characters, and so forth.

### Rational

If a strict character count is used without regard to context, then more editing
is required when the context or indentation is changed.  There have been 
countless times where I increased the indentation of some code but also had to
edit the associated comment because it now exceeded the strict character limit.
But by starting the line-wrapping count at a point that is indentation agnostic,
I no longer run into this problem.


## Sentence Spacing

I use either a single space or two spaces.  Which I use depends on the context.
In code, I use two spaces.  In WYSWYG editors such as MS Word, an email client
with formatting options (like TinyMCE), etc, I try to use a single space but I
am still in the habit of doing two spaces.

# Python Oddities

Here is a collection of things I find odd about Python, especially compared to other programming languages I've used.

## Boolean Operators

Python has the `and`, `not`, and `or` boolean operators. However, `and` and `or` don't necessarily return `True` or `False`. Instead, one of the operand's value is returned.

The expression `x and y` first evaluates `x`; if `x` is false, its value is returned; otherwise, `y` is evaluated and the resulting value is returned.

The expression `x or y` first evaluates `x`; if `x` is true, its value is returned; otherwise, `y` is evaluated and the resulting value is returned.

This is sometimes useful, e.g., if `s` is a string that should be replaced by a default value if it is empty, the expression `s or 'foo'` yields the desired value.

See https://docs.python.org/3/reference/expressions.html#boolean-operations.

## Length of Data Types

Instead of a `length` property on the object (i.e., `dict`, `list`, range, `set`, string (`str`), tuple etc), one uses the `len` built-in function. Fortunately, the it is O(1) since it stores the length internally according to AI.

## Raw Strings

Raw strings may not end in an odd number of `\` characters.

See https://docs.python.org/3/faq/programming.html#faq-programming-raw-string-backslash.

# Python Oddities

Here is a collection of things I find odd about Python, especially compared to other programming languages I've used.

## Length of Data Types

Instead of a `length` property on the object (i.e., `dict`, `list`, range, `set`, string (`str`), tuple etc), one uses the `len` built-in function. Fortunately, the it is O(1) since it stores the length internally according to AI.

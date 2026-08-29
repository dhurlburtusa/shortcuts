# Python 3 Changes Summary

Here is a summary of the most important changes to Python 3.

## Python 3.0

Summary of changes from version 2.x (mainly 2.6).

Released on December 3, 2008.

### Language Changes

- The ordering comparison operators (`<`, `<=`, `>=`, `>`) raise a `TypeError` exception when the operands don’t have a meaningful natural ordering.
- Essentially, long renamed to [`int`](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex).
- An expression like `1/2` returns a float. Use `1//2` to get the truncating behavior.
- Exceptions:
  + See [this](https://docs.python.org/3/whatsnew/3.0.html#changes-to-exceptions) for details.
- Text vs Data instead of Unicode vs 8-bit:
  + Python 3.0 uses the concepts of text and (binary) data instead of Unicode strings and 8-bit strings.
  + The type used to hold text is [`str`](https://docs.python.org/3/library/stdtypes.html#str), the type used to hold data is [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes).
  + You can no longer use u"..." literals for Unicode text.
  + You must use b"..." literals for binary data.
  + See [this](https://docs.python.org/3/whatsnew/3.0.html#text-vs-data-instead-of-unicode-vs-8-bit) for details.
- New Syntax:
  + Dictionary comprehensions.
  + Set comprehensions.
  + Set literals; use `set()` for an empty set.
  + New binary literals, e.g. `0b1010`.
  + Bytes literals are introduced with a leading `b` or `B`.
  + New octal literals, e.g. `0o720`. The old octal literals (0720) are gone.
  + See [this](https://docs.python.org/3/whatsnew/3.0.html#new-syntax) for details.
- Changed Syntax:
  + New raise statement syntax: `raise [expr [from expr]]`.
  + `as` and [`with`](https://docs.python.org/3/reference/compound_stmts.html#with) are now reserved words.
  + `True`, `False`, and `None` are reserved words.
  + Change from `except exc, var` to `except exc as var`. 
  + New Metaclass Syntax.
  + List comprehensions syntax.
  + See [this](https://docs.python.org/3/whatsnew/3.0.html#changed-syntax) for details.
- Removed Syntax:
  + Tuple parameter unpacking removed.
  + Removed backticks (use [`repr`](https://docs.python.org/3/library/functions.html#repr) instead).
  + Removed `<>` (use `!=` instead).
  + Removed `exec` keyword.
  + Integer literals no longer support a trailing `l` or `L`.
  + String literals no longer support a leading `u` or `U`.
  + The `from module import *` syntax is only allowed at the module level, no longer inside functions.
  + The only acceptable syntax for relative imports is `from .[module] import name`. All import forms not starting with `.` are interpreted as absolute imports.
  + Classic classes are gone.
  + See [this](https://docs.python.org/3/whatsnew/3.0.html#changed-syntax) for details.

### Standard Library Changes

- Built-In Functions:
  + The [`bin`](https://docs.python.org/3/library/functions.html#bin) function is new.
  + The `cmp` function should be treated as gone, and the `__cmp__` special method is no longer supported. Use [`__lt__`](https://docs.python.org/3/reference/datamodel.html#object.__lt__) for sorting, [`__eq__`](https://docs.python.org/3/reference/datamodel.html#object.__eq__) with [`__hash__`](https://docs.python.org/3/reference/datamodel.html#object.__hash__), and other rich comparisons as needed.
  + [`filter`](https://docs.python.org/3/library/functions.html#filter) and [`map`](https://docs.python.org/3/library/functions.html#map) return iterators.
  + [`print`](https://docs.python.org/3/library/functions.html#print) is now a function.
  + [`range`](https://docs.python.org/3/library/functions.html#func-range) now behaves like `xrange` used to behave, except it works with values of arbitrary size.
  + The [`repr`](https://docs.python.org/3/library/functions.html#repr) of a long integer doesn’t include the trailing `L` anymore. Use [`str`](https://docs.python.org/3/library/functions.html#func-str) instead.
  + [`sorted`](https://docs.python.org/3/library/functions.html#sorted) and [`list.sort`](https://docs.python.org/3/library/stdtypes.html#list.sort) no longer accept the `cmp` argument providing a comparison function. Use the `key` argument instead. N.B. the `key` and `reverse` arguments are now “keyword-only”.
  + [`zip`](https://docs.python.org/3/library/functions.html#zip) now returns an iterator.
- Built-In Types:
  + The [`bytes`](https://docs.python.org/3/library/stdtypes.html#bytes) type is new.
  + [`dict`](https://docs.python.org/3/library/stdtypes.html#dict):
    * [`dict.keys`](https://docs.python.org/3/library/stdtypes.html#dict.keys), [`dict.items`](https://docs.python.org/3/library/stdtypes.html#dict.items), and [`dict.values`](https://docs.python.org/3/library/stdtypes.html#dict.values) return [views](https://docs.python.org/3/library/stdtypes.html#dict-views) instead of lists.
    * `dict.iterkeys`, `dict.iteritems`, and `dict.itervalues` methods are no longer supported.
- Modules:
  + The new module was removed.
  + [`operator`](https://docs.python.org/3/library/operator.html) Module:
    * Removed: `sequenceIncludes` and `isCallable`.
  + [`os`](https://docs.python.org/3/library/os.html) Module:
    * The functions `os.tmpnam`, `os.tempnam`, and `os.tmpfile` have been removed in favor of the [`tempfile`](https://docs.python.org/3/library/tempfile.html) module.
  + [`sys`](https://docs.python.org/3/library/sys.html) Module:
    * `sys.maxint` constant was removed. Consider using [`sys.maxsize`](https://docs.python.org/3/library/sys.html#sys.maxsize) in its place.
    * Removed: `sys.exitfunc`, `sys.exc_clear`, `sys.exc_type`, `sys.exc_value`, `sys.exc_traceback`.

See https://docs.python.org/3/whatsnew/3.0.html for more details.

## Python 3.1

Summary of changes from version 3.0.

Released on June 27, 2009.

### Language Changes

- Directories and zip archives containing a `__main__.py` file can now be executed directly by passing their name to the interpreter. The directory/zipfile is automatically inserted as the first entry in [`sys.path`](https://docs.python.org/3/library/sys.html#sys.path).
- The syntax of the [`with`](https://docs.python.org/3/reference/compound_stmts.html#with) statement now allows multiple context managers in a single statement.
- Python now uses David Gay’s algorithm for finding the shortest floating-point representation that doesn’t change its value.

### Standard Library Changes

- Format specifier for thousands separator:
  + The built-in [`format`](https://docs.python.org/3/library/functions.html#format) function and the [`str.format`](https://docs.python.org/3/library/stdtypes.html#str.format) method use a mini-language that now includes a simple, non-locale aware way to format a number with a thousands separator.
- Built-In Functions:
  + `round(x, n)` now returns an integer if `x` is an integer. Previously it returned a float.
  + The `string.maketrans` function is deprecated and is replaced by new static methods, [`bytes.maketrans`](https://docs.python.org/3/library/stdtypes.html#bytes.maketrans) and [`bytearray.maketrans`](https://docs.python.org/3/library/stdtypes.html#bytearray.maketrans).
- Built-In Types:
  + Added [`bytearray.maketrans`](https://docs.python.org/3/library/stdtypes.html#bytes.maketrans).
  + Added [`bytes.maketrans`](https://docs.python.org/3/library/stdtypes.html#bytearray.maketrans).
  + Added [`int.bit_length`](https://docs.python.org/3/library/stdtypes.html#int.bit_length).
  + [`str.format`](https://docs.python.org/3/library/stdtypes.html#str.format): The fields in format strings can now be automatically numbered. See [format string syntax](https://docs.python.org/3/library/string.html#formatstrings).
- Modules:
  + Added: [`tkinter.ttk`](https://docs.python.org/3/library/tkinter.ttk.html) module.
  + The [`gzip.GzipFile`](https://docs.python.org/3/library/gzip.html#gzip.GzipFile) and [`bz2.BZ2File`](https://docs.python.org/3/library/bz2.html#bz2.BZ2File) classes now support the context management protocol
  + [`collections`](https://docs.python.org/3/library/collections.html) Module:
    * Added [`collections.OrderedDict`](https://docs.python.org/3/library/collections.html#collections.OrderedDict) class, but less important now that the built-in `dict` class gained the ability to remember insertion order in Python 3.7.
    * Added [`collections.Counter`](https://docs.python.org/3/library/collections.html#collections.Counter) class.
    * Added [`collections.deque.maxlen`](https://docs.python.org/3/library/collections.html#collections.deque.maxlen) method.
  + [`contextlib`](https://docs.python.org/3/library/contextlib.html) Module:
    * Deprecated: `contextlib.nested`.
  + [`decimal`](https://docs.python.org/3/library/decimal.html) Module:
    * Added [`decimal.Decimal.from_float`](https://docs.python.org/3/library/decimal.html#decimal.Decimal.from_float) and [`decimal.Context.create_decimal_from_float`](https://docs.python.org/3/library/decimal.html#decimal.Context.create_decimal_from_float) methods.

Note: Many other changes not currently documented here.

See https://docs.python.org/3/whatsnew/3.1.html for more details.


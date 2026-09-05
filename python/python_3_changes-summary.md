# Python 3 Changes Summary

Here is a summary of the most important changes to Python 3.

## Python 3.0

Summary of changes from version 2.x (mainly 2.6).

Released on December 3, 2008.

### Primary Changes

- [`print`](https://docs.python.org/3/library/functions.html#print) is now a function.
- Essentially, long renamed to [`int`](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex).
- An expression like `1/2` returns a float. Use `1//2` to get the truncating behavior.
- Added dictionary and comprehensions.
- Literals:
  + New binary literals, e.g. 0b1010.
  + New octal literals, e.g. `0o720`.
  + Integer literals no longer support a trailing `l` or `L`.
  + String literals no longer support a leading `u` or `U`.
- New `raise` and `except` syntax.
- Removed backticks (use [`repr`](https://docs.python.org/3/library/functions.html#repr) instead).
- Removed `<>` (use `!=` instead).

### All Changes

#### Language Changes

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

#### Standard Library Changes

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
  + The `new` module was removed.
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

### All Changes

#### Language Changes

- Directories and zip archives containing a `__main__.py` file can now be executed directly by passing their name to the interpreter. The directory/zipfile is automatically inserted as the first entry in [`sys.path`](https://docs.python.org/3/library/sys.html#sys.path).
- The syntax of the [`with`](https://docs.python.org/3/reference/compound_stmts.html#with) statement now allows multiple context managers in a single statement.
- Python now uses David Gay’s algorithm for finding the shortest floating-point representation that doesn’t change its value.

#### Standard Library Changes

- Format specifier for thousands separator:
  + The built-in [`format`](https://docs.python.org/3/library/functions.html#format) function and the [`str.format`](https://docs.python.org/3/library/stdtypes.html#str.format) method use a mini-language that now includes a simple, non-locale aware way to format a number with a thousands separator. That is, added the `,` option.
- Built-In Functions:
  + `round(x, n)` now returns an integer if `x` is an integer. Previously it returned a float.
  + The `string.maketrans` function is deprecated and is replaced by new static methods, [`bytes.maketrans`](https://docs.python.org/3/library/stdtypes.html#bytes.maketrans) and [`bytearray.maketrans`](https://docs.python.org/3/library/stdtypes.html#bytearray.maketrans).
- Built-In Types:
  + Added [`bytearray.maketrans`](https://docs.python.org/3/library/stdtypes.html#bytes.maketrans).
  + Added [`bytes.maketrans`](https://docs.python.org/3/library/stdtypes.html#bytearray.maketrans).
  + Added [`int.bit_length`](https://docs.python.org/3/library/stdtypes.html#int.bit_length).
  + [`str.format`](https://docs.python.org/3/library/stdtypes.html#str.format): The fields in format strings can now be automatically numbered. See [format string syntax](https://docs.python.org/3/library/string.html#formatstrings).
- Modules:
  + Added: [`importlib`](https://docs.python.org/3/library/importlib.html) and [`tkinter.ttk`](https://docs.python.org/3/library/tkinter.ttk.html) modules.
  + The [`gzip.GzipFile`](https://docs.python.org/3/library/gzip.html#gzip.GzipFile) and [`bz2.BZ2File`](https://docs.python.org/3/library/bz2.html#bz2.BZ2File) classes now support the context management protocol
  + [`collections`](https://docs.python.org/3/library/collections.html) Module:
    * Added [`collections.OrderedDict`](https://docs.python.org/3/library/collections.html#collections.OrderedDict) class, but less important now that the built-in `dict` class gained the ability to remember insertion order in Python 3.7.
    * Added [`collections.Counter`](https://docs.python.org/3/library/collections.html#collections.Counter) class.
    * Added [`collections.deque.maxlen`](https://docs.python.org/3/library/collections.html#collections.deque.maxlen) method.
    * Added `rename` parameter to [`collections.namedtuple`](https://docs.python.org/3/library/collections.html#collections.namedtuple).
  + [`configparser`](https://docs.python.org/3/library/configparser.html) Module:
    * Uses `collections.OrderedDict` by default. (But will change back to regular `dict` in version 3.7.
  + [`contextlib`](https://docs.python.org/3/library/contextlib.html) Module:
    * Deprecated: `contextlib.nested`.
  + [`decimal`](https://docs.python.org/3/library/decimal.html) Module:
    * Added [`decimal.Decimal.from_float`](https://docs.python.org/3/library/decimal.html#decimal.Decimal.from_float) and [`decimal.Context.create_decimal_from_float`](https://docs.python.org/3/library/decimal.html#decimal.Context.create_decimal_from_float) methods.
  + [`functools`](https://docs.python.org/3/library/functools.html) Module:
    * [`partial` objects](https://docs.python.org/3/library/functools.html#partial-objects) can now be pickled.
  + [`imaplib`](https://docs.python.org/3/library/imaplib.html) Module:
    * Now support IPv6.
  + [`io`](https://docs.python.org/3/library/io.html) Module:
    * To [`io.BufferedIOBase`](https://docs.python.org/3/library/io.html#io.BufferedIOBase):
      - Added [`detach`](https://docs.python.org/3/library/io.html#io.BufferedIOBase.detach) method.
    * To [`io.IOBase`](https://docs.python.org/3/library/io.html#io.IOBase):
      - Added `SEEK_*` constants to [`seek`](https://docs.python.org/3/library/io.html#io.IOBase.seek).
    * To [`io.TextIOBase`](https://docs.python.org/3/library/io.html#io.TextIOBase):
      - Added `SEEK_*` constants to [`seek`](https://docs.python.org/3/library/io.html#io.TextIOBase.seek).
      - Added [`detach`](https://docs.python.org/3/library/io.html#io.TextIOBase.detach) method.
  + [`itertools`](https://docs.python.org/3/library/itertools.html) Module:
    * Added [`itertools.combinations_with_replacement`](https://docs.python.org/3/library/itertools.html#itertools.combinations_with_replacement) and [`itertools.compress`](https://docs.python.org/3/library/itertools.html#itertools.compress) functions.
    * Added `step` parameter to [`itertools.count`](https://docs.python.org/3/library/itertools.html#itertools.count).
  + [`logging`](https://docs.python.org/3/library/logging.html) Module:
    * Added [`NullHandler`](https://docs.python.org/3/library/logging.handlers.html#nullhandler) class.
    * Added `processName` to [`LogRecord` attributes](https://docs.python.org/3/library/logging.html#logrecord-attributes).
  + [`pdb`](https://docs.python.org/3/library/pdb.html) Module:
    * Added `skip` parameter to [`pdb.Pdb`](https://docs.python.org/3/library/pdb.html#pdb.Pdb).
    * Can now access and display source code loaded via [`zipimport`](https://docs.python.org/3/library/zipimport.html) (or any other conformant [PEP 302](https://peps.python.org/pep-0302/) loader).
  + [`pickle`](https://docs.python.org/3/library/pickle.html) Module:
    * Has been adapted for better interoperability with Python 2.x when used with protocol 2 or lower.
  + [`pydoc`](https://docs.python.org/3/library/pydoc.html) Module:
    * Added `pydoc` help topics for symbols so that `help('@')` works as expected in the interactive environment.
  + [`re`](https://docs.python.org/3/library/re.html) Module:
    * Added optional `flags` parameter to [`re.split`](https://docs.python.org/3/library/re.html#re.split), [`re.sub`](https://docs.python.org/3/library/re.html#re.sub), and [`re.subn`](https://docs.python.org/3/library/re.html#re.subn).
  + [`runpy`](https://docs.python.org/3/library/runpy.html) Module:
    * Added ability to execute packages by looking for a `__main__` submodule.
  + [`sys`](https://docs.python.org/3/library/sys.html) Module:
    * Added named component attributes to [`sys.version_info`](https://docs.python.org/3/library/sys.html#sys.version_info).
    * Added [`sys.float_repr_style`](https://docs.python.org/3/library/sys.html#sys.float_repr_style).
    * Added [`sys.int_info`](https://docs.python.org/3/library/sys.html#sys.int_info).
  + [`unittest`](https://docs.python.org/3/library/unittest.html) Module:
    * Added ability to [skip tests and to declare expected failures](https://docs.python.org/3/library/unittest.html#skipping-tests-and-expected-failures).
    * To [`unittest.TestCase`](https://docs.python.org/3/library/unittest.html#unittest.TestCase):
      - Added several assertion methods:
        + [`assertGreater`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertGreater)
        + [`assertGreaterEqual`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertGreaterEqual)
        + [`assertIs`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertIs)
        + [`assertIsNot`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertIsNot)
        + [`assertIsNone`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertIsNone)
        + [`assertIsNotNone`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertIsNotNone)
        + [`assertIn`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertIn)
        + [`assertNotIn`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertNotIn)
        + [`assertLess`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertLess)
        + [`assertLessEqual`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertLessEqual)
        + [`assertRaisesRegexp`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertRaisesRegex)
        + [`assertRegex`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertRegex)
      - Added the [automatic calling of type-specific equality function](https://docs.python.org/3/library/unittest.html#unittest.TestCase.addTypeEqualityFunc).
      - Added [`addCleanup`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.addCleanup) and [`doCleanups`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.doCleanups)
      - Added the ability to use [`assertRaises`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertRaises) as a context manager.
      - Added class attribute [`longMessage`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.longMessage).
    * To [`unittest.TestResult`](https://docs.python.org/3/library/unittest.html#unittest.TestResult):
      - Added [`skipped`](https://docs.python.org/3/library/unittest.html#unittest.TestResult.skipped) attribute.
      - Added [`startTestRun`](https://docs.python.org/3/library/unittest.html#unittest.TestResult.startTestRun) and [`stopTestRun`](https://docs.python.org/3/library/unittest.html#unittest.TestResult.stopTestRun) methods.
    * Added `exit` parameter to [`unittest.main`](https://docs.python.org/3/library/unittest.html#unittest.main).

#### Optimizations

- The I/O library has been entirely rewritten in C and is 2 to 20 times faster.
- Added a heuristic so that tuples and dicts containing only untrackable objects are not tracked by the garbage collector. This can reduce the size of collections and therefore the garbage collection overhead on long-running programs.
- The decoding of UTF-8, UTF-16 and LATIN-1 is now two to four times faster.
- The json module now has a C extension to substantially improve its performance.
- Unpickling now interns the attribute names of pickled objects. This saves memory and allows pickles to be smaller.

See https://docs.python.org/3/whatsnew/3.1.html for other changes not listed here and for more details.

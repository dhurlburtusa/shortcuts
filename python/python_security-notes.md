# Python Security Notes

## Execution

By default, potentially unsafe paths are prepended to [`sys.path`](https://docs.python.org/3/library/sys.html#sys.path). To not prepend this potentially unsafe path, use the [`-P`](https://docs.python.org/3/using/cmdline.html#cmdoption-P) command line option or the [`PYTHONSAFEPATH`](https://docs.python.org/3/using/cmdline.html#envvar-PYTHONSAFEPATH) environment variable.

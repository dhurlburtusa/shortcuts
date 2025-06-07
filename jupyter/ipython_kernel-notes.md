# IPython Kernel Notes

## Magic Functions

See https://ipython.readthedocs.io/en/stable/interactive/tutorial.html#magic-functions, https://ipython.readthedocs.io/en/stable/interactive/magics.html, and https://ipython.readthedocs.io/en/stable/interactive/reference.html#magic for details.

- **%connect_info**: print the kernel's ID.
- **%lsmagic**: List the available magic functions.
- **%magic**: Get a detailed explanation of the magic system.

## Misc

- The last three objects in output history are also kept in variables named `_`, `__`, and `___`.
- To run any command at the system shell, simply prefix it with `!`. E.g., `!ping google.com`.

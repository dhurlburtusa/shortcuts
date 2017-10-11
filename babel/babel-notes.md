# Babel Notes

See http://babeljs.io/ for details.

Babel is a JavaScript compiler (aka transpiler).   At a high level, it has 3
stages that it runs code in: parsing, transforming, and generation.

Out of the box Babel doesn't do anything.  That is, the transformation step
effectively accepts the code and then returns the code unaltered.  You will
need to add some plugins for Babel to do anything (they affect the 2nd stage,
transformation).

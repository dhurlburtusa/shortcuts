# rustc Notes

`rustc` is the compiler for the Rust programming language. Compilers take your source code and produce binary code, either as a library or executable.

Most Rust programmers don't invoke rustc directly, but instead do it through [Cargo](https://doc.rust-lang.org/cargo/index.html).

## Lints

The Rust compiler contains a number of lints, and when it compiles your code, it will also run the lints. These lints may produce a warning, an error, or nothing at all, depending on how you've configured things.

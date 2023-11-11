# rustc Notes

`rustc` is the compiler for the Rust programming language. Compilers take your source code and produce binary code, either as a library or executable.

Most Rust programmers don't invoke rustc directly, but instead do it through [Cargo](https://doc.rust-lang.org/cargo/index.html).

## Lints

The Rust compiler contains a number of lints, and when it compiles your code, it will also run the lints. These lints may produce a warning, an error, or nothing at all, depending on how you've configured things.

### Lint Levels

Lints are divided into levels. Each lint has a default level and the compiler has a default warning level.

1. allow: Do nothing.
2. warn: Produces a warning.
3. force-warn: Same as `warn` but can't be overridden.
4. deny: Produces an error.
5. forbid: Same as `deny` but can't be overridden.

See https://doc.rust-lang.org/rustc/lints/levels.html for details.

#### Configuring Lint Levels

The default level a lint operates at can be changed via compiler flags or with attributes in the source code.

**Via compiler flag**

The `-A`, `-W`, `--force-warn`, `-D`, and `-F` flags let you turn one or more lints into allowed, warning, force-warn, deny, or forbid levels.

```sh
rustc lib.rs --crate-type=lib -W missing-docs
```

**Via attributes**

```rust
#![warn(missing_docs)]
```

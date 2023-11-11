# rust Linting Notes

The rust compiler, `rustc`, comes with many [built-in lints](https://doc.rust-lang.org/rustc/lints/index.html). Warnings or errors are emitted as the compiler runs. Another tool which performs rust linting is [Clippy](https://doc.rust-lang.org/clippy/). Typical rust installations using `rustup` include Clippy.

**Test if Clippy is Available**

```sh
which clippy-driver
clippy-driver --version
```

## Usage

**Via Cargo**

```sh
cargo clippy
```

**Directly**

```sh
clippy-driver ...
```

# Cargo Notes

Cargo is the Rust package manager. Cargo downloads your Rust package’s dependencies, compiles your packages, makes distributable packages, and uploads them to crates.io, the Rust community’s package registry.

See [The Cargo Book](https://doc.rust-lang.org/cargo/index.html) for details.

## Creating a New Project

```sh
cargo new {project_name}
cd {project_name}
```

## Package Layout

See [Package Layout](https://doc.rust-lang.org/cargo/guide/project-layout.html) for details.

## Building and Running

**Build, then Run**

```sh
# Build executable
cargo build

# Run executable
./target/debug/{project_name}[.exe]
```

**Build and Run**

```sh
cargo run
```

## Running Tests

```sh
cargo test
```

See [cargo test](https://doc.rust-lang.org/cargo/commands/cargo-test.html) for details.

## Features

Cargo "features" provide a mechanism to express conditional compilation and optional dependencies. A package defines a set of named features in the `[features]` table of `Cargo.toml`, and each feature can either be enabled or disabled. Features for the package being built can be enabled on the command-line with flags such as `--features feat1,feat2,etc`. Features for dependencies can be enabled in the dependency declaration in `Cargo.toml`.

See [Features](https://doc.rust-lang.org/cargo/reference/features.html) for details.

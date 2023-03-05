# Cargo Notes

Cargo is Rust's build system and package manager.

See [The Cargo Book](https://doc.rust-lang.org/cargo/index.html) for details.

## Creating a New Project

```sh
cargo new {project_name}
cd {project_name}
```

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

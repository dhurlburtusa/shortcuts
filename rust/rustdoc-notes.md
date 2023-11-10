# rustdoc Notes

The standard Rust distribution ships with a tool called `rustdoc`. Its job is to generate documentation for Rust projects. On a fundamental level, Rustdoc takes as an argument either a crate root or a Markdown file, and produces HTML, CSS, and JavaScript.

## Doc Comments

Code comments with a special syntax are used to indicate which comments are documentation comments. Doc comments come in an inner and an outer variety. The outer variety uses the `///` syntax and is used to document the item present after it. The inner variety uses the `//!` syntax and is used to document the item it is present inside. It is often used when documenting the entire crate.

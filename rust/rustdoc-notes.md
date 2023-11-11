# rustdoc Notes

The standard Rust distribution ships with a tool called `rustdoc`. Its job is to generate documentation for Rust projects. On a fundamental level, Rustdoc takes as an argument either a crate root or a Markdown file, and produces HTML, CSS, and JavaScript.

## Doc Comments

Code comments with a special syntax are used to indicate which comments are documentation comments. Doc comments come in an inner and an outer variety. The outer variety uses the `///` syntax and is used to document the item present after it. The inner variety uses the `//!` syntax and is used to document the item it is present inside. It is often used when documenting the entire crate.

## The #[doc] attribute

See https://doc.rust-lang.org/rustdoc/write-documentation/the-doc-attribute.html for details.

## Documentation Tests

`rustdoc` supports executing your documentation examples as tests. This makes sure that examples within your documentation are up to date and working.

```rust
/// ```
/// /// Some documentation.
/// # fn doc() {} // Only added to allow above documentation in this example
/// #             // since doc comments need to be associated with a function.
/// let foo = "foo";
/// assert_eq!(foo, "foo");
/// ```
```

```sh
rustdoc --test foo.rs
```

```rust
/// We have a struct here. Remember it doesn't accept negative numbers!
pub struct MyStruct(pub usize);

// The following only exists when collecting doctests. It won't show in the public
// documentation.

/// ```compile_fail
/// let x = my_crate::MyStruct(-5);
/// ```
#[cfg(doctest)]
pub struct MyStructOnlyTakesUsize;
```

To test doctests included in a markdown file such as README.md.

```rust
#[doc = include_str!("../README.md")]
#[cfg(doctest)]
pub struct ReadmeDoctests;
```

See https://doc.rust-lang.org/rustdoc/write-documentation/documentation-tests.html for details.

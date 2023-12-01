# Rust Notes

Rust is a modern systems programming language focusing on safety, speed, and concurrency. It accomplishes these goals by being memory safe without using garbage collection.

High-level ergonomics and low-level control are often at odds in programming language design; Rust challenges that conflict. Through balancing powerful technical capacity and a great developer experience, Rust gives you the option to control low-level details (such as memory usage) without all the hassle traditionally associated with such control.

By striving for zero-cost abstractions, higher-level features that compile to lower-level code as fast as code written manually, Rust endeavors to make safe code be fast code as well.

Rust's greatest ambition is to eliminate the trade-offs that programmers have accepted for decades by providing safety and productivity, speed and ergonomics.

## Data Types

Every value in Rust is of a certain data type and be either scalar or compound.

Rust is a statically typed language, which means that it must know the types of all variables at compile time.

### Scalar Types

A scalar type represents a single value. Rust has four primary scalar types: booleans, characters, floating-point numbers, and integers.

#### Boolean

Rust's boolean type is `bool` and has two possible values: `true` and `false`. Booleans are one byte in size.

#### Character

Rust's character type is `char` and are four bytes in size, representing a Unicode Scalar Value.

#### Floating-Point Types

Rust's floating-point types are `f32` and `f64`.

#### Integer Types

**Variants**

| Length  | Signed               | Unsigned             |
| ------- | -------------------- | -------------------- |
| 8-bit   | i8                   | u8                   |
| 16-bit  | i16                  | u16                  |
| 32-bit  | i32                  | u32                  |
| 64-bit  | i64                  | u64                  |
| 128-bit | i128                 | u128                 |
| arch    | isize (pointer size) | usize (pointer size) |

**Syntax**

| Syntax  | Example     |
| ------- | ----------- |
| Binary  | 0b1111_0000 |
| Byte    | b'A'        |
| Decimal | 98_222      |
| Hex     | 0xff        |
| Octal   | 0o77        |

### Strings

**Misc**

- String literals have type `&'static str`. `&'static str` is a reference to a string allocated in read only memory.

### Compound Types

Compound types can group multiple values into one type. Rust has two _primitive_ compound types: tuples and arrays.

#### Tuples

A tuple is a general way of grouping together a number of values with a variety of types into one compound type. Tuples have a fixed length: once declared, they cannot grow or shrink in size.

```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);
```

#### Arrays

An array is a collection of multiple values with the **same** type. Arrays in Rust have a fixed length.

```rust
let a = [1, 2, 3, 4, 5];
```

#### Structs

A struct, or structure, is a custom data type that lets you package together and name multiple related values that make up a meaningful group.

### Misc

#### Casting

Rust provides no implicit type conversion (coercion) between primitive types. But, explicit type conversion (casting) can be performed using the `as` keyword.

There are limitations in conversion rules. A float cannot be directly converted to a char.

#### Type Aliases

The `type` statement can be used to give a new name to an existing type. Types must have PascalCase names, or the compiler will raise a warning. The exception to this rule are the primitive types: `usize`, `f32`, etc.

```rust
enum VeryVerboseEnumOfThingsToDoWithNumbers {
    Add,
    Subtract,
}

// Creates a type alias
type Operations = VeryVerboseEnumOfThingsToDoWithNumbers;

fn main() {
    // We can refer to each variant via its alias, not its long and inconvenient
    // name.
    let x = Operations::Add;
}
```

## Structs

A struct, or structure, is a custom data type that lets you package together and name multiple related values that make up a meaningful group.

```rust
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}

fn build_user(email: String, username: String) -> User {
    User {
        active: true,
        username,
        email,
        sign_in_count: 1,
    }
}

fn main() {
    let user1 = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };

    let user2 = build_user(String::from("someone@example.com"), String::from("someusername123"));

    let user3 = User {
        email: String::from("another@example.com"),
        // struct update syntax
        ..user2
    };
}
```

## Constants

Constants in Rust are declared with the `const` keyword and the type of the value _must_ be annotated. Constants can be declared in any scope, including the global scope. Constants may only be set to a constant expression, not the results of a value that could only be computed at runtime. Rust's naming convention for constants is to use all uppercase with underscores between words. Constants are valid for the entire time a program runs, within the scope in which they were declared.

## Operations

Rust supports the basic mathematical operations: addition, subtraction, multiplication, division, and remainder. Integer division truncates toward zero to the nearest integer.

 [Appendix B](https://doc.rust-lang.org/book/appendix-02-operators.html) contains a list of all operators that Rust provides.
 
## Variables

Variables in Rust are declared with the `let` keyword. Variable bindings are immutable by default, but this can be overridden using the `mut` modifier.

Variable bindings can be type annotated when declared. However, in most cases, the compiler will be able to infer the type of the variable from the context, heavily reducing the annotation burden.

Values (like literals) can be bound to variables, using the let binding.

### Shadowing

A variable can be shadowed by repeated use of the `let` keyword whether it is in the same scope following a previous use or in a nested scope.

```rust
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}");
    }

    println!("The value of x is: {x}");
}
```

The above outputs:

```sh
The value of x in the inner scope is: 12
The value of x is: 6
```

Shadowing is different from marking a variable as `mut` because we'll get a compile-time error if we accidentally try to reassign to this variable without using the `let` keyword. When the `let` keyword is used again, it effectively creates a new variable, possibly with a different type, but with the same name.

## Ownership

Ownership is a set of rules that govern how a Rust program manages memory. All programs have to manage the way they use a computer's memory while running. Some languages have garbage collection that regularly looks for no-longer-used memory as the program runs; in other languages, the programmer must explicitly allocate and free the memory. Rust uses a third approach: memory is managed through a system of ownership with a set of rules that the compiler checks. If any of the rules are violated, the program won't compile. None of the features of ownership will slow down your program while it's running.

In other words, ownership enables Rust to make memory safety guarantees without needing a garbage collector.

The main purpose of ownership is to manage heap data.

### Ownership Rules

- Each value in Rust has an owner.
- There can only be one owner at a time.
- When the owner goes out of scope, the value will be dropped.

## References

A reference is like a pointer in that it’s an address we can follow to access the data stored at that address; that data is owned by some other variable. Unlike a pointer, a reference is guaranteed to point to a valid value of a particular type for the life of that reference.

### The Rules of References

- At any given time, you can have _either_ one mutable reference _or_ any number of immutable references.
- References must always be valid.

### Slices

Slices let you reference a contiguous sequence of elements in a collection rather than the whole collection. A slice is a kind of reference, so it does not have ownership.

**String Slices**

```rust
let s = String::from("hello world");

let hello = &s[0..5];
let world = &s[6..11];
```

## Mutability

**Misc**

<dl>
  <dt>mutable reference</dt>
  <dd><code>&mut T</code>, can be used to borrow and mutate mutable data.</dd>
  <dt>immutable reference</dt>
  <dd><code>&T</code>, can be used to borrow data but not mutate it.</dd>
</dl>

## Lifetimes

A lifetime is a construct of the compiler (or more specifically, its borrow checker) uses to ensure all borrows are valid. Specifically, a variable's lifetime begins when it is created and ends when it is destroyed.

## Attributes

An attribute is metadata applied to some module, crate, or item. When attributes apply to a whole crate, their syntax is `#![crate_attribute]`, and when they apply to a module or item, the syntax is `#[item_attribute]` (notice the missing bang `!`).

Attributes can take arguments with different syntaxes:

- `#[attribute = "value"]`
- `#[attribute(key = "value")]`
- `#[attribute(key1 = "value", key2 = "value")]`
- `#[attribute(value)]`
- `#[attribute(value1, value2)]`

## Traits

```rust
use std::convert::From;

impl From<F> for T {
    fn from(f: F) -> Self {
        ...
    }
}
```

The `Into` trait is simply the reciprocal of the `From` trait.

```rust
use std::convert::Into;

impl Into<T> for F {
    fn into(self) -> T {
        T
    }
}
```

```rust
use std::fmt;

struct Circle {
    radius: i32
}

impl fmt::Display for Circle {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "Circle of radius {}", self.radius)
    }
}
```

## Flow Control

### for

```rust
let a = [10, 20, 30, 40, 50];
for item in a {
    println!("The value is: {item}");
}
```

### if/else

```rust
// Statement
if ... {
    ...
} else if ... {
    ...
} else {
    ...
}

// Expression
let something =
    if ... {
        ...
        some_value
    } else if ... {
        ...
        some_other_value
    } else {
        ...
        another_value
    };
//   ^ Don't forget to put a semicolon here! All `let` bindings need it.

let value = if ... { 42 } else { 13 };
```

### loop

**Typical**

```rust
loop {
    ...
    continue;
    ...
    break;
}
```

**Nesting and Labels**

```rust
'outer: loop {

    'inner: loop {
        // This would break only the inner loop
        // break;

        // This breaks the outer loop
        break 'outer;
    }

    println!("This point will never be reached");
}
```

**Returning from Loops**

```rust
let something =
    loop {
        ...
        break some_value;
        ...
    };
//   ^ Don't forget to put a semicolon here! All `let` bindings need it.
```

### while

```rust
while ... {
    ...
    continue;
    ...
    break;
}
```

## Lints

See https://doc.rust-lang.org/rustc/lints/listing/index.html for details.

- `#![deny(absolute_paths_not_starting_with_crate)]`
- `#![warn(dead_code)]`
- `#![warn(elided_lifetimes_in_paths)]`
- `#![warn(explicit_outlives_requirements)]`
- `#![deny(keyword_idents)]`
- `#![warn(macro_use_extern_crate)]`
- `#![warn(meta_variable_misuse)]`
- `#![deny(missing_abi)]`
- `#![warn(missing_copy_implementations)]`
- `#![warn(missing_docs)]`
- `#![deny(non_ascii_idents)]`
- `#![deny(single_use_lifetimes)]`
- `#![warn(trivial_casts)]`
- `#![deny(trivial_numeric_casts)]`
- `#![warn(unnameable_types)]`
- `#![warn(unreachable_pub)]`
- `#![deny(unsafe_code)]`
- `#![deny(unsafe_op_in_unsafe_fn)]`
- `#![deny(unused_must_use)]`
- `#![warn(unused_crate_dependencies)]`
- `#![deny(unused_extern_crates)]`
- `#![warn(unused_lifetimes)]`
- `#![warn(unused_macro_rules)]`
- `#![warn(unused_results)]`
- `#![warn(unused_tuple_struct_fields)]`
- `#![warn(variant_size_differences)]`

**Documentation Related**

- `#![deny(missing_docs)]`
- `#![warn(missing_docs)]`

## Misc

```rust
use std::any
use std::fmt;

fn print_type<T: fmt::Debug>(item: T) {
    println!("{:?} is {}", item, any::type_name::<T>());
}
```

```rust
// Concatenate literals into a `&'static str`.
let s = concat!("test", 10, 'b', true);
```

```rust
let path: &'static str = env!("PATH");
println!("the $PATH variable at the time of compiling was: {path}");
```

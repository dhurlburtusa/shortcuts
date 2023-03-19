# Rust Notes

Rust is a modern systems programming language focusing on safety, speed, and concurrency. It accomplishes these goals by being memory safe without using garbage collection.

High-level ergonomics and low-level control are often at odds in programming language design; Rust challenges that conflict. Through balancing powerful technical capacity and a great developer experience, Rust gives you the option to control low-level details (such as memory usage) without all the hassle traditionally associated with such control.

By striving for zero-cost abstractions, higher-level features that compile to lower-level code as fast as code written manually, Rust endeavors to make safe code be fast code as well.

Rust's greatest ambition is to eliminate the trade-offs that programmers have accepted for decades by providing safety and productivity, speed and ergonomics.

## Data Types

Every value in Rust is of a certain data type and be either scalar or compound.

Rust is a statically typed language, which means that it must know the types of all variables at compile time.

### Scalar Types

A scalar type represents a single value. Rust has four primary scalar types: integers, floating-point numbers, Booleans, and characters.

**Integer Types**

| Length  | Signed | Unsigned |
| ------- | ------ | -------- |
| 8-bit   | i8     | u8       |
| 16-bit  | i16    | u16      |
| 32-bit  | i32    | u32      |
| 64-bit  | i64    | u64      |
| 128-bit | i128   | u128     |
| arch    | isize  | usize    |

**Floating-Point Types**

Rust's floating-point types are `f32` and `f64`.

## Constants

Constants in Rust are declared with the `const` keyword and the type of the value _must_ be annotated. Constants can be declared in any scope, including the global scope. Constants may only be set to a constant expression, not the results of a value that could only be computed at runtime. Rust's naming convention for constants is to use all uppercase with underscores between words.

## Operations

Rust supports the basic mathematical operations: addition, subtraction, multiplication, division, and remainder. Integer division truncates toward zero to the nearest integer.

 [Appendix B](https://doc.rust-lang.org/book/appendix-02-operators.html) contains a list of all operators that Rust provides.
 
## Variables

Variables in Rust are declared with the `let` keyword and are immutable by default. A variable can be made mutable by adding `mut` in front of the variable name.

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

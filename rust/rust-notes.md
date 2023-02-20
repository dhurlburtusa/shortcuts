# Rust Notes

Rust is a modern systems programming language focusing on safety, speed, and concurrency. It accomplishes these goals by being memory safe without using garbage collection.

High-level ergonomics and low-level control are often at odds in programming language design; Rust challenges that conflict. Through balancing powerful technical capacity and a great developer experience, Rust gives you the option to control low-level details (such as memory usage) without all the hassle traditionally associated with such control.

By striving for zero-cost abstractions, higher-level features that compile to lower-level code as fast as code written manually, Rust endeavors to make safe code be fast code as well.

Rust's greatest ambition is to eliminate the trade-offs that programmers have accepted for decades by providing safety and productivity, speed and ergonomics.

## Constants

Constants in Rust are declared with the `const` keyword and the type of the value _must_ be annotated. Constants can be declared in any scope, including the global scope. Constants may only be set to a constant expression, not the results of a value that could only be computed at runtime. Rust's naming convention for constants is to use all uppercase with underscores between words.

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

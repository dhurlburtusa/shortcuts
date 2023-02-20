# Rust Notes

Rust is a modern systems programming language focusing on safety, speed, and concurrency. It accomplishes these goals by being memory safe without using garbage collection.

High-level ergonomics and low-level control are often at odds in programming language design; Rust challenges that conflict. Through balancing powerful technical capacity and a great developer experience, Rust gives you the option to control low-level details (such as memory usage) without all the hassle traditionally associated with such control.

By striving for zero-cost abstractions, higher-level features that compile to lower-level code as fast as code written manually, Rust endeavors to make safe code be fast code as well.

Rust's greatest ambition is to eliminate the trade-offs that programmers have accepted for decades by providing safety and productivity, speed and ergonomics.

## Constants

Constants in Rust are declared with the `const` keyword and the type of the value _must_ be annotated. Constants can be declared in any scope, including the global scope. Constants may only be set to a constant expression, not the results of a value that could only be computed at runtime. Rust's naming convention for constants is to use all uppercase with underscores between words.

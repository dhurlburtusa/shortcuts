# Design Principles Cheat Sheet

* [DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself): Don't repeat yourself.
* [KISS](https://en.wikipedia.org/wiki/KISS_principle): Keep it simple, stupid!
* [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)):
  - **S**: Single-Responsibility: a class should have only a single responsibility.
  - **O**: Open-Closed: software entities … should be open for extension, but closed for modification.
  - **L**: Liskov Substitution: objects in a program should be replaceable with instances of their subtypes without
    altering the correctness of that program.
  - **I**: Interface Segregation: many client-specific interfaces are better than one general-purpose interface.
  - **D**: Dependency Inversion: one should depend upon abstractions -- do not depend upon concretions.
* [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it): You Ain't Gonna Need It -  a principle behind
  the XP practice of "do the simplest thing that could possibly work".  It is meant to be used in combination with
  several other practices, such as continuous refactoring, continuous automated unit testing, and continuous
  integration.
* Program to an interface, not an implementation.
* Favor composition over inheritance.
* Strive for loosely coupled designs between objects that interact.

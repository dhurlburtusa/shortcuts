# JavaScript Class Notes

Note: class declarations are not hoisted.

## Syntax Template

### Declaration Syntax

```js
class TheClassName extends SomeOtherClass {

  // = Static Fields: =======================
  static foo;
  static #bar = "bar";

  // = Static Initialization Blocks: ========
  //
  // A class can have any number of `static {}` initialization blocks in its class
  // body. These are evaluated, along with any interleaved static field initializers,
  // in the order they are declared. Any static initialization of a super class is
  // performed first, before that of its sub classes.
  //
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks.
  static {
    // The scope of the variables declared inside the static block is local to the
    // block. This includes `var`, `function`, `const`, and `let` declarations. `var`
    // declarations will not be hoisted out of the static block.

    // The `this` inside a static block refers to the constructor object of the class.
    this.foo = "foo";

    // `super.property` can be used to access static properties of the super class.
    // ... super.property ...

    // ...
  }

  // = Static Getters/Setters: ==============

  get bar() {
    return this.#bar;
  }

  set bar(bar) {
    this.#bar = bar;
  }

  // = Static Functions: ====================

  static doSomething() {
    // ...
  }

  // = Fields: ==============================
  foo;

  #bar = "bar";

  // = Constructor: =========================
  constructor(param0, param1, ...params) {
    // Must be called before using `this`.
    super(...);
    // Initialize instance.
    // ...

    this.foo = param0;
    this.#bar = param1;
  }

  // = Getters/Setters: =====================

  get bar() {
    return this.#bar;
  }

  set bar(bar) {
    this.#bar = bar;
  }

  // = Methods: =============================

  async load() {
    // ...
  }

  [Symbol.Iterable]() {
    // ...
  }
}
```

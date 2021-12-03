# TypeScript Notes

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.


## Project Configuration

The presence of a `tsconfig.json` file in a directory indicates that the directory is the root of a TypeScript project. The `tsconfig.json` file specifies the root files and the compiler options required to compile the project. A project is compiled in one of the following ways:

**Using tsconfig.json**

- By invoking `tsc` with no input files, in which case the compiler searches for the `tsconfig.json` file starting in the current directory and continuing up the parent directory chain.
- By invoking `tsc` with no input files and a `--project` (or just `-p`) command line option that specifies the path of a directory containing a `tsconfig.json` file, or a path to a valid `.json` file containing the configurations.

When input files are specified on the command line, `tsconfig.json` files are ignored.

## Terminology

**Contextual typing**: The process of infer types based on contextual information such as where a function is invoked.

**Optional properties**: Properties of an object type that are optional. To declare, add a `?` after the property name.

```ts
function printName(nameable: { first: string; last?: string }) {
  // ...
}
```

**Type alias**: A name given to a type declaration. This allow a single point of declaration and reusability.

```ts
type ID = number | string;
type Point = {
  x: number;
  y: number;
}
type UserInputSanitizedString = string;
```

**Type annotations**: The type declared on variables, function parameters, and function return values.

```ts
// Variable:
let myName: string = "Alice";

// Function parameters and return value:
function greet(name: string): string {
  // ...
}
```

**Type narrowing**: The process of narrowing a type, for instance narrowing a union type to a specific member type, by providing constructs in the code performing type narrowing such as using the `typeof` operator, `Array.isArray`, etc.

**Union types**: A type formed from two or more other types, representing values that may be _any_ one of those types.

```ts
// Variable:
let id: number | string = "foo";

function printId(id: number | string) {
  // ...
}
```


## Misc

- Readonly<Something>
- some_object as const
- You should prefer `interface`. Use `type` when you need specific features.
- TypeScript's type checking focuses on the shape that values have. This is sometimes called "duck typing" or "structural typing". In a structural type system, if two objects have the same shape, they are considered to be of the same type.
- The compiler _widens_ — converts to a supertype — the unit type to the primitive type, such as `"foo"` to `string` on assignment to a mutable variable.
- A const-assertion: `let a = [1, 2, 3] as const;`
- ```
  interface X { x: number; }
  let rx: Readonly<X> = { x: 1 };
  ```
- `let a: ReadonlyArray<number> = [1, 2, 3];`
- `let b: readonly number[] = [1, 2, 3];`

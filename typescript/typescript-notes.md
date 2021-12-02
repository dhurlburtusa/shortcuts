# TypeScript Notes

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.


## Project Configuration

The presence of a `tsconfig.json` file in a directory indicates that the directory is the root of a TypeScript project. The `tsconfig.json` file specifies the root files and the compiler options required to compile the project. A project is compiled in one of the following ways:

**Using tsconfig.json**

- By invoking `tsc` with no input files, in which case the compiler searches for the `tsconfig.json` file starting in the current directory and continuing up the parent directory chain.
- By invoking `tsc` with no input files and a `--project` (or just `-p`) command line option that specifies the path of a directory containing a `tsconfig.json` file, or a path to a valid `.json` file containing the configurations.

When input files are specified on the command line, `tsconfig.json` files are ignored.


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

# TypeScript Notes

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.


## Project Configuration

The presence of a `tsconfig.json` file in a directory indicates that the directory is the root of a TypeScript project. The `tsconfig.json` file specifies the root files and the compiler options required to compile the project. A project is compiled in one of the following ways:

**Using tsconfig.json**

- By invoking `tsc` with no input files, in which case the compiler searches for the `tsconfig.json` file starting in the current directory and continuing up the parent directory chain.
- By invoking `tsc` with no input files and a `--project` (or just `-p`) command line option that specifies the path of a directory containing a `tsconfig.json` file, or a path to a valid `.json` file containing the configurations.

When input files are specified on the command line, `tsconfig.json` files are ignored.

## Terminology

**Call signature**: In JavaScript, functions can have properties in addition to being callable. However, the function type expression syntax doesn't allow for declaring properties. If we want to describe something callable with properties, we can write a _call signature_ in an object type:

```ts
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
```

Note that the syntax is slightly different compared to a function type expression - use `:` between the parameter list and the return type rather than `=>`.

**Construct signature**: JavaScript functions can also be invoked with the `new` operator. TypeScript refers to these as _constructors_ because they usually create a new object. You can write a _construct signature_ by adding the `new` keyword in front of a call signature:

```ts
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

Some objects, like JavaScript's `Date` object, can be called with or without `new`. You can combine call and construct signatures in the same type arbitrarily:

```ts
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
```

**Contextual typing**: The process of infer types based on contextual information such as where a function is invoked.

**Control flow analysis**: The analysis of code based on reachability, and TypeScript uses this flow analysis to narrow types as it encounters type guards and assignments.

**Discriminated unions**: A union type where each member has a common property with literal types that can be used to discriminate which member type is being acted upon.

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

// The `kind` property is considered the _discriminant_ property in the above interfaces.

// `Shape` is the discriminated union type.
type Shape = Circle | Square;
```

**Generic function**: Functions declared with generic type information using type parameters.

```ts
// `Type` here is an example of a type parameter.
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// May have more than one type parameter.
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
```

When the function is called, the parameter's type is inferred:

```ts
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
```

Can be constrained:

```ts
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
```

TypeScript can usually infer the intended type arguments in a generic call, but not always. In these cases, the types can be declared when the function is called:

```ts
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr = combine<string | number>([1, 2, 3], ["hello"]);
```

Remember, generics are all about relating two or more values with the _same type_!

Remember, type parameters are for _relating the types of multiple values_.

See [Generic Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions) for more details.

**Function overloads**: Some JavaScript functions can be called with different signatures. Overload signatures are used to declares these.

```ts
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
```

In this example, the first two signatures are called the _overload signatures_. The last signature is the _implementation signature_, but this cannot be called directly. 

**Function `this`**: The `this` of the function (aka method). Since the JavaScript specification states that you cannot have a parameter called `this`, TypeScript uses that syntax space to let you declare the type for `this` in the function body.

```ts
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}
 
const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.isAdmin;
});
```

Note that you need to use `function` and not arrow functions to get this behavior since with arrow functions, the `this` would refer to the `this` outside of the function scope.

**Function type expressions**: A type declaration to describe a function. It is syntactically similar to arrow functions:

```ts
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
```

Note that in function type expressions the parameter name is **required**. The function type `(string) => void` means "a function with a parameter named string of type any".

**Interfaces**: A name given to an object type declaration. Is very similar to type aliases except that a type alias cannot be re-opened to add new properties.

```ts
interface Point {
  x: number;
  y: number;
}

interface Animal {
  name: string
}

// Can be extended:
interface Bear extends Animal {
  honey: boolean
}

interface Window {
  title: string
}

// Can be updated:
interface Window {
  React: ReactApi
}
```

Note: Interfaces may only be used to [declare the shapes of objects, not rename primitives](https://www.typescriptlang.org/play?#code/PTAEAkFMCdIcgM6gC4HcD2pIA8CGBbABwBtIl0AzUAKBFAFcEBLAOwHMUBPQs0XFgCahWyGBVwBjMrTDJMAshOhMARpD4tQ6FQCtIE5DWoixk9QEEWAeV37kARlABvaqDegAbrmL1IALlAEZGV2agBfampkbgtrWwMAJlAAXmdXdy8ff0Dg1jZwyLoAVWZ2Lh5QVHUJflAlSFxROsY5fFAWAmk6CnRoLGwmILzQQmV8JmQmDzI-SOiKgGV+CaYAL0gBBdyy1KCQ-Pn1AFFplgA5enw1PtSWS+vCsAAVAAtB4QQWOEMKBuYVUiVCYvYQsUTQcRSBDGMGmKSgAAa-VEgiQe2GLgKQA).

**Literal types**: A type declared as a specific boolean, number, or string. Usually used with union types.

```ts
type Status = 'fulfilled' | 'idle' | 'pending' | 'rejected';

function compare(a: string, b: string): -1 | 0 | 1 {
  // ...
}

function print(a: string, alignment: 'left' | 'right' | 'center') {
  // ...
}
```

**`never` type**: A type TypeScript uses to represent a state which shouldn't exist. For example, it's used when narrowing and the members of a union are reduced to a point where nothing is left. The `never` type can be used to perform exhaustiveness checking.

The `never` type is assignable to every type; however, no type is assignable to `never` (except `never` itself). This means you can use narrowing and rely on `never` turning up to do exhaustive checking in a switch statement.

For example, if not all cases in the following switch are not handled, then shape will not be `never` and the assignment will raise an error.

```ts
type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

**Non-null assertion operator (postfix `!`)**: Special TypeScript syntax that is effectively a type assertion stating that an expression isn't `null` or `undefined`.

```ts
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

Just like other type assertions, this doesn’t change the runtime behavior of your code, so it's important to only use `!` when you know that the value can't be `null` or `undefined`.

**Optional parameters**: A parameter which does not need an argument when the function is called. To declare, add a `?` after the parameter name or give the parameter a default.

```ts
function f(x?: number) {
  // ...
}
function toInt(x: number, radix = 10) {
  // ...
}
```

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

**Type arguments**: Explicitly declared types to generic functions. TypeScript can usually infer the intended type arguments in a generic call, but not always.

```ts
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
```

Normally it would be an error to call this function with mismatched arrays:

```ts
const arr = combine([1, 2, 3], ["hello"]);
// Type 'string' is not assignable to type 'number'.
```

If you intended to do this, however, you could manually specify Type:

```ts
const arr = combine<string | number>([1, 2, 3], ["hello"]);
```

**Type assertions**: Allows a JavaScript expression to be declared as a specific type when TypeScript is unable to accurate determine from static analysis. Use keyword `as` and the type.

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

TypeScript only allows type assertions which convert to a _more_ specific or _less_ specific version of a type. This rule prevents "impossible" coercions like:

```ts
const x = "hello" as number;
```

Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to `any` (or `unknown`), then to the desired type:

```ts
const a = (expr as any) as T;
```

When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later so the inferred type of the property is a general type (e.g., `number`, `string`, etc) and not a literal type.

```ts
const obj = { count: 0 };
// obj.count inferred to be `number`.
```

But using `as const`:
```ts
const obj = { count: 0 } as const;
// obj.count inferred to be `0`.
```

See [Literal Inference](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference) to more detailed explanation.

**Type guards**: A special check such as `typeof` checks, `if`/`else`, conditional ternaries, loops, truthiness checks, etc used to narrow a type.

**Type narrowing**: The process of narrowing a type, for instance narrowing a union type to a specific member type, by providing constructs in the code performing type narrowing such as using the `typeof` operator, `Array.isArray`, etc with type guards.

See [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) for details.

**Type parameter**: Used in a function signature of generic functions. See generic function for more details.

**Type predicates**: Used to define used-defined type guards. A type predicate is used as the return type of a function. A type predicate takes the form `parameterName is Type`, where `parameterName` must be the name of a parameter from the current function signature. The function can then be used in narrowing.

```ts
// `pet is Fish` is the type predicate in the following function:
function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```

In addition, classes can use `this is Type` to narrow their type.

```ts
class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}
```

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
- When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument.
- `void` is not the same as `undefined`.

# TypeScript Cheat Sheet


## Basic Types

See http://www.typescriptlang.org/docs/handbook/basic-types.html for details.

| Data Type     | TypeScript Type |
| ------------- | --------------- |
| `Boolean`     | `boolean`       |
| `null`        | `null`          |
| `Number`      | `number`        |
| Object        | `object`        |
| `String`      | `string`        |
| Void          | `void`          |
| `undefined`   | `undefined`     |
| `Array`       | `<type>[]`, e.g. `number[]` |
| `Array`       | `Array<type>`, e.g. `Array<number>` |
| Tuple         | `[<type>, ...]`, e.g. `[number, string]` |
| Any           | `any`           |
| Any array     | `any[]`         |
| Never         | `never`         |


## Enums

```ts
enum Color {Red, Green, Blue}
enum Color {Red = 1, Green, Blue}
enum Color {Red = 1, Green = 2, Blue = 4}
```


## Interfaces

```ts
interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
  readonly dob: string;
}
```


## Type Assertions

```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

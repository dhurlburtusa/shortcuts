# TypeScript Cheat Sheet


## Basic Types

See http://www.typescriptlang.org/docs/handbook/basic-types.html for details.

| Data Type     | TypeScript Type |
| ------------- | --------------- |
| `Boolean`     | `boolean`       |
| `null`        | `null`          |
| `Number`      | `number`        |
| `String`      | `string`        |
| Void          | `void`          |
| `undefined`   | `undefined`     |
| `Array`       | `<type>[]`, e.g. `number[]` |
| `Array`       | `Array<type>`, e.g. `Array<number>` |
| Tuple         | `[<type>, ...]`, e.g. `[number, string]` |
| Any           | `any`           |
| Never         | `never`         |


## Interfaces

```ts
interface Person {
  firstName: string;
  lastName: string;
}
```

# Core JavaScript - Misc


## Misc Info

**Special**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| null | null | "object" | N/A | N/A | N/A | "null" | "null" |
| undefined | undefined | "undefined" | N/A | N/A | N/A | undefined | "undefined" |

**Arrays**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| Array literal | [] | "object" | itself | "" | N/A | "[]" | "" |
| Array literal | ['a', 'b'] | "object" | itself | "a,b" | N/A | ["a","b"] | "a,b" |

**Booleans**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| Boolean instance | new Boolean(0) | "object" | false | "false" | N/A | "false" | "false" |
| Boolean instance | new Boolean(1) | "object" | true | "true" | N/A | "true" | "true" |
| Boolean | Boolean(0) | "boolean" | itself | "false" | N/A | "false" | "false" |
| Boolean | Boolean(1) | "boolean" | itself | "true" | N/A | "true" | "true" |
| Boolean literal | false | "boolean" | itself | "false" | N/A | "false" | "false" |
| Boolean literal | true | "boolean" | itself | "true" | N/A | "true" | "true" |

**Dates**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| Date instance | new Date(2000, 0, 1) | "object" | 946710000000 | "Sat Jan 01 2000 00:00:00 GMT-0700 (Mountain Standard Time)" | "2000-01-01T07:00:00.000Z" | "2000-01-01T07:00:00.000Z" | "Sat Jan 01 2000 00:00:00 GMT-0700 (Mountain Standard Time)" |

**Errors**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| Error instance | new Error('Opps!') | "object" | itself | "Error: Opps!" | N/A | "{}" | "Error: Opps!" |
| TypeError instance | new TypeError('Opps!') | "object" | itself | "TypeError: Opps!" | N/A | "{}" | "TypeError: Opps!" |

**Functions**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| Arrow function | () => {} | "function" | itself | "() => {}" | N/A | undefined | "() => {}" |
| Function declaration | function example() {} | "function" | itself | "function example() {}" | N/A | undefined | "function example() {}" |

**Function Arguments**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| Function arguments | () | "object" | itself | "[object Arguments]" | N/A | "{}" | "[object Arguments]" |
| Function arguments | ('a', 'b') | "object" | itself | "[object Arguments]" | N/A | "{\"0\":\"a\",\"1\":\"b\"}" | "[object Arguments]" |

**Maps**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| Map instance | new Map() | "object" | itself | "[object Map]" | N/A | "{}" | "[object Map]" |
| Map instance | new Map(null) | "object" | itself | "[object Map]" | N/A | "{}" | "[object Map]" |
| Map instance | new Map([['a']]) | "object" | itself | "[object Map]" | N/A | "{}" | "[object Map]" |
| Map instance | new Map([['a', 'b']]) | "object" | itself | "[object Map]" | N/A | "{}" | "[object Map]" |

**Numbers**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| Infinity | Infinity | "number" | itself | "Infinity" | N/A | "null" | "Infinity" |
| Infinity | Number.NEGATIVE_INFINITY | "number" | itself | "-Infinity" | N/A | "null" | "-Infinity" |
| Infinity | Number.POSITIVE_INFINITY | "number" | itself | "Infinity" | N/A | "null" | "Infinity" |
| NaN | NaN | "number" | itself | "NaN" | N/A | "null" | "NaN" |
| NaN | Number.NaN | "number" | itself | "NaN" | N/A | "null" | "NaN" |
| Number instance | Number.EPSILON | "number" | itself | "2.220446049250313e-16" | N/A | "2.220446049250313e-16" | "2.220446049250313e-16" |
| Number instance | Number.MAX_SAFE_INTEGER | "number" | itself | "9007199254740991" | N/A | "9007199254740991" | "9007199254740991" |
| Number instance | Number.MAX_VALUE | "number" | itself | "1.7976931348623157e+308" | N/A | "1.7976931348623157e+308" | "1.7976931348623157e+308" |
| Number instance | Number.MIN_SAFE_INTEGER | "number" | itself | "-9007199254740991" | N/A | "-9007199254740991" | "-9007199254740991" |
| Number instance | Number.MIN_VALUE | "number" | itself | "5e-324" | N/A | "5e-324" | "5e-324" |
| Number instance | new Number(0) | "object" | 0 | "0" | N/A | "0" | "0" |
| Number instance | new Number(1) | "object" | 1 | "1" | N/A | "1" | "1" |
| Number | Number(0) | "number" | itself | "0" | N/A | "0" | "0" |
| Number | Number(1) | "number" | itself | "1" | N/A | "1" | "1" |
| Number literal | 1 | "number" | itself | "1" | N/A | "1" | "1" |
| Number literal | 0 | "number" | itself | "0" | N/A | "0" | "0" |
| Number literal | -0 | "number" | itself | "0" | N/A | "0" | "0" |
| Number literal | -1 | "number" | itself | "-1" | N/A | "-1" | "-1" |

**Objects**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| Object instance | Object({ foo: 'bar' }) | "object" | itself | "[object Object]" | N/A | "{\"foo\":\"bar\"}" | "[object Object]" |
| Object instance | new Object({ foo: 'bar' }) | "object" | itself | "[object Object]" | N/A | "{\"foo\":\"bar\"}" | "[object Object]" |
| Object literal | {} | "object" | itself | "[object Object]" | N/A | "{}" | "[object Object]" |
| Object literal | { foo: 'bar' } | "object" | itself | "[object Object]" | N/A | "{\"foo\":\"bar\"}" | "[object Object]" |

**RegExps**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| RegExp literal | /ab/gi | "object" | itself | "/ab/gi" | N/A | "{}" | "/ab/gi" |
| RegExp instance | new RegExp('ab', 'gi') | "object" | itself | "/ab/gi" | N/A | "{}" | "/ab/gi" |

**Sets**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| Set instance | new Set() | "object" | itself | "[object Set]" | N/A | "{}" | "[object Set]" |
| Set instance | new Set(null) | "object" | itself | "[object Set]" | N/A | "{}" | "[object Set]" |
| Set instance | new Set('ab') | "object" | itself | "[object Set]" | N/A | "{}" | "[object Set]" |
| Set instance | new Set(['a', 'b']) | "object" | itself | "[object Set]" | N/A | "{}" | "[object Set]" |

**Strings**

| Description | Code | `typeof` | `valueOf` | `toString()` | `toJSON` | `JSON.stringify` | `"" +` |
| ----------- | ---- | -------- | --------- | ------------ | -------- | ---------------- | ------ |
| String instance | new String() | "object" | "" | "" | N/A | "" | "" |
| String instance | new String('a') | "object" | "a" | "a" | N/A | "a" | "a" |
| String | String() | "string" | itself | "" | N/A | "" | "" |
| String | String('a') | "string" | itself | "a" | N/A | "a" | "a" |
| string literal | '' | "string" | itself | "" | N/A | "" | "" |
| String literal | 'a' | "string" | itself | "a" | N/A | "a" | "a" |

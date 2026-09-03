# C - Data Types Notes

The data type of

- `alignas` declarations
- `alignof` operator
- atomic types
- cast operator
- constants
- compound literal
- function parameters
- function return values
- generic selection
- `sizeof` operator
- struct members
- union members
- variables

must be declared.

## Type Classification

- The `void` type
- Basic Types:
  + The `char` type
  + Signed Integer Types:
    * Standard: `signed char`, `short`, `int`, `long`, `long long` (since C99)
    * Bit-precise: `_BitInt(N)` (since C23)
    * Extended: implementation defined, e.g., `__int128`
  + Unsigned Integer Types:
    * Standard: `_Bool` (since C99, until C23), `bool` (since C23), `unsigned char`, `unsigned short`, `unsigned int`, `unsigned long`, `unsigned long long` (since C99)
    * Bit-precise: `unsigned _BitInt(N)` (since C23)
    * Extended: implementation defined, e.g., `__uint128`
  + Floating-Point Types:
    * Real Floating-Point Types: `float`, `double`, `long double`
    * Complex Types (since C23): `float _Complex`, `double _Complex`, `long double _Complex`
    * Imaginary Types (since C23): `float _Imaginary`, `double _Imaginary`, `long double _Imaginary`
    * Decimal Real Floating-Point Types (since C23): `_Decimal32`, `_Decimal64`, `_Decimal128`
- Enumerated types
- Derived Types:
  + Array types
  + Structure types
  + Union types
  + Function types
  + Pointer types
  + Atomic types (since C11)

See https://cppreference.com/c/language/type for details.

## Type Groups

- Object types: all types that aren't function types
- Character types: `char`, `signed char`, `unsigned char`
- Integer types: `char`, signed integer types, unsigned integer types, enumerated types
- Real types: integer types and real floating types
- Arithmetic types: integer types and floating types
- Scalar types: arithmetic types, pointer types, and `nullptr_t` (since C23)
- Aggregate types: Array types and structure types
- Derived declarator types: array types, function types, and pointer types

## Typedef Declaration

The typedef declaration provides a way to declare an identifier as a type alias, to be used to replace a possibly complex type name. The keyword `typedef` is used in a declaration.

```c
typedef int int_t;
```

## Arithmetic Types

### Boolean Type

- `_Bool` (also accessible as the macro `bool`) (until C23) `bool` (since C23) — type, capable of holding one of the two values: `0` and `1` (also accessible as the macros `false` and `true`) (until C23) `false` and `true` (since C23).

Note that conversion to `bool` does not work the same as conversion to other integer types: `(bool)0.5` evaluates to `true`, whereas `(int)0.5` evaluates to `0`.

### Character Types:

- `signed char` — type for signed character representation.
- `unsigned char` — type for unsigned character representation. Also used to inspect object representations (raw memory).
- `char` — type for character representation. Equivalent to either `signed char` or `unsigned char` (which one is implementation-defined and may be controlled by a compiler commandline switch), but `char` is a distinct type, different from both `signed char` and `unsigned char`.

Note that the standard library also defines `typedef` names `wchar_t`, `char16_t`, and `char32_t` (since C11) to represent wide characters and `char8_t` for UTF-8 characters (since C23).

### Integer Types

- `short int` (also accessible as `short`, may use the keyword `signed`)
- `unsigned short int` (also accessible as `unsigned short`)
- `int` (also accessible as `signed int`)
  This is the most optimal integer type for the platform, and is guaranteed to be at least 16 bits. Most current systems use 32 bits.
- `unsigned int` (also accessible as `unsigned`), the unsigned counterpart of `int`, implementing modulo arithmetic. Suitable for bit manipulations.
- `long int` (also accessible as `long`)
- `unsigned long int` (also accessible as `unsigned long`)
- `long long int` (also accessible as `long long`) (since C99)
- `unsigned long long int` (also accessible as `unsigned long long`) (since C99)
- `_BitInt(n)` (also accessible as `signed _BitInt(n)`), the bit-precise signed integer types (where `n` is replaced by an integer constant expression denoting the precise width (including the sign bit), that cannot be larger than `BITINT_MAXWIDTH` from `<limits.h>`) (since C23)
- `unsigned _BitInt(n)`, the bit-precise unsigned integer types (where `n` is replaced by an integer constant expression denoting the precise width, that cannot be larger than `BITINT_MAXWIDTH` from `<limits.h>`) (since C23)

Note: as with all type specifiers, any order is permitted: `unsigned long long int` and `long int unsigned long` name the same type.

### Real Floating Types

C has three or six(since C23) types for representing real floating-point values:

- `float` — single precision floating-point type. Matches IEEE-754 binary32 format if supported.
- `double` — double precision floating-point type. Matches IEEE-754 binary64 format if supported.
- `long double` — extended precision floating-point type. Matches IEEE-754 binary128 format if supported, otherwise matches IEEE-754 binary64-extended format if supported, otherwise matches some non-IEEE-754 extended floating-point format as long as its precision is better than binary64 and range is at least as good as binary64, otherwise matches IEEE-754 binary64 format.

If the implementation predefines the macro constant `__STDC_IEC_60559_DFP__`, the following decimal floating-point types are also supported. (since C23)

- `_Decimal32` — Represents IEEE-754 decimal32 format.
- `_Decimal64` — Represents IEEE-754 decimal64 format.
- `_Decimal128` — Represents IEEE-754 decimal128 format.

Otherwise, these decimal floating-point types are not supported.

Floating-point types may support special values:

- _infinity_ (positive and negative).
- the -negative zero_, -0.0. It compares equal to the positive zero, but is meaningful in some arithmetic operations, e.g. `1.0 / 0.0 == INFINITY`, but `1.0 / -0.0 == -INFINITY`)
- `not-a-number` (NaN), which does not compare equal with anything (including itself). Multiple bit patterns represent NaNs, see nan, NAN. Note that C takes no special notice of signaling NaNs (specified by IEEE-754), and treats all NaNs as quiet.

See https://cppreference.com/c/language/arithmetic_types for details.

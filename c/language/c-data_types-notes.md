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
    * Standard: `_Bool` (since C99), `unsigned char`, `unsigned short`, `unsigned int`, `unsigned long`, `unsigned long long` (since C99)
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

# Python Cheat Sheet


## Data Types

### Numbers

Are immutable. Consist of integers, floating-point, complex, decimals, and fractions. Also includes booleans and sets.

#### Literals and Creation

##### Integers (unlimited magnitude)

```python
1234, +42, 0, -24
0b1010  # binary
0x9ff  # hexadecimal
0o177  # octal
int(9.1), int('-9'), int('1011', 2), int('0b1101', 0)
```

##### Floating-Point

```python
1.23, 3.14e-10, 4E210, 4.0e+210, 1., .1, 0.
float(9), float('1e2'), float('-.1')
```

##### Complex Numbers

```python
3+4j, 3.0+4.0j, 3J
complex(3, 4.0)
```

##### Decimal

A fixed-precision, floating-point number. Normally implemented as C doubles in CPython.

```python
from decimal import Decimal

Decimal('0.1')
```

##### Fractions

A rationa,l type that keeps numerator and denominator explicitly.

```python
from fractions import Fraction

Fraction(1, 10)
```

##### Boolean

```python
bool(X),
True
False
```

#### Built-in Functions

```python
abs(N)
bin(N)
bool([X])
complex([real [, imag]])
divmod(X, Y)
float([X])
hex(N)
int([number|string [, base]])
hex(N)
oct(N)
pow(X, Y [, Z])
round(X [, N])

import math

math.ceil(N)
math.e
math.factorial(X)
math.floor(N)
math.isfinite(N)
math.isinf(N)
math.isnan(N)
math.log(N [, base])
math.log10(N)
math.pi
math.pow(X, Y)
math.trunc(X)

import random

random.random()
random.randint(X, Y)
L = [ 1, 2, 3, 4 ]
random.shuffle(L)
random.choice(L)
```

# Ruby Language Notes


## Data Types

- An almost 100% object-oriented programming language.
- No primitives.

**Integers**

```ruby
42.class  #=> Integer (Fixnum in Ruby <2.4)
# Math Operations
4 + 2
4 - 2
4 / 2
4 * 2
4 ** 2 # four squared
```

**Floats**

```ruby
4.2.class  #=> Float
# Math Operations
4.0 + 2
4.0 - 2
4.0 / 2
4.0 * 2
4.0 ** 2 # four squared
```


## Keywords

```ruby
__FILE__
__LINE__
alias
```

See https://ruby-doc.org/core-2.6.5/doc/keywords_rdoc.html for details.


## Variables

- Ruby naming convention: snake_case.

```ruby
# Variable assignment
x = 1
```

**Variable Scope Indicators

| Indicator | Scope    | Example |
| --------- | -------- | --------|
| `$`       | global   | `$foo`  |
| `@@`      | class    | `@@foo` |
| `@`       | instance | `@foo`  |
| None      | local    | `foo`   |
| None      | block    | `foo`   |


## Operations

- Uses standard math rules: parenthesis, exponents, multiplication, division, addition, and subtraction (PEMDAS).

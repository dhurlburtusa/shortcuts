# Ruby Language Notes


## Globals

**Pre-defined Variables**

```ruby
# Contains the name of the script being executed. May be assignable.
$0

# Command line arguments given for the script sans args.
$*

# The input record separator, newline by default.
$/

# Load path for scripts and binary modules by load or require.
$:

# The array contains the module names loaded by require.
$“

# The debug flag, which is set by the -d switch.
$DEBUG

# The current standard error output.
$stderr

# The current standard input.
$stdin

# The current standard output.
$stdout

# The verbose flag, which is set by the -w or -v switch.
$VERBOSE
```

**Pre-defined Constants**

```ruby
TRUE
FALSE
NIL
STDIN
STDOUT
STDERR
ENV
ARGF
ARGV
RUBY_VERSION
RUBY_PLATFORM
```

See https://ruby-doc.org/core-2.6.5/doc/globals_rdoc.html for full list.


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

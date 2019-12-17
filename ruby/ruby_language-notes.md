# Ruby Language Notes


## Data Types

- An almost 100% object-oriented programming language.
- No primitives.

**Integers**

```ruby
# Math Operations
4 + 2
4 - 2
4 / 2
4 * 2
4 ** 2 # four squared
```


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


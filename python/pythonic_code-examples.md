# Pythonic Code Examples

Pythonic code means writing code the way experienced Python developers expect. It uses the language's core features to be clear, short, and fast.

## Comparisons

Comparisons can be chained arbitrarily, e.g., `x < y <= z` is equivalent to `x < y and y <= z`, except that `y` is evaluated only once (but in both cases `z` is not evaluated at all when `x < y` is found to be false).

See https://docs.python.org/3/reference/expressions.html#comparisons.

## Comprehensions

Use dict, list, and set comprehensions for simple cases.

```python
# dict
squared = {n: n ** 2 for n in range(10)}

# list
squared = [x*2 for x in numbers]
eight_bit_even_hex = ['{:#04x}'.format(x) for x in range(256) if x % 2 == 0]

# set
results = {c for c in 'abracadabra' if c not in 'abc'}
```

See https://docs.python.org/3/reference/expressions.html#comprehensions.

## Loops

Use a `for`/`in` loop.

```python
for item in some_collection:
  ...

# With index:
for index, item in enumerate(some_collection):
  ...
```

## Membership

Checks if an item is a member of a collection. Results in a boolean. Commonly used in an if statement.

```python
if item in some_collection:
  ...
if item not in some_collection:
  ...
```

See https://docs.python.org/3/reference/expressions.html#membership-test-operations.

## Swapping Values

```python
a, b = b, a
```

## More

See https://github.com/jerry-git/learn-python3/blob/master/README.md#idiomatic-python.

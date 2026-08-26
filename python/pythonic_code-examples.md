# Pythonic Code Examples

Pythonic code means writing code the way experienced Python developers expect. It uses the language's core features to be clear, short, and fast.

## Comprehensions

Use dict and list comprehensions for simple cases.

```python
squared = [x*2 for x in numbers]
```

See https://docs.python.org/3/reference/expressions.html#comprehensions.

## Inclusion

Checks if an item is included in a collection. Results in a boolean. Commonly used in an if statement.

```python
if item in some_collection:
  ...
```

## Loops

Use a `for`/`in` loop.

```python
for item in some_collection:
  ...

# With index:
for index, item in enumerate(some_collection):
  ...
```

## Swapping Values

```python
a, b = b, a
```

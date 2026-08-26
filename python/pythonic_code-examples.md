# Pythonic Code Examples

Pythonic code means writing code the way experienced Python developers expect. It uses the language's core features to be clear, short, and fast.

## Comprehensions

Use dict and list comprehensions for simple cases.

```python
squared = [x*2 for x in numbers]
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

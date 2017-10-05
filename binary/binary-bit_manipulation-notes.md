# Binary Bit Manipulation Notes


## Shifting

* Arithmetic left shifting doubles the number.
* Arithmetic right shifting halves the number rounded down.

## Masks

**Mask of Single Bit**

For example, `0001`, ..., `0100`, `1000`, etc.

```js
(1 << i)
```

where `i` is 0 to n.

**Mask of All but One Bit**

For example, `1110`, ..., `1011`, `0111`, etc.

```js
~(1 << i)
```

where `i` is 0 to n.

**Get i<sup>th</sup> Bit**

```js
(x & (1 << i))
```

If result is zero, then bit is 0, otherwise it is 1.

**Set i<sup>th</sup> Bit**

```js
(x | (1 << i))
```

**Clear i<sup>th</sup> Bit**

```js
(x & (~(1 << i)))
```


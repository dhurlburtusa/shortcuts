# C Bit Manipulation Notes

**Set**

```c
mask = 0b00001000;

x = x | mask;
```

**Clean**

```c
mask = 0b00001000;

x = x & ~mask;
```

**Read**

```c
mask = 0b00001000;

if (x & mask) {
  // bit is 1
} else {
  // bit is 0
}
```

**Invert**

```c
mask = 0b00001000;

x = x ^ mask;
```

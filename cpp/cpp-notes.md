# CPP Notes

C++ is a cross-platform language that can be used to create high-performance applications, which includes video games.

C++ was developed by Bjarne Stroustrup, as an extension to the C language. The main difference between C and C++ is that C++ supports classes and objects, while C does not.

C++ gives programmers a high level of control over system resources and memory.

C++ has evolved over the years, with major versions including C++11, C++14, C++17, C++20, C++23, and C++26.

## Constants

- Identifiers with values that will not change during execution.
- May be implemented with directives or as variables.

```cpp
#define ANSWER_TO_LIFE_THE_UNIVERSE_AND_EVERYTHING 42

const double pi = 3.1415926;
```


## Characters

| Escape code | Description           |
| ----------- | --------------------- |
| \n          | newline               |
| \r          | carriage return       |
| \t          | tab                   |
| \v          | vertical tab          |
| \b          | backspace             |
| \f          | form feed (page feed) |
| \a          | alert (beep)          |
| \'          | single quote (')      |
| \"          | double quote (")      |
| \?          | question mark (?)     |
| \\          | backslash (\)         |
| \0DD        | octal                 |
| \xDD        | hexidecimal           |


## Strings

- Not a type natively supported by the language.
- Strings are arrays of characters (`char`) terminated by the `\0` (NULL) character.
- The `std::string` class is available in the C++ standard library via the `<string>` header.
- The `<cstring>` header contains functions to handler character array strings.

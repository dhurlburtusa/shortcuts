# CPP Notes


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

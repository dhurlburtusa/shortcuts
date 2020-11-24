# URI Template RFC Notes

A URI Template is a compact sequence of characters for describing a range of URIs through variable expansion.

URI Templates provide a mechanism for abstracting a space of resource identifiers such that the variable parts can be easily identified and described.


## Terms

- Expression: The text between '{' and '}', including the enclosing braces, as defined in Section 2.
- Expansion: The string result obtained from a template expression after processing it according to its expression type, list of variable names, and value modifiers.
- Template processor: A program or library that, given a URI Template and a set of variables with values, transforms the template string into a URI reference by parsing the template for expressions and substituting each one with its corresponding expansion.

# C# Cheat Sheet


## Characteristics

* Case sensitive
* Strongly typed
* Object oriented
* Everything is an object; no primitives
* No global variables or functions
* Uses namespaces (as opposed to packages like in Java)
* Supports imperative, declarative, functional, generic programming paradigms
* Garbage collected very similar to Java
  - CLR periodically checks memory heap
  - Looks for unreferenced objects


## Managed Code Environment

* C# code is compiled to bytecode
* Executed by Common Language Runtime (CLR)
  - A virtual machine


## The .NET Stack

|                          The .NET Stack                        |
| -------------------------------------------------------------- |
|        The specific languages such as C#, C++, VB, etc         |
| Common Language Specification (ASP.NET, WPF, WinForms, Others) |
|           Application Class Libraries and Services             |
|                      Base Class Library                        |
|                    Common Language Runtime                     |
|                       Operating System                         |


## History

### Versions

| Version | Year | Key Features                                                                      |
| ------- | ---- | --------------------------------------------------------------------------------- |
| 1.0     | 2002 | First version                                                                     |
| 2.0     | 2006 | Generics, anonymous methods, iterators, static classes, nullable types            |
| 3.0     | 2007 | Implicit typing, auto-implemented properties, anonymous types, lambda expressions |
| 4.0     | 2010 | Dynamic binding, named and optional args                                          |
| 5.0     | 2013 | Async and await, caller information                                               |


## Hello World Example

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloConsole {

  class Program {

    static void Main(string[] args) {
      Console.WriteLine("Hello, world!");
    }

  }

}
```


## Naming Conventions

Some naming rules are enforced by the compiler.  Some are unenforced guidelines suggested by Microsoft.

### Naming Rules Enforced by Compiler

* Identifier (classes, structures, fields, properties, variables, and methods) names can include alphanumeric characters and underscores.  They must begin with alpha or an underscore.

### Guidelines by Microsoft

* Use camel-case for variables, fields, and parameters
* Use pascal-case (aka upper camel-case) for class names, constants, methods, properties, and structures


## Built-in Data Types

Each and every data type is represented at a class or a structure.

### Classes vs. Structures

Structures are value types.

```csharp
int v1 = 5;
int v2 = v1;  // v2 is a copy of v1
```

Classes are reference types.

```csharp
object o1 = new Object();
Object o2 = o1;  // o2 references o1
```

### Logical Type (structure)

```csharp
bool Yes = true;
bool No = false;
```

| C# Type | .NET Type | Min    | Max    |
| ------- | --------- | ------ | ------ |
| bool    | Boolean   | false  | true   |

### Character Type (structure)

Use single quotes to declare a character literal.

```csharp
char c = 'a';
char u = '\u0278';
char[] charArray = { 'f', 'o', 'o' };
```

| C# Type | .NET Type | Min    | Max    |
| ------- | --------- | ------ | ------ |
| char    | Char      | U+0000 | U+ffff |

### Integer Types (structures)

```csharp
byte b = 255;
short s = -345;
int i = 1;
```

| C# Type | .NET Type | Min            | Max           |
| ------- | --------- | -------------- | ------------- |
| byte    | Byte      | 0              | 255           |
| sbyte   | SByte     | -128           | 127           |
| short   | Int16     | -32,768        | 32,767        |
| ushort  | UInt16    | 0              | 65,535        |
| int     | Int32     | -2,147,483,648 | 2,147,483,647 |
| uint    | UInt32    | 0              | 4,294,967,295 |
| long    | Long      | -9.22e18       | 9.22e18       |
| ulong   | ULong     | 0              | 1.84e19       |

### Floating-Point and Decimal Types (structures)

```charp
float f = 1.0f;
f = 2.1e4f;
double d = 1.23e23;
d = 3.14;
decimal dec = 7e28;
dec = new decimal(1234.56789);
```

| C# Type | .NET Type | Min       | Max      | Precision    |
| ------- | --------- | --------- | -------- | ------------ |
| float   | Single    | ±1.5e-45  | ±3.4e38  | 7 digits     |
| double  | Double    | ±5.0e-324 | ±1.7e308 | 15-16 digits |
| decimal | Decimal   | -7.9e28   | 7.9e28   | 28-29 digits |

### Strings (class but immutable)

Use double quotes to declare a string literal.

```csharp
string s = "Hello";
s += ", World!";
```

| C# Type | .NET Type | Max Length    |
| ------- | --------- | ------------- |
| string  | String    | 2,147,483,647 |

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

namespace HelloConsole
{
  class Program
  {
    static void Main(string[] args)
    {
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

| C# Type | .NET Type    | Min            | Max           |
| ------- | ------------ | -------------- | ------------- |
| byte    | Byte         | 0              | 255           |
| sbyte   | SByte        | -128           | 127           |
| short   | Int16        | -32,768        | 32,767        |
| ushort  | UInt16       | 0              | 65,535        |
| int     | Int32        | -2,147,483,648 | 2,147,483,647 |
| uint    | UInt32       | 0              | 4,294,967,295 |
| long    | Long/Int64   | -9.22e18       | 9.22e18       |
| ulong   | ULong/UInt64 | 0              | 1.84e19       |

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


## Operators

### Arithmetic Operators

| Oper | Function                | Example |
| ---- | ----------------------- | ------- |
| +    | Addition                | x + y   |
| -    | Subtraction             | x - y   |
| *    | Multiplication          | x * y   |
| /    | Division                | x / y   |
| %    | Modulus (aka remainder) | x % y   |

### Assignment Operators

| Oper | Function          | Example |
| ---- | ----------------- | ------- |
| =    | Assign            | x = 0   |
| +=   | Add, assign       | x += 1  |
| -=   | Subtract, assign  | x -= 1  |
| *=   | Multiply, assign  | x *= 2  |
| /=   | Divide, assign    | x /= 2  |
| %=   | Remainder, assign | x %= 1  |
| &=   | AND, assign       | x &= y  |
| \|=   | OR, assign       | x \|= y |
| ^=   | XOR, assign       | x ^= y  |

### Comparison Operators

| Oper | Function              | Example          |
| ---- | --------------------- | ---------------- |
| ==   | Equals                | x == y           |
| !=   | Not equals            | x != y           |
| >    | Greater than          | if (x > y)       |
| <    | Less than             | if (x < y)       |
| >=   | Greater than or equal | if (x >= y)      |
| <=   | Less than or equal    | if (x <= y)      |
| is   | Type compatible       | if (x is String) |

### Increment / Decrement Operators

| Oper | Function       | Example |
| ---- | -------------- | ------- |
| ++   | Pre-increment  | ++x     |
| ++   | Post-increment | x++     |
| --   | Pre-decrement  | --x     |
| --   | Post-decrement | x--     |

### Logical Operators

| Oper | Function        | Example                 |
| ---- | --------------- | ----------------------- |
| !    | Negation        | !x (x must be bool)     |
| &&   | AND             | if (x && y)             |
| \|\| | OR              | if (x \|\| y)           |

### Special Operators

| Oper | Function        | Example                 |
| ---- | --------------- | ----------------------- |
| ??   | Null-coalescing | int x = (y ?? default); |
| ?.   | Member access   | int? len = obj?.Length; |
| ?[   | Index access    | Person p = people?[0];  |


## Control Flow Statements

### Conditional Statements

**if Statement**

```csharp
if (condition)
{
    // code to be executed if condition is true;
}
```

**if...else Statement**

```csharp
if (condition)
{
    // code to be executed if condition is true;
}
else
{
    // code to be executed if condition is false;
}
```

**if...else if...else Statement**

```csharp
if (condition)
{
    // code to be executed if this condition is true;
}
else if (condition)
{
    // code to be executed if this condition is true;
}
// other else if clauses may be added here;
else
{
    // code to be executed if all conditions are false;
}
```

**switch Statement**

```csharp
switch (n)
{
    case value1:
        // code to be executed if n == value1;
        break;
    case value2:
        // code to be executed if n == value2;
        break;
    ...
    case valueN:
        // code to be executed if n == valueN;
        break;
    default:
        // code to be executed if n is different from all values;
        break;
}
```

### Loop Statements

**for Loop**

```csharp
for (int i = 0; i < len; i++)
{
    // code to be executed;
}
```

**while Loop**

```csharp
while (condition)
{
    // code to be executed while condition is true;
}
```

**do while Loop**

```csharp
do
{
    // code to be executed while condition is true;
} while (condition);
```


## Uncategorized (TODO: Categorize the Following Info)

### Comparing Strings

Strings can be compared with `==` or `Equals()`.

```csharp
// The following two statements are equivalent:
if (str1.Equals(str2)) {}
if (str1 == str2) {}

// For non-case-sensitive comparison:
if (str1.Equals(str2, StringComparison.OrdinalIgnoreCase)) {}
```

### StringBuilder

```csharp
using System.Text;

StringBuilder sb = new StringBuilder();
sb.Append("Hello");
sb.Append(", ");
sb.Append("World!");
String greeting = sb.ToString();
```

### Converting a String to a Number

```csharp
byte b = Byte.Parse("128");
bool parsed = Byte.TryParse("278", out b);

int i = Int32.Parse("255");
bool parsed = Int32.TryParse("", out i);

long l = Int64.Parse("123456789012345");
bool parsed = Int64.TryParse("", out l);

decimal d = Decimal.Parse("1.34e5");
bool parsed = Decimal.TryParse("", out d);

double d = Double.Parse("19.99");
bool parsed = Double.TryParse("", out d);

// Similar code for Int16, SByte, Single, UInt16, UInt32, and UInt64.
```

### Constants

Use the `const` keyword.  Convention uses pascal-case (aka upper camel-case) for constants.

```csharp
namespace Example
{
  public class MyClass
  {
    const int MeaningOfLife = 42;
    
    public MyClass()
    {
      Console.WriteLine("The meaning of life is " + MeaningOfLife);
    }
  }
}
```

### Enums

Use the `enum` keyword.  Convention uses pascal-case (aka upper camel-case) for both the enum identifier and its individual values.

```csharp
namespace Example
{
  public class MyClass
  {
    enum Flavors { Chocolate, Vanilla, Strawberry };
    
    public MyClass()
    {
      // Prints "My favorite flavor is Chocolate".
      Console.WriteLine("My favorite flavor is " + Flavors.Chocolate);
    }
  }
}
```

### Dates and Times

```csharp
DateTime now = DateTime.Now;

// Note: Month is 1-based unlike in JavaScript.
DateTime dt = new DateTime(2000, 1, 1, 0, 0, 0);
Console.WriteLine("Y2K: " + dt.ToString("M/d/yyyy"));
```

### Reading Console Input

```csharp
string input = Console.ReadLine();
```

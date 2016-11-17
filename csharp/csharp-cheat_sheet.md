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

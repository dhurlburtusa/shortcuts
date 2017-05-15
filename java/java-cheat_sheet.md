# Java Cheat Sheet


## New in Java 8

See http://www.oracle.com/technetwork/java/javase/8-whats-new-2157071.html and
https://leanpub.com/whatsnewinjava8/read for details.

### Summary

* Lambda expressions
* Method references
* Default Methods (Defender methods)
* Improved type inference
* ethod parameter reflection
* A new Stream API
* A new Date/Time API
* Concurrency improvements
* Nashorn, the new JavaScript engine
* Removal of the Permanent Generation

### Java Programming Language

**Lambda Expressions**

A lambda expression is like syntactic sugar for an anonymous class with one method whose type is inferred.

* Enable you to treat functionality as a method argument, or code as data.
* Let you express instances of single-method interfaces (referred to as functional interfaces) more compactly.

### Collections

Classes in the new `java.util.stream` package provide a Stream API to support functional-style operations on streams
of elements.  The Stream API is integrated into the Collections API, which enables bulk operations on collections,
such as sequential or parallel map-reduce transformations.

### Compact Profiles

Java 8 contains predefined subsets of the Java SE platform and enable applications that do not require the entire
Platform to be deployed and run on small devices.

### Security

WIP

### Scripting

The Rhino javascript engine has been replaced with the Nashorn Javascript Engine

This means that the next time you’re looking to integrate JS into your backend, instead of setting up a node.js
instance, you can simply use the JVM to execute the code.  The added bonus here is the ability to have seamless
interoperability between your Java and JavaScript code in-process, without having to use various IPC/RPC methods to
bridge the gap.

## Tools

* The jjs command is provided to invoke the Nashorn engine.

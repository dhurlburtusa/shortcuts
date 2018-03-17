# GraphQL Notes

GraphQL is a query language created by Facebook in 2012 for describing the
capabilities and requirements of data models for client‐server applications and
a server-side runtime for executing queries by using a type system you define
for your data.  GraphQL isn't tied to any specific database or storage engine
and is instead backed by your existing code and data.


## Type Syntax

**Enums**

```
enum <enumName> { <enum1>, <enum2>, ..., <enumN> }
```

**Interfaces**

```
interface <interfaceName> {
  <fieldName>: <dataType>
  ...
}
```

**Types**

```
type <typeName> {
  <fieldName>: <dataType>
  ...
}

type <typeName> implements <interfaceName> {
  <fieldName>: <dataType>
  ...
}

type Query {
  <operationName>(<parameters>): <returnDataType>
  ...
}
```


## Query Syntax

```
query <queryName> {
  <operationName>(<arguments>)
}
query <queryName> {
  <operationName>(<arguments>): {
    <fieldName>
  }
}
```

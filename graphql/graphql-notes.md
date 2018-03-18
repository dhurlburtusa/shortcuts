# GraphQL Notes

GraphQL is a query language created by Facebook in 2012 for describing the
capabilities and requirements of data models for client‐server applications and
a server-side runtime for executing queries by using a type system you define
for your data.  GraphQL isn't tied to any specific database or storage engine
and is instead backed by your existing code and data.

See http://graphql.org/ and http://facebook.github.io/graphql/ for more
information.


## History

* A query language created by Facebook in 2012.
* The development of this standard started in 2015.


## Design Principles

* **Client‐specified queries**: A GraphQL query returns exactly what a client asks
  for and no more.  These queries are specified at field‐level granularity.
* **Hierarchical**: The query is shaped just like the data it returns.
* **Introspective**: A GraphQL server's type system must be queryable by the
  GraphQL language itself.
* **Product‐centric**: GraphQL is driven by the requirements of views and the
  front‐end engineers that write them.
* **Strong‐typing**: The server can make certain guarantees about the shape and
  nature of the response.


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


## Misc (To Be Categoried/Organized)

**Types**

Map, List, Null, String, Boolean, Int, Float, Enum.

**Response**

GraphQL does not require a specific serialization format.  However, JSON is the
preferred serialization format.

A response to a GraphQL operation must be a map.

For a successful execution:

```json5
{
  data: Mixed, // Depends on query.
  extensions: { ... }, // Optional.
}
```

For an errant execution:

```json5
{
  errors: [
    {
      message: string,
      locations: [
        {
          line: number, // >= 1
          column: number, // >= 1
        },
        ...
      ]
    },
    ...
  ],
  extensions: { ... }, // Optional.
}
```

For a partially successful execution:

```json5
{
  data: Mixed, // Depends on query.
  errors: [
    {
      message: string,
      locations: [
        {
          line: number, // >= 1
          column: number, // >= 1
        },
        ...
      ]
    },
    ...
  ],
  extensions: { ... }, // Optional.
}
```

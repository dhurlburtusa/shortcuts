# SPARQL Notes

SPARQL, a recursive acronym for SPARQL Protocol and RDF Query Language, is an RDF query language. SPARQL 1.1 is a set of specifications that provide languages and protocols to query and manipulate RDF graph content on the Web or in an RDF store.

Supports:

- querying required and optional graph patterns
- aggregation
- subqueries
- negation
- creating values by expressions
- extensible value testing
- constraining queries by source RDF graph


## Query

### Query Forms

- SELECT
- CONSTRUCT
- ASK
- DESCRIBE

### RDF Term Constraints

SPARQL FILTERs restrict solutions to those for which the filter expression evaluates to TRUE.

**Examples**

- `FILTER regex(?title, "^SPARQL")`
- `FILTER regex(?title, "web", "i")`
- `FILTER (?price < 30.5)`

### Graph Patterns

SPARQL is based around graph pattern matching. More complex graph patterns can be formed by combining smaller patterns in various ways:

- Basic Graph Patterns, where a set of triple patterns must match
- Group Graph Pattern, where a set of graph patterns must all match
- Optional Graph patterns, where additional patterns may extend the solution
- Alternative Graph Pattern, where two or more possible patterns are tried
- Patterns on Named Graphs, where patterns are matched against named graphs

SPARQL graph pattern matching is defined in terms of combining the results from matching basic graph patterns.

### Basic Graph Patterns

A sequence of triple patterns, with optional filters, comprises a single basic graph pattern. Any other graph pattern terminates a basic graph pattern.

Note: When using blank nodes of the form `\_:abc`,  labels for blank nodes are scoped to the basic graph pattern. A label can be used in only a single basic graph pattern in any query.

```sparql
?x foaf:name ?name .
?x foaf:mbox ?mbox .
```

### Group Graph Patterns

In a SPARQL query string, a group graph pattern is delimited with braces: `{` and `}`.

```sparql
# A group graph pattern with one basic graph pattern consisting of two triple patterns:
{
  ?x foaf:name ?name .
  ?x foaf:mbox ?mbox .
}
```

```sparql
# A group graph pattern with one basic graph pattern and a filter, and that BGP consists of two triple patterns; the filter does not break the basic graph pattern into two basic graph patterns:
{
  ?x foaf:name ?name .
  FILTER regex(?name, "Smith")
  ?x foaf:mbox ?mbox .
}
```

```sparql
# n empty group graph pattern:
{}
```

#### Scope of Filters

A constraint, expressed by the keyword FILTER, is a restriction on solutions over the whole group in which the filter appears. The following patterns all have the same solutions:

```sparql
{
  ?x foaf:name ?name .
  ?x foaf:mbox ?mbox .
  FILTER regex(?name, "Smith")
}
```
  
```sparql
{
  FILTER regex(?name, "Smith")
  ?x foaf:name ?name .
  ?x foaf:mbox ?mbox .
}
```

```sparql
{
  ?x foaf:name ?name .
  FILTER regex(?name, "Smith")
  ?x foaf:mbox ?mbox .
}
```


## Terminology

**Triple pattern**: are like RDF triples except that each of the subject, predicate and object may be a variable.

**Basic graph pattern**: a set of triple patterns.

**Solution sequence**: The result of a query.

**Predicate-object lists**: A semi-colon separated list of predicate/object pairs. Used when triple patterns share the subject.

```sparql
?x
  foaf:name ?name ;
  foaf:mbox  ?mbox ;
.
```

**Object lists**: A comma separated list of objects. Used when triple patterns share both subject and predicate.

```sparql
?x foaf:nick  "Alice" , "Alice in Wonderland" .
```


## Misc

- Variables are not required to be bound in a solution.
- All the variables used in a query pattern must be bound in every solution.
- Graph pattern matching produces a solution sequence, where each solution has a set of bindings of variables to RDF terms.
- The outer-most graph pattern in a query is called the query pattern. It is grammatically identified by `GroupGraphPattern` in

  ```
  WhereClause ::= 'WHERE'? GroupGraphPattern
  ```

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

FILTER regex(?title, "^SPARQL")
FILTER regex(?title, "web", "i")
FILTER (?price < 30.5)


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

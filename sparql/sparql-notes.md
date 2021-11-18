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

Note: When using blank nodes of the form `_:abc`,  labels for blank nodes are scoped to the basic graph pattern. A label can be used in only a single basic graph pattern in any query.

```sparql
?x foaf:name ?name .
?x foaf:mbox ?mbox .
```

```sparql
# Still considered a single basic graph pattern with interleaved filter:
?x foaf:name ?name .
FILTER regex(?name, "Smith")
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

### Optional Graph Patterns

Optional parts of the graph pattern may be specified syntactically with the `OPTIONAL` keyword applied to a graph pattern.

```
# Syntax:
pattern OPTIONAL { pattern }
```

In an optional match, either the optional graph pattern matches a graph, thereby defining and adding bindings to one or more solutions, or it leaves a solution unchanged without adding any additional bindings.

```sparql
{
  ?x foaf:name ?name .
  OPTIONAL {
    ?x foaf:mbox ?mbox .
  }
}
```

Graph patterns are defined recursively. A graph pattern may have zero or more optional graph patterns, and any part of a query pattern may have an optional part.

### Alternative Graph Pattern

SPARQL provides a means of combining graph patterns so that one of several alternative graph patterns may match. If more than one of the alternatives matches, all the possible pattern solutions are found.

Pattern alternatives are syntactically specified with the `UNION` keyword.

```sparql
{
  {
    ?book dc10:title ?title .
    # ...
  }
  UNION
  {
    ?book dc11:title ?title .
    # ...
  }
}
```

### Negation

The SPARQL query language incorporates two styles of negation, one based on filtering results depending on whether a graph pattern does or does not match in the context of the query solution being filtered, and one based on removing solutions related to another pattern.

#### Filtering Using Graph Patterns

Filtering of query solutions is done within a `FILTER` expression using `NOT EXISTS` and `EXISTS`. Note that the filter scope rules apply to the whole group in which the filter appears.

The `NOT EXISTS` filter expression tests whether a graph pattern does not match the dataset, given the values of variables in the group graph pattern in which the filter occurs. It does not generate any additional bindings.

```sparql
# Persons without a name declared:
{
  ?person rdf:type foaf:Person .
  FILTER NOT EXISTS {
    ?person foaf:name ?name .
  }
}
```

The filter expression `EXISTS` is also provided. It tests whether the pattern can be found in the data; it does not generate any additional bindings.

```sparql
# Persons with a name declared:
{
  ?person rdf:type foaf:Person .
  FILTER EXISTS {
    ?person foaf:name ?name .
  }
}
```

#### Removing Possible Solutions

The other style of negation provided in SPARQL is `MINUS` which evaluates both its arguments, then calculates solutions in the left-hand side that are not compatible with the solutions on the right-hand side.

```sparql
{
  ?s ?p ?o .
  MINUS {
    ?s foaf:givenName "Bob" .
  }
}
```

#### Relationship and differences between `NOT EXISTS` and `MINUS`

`NOT EXISTS` and `MINUS` represent two ways of thinking about negation, one based on testing whether a pattern exists in the data, given the bindings already determined by the query pattern, and one based on removing matches based on the evaluation of two patterns. In some cases they can produce different answers.

See https://www.w3.org/TR/sparql11-query/#neg-notexists-minus for details.

### Property Paths

A property path is a possible route through a graph between two graph nodes. A trivial case is a property path of length exactly 1, which is a triple pattern. The ends of the path may be RDF terms or variables. Variables cannot be used as part of the path itself, only the ends.

Property paths allow for more concise expressions for some SPARQL basic graph patterns and they also add the ability to match connectivity of two resources by an arbitrary length path.

See https://www.w3.org/TR/sparql11-query/#pp-language for details.

**Predicate Path Example**

```sparql
:book1 dc:title ?title .
```

**Alternative Path Example**

```sparql
:book1 dc:title|rdfs:label ?displayString
```

**Inverse Path Examples**

```sparql
?x foaf:mbox <mailto:alice@example> .
# is equivalent to:
<mailto:alice@example> ^foaf:mbox ?x .
```

```sparql
# all the people who know someone ?x knows
?x foaf:knows/^foaf:knows ?y .
```

**Sequence Path Examples**

```sparql
?x foaf:knows/foaf:name ?name .
```

```sparql
?x foaf:knows/foaf:knows/foaf:name ?name .
```

**One or More Path Example**

```sparql
?x foaf:knows+/foaf:name ?name .
```

**Zero or More Path Example**

```sparql
:list rdf:rest*/rdf:first ?element .
```



## Terminology

**Triple pattern**: are like RDF triples except that each of the subject, predicate and object may be a variable.

**Basic graph pattern**: a set of triple patterns.

**Solution sequence**: The result of a query.

**Predicate-object lists**: A semi-colon separated list of predicate/object pairs. Used when triple patterns share the subject.

```sparql
?x
  foaf:name ?name ;
  foaf:mbox ?mbox ;
.
```

**Object lists**: A comma separated list of objects. Used when triple patterns share both subject and predicate.

```sparql
?x foaf:nick "Alice", "Alice in Wonderland" .
```


## Misc

- Variables are not required to be bound in a solution.
- All the variables used in a query pattern must be bound in every solution.
- Graph pattern matching produces a solution sequence, where each solution has a set of bindings of variables to RDF terms.
- The outer-most graph pattern in a query is called the query pattern. It is grammatically identified by `GroupGraphPattern` in

  ```
  WhereClause ::= 'WHERE'? GroupGraphPattern
  ```

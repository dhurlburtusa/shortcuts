# SPARQL Query Language Notes

SPARQL can be used to express queries across diverse data sources, whether the data is stored natively as RDF or viewed as RDF via middleware. SPARQL contains capabilities for querying required and optional graph patterns along with their conjunctions and disjunctions. SPARQL also supports aggregation, subqueries, negation, creating values by expressions, extensible value testing, and constraining queries by source RDF graph. The results of SPARQL queries can be result sets or RDF graphs.


## Queries

Most forms of SPARQL query contain a set of triple patterns called a **basic graph pattern**. **Triple patterns** are like RDF triples except that each of the subject, predicate, and object may be a variable. A basic graph pattern matches a subgraph of the RDF data when RDF terms from that subgraph may be substituted for the variables and the result is RDF graph equivalent to the subgraph.

The result of a query is a **solution sequence**, corresponding to the ways in which the query's graph pattern matches the data. There may be zero, one or multiple solutions to a query.

In a **basic graph pattern match**, all the variables used in the query pattern must be bound in every solution.


## Filters

Graph pattern matching produces a solution sequence, where each solution has a set of bindings of variables to RDF terms. SPARQL `FILTER`s restrict solutions to those for which the filter expression evaluates to `TRUE`.

**Restricting Value of Strings Example**

```sparql
PREFIX dc: <http://purl.org/dc/elements/1.1/>
SELECT ?title
WHERE {
  ?x dc:title ?title
  FILTER regex(?title, "^SPARQL") 
}
```

**Restricting Numeric Values Example**

```sparql
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX ns: <http://example.org/ns#>
SELECT ?title ?price
WHERE {
  ?x ns:price ?price .
  FILTER (?price < 30.5)
  ?x dc:title ?title .
}
```


## SPARQL Syntax

### RDF Term Syntax

#### Syntax for Blank Nodes

Blank nodes in graph patterns act as variables, not as references to specific blank nodes in the data being queried.

Blank nodes are indicated by either the label form, such as "\_:abc", or the abbreviated form "[]". A blank node that is used in only one place in the query syntax can be indicated with []. A unique blank node will be used to form the triple pattern.

### Syntax for Triple Patterns

Triple Patterns are written as subject, predicate, and object; there are abbreviated ways of writing some common triple pattern constructs.

The following examples express the same query:

```sparql
PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT ?title
WHERE { <http://example.org/book/book1> dc:title ?title }  
```

```sparql
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX : <http://example.org/book/>

SELECT $title
WHERE { :book1 dc:title $title }
```

```sparql
BASE <http://example.org/book/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT $title
WHERE { <book1> dc:title ?title }
```

#### Predicate-Object Lists

```sparql
?x foaf:name ?name ;
  foaf:mbox ?mbox .
```

#### Object Lists

```sparql
?x foaf:nick  "Alice" , "Alice_" .
```

#### RDF Collections

RDF collections can be written in triple patterns using the syntax "(element1 element2 ...)". The form "()" is an alternative for the IRI http://www.w3.org/1999/02/22-rdf-syntax-ns#nil. When used with collection elements, such as `(1 ?x 3 4)`, triple patterns with blank nodes are allocated for the collection. The blank node at the head of the collection can be used as a subject or object in other triple patterns. The blank nodes allocated by the collection syntax do not occur elsewhere in the query.

```sparql
(1 ?x 3 4) :p "w" .
```

is syntactic sugar for (noting that b0, b1, b2 and b3 do not occur anywhere else in the query):

```sparql
  _:b0  rdf:first  1 ;
          rdf:rest   _:b1 .
  _:b1  rdf:first  ?x ;
        rdf:rest   _:b2 .
  _:b2  rdf:first  3 ;
        rdf:rest   _:b3 .
  _:b3  rdf:first  4 ;
        rdf:rest   rdf:nil .
  _:b0  :p         "w" .
```

RDF collections can be nested and can involve other syntactic forms:

```sparql
(1 [:p :q] ( 2 ) ) .
```

is syntactic sugar for:

```
  _:b0  rdf:first  1 ;
        rdf:rest   _:b1 .
  _:b1  rdf:first  _:b2 .
  _:b2  :p         :q .
  _:b1  rdf:rest   _:b3 .
  _:b3  rdf:first  _:b4 .
  _:b4  rdf:first  2 ;
        rdf:rest   rdf:nil .
  _:b3  rdf:rest   rdf:nil .
```


## Graph Patterns

SPARQL is based around graph pattern matching. More complex graph patterns can be formed by combining smaller patterns in various ways:

* Basic Graph Patterns, where a set of triple patterns must match.
* Group Graph Pattern, where a set of graph patterns must all match.
* Optional Graph patterns, where additional patterns may extend the solution.
* Alternative Graph Pattern, where two or more possible patterns are tried.
* Patterns on Named Graphs, where patterns are matched against named graphs.

The first two forms, basic graph patterns and group graph patterns, combine patterns by conjunction.

The outer-most graph pattern in a query is called the query pattern. It is grammatically identified by `GroupGraphPattern` in

```bnf
[17]  	WhereClause	  ::=  	'WHERE'? GroupGraphPattern
```

### Basic Graph Patterns

Basic graph patterns are sets of triple patterns. SPARQL graph pattern matching is defined in terms of combining the results from matching basic graph patterns.

A sequence of triple patterns, with optional filters, comprises a single basic graph pattern. Any other graph pattern terminates a basic graph pattern.

Basic graph patterns allow applications to make queries where the entire query pattern must match for there to be a solution.

**Blank Node Labels**

When using blank nodes of the form \_:abc,  labels for blank nodes are scoped to the basic graph pattern.  A label can be used in only a single basic graph pattern in any query.

### Group Graph Patterns

In a SPARQL query string, a group graph pattern is delimited with braces: {}. For example, this query's query pattern is a group graph pattern of one basic graph pattern.

```
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name ?mbox
WHERE {
  ?x foaf:name ?name .
  ?x foaf:mbox ?mbox .
}
```

**Scope of Filters**

A constraint, expressed by the keyword `FILTER`, is a restriction on solutions over the whole group in which the filter appears.


## Including Optional Values

### Optional Pattern Matching

Optional parts of the graph pattern may be specified syntactically with the OPTIONAL keyword applied to a graph pattern:

```sparql
pattern OPTIONAL { pattern }
```

In an optional match, either the optional graph pattern matches a graph, thereby defining and adding bindings to one or more solutions, or it leaves a solution unchanged without adding any additional bindings.

### Constraints in Optional Pattern Matching

Constraints can be given in an optional graph pattern.

```sparql
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX ns: <http://example.org/ns#>
SELECT ?title ?price
WHERE {
  ?x dc:title ?title .
  OPTIONAL {
    ?x ns:price ?price .
    FILTER (?price < 30)
  }
}
```

### Multiple Optional Graph Patterns

Graph patterns are defined recursively. A graph pattern may have zero or more optional graph patterns, and any part of a query pattern may have an optional part.

```sparql
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name ?mbox ?hpage
WHERE {
  ?x foaf:name ?name .
  OPTIONAL { ?x foaf:mbox ?mbox } .
  OPTIONAL { ?x foaf:homepage ?hpage }
}
```


## Matching Alternatives

SPARQL provides a means of combining graph patterns so that one of several alternative graph patterns may match. If more than one of the alternatives matches, all the possible pattern solutions are found.

Pattern alternatives are syntactically specified with the `UNION` keyword.

```sparql
PREFIX dc10:  <http://purl.org/dc/elements/1.0/>
PREFIX dc11:  <http://purl.org/dc/elements/1.1/>

SELECT ?title
WHERE { { ?book dc10:title ?title } UNION { ?book dc11:title ?title } }
```


## Negation

The SPARQL query language incorporates two styles of negation, one based on filtering results depending on whether a graph pattern does or does not match in the context of the query solution being filtered, and one based on removing solutions related to another pattern.

### Filtering Using Graph Patterns

Filtering of query solutions is done within a `FILTER` expression using `NOT EXISTS` and `EXISTS`. Note that the filter scope rules apply to the whole group in which the filter appears.

**Testing For the Absence of a Pattern**

```sparql
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
PREFIX foaf: <http://xmlns.com/foaf/0.1/> 

SELECT ?person
WHERE {
  ?person rdf:type foaf:Person .
  FILTER NOT EXISTS { ?person foaf:name ?name }
}
```

**Testing For the Presence of a Pattern**

```sparql
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
PREFIX foaf: <http://xmlns.com/foaf/0.1/> 

SELECT ?person
WHERE {
  ?person rdf:type foaf:Person .
  FILTER EXISTS { ?person foaf:name ?name }
}
```

### Removing Possible Solutions

The other style of negation provided in SPARQL is `MINUS` which evaluates both its arguments, then calculates solutions in the left-hand side that are not compatible with the solutions on the right-hand side.

```sparql
PREFIX : <http://example/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT DISTINCT ?s
WHERE {
  ?s ?p ?o .
  MINUS {
    ?s foaf:givenName "Bob" .
  }
}
```

### Relationship and differences between NOT EXISTS and MINUS

See https://www.w3.org/TR/sparql11-query/#neg-notexists-minus for details.


## Property Paths

A property path is a possible route through a graph between two graph nodes. A trivial case is a property path of length exactly 1, which is a triple pattern. The ends of the path may be RDF terms or variables. Variables cannot be used as part of the path itself, only the ends.

Property paths allow for more concise expressions for some SPARQL basic graph patterns and they also add the ability to match connectivity of two resources by an arbitrary length path.

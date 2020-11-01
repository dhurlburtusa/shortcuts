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

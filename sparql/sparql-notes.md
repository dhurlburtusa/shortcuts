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

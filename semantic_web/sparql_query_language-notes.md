# SPARQL Query Language Notes

SPARQL can be used to express queries across diverse data sources, whether the data is stored natively as RDF or viewed as RDF via middleware. SPARQL contains capabilities for querying required and optional graph patterns along with their conjunctions and disjunctions. SPARQL also supports aggregation, subqueries, negation, creating values by expressions, extensible value testing, and constraining queries by source RDF graph. The results of SPARQL queries can be result sets or RDF graphs.


## Queries

Most forms of SPARQL query contain a set of triple patterns called a **basic graph pattern**. **Triple patterns** are like RDF triples except that each of the subject, predicate, and object may be a variable. A basic graph pattern matches a subgraph of the RDF data when RDF terms from that subgraph may be substituted for the variables and the result is RDF graph equivalent to the subgraph.

The result of a query is a **solution sequence**, corresponding to the ways in which the query's graph pattern matches the data. There may be zero, one or multiple solutions to a query.

In a **basic graph pattern match**, all the variables used in the query pattern must be bound in every solution.

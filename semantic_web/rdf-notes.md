# RDF Notes

RDF is a standard model for data interchange on the Web. RDF has features that facilitate data merging even if the underlying schemas differ, and it specifically supports the evolution of schemas over time without requiring all the data consumers to be changed.

The Resource Description Framework (RDF) is a family of World Wide Web Consortium (W3C) specifications originally designed as a metadata data model. It has come to be used as a general method for conceptual description or modeling of information that is implemented in web resources, using a variety of syntax notations and data serialization formats.

RDF extends the linking structure of the Web to use URIs to name the relationship between things as well as the two ends of the link (this is usually referred to as a “triple”). Using this simple model, it allows structured and semi-structured data to be mixed, exposed, and shared across different applications.

This linking structure forms a directed, labeled graph, where the edges represent the named link between two resources, represented by the graph nodes. This graph view is the easiest possible mental model for RDF and is often used in easy-to-understand visual explanations.

The Resource Description Framework (RDF) is a framework for representing information in the Web. This document defines an abstract syntax (a data model) which serves to link all RDF-based languages and specifications. The abstract syntax has two key data structures: RDF graphs are sets of subject-predicate-object triples, where the elements may be IRIs, blank nodes, or datatyped literals. They are used to express descriptions of resources. RDF datasets are used to organize collections of RDF graphs, and comprise a default graph and zero or more named graphs. RDF 1.1 Concepts and Abstract Syntax also introduces key concepts and terminology, and discusses datatyping and the handling of fragment identifiers in IRIs within RDF graphs.

This document defines an abstract syntax (a data model) which serves to link all RDF-based languages and specifications, including:

- the formal model-theoretic semantics for RDF [RDF11-MT];
- serialization syntaxes for storing and exchanging RDF such as Turtle [TURTLE] and JSON-LD [JSON-LD];
- the SPARQL Query Language [SPARQL11-OVERVIEW];
- the RDF Schema vocabulary [RDF11-SCHEMA].

## Changes

- A new concept in RDF 1.1 is the notion of an RDF dataset to represent multiple graphs.

## Graph-based Data Model

The core structure of the abstract syntax is a set of triples, each consisting of a subject, a predicate and an object. A set of such triples is called an RDF graph.

There can be three kinds of nodes in an RDF graph: IRIs, literals, and blank nodes.

IRIs in the RDF abstract syntax must be absolute, and may contain a fragment identifier.

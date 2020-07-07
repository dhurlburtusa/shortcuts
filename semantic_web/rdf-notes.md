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


## Resources and Statements

Any IRI or literal denotes something in the world (the "universe of discourse"). These things are called resources.

The resource denoted by an IRI is called its referent, and the resource denoted by a literal is called its literal value. Literals have datatypes that define the range of possible values, such as strings, numbers, and dates. Special kind of literals, language-tagged strings, denote plain-text strings in a natural language.

Asserting an RDF triple says that some relationship, indicated by the predicate, holds between the resources denoted by the subject and object. This statement corresponding to an RDF triple is known as an RDF statement. The predicate itself is an IRI and denotes a property, that is, a resource that can be thought of as a binary relation.

Unlike IRIs and literals, blank nodes do not identify specific resources. Statements involving blank nodes say that something with the given relationships exists, without explicitly naming it.


## The Referent of an IRI

The resource denoted by an IRI is also called its **referent**. For some IRIs with particular meanings, such as those identifying XSD datatypes, the referent is fixed by this specification. For all other IRIs, what exactly is denoted by any given IRI is not defined by this specification. Other specifications may fix IRI referents, or apply other constraints on what may be the referent of any IRI.

Guidelines for determining the referent of an IRI are provided in other documents.

A very brief, informal, and partial account follows:

- By design, IRIs have global scope.
- By social convention, the IRI owner gets to say what the intended (or usual) referent of an IRI is. Applications and users need not abide by this intended denotation, but there may be a loss of interoperability with other applications and users if they do not do so.
- The IRI owner can establish the intended referent by means of a specification or other document that explains what is denoted.
- A good way of communicating the intended referent is to set up the IRI so that it dereferences to such a document.
- Such a document can, in fact, be an RDF document that describes the denoted resource by means of RDF statements.

Perhaps the most important characteristic of IRIs in web architecture is that they can be dereferenced, and hence serve as starting points for interactions with a remote server.

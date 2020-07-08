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


## Links

- https://www.w3.org/TR/rdf11-concepts/
- https://www.w3.org/TR/rdf11-primer/
- https://www.w3.org/TR/rdf11-mt/


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


## RDF Vocabularies and Namespace IRIs

An RDF vocabulary is a collection of IRIs intended for use in RDF graphs.

The IRIs in an RDF vocabulary often begin with a common substring known as a namespace IRI. Some namespace IRIs are associated by convention with a short name known as a namespace prefix. In some serialization formats it is common to abbreviate IRIs that start with namespace IRIs by using a namespace prefix in order to assist readability. Note however that these abbreviations are not valid IRIs, and must not be used in contexts where IRIs are expected.

The term “namespace” on its own does not have a well-defined meaning in the context of RDF, but is sometimes informally used to mean “namespace IRI” or “RDF vocabulary”.


## RDF and Change over Time

The RDF data model is atemporal: RDF graphs are static snapshots of information.

However, RDF graphs can express information about events and about temporal aspects of other entities, given appropriate vocabulary terms.

Since RDF graphs are defined as mathematical sets, adding or removing triples from an RDF graph yields a different RDF graph.

We informally use the term RDF source to refer to a persistent yet mutable source or container of RDF graphs. An RDF source is a resource that may be said to have a state that can change over time. A snapshot of the state can be expressed as an RDF graph. For example, any web document that has an RDF-bearing representation may be considered an RDF source. Like all resources, RDF sources may be named with IRIs and therefore described in other RDF graphs.

Intuitively speaking, changes in the universe of discourse can be reflected in the following ways:

- An IRI, once minted, should never change its intended referent.
- Literals, by design, are constants and never change their value.
- A relationship that holds between two resources at one time may not hold at another time.
- RDF sources may change their state over time. That is, they may provide different RDF graphs at different times.
- Some RDF sources may, however, be immutable snapshots of another RDF source, archiving its state at some point in time.


## Working with Multiple RDF Graphs

As RDF graphs are sets of triples, they can be combined easily, supporting the use of data from multiple sources. Nevertheless, it is sometimes desirable to work with multiple RDF graphs while keeping their contents separate. RDF datasets support this requirement.

An RDF dataset is a collection of RDF graphs. All but one of these graphs have an associated IRI or blank node. They are called named graphs, and the IRI or blank node is called the graph name. The remaining graph does not have an associated IRI, and is called the default graph of the RDF dataset.

There are many possible uses for RDF datasets. One such use is to hold snapshots of multiple RDF sources.


## Equivalence, Entailment, and Inconsistency

An RDF triple encodes a statement—a simple logical expression, or claim about the world. An RDF graph is the conjunction (logical AND) of its triples. The precise details of this meaning of RDF triples and graphs are the subject of the RDF Semantics specification, which yields the following relationships between RDF graphs:

- **Entailment**
  An RDF graph A entails another RDF graph B if every possible arrangement of the world that makes A true also makes B true. When A entails B, if the truth of A is presumed or demonstrated then the truth of B is established.
- **Equivalence**
  Two RDF graphs A and B are equivalent if they make the same claim about the world. A is equivalent to B if and only if A entails B and B entails A.
- **Inconsistency**
  An RDF graph is inconsistent if it contains an internal contradiction. There is no possible arrangement of the world that would make the expression true.
  
An entailment regime is a specification that defines precise conditions that make these relationships hold. RDF itself recognizes only some basic cases of entailment, equivalence, and inconsistency. Other specifications, such as RDF Schema and OWL 2, add more powerful entailment regimes, as do some domain-specific vocabularies.


## Serialization Formats

- Turtle and TriG.
- JSON-LD (JSON based)
- RDFa (for HTML embedding)
- N-Triples and N-Quads (line-based exchange formats)
- RDF/XML (the original 2004 syntax, updated for RDF 1.1)

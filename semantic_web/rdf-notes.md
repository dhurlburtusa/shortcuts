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


## RDF Documents and Syntaxes

An RDF document is a document that encodes an RDF graph or RDF dataset in a concrete RDF syntax, such as Turtle, RDFa, JSON-LD, or TriG. RDF documents enable the exchange of RDF graphs and RDF datasets between systems.

A concrete RDF syntax may offer many different ways to encode the same RDF graph or RDF dataset


## Serialization Formats

- Turtle and TriG.
- JSON-LD (JSON based)
- RDFa (for HTML embedding)
- N-Triples and N-Quads (line-based exchange formats)
- RDF/XML (the original 2004 syntax, updated for RDF 1.1)


## RDF Graphs

An RDF graph is a set of RDF triples.

IRIs, literals, and blank nodes are collectively known as RDF terms.

### Triples

An RDF triple consists of three components:

- the subject, which is an IRI or a blank node
- the predicate, which is an IRI
- the object, which is an IRI, a literal or a blank node

An RDF triple is conventionally written in the order subject, predicate, object.

The set of nodes of an RDF graph is the set of subjects and objects of triples in the graph. It is possible for a predicate IRI to also occur as a node in the same graph.

### IRIs

An IRI (Internationalized Resource Identifier) within an RDF graph is a Unicode string that conforms to the syntax defined in RFC 3987.

IRIs in the RDF abstract syntax must be absolute, and may contain a fragment identifier.

IRI equality: Two IRIs are equal if and only if they are equivalent under Simple String Comparison according to section 5.1 of RFC 3987. Further normalization must not be performed when comparing IRIs for equality.

IRI normalization: Interoperability problems can be avoided by minting only IRIs that are normalized according to Section 5 of RFC 3987.

- Uppercase characters in scheme names and domain names.
- Percent-encoding of characters where it is not required by IRI syntax.
- Explicitly stated HTTP default port (http://example.com:80/); http://example.com/ is preferable.
- Completely empty path in HTTP IRIs (http://example.com); http://example.com/ is preferable.
- “/./” or “/../” in the path component of an IRI.
- Lowercase hexadecimal letters within percent-encoding triplets (“%3F” is preferable over “%3f”).
- Punycode-encoding of Internationalized Domain Names in IRIs.
- IRIs that are not in Unicode Normalization Form C.


### Literals

Literals are used for values such as strings, numbers, and dates.

A literal in an RDF graph consists of two or three elements:

- a lexical form, being a Unicode string, which should be in Normal Form C,
- a datatype IRI, being an IRI identifying a datatype that determines how the lexical form maps to a literal value, and
- if and only if the datatype IRI is http://www.w3.org/1999/02/22-rdf-syntax-ns#langString, a non-empty language tag as defined by BCP 47.

A literal is a language-tagged string if the third element is present. Lexical representations of language tags may be converted to lower case. The value space of language tags is always in lower case.

The literal value associated with a literal is:

- If the literal is a language-tagged string, then the literal value is a pair consisting of its lexical form and its language tag, in that order.
- If the literal's datatype IRI is in the set of recognized datatype IRIs, let d be the referent of the datatype IRI.
  + If the literal's lexical form is in the lexical space of d, then the literal value is the result of applying the lexical-to-value mapping of d to the lexical form.
  + Otherwise, the literal is ill-typed and no literal value can be associated with the literal. Such a case produces a semantic inconsistency but is not syntactically ill-formed. Implementations must accept ill-typed literals and produce RDF graphs from them. Implementations may produce warnings when encountering ill-typed literals.
- If the literal's datatype IRI is not in the set of recognized datatype IRIs, then the literal value is not defined by this specification.

### Blank Nodes

### Replacing Blank Nodes with IRIs

Blank nodes are disjoint from IRIs and literals. Otherwise, the set of possible blank nodes is arbitrary. RDF makes no reference to any internal structure of blank nodes.

Blank node identifiers are local identifiers that are used in some concrete RDF syntaxes or RDF store implementations. They are always locally scoped to the file or RDF store, and are not persistent or portable identifiers for blank nodes. Blank node identifiers are not part of the RDF abstract syntax, but are entirely dependent on the concrete syntax or implementation.

In situations where stronger identification is needed, systems may systematically replace some or all of the blank nodes in an RDF graph with IRIs. Systems wishing to do this should mint a new, globally unique IRI (a Skolem IRI) for each blank node so replaced.


## RDF Datasets

An RDF dataset is a collection of RDF graphs, and comprises:

- Exactly one default graph, being an RDF graph. The default graph does not have a name and may be empty.
- Zero or more named graphs. Each named graph is a pair consisting of an IRI or a blank node (the graph name), and an RDF graph. Graph names are unique within an RDF dataset.

Blank nodes can be shared between graphs in an RDF dataset.

SPARQL 1.1 also defines the concept of an RDF Dataset. The definition of an RDF Dataset in SPARQL 1.1 and this specification differ slightly in that this specification allows RDF Graphs to be identified using either an IRI or a blank node. SPARQL 1.1 Query Language only allows RDF Graphs to be identified using an IRI.


## Datatypes

Datatypes are used with RDF literals to represent values such as strings, numbers and dates. RDF re-uses many of the XML Schema built-in datatypes, and defines two additional non-normative datatypes, rdf:HTML and rdf:XMLLiteral.

A datatype is denoted by one or more IRIs.


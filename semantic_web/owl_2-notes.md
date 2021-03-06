# OWL 2 Notes

OWL 2 is designed to facilitate ontology development and sharing via the Web, with the ultimate goal of making Web content more accessible to machines.

The W3C OWL 2 Web Ontology Language (OWL) is a Semantic Web language designed to represent rich and complex knowledge about things, groups of things, and relations between things. OWL is a computational logic-based language such that knowledge expressed in OWL can be reasoned with by computer programs either to verify the consistency of that knowledge or to make implicit knowledge explicit. OWL documents, known as ontologies, can be published in the World Wide Web and may refer to or be referred from other OWL ontologies. OWL is part of the W3C's Semantic Web technology stack, which includes RDF and SPARQL.


## Documentation

See https://www.w3.org/TR/owl-overview/#Documentation_Roadmap for guidance on OWL 2 documentation.

The following is a list of less technical OWL documentation and serve well as introductory material.

- https://www.w3.org/TR/owl-overview/
- https://www.w3.org/TR/owl-primer/
- https://www.w3.org/TR/owl-new-features/
- https://www.w3.org/TR/owl-quick-reference/

The following is a list of the specification documents.

- https://www.w3.org/TR/owl-syntax/
- https://www.w3.org/TR/owl-mapping-to-rdf/
- https://www.w3.org/TR/owl-direct-semantics/
- https://www.w3.org/TR/owl-rdf-based-semantics/
- https://www.w3.org/TR/owl-conformance/
- https://www.w3.org/TR/owl-profiles/
- https://www.w3.org/TR/owl-xml-serialization/
- https://www.w3.org/TR/owl2-manchester-syntax/
- https://www.w3.org/TR/owl2-dr-linear/


## Ontologies

OWL 2 is a language for expressing ontologies. An ontology is a set of precise descriptive statements about some part of the world (usually referred to as the domain of interest or the subject matter of the ontology). Precise descriptions satisfy several purposes: most notably, they prevent misunderstandings in human communication and they ensure that software behaves in a uniform, predictable way and works well with other software.

OWL 2 is not a programming language.

OWL 2 is not a schema language for syntax conformance.

OWL 2 is not a database framework.

OWL 2 is a knowledge representation language, designed to formulate, exchange, and reason with knowledge about a domain of interest.

Some fundamental notions should first be explained to understand how knowledge is represented in OWL 2. These basic notions are:

- Axioms: The basic statements that an OWL ontology expresses.
- Entities: Elements used to refer to real-world objects.
- Expressions: Combinations of entities to form complex descriptions from basic ones.

In OWL 2, we denote objects as individuals, categories as classes, and relations as properties. Properties in OWL 2 are further subdivided. Object properties relate objects to objects (like a person to their spouse), while datatype properties assign data values to objects (like an age to a person). Annotation properties are used to encode information about (parts of) the ontology itself (like the author and creation date of an axiom) instead of the domain of interest.

As a central feature of OWL, names of entities can be combined into expressions using so called constructors. As a basic example, the atomic classes “female” and “professor” could be combined conjunctively to describe the class of female professors. The latter would be described by an OWL class expression, that could be used in statements or in other expressions. In OWL, the constructors for each sort of entity vary greatly. The expression language for classes is very rich and sophisticated, whereas the expression language for properties is much less so.

Ontologies are formalized vocabularies of terms, often covering a specific domain and shared by a community of users. They specify the definitions of terms by describing their relationships with other terms in the ontology.

The conceptual structure of OWL 2 ontologies is defined in the OWL 2 Structural Specification document.

Any OWL 2 ontology can also be viewed as an RDF graph.

OWL 2 ontologies provide classes, properties, individuals, and data values and are stored as Semantic Web documents.

OWL 2 ontologies can be used along with information written in RDF, and OWL 2 ontologies themselves are primarily exchanged as RDF documents.


## Uncategorized

**Common URIs**

- owl:AllDifferent
- owl:AllDisjointClasses
- owl:AllDisjointProperties
- owl:allValuesFrom
- owl:AnnotationProperty
- owl:AsymmetricProperty
- owl:Class
- owl:cardinality
- owl:complementOf
- owl:DatatypeProperty
- owl:differentFrom
- owl:disjointUnionOf
- owl:disjointWith
- owl:equivalentClass
- owl:equivalentProperty
- owl:FunctionalProperty
- owl:hasSelf
- owl:hasValue
- owl:imports
- owl:intersectionOf
- owl:InverseFunctionalProperty
- owl:inverseOf
- owl:IrreflexiveProperty
- owl:maxCardinality
- owl:maxQualifiedCardinality
- owl:members
- owl:minCardinality
- owl:minQualifiedCardinality
- owl:NamedIndividual
- owl:NegativePropertyAssertion
- owl:Nothing
- owl:ObjectProperty
- owl:oneOf
- owl:onClass
- owl:onDataRange
- owl:onProperties
- owl:onProperty
- owl:Ontology
- owl:propertyDisjointWith
- owl:ReflexiveProperty
- owl:Restriction
- owl:qualifiedCardinality
- owl:sameAs
- owl:someValuesFrom
- owl:SymmetricProperty
- owl:Thing
- owl:TransitiveProperty
- owl:unionOf
- owl:versionIRI
- owl:withRestrictions
- rdf:type
- rdfs:comment
- rdfs:Datatype
- rdfs:domain
- rdfs:isDefinedBy
- rdfs:label
- rdfs:range
- rdfs:seeAlso
- rdfs:subClassOf
- rdfs:subPropertyOf

**Less Common URIs (I'm guessing)**

- owl:Annotation
- owl:annotatedProperty
- owl:annotatedSource
- owl:annotatedTarget
- owl:assertionProperty
- owl:Axiom
- owl:backwardCompatibleWith
- owl:bottomDataProperty
- owl:bottomObjectProperty
- ~~owl:DataRange~~ (Deprecated in OWL 2, replaced by rdfs:DataType)
- owl:datatypeComplementOf
- owl:deprecated
- ~~owl:DeprecatedClass~~ (replaced by owl:deprecated)
- ~~owl:DeprecatedProperty~~ (replaced by owl:deprecated)
- owl:hasKey
- owl:incompatibleWith
- owl:OntologyProperty
- owl:priorVersion
- owl:propertyChainAxiom
- owl:rational
- owl:real
- owl:sourceIndividual
- owl:targetIndividual
- owl:topDataProperty
- owl:topObjectProperty
- owl:versionInfo

# OWL 2 Notes

OWL 2 is designed to facilitate ontology development and sharing via the Web, with the ultimate goal of making Web content more accessible to machines.

The W3C OWL 2 Web Ontology Language (OWL) is a Semantic Web language designed to represent rich and complex knowledge about things, groups of things, and relations between things. OWL is a computational logic-based language such that knowledge expressed in OWL can be reasoned with by computer programs either to verify the consistency of that knowledge or to make implicit knowledge explicit. OWL documents, known as ontologies, can be published in the World Wide Web and may refer to or be referred from other OWL ontologies. OWL is part of the W3C's Semantic Web technology stack, which includes RDF and SPARQL.

OWL 2 is an ontology language for the Semantic Web with formally defined meaning. OWL 2 ontologies provide classes, properties, individuals, and data values and are stored as Semantic Web documents. OWL 2 ontologies can be used along with information written in RDF, and OWL 2 ontologies themselves are primarily exchanged as RDF documents.


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


## Expressions and Constructors

As a central feature of OWL, names of entities can be combined into _expressions_ using so called _constructors_. As a basic example, the atomic classes `female` and `professor` could be combined conjunctively to describe the class of female professors. The latter would be described by an OWL class expression, that could be used in statements or in other expressions. In this sense, expressions can be seen as new entities which are defined by their structure. In OWL, the constructors for each sort of entity vary greatly. The expression language for classes is very rich and sophisticated, whereas the expression language for properties is much less so. These differences have historical as well as technical reasons.


## Classes

In general, classes are used to group individuals that have something in common in order to refer to them. Hence, classes essentially represent sets of individuals. In modeling, classes are often used to denote the set of objects comprised by a concept of human thinking, like the concept _person_ or the concept _woman_. An individual may well belong to several classes simultaneously.

**ClassAssertion**

Individuals may be declared to be member's of a class.

```turtle
:_Mary rdf:type :Woman .
```

Classes can have relationships with other classes.

**SubClassOf**

```turtle
:Woman rdfs:subClassOf :Person .
```

The subclass relationship between classes is transitive. It is also reflexive, meaning that every class is its own subclass.

**EquivalentClasses**

```turtle
:Person owl:equivalentClass :Human .
```

Stating that `Person` and `Human` are equivalent amounts exactly to the same as stating that both `Person` is a subclass of `Human` and `Human` is a subclass of `Person`.

**DisjointClasses**

In some cases membership in one class specifically excludes membership in another.

```turtle
[
  rdf:type owl:AllDisjointClasses ;
  owl:members (
    :Man
    :Woman
  ) ;
]
```

## Individuals

**DifferentIndividuals**

```turtle
:_John owl:differentFrom :_Cody .
```

**SameIndividual**

```turtle
:_James owl:sameAs :_Jim .
```

**Enumeration**

```turtle
:MyBirthdayGuests owl:equivalentClass [
  rdf:type owl:Class ;
  owl:oneOf ( :Bill  :John  :Mary )
] .
```


## Properties

Properties come in three flavors: annotation properties, data properties, and object properties.

### Annotation Properties

(To be completed)

### Data Properties

Data properties relate individuals to data values.

**DataPropertyAssertion**

```turtle
:_John :hasAge 51 .
```

**NegativeDataPropertyAssertion**

```turtle
[
  rdf:type owl:NegativePropertyAssertion ;
  owl:sourceIndividual :_Jack ;
  owl:assertionProperty :hasAge ;
  owl:targetValue 53 ;
]
```

**DataPropertyDomain**

```turtle
:hasAge rdfs:domain :Person .
```

**DataPropertyRange**

```turtle
:hasAge rdfs:range xsd:nonNegativeInteger .
```

Note that a domain (or range) statement is not a constraint on the knowledge but allows a reasoner to infer further knowledge. In the above example, anything with the `:hasAge` property is inferred to be a `:Person`, which may not be correct.

### Object Properties

Object properties relate individuals to other individuals.

**ObjectPropertyAssertion**

```turtle
:_John :hasWife :_Leah .
```

**NegativeObjectPropertyAssertion**

```turtle
# Leah is not Cody's wife:
[
  rdf:type owl:NegativePropertyAssertion ;
  owl:sourceIndividual :_Cody ;
  owl:assertionProperty :hasWife ;
  owl:targetIndividual :_Leah ;
]
```

**SubObjectPropertyOf**

```turtle
:hasWife rdfs:subPropertyOf :hasSpouse .
```

**EquivalentObjectProperties**

```turtle
:hasChild owl:equivalentProperty otherOnt:child .
```

**ObjectPropertyDomain**

```turtle
:hasWife rdfs:domain :Man .
```

**ObjectPropertyRange**

```turtle
:hasWife rdfs:range :Woman .
```


## Property Characteristics

**owl:inverseOf**

```turtle
:hasParent owl:inverseOf :hasChild .
```

**owl:SymmetricProperty**

When a property and its inverse coincide, it is symmetric. In other words, the direction of a property doesn't matter.

```turtle
:hasSpouse rdf:type owl:SymmetricProperty .
```

Note that being symmetric is a much stronger notion than being non-asymmetric.

**owl:AsymmetricProperty**

A property can also be asymmetric meaning that if it connects A with B it never connects B with A.

```turtle
:hasChild rdf:type owl:AsymmetricProperty .
```

Note that being asymmetric is a much stronger notion than being non-symmetric.

**owl:ReflexiveProperty**

When a property relates everything to itself, it is reflexive.

```turtle
:hasRelative rdf:type owl:ReflexiveProperty .
```

Note that this does not necessarily mean that every two individuals which are related by a reflexive property are identical.

**owl:IrreflexiveProperty**

When a property cannot relate to itself, it is irreflexive.

```turtle
:parentOf rdf:type owl:IrreflexiveProperty .
```

**owl:FunctionalProperty**

When a property can relate to at most one other individual, it is functional.

```turtle
:hasHusband rdf:type owl:FunctionalProperty .
```

**owl:InverseFunctionalProperty**

When the inverse of a property can relate to at most one other individual, it is functional.

```turtle
:hasHusband rdf:type owl:InverseFunctionalProperty .
```

**owl:TransitiveProperty**

A transitive property interlinks two individuals A and C whenever it interlinks A with B and B with C for some individual B.

```turtle
:hasAncestor rdf:type owl:TransitiveProperty .
```


## Property Restrictions

Property restrictions provide a type of logic-based constructors involving properties.

**Existential Quantification**

Existential quantification defines a class as the set of all individuals that are connected via a particular property to another individual which is an instance of a certain class.

```turtle
:Parent owl:equivalentClass [
  rdf:type owl:Restriction ;
  owl:onProperty :hasChild ;
  owl:someValuesFrom :Person ;
] .
```

This means that there is an expectation that for every instance of Parent, there exists at least one child, and that child is a member of the class Person.

Natural language indicators for the usage of existential quantification are words like “some,” or “one.”

**Universal Quantification**

Universal quantification is used to describe a class of individuals for which all related individuals must be instances of a given class.

```turtle
:HappyPerson
  rdf:type owl:Class ;
  owl:equivalentClass [
    rdf:type owl:Restriction ;
    owl:onProperty :hasChild ;
    owl:allValuesFrom :HappyPerson ;
  ] ;
.
```

Note: this does not require that a person must have children to be happy. A person without any `:hasChild` relation is inferred to be a `:HappyPerson`.

Natural language indicators for the usage of universal quantification are words like “only,” “exclusively,” or “nothing but.”

**Class of individuals that are related to one particular individual**

```turtle
:JohnsChildren owl:equivalentClass [
  rdf:type owl:Restriction ;
  owl:onProperty :hasParent ;
  owl:hasValue :John ;
] .
```

**Classes of individuals that are related to themself**

```turtle
:NarcisticPerson owl:equivalentClass [
  rdf:type owl:Restriction ;
  owl:onProperty :loves ;
  owl:hasSelf "true"^^xsd:boolean ;
] .
```

### Property Cardinality Restrictions

**owl:maxQualifiedCardinality**

```turtle
:John rdf:type [
  rdf:type owl:Restriction ;
  owl:maxQualifiedCardinality "4"^^xsd:nonNegativeInteger ;
  owl:onProperty :hasChild ;
  owl:onClass :Parent ;
] .
```

**owl:minQualifiedCardinality**

```turtle
:John rdf:type [
  rdf:type owl:Restriction ;
  owl:minQualifiedCardinality "2"^^xsd:nonNegativeInteger ;
  owl:onProperty :hasChild ;
  owl:onClass :Parent ;
] .
```

**owl:qualifiedCardinality**

```turtle
:John rdf:type [
  rdf:type owl:Restriction ;
  owl:qualifiedCardinality "3"^^xsd:nonNegativeInteger ;
  owl:onProperty :hasChild ;
  owl:onClass :Parent ;
] .
```

**owl:maxCardinality**

```turtle
:John rdf:type [
  rdf:type owl:Restriction ;
  owl:maxCardinality "4"^^xsd:nonNegativeInteger ;
  owl:onProperty :hasChild ;
] .
```

**owl:minCardinality**

```turtle
:John rdf:type [
  rdf:type owl:Restriction ;
  owl:minCardinality "2"^^xsd:nonNegativeInteger ;
  owl:onProperty :hasChild ;
] .
```

**owl:cardinality**

```turtle
:John rdf:type [
  rdf:type owl:Restriction ;
  owl:cardinality "3"^^xsd:nonNegativeInteger ;
  owl:onProperty :hasChild ;
] .
```


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

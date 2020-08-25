# OWL 2 Notes

OWL 2 is designed to facilitate ontology development and sharing via the Web, with the ultimate goal of making Web content more accessible to machines.

The W3C OWL 2 Web Ontology Language (OWL) is a Semantic Web language designed to represent rich and complex knowledge about things, groups of things, and relations between things. OWL is a computational logic-based language such that knowledge expressed in OWL can be reasoned with by computer programs either to verify the consistency of that knowledge or to make implicit knowledge explicit. OWL documents, known as ontologies, can be published in the World Wide Web and may refer to or be referred from other OWL ontologies. OWL is part of the W3C's Semantic Web technology stack, which includes RDF and SPARQL.


## Documentation

See https://www.w3.org/TR/owl-overview/#Documentation_Roadmap for guidance on OWL 2 documentation.

The following is a list of less technical OWL documentation and serve well as introductory material.

- https://www.w3.org/TR/owl-overview/
- https://www.w3.org/TR/owl2-primer/
- https://www.w3.org/TR/owl2-new-features/
- https://www.w3.org/TR/owl2-quick-reference/


## Ontologies

OWL 2 is a language for expressing ontologies. An ontology is a set of precise descriptive statements about some part of the world (usually referred to as the domain of interest or the subject matter of the ontology). Precise descriptions satisfy several purposes: most notably, they prevent misunderstandings in human communication and they ensure that software behaves in a uniform, predictable way and works well with other software.

OWL 2 is a knowledge representation language, designed to formulate, exchange and reason with knowledge about a domain of interest.

Some fundamental notions should first be explained to understand how knowledge is represented in OWL 2. These basic notions are:

- Axioms: The basic statements that an OWL ontology expresses.
- Entities: Elements used to refer to real-world objects.
- Expressions: Combinations of entities to form complex descriptions from basic ones.

Ontologies are formalized vocabularies of terms, often covering a specific domain and shared by a community of users. They specify the definitions of terms by describing their relationships with other terms in the ontology.

The conceptual structure of OWL 2 ontologies is defined in the OWL 2 Structural Specification document.

Any OWL 2 ontology can also be viewed as an RDF graph.

OWL 2 ontologies provide classes, properties, individuals, and data values and are stored as Semantic Web documents.

OWL 2 ontologies can be used along with information written in RDF, and OWL 2 ontologies themselves are primarily exchanged as RDF documents.
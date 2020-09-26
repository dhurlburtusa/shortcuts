# SHACL Notes

The Shapes Constraint Language (SHACL) is a language for validating RDF graphs against a set of conditions. These conditions are provided as shapes and other constructs expressed in the form of an RDF graph. RDF graphs that are used in this manner are called "shapes graphs" in SHACL and the RDF graphs that are validated against a shapes graph are called "data graphs". As SHACL shape graphs are used to validate that data graphs satisfy a set of conditions they can also be viewed as a description of the data graphs that do satisfy these conditions. Such descriptions may be used for a variety of purposes beside validation, including user interface building, code generation, and data integration.


## Shapes

### sh:Shape

- sh:targetClass: rdfs:Class
- sh:targetNode: any IRI or literal
- sh:targetObjectsOf: rdf:Property
- sh:targetSubjectsOf: rdf:Property
- sh:deactivated: xsd:boolean
- sh:message: xsd:string or rdf:langString
- sh:severity: sh:Severity

### sh:NodeShape

Inherits from sh:Shape

- sh:closed: xsd:boolean
- sh:or: rdf:List
- sh:not: sh:Shape
- sh:property: sh:PropertyShape
- And others

### sh:PropertyShape

- sh:name: xsd:string or rdf:langString
- sh:description: xsd:string or rdf:langString
- sh:defaultValue: any
- sh:group: sh:PropertyGroup
- sh:path: rdfs:Resource
- sh:minCount: xsd:integer
- sh:maxCount: xsd:integer
- sh:class: rdfs:Resource
- sh:datatype: rdfs:Resource
- sh:node: sh:NodeShape


## Targets

**Target declarations** of a shape in a shapes graph are triples with the shape as the subject and certain properties (e.g., `sh:targetClass`) as predicates. Target declarations can be used to produce **focus nodes** for a shape.

SHACL Core includes the following kinds of targets:

- node targets
- class-based targets (including implicit class-based targets)
- subjects-of targets
- objects-of targets

### Node Targets

A node target is specified using the `sh:targetNode` predicate. Each value of `sh:targetNode` in a shape is either an IRI or a literal. That is, subjects of triples in the data graph that match the values of `sh:targetNode` are targets. That is

See https://www.w3.org/TR/shacl/#x2.1.3.1-node-targets-(sh:targetnode) for details.

### Class-based Targets

A class target is specified with the `sh:targetClass` predicate. Each value of `sh:targetClass` in a shape is an IRI. That is, subjects of triples in the data graph that are instances of the value of `sh:targetClass` are targets. That is, triples that match `?s a $targetClass`.

Note that, according to the SHACL instance definition, all the `rdfs:subClassOf` declarations needed to walk the class hierarchy need to exist in the data graph.

See https://www.w3.org/TR/shacl/#x2.1.3.2-class-based-targets-(sh:targetclass) for details.

**Implicit Class Targets**

An implicit class target is specified when the shape is also a `rdfs:Class`. That is, targets match `?s a ?shape` where `?shape a rdfs:Class`.

### Subjects-of Targets

A subjects-of target is specified with the predicate `sh:targetSubjectsOf`. The values of `sh:targetSubjectsOf` in a shape are IRIs. That is, targets are the subjects that match `?s $targetSubjectsOf ?o`.

See https://www.w3.org/TR/shacl/#x2.1.3.4-subjects-of-targets-(sh:targetsubjectsof) for details.

### Objects-of Targets

An objects-of target is specified with the predicate `sh:targetObjectsOf`. The values of `sh:targetObjectsOf` in a shape are IRIs. Thas is, targets are the objects that match `?s $targetObjectsOf ?o`.

See https://www.w3.org/TR/shacl/#x2.1.3.5-objects-of-targets-(sh:targetobjectsof) for details.


## Misc

- https://www.w3.org/ns/shacl.ttl

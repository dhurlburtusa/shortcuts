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



## Misc

- https://www.w3.org/ns/shacl.ttl

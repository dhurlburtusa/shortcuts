# Misc Notes


## Common Prefixes/Namespaces

- d: <http://dbpedia.org/ontology/>
- dbpedia: <http://dbpedia.org/>
- dbpedia2: <http://dbpedia.org/property/>
- dc: <http://purl.org/dc/elements/1.1/>
- dcterms: <http://purl.org/dc/terms/>
- err: <http://www.w3.org/2005/xqt-errors#>
- fn: <http://www.w3.org/2005/xpath-functions#>
- foaf: <http://xmlns.com/foaf/0.1/>
- geojson: <https://purl.org/geojson/vocab#>
- i18n: <https://www.w3.org/ns/i18n#>
- owl: <http://www.w3.org/2002/07/owl#>
- prov: <http://www.w3.org/ns/prov#>
- rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
- rdfs: <http://www.w3.org/2000/01/rdf-schema#>
- schema: <http://schema.org/>
- sfn: <http://www.w3.org/ns/sparql#>
- sh:  <http://www.w3.org/ns/shacl#>
- skos: <http://www.w3.org/2004/02/skos/core#>
- v: <http://www.w3.org/2006/vcard/>
- xsd: <http://www.w3.org/2001/XMLSchema#>


## Common Predicates/Objects (at least suspected)

- foaf:account
- foaf:age
- foaf:Document
- foaf:familyName
- foaf:givenName
- foaf:Group
- foaf:homepage
- foaf:Image
- foaf:interest
- foaf:knows
- foaf:mbox
- foaf:member
- foaf:name
- foaf:Person
- foaf:OnlineAccount
- foaf:Organization
- owl:equivalentClass
- owl:imports
- owl:Ontology
- owl:Thing
- owl:versionInfo
- rdf:Alt
- rdf:Bag
- rdf:first
- rdf:langString
- rdf:List
- rdf:JSON
- rdf:nil
- rdf:predicate
- rdf:Property
- rdf:object
- rdf:rest
- rdf:Seq
- rdf:Statement
- rdf:subject
- rdf:type
- rdf:value
- rdfs:Class
- rdfs:comment
- rdfs:Container
- rdfs:ContainerMembershipProperty
- rdfs:Datatype
- rdfs:domain
- rdfs:isDefinedBy
- rdfs:label
- rdfs:Literal
- rdfs:member
- rdfs:range
- rdfs:Resource
- rdfs:seeAlso
- rdfs:subClassOf
- rdfs:subPropertyOf
- sh:and
- sh:BlankNode
- sh:BlankNodeOrIRI
- sh:BlankNodeOrLiteral
- sh:class
- sh:closed
- sh:conforms
- sh:datatype
- sh:defaultValue
- sh:description
- sh:equals
- sh:flags
- sh:group
- sh:hasValue
- sh:ignoredProperties
- sh:in
- sh:Info
- sh:IRI
- sh:IRIOrLiteral
- sh:Literal
- sh:maxCount
- sh:maxExclusive
- sh:maxInclusive
- sh:maxLength
- sh:message
- sh:minCount
- sh:minExclusive
- sh:minInclusive
- sh:minLength
- sh:name
- sh:node
- sh:nodeKind
- sh:NodeKind
- sh:NodeShape
- sh:not
- sh:or
- sh:order
- sh:path
- sh:pattern
- sh:property
- sh:PropertyGroup
- sh:PropertyShape
- sh:result
- sh:severity
- sh:Severity
- sh:targetClass
- sh:targetNode
- sh:targetObjectsOf
- sh:targetSubjectsOf
- sh:ValidationReport
- sh:Violation
- sh:Warning
- sh:xone
- xsd:boolean
- xsd:date
- xsd:dateTime
- xsd:decimal
- xsd:integer
- xsd:string
- xsd:time


## Basic Turtle Syntax

(Section to be expanded.)

```turtle
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix : <http://example.org/book/> .
:book1 dc:title "SPARQL Tutorial" .
```

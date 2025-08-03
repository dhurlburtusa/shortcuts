# JSON-LD Notes

Linked Data is a way to create a network of standards-based machine interpretable data across different documents and Web sites. It allows an application to start at one piece of Linked Data and follow embedded links to other pieces of Linked Data that are hosted on different sites across the Web.

JSON-LD is a lightweight syntax to serialize Linked Data in JSON. It is primarily intended to be a way to use Linked Data in Web-based programming environments, to build interoperable Web services, and to store Linked Data in JSON-based storage engines.

JSON-LD introduces:

- a universal identifier mechanism for JSON objects via the use of IRIs
- a way to disambiguate keys shared among different JSON documents by mapping them to IRIs via a context
- a mechanism in which a value in a JSON object may refer to a resource on a different site on the Web
- the ability to annotate strings with their language
- a way to associate datatypes with values such as dates and times
- a facility to express one or more directed graphs, such as a social network, in a single document

JSON-LD is designed to be usable directly as JSON, with no knowledge of RDF. It is also designed to be usable as RDF in conjunction with other Linked Data technologies like SPARQL.


## Examples

### @id

```json-ld
{
  "http://schema.org/name": "Manu Sporny",
  "http://schema.org/url": {
    "@id": "http://manu.sporny.org/"
    ↑ The '@id' keyword means 'This value is an identifier that is an IRI'
  },
  "http://schema.org/image": {
    "@id": "http://manu.sporny.org/images/manu.png"
  }
}
```

### @context

```json-ld
{
  "@context": {
    "name": "http://schema.org/name",
    ↑ This means that 'name' is shorthand for 'http://schema.org/name'
    "image": {
      "@id": "http://schema.org/image",
      ↑ This means that 'image' is shorthand for 'http://schema.org/image'
      "@type": "@id"
      ↑ This means that a string value associated with 'image'
        should be interpreted as an identifier that is an IRI
    },
    "homepage": {
      "@id": "http://schema.org/url",
      ↑ This means that 'homepage' is shorthand for 'http://schema.org/url'
      "@type": "@id"
      ↑ This means that a string value associated with 'homepage'
        should be interpreted as an identifier that is an IRI 
    }
  },
  "name": "Manu Sporny",
  "homepage": "http://manu.sporny.org/",
  "image": "http://manu.sporny.org/images/manu.png"
}
```

```json-ld
{
  "@context": "https://json-ld.org/contexts/person.jsonld",
  "name": "Manu Sporny",
  "homepage": "http://manu.sporny.org/",
  "image": "http://manu.sporny.org/images/manu.png"
}
```

### @type

```json-ld
{
  "@context": { ... },
  "@type": "Person",
  ↑ This means the type of this node.
  "birthday": {
    "@type": "xsd:date",
    ↑ This means the type of this data.
    "@value": "2000-01-01"
  },
}
```

```json-ld
{
  "@context": {
    "birthday" : {
      "@id": "http://schema.org/birthday",
      "@type": "xsd:date"
    },
  },
  ...
  "birthday": "2000-01-01",
}
```

### @version

```json-ld
{
  "@context": {
    "@version": 1.1,
    ...
  },
  ...
}
```

### @vocab

```json-ld
{
  "@context": {
    "@vocab": "http://example.com/vocab/"
  },
  "@id": "http://example.org/places#BrewEats",
  "@type": "Restaurant",
  "name": "Brew Eats"
  ...
}
```

Expands to:

```json-ld
[{
  "@id": "http://example.org/places#BrewEats",
  "@type": ["http://example.com/vocab/Restaurant"],
  "http://example.com/vocab/name": [{"@value": "Brew Eats"}]
}]
```

## The Context

A context is used to map terms to IRIs. Terms are case sensitive and most valid strings that are not reserved JSON-LD keywords can be used as a term. Exceptions are the empty string `""` and strings that have the form of a keyword (i.e., starting with `@` followed exclusively by one or more ALPHA characters (see [RFC5234])), which must not be used as terms. Strings that have the form of an IRI (e.g., containing a ":") should not be used as terms. The value of a term definition can either be a simple string, mapping the term to an IRI, or a map.

A context is introduced using an entry with the key `@context` and may appear within a node object or a value object. Therefore, a JSON-LD document may contain multiple contexts.

When a term definition has a map value, the map is called an expanded term definition. They allow declaring the type (using `@type) of the term. They also allow terms to be used for index maps (using `@index`) and to specify whether array values are to be interpreted as sets (using `@set`) or lists (using `@list`). Expanded term definitions may be defined using IRIs or compact IRIs as keys, which is mainly used to associate type or language information with an IRI or compact IRI.

Contexts can either be directly embedded into the document (an embedded context) or be referenced using a URL. External JSON-LD context documents may contain extra information located outside of the `@context` key, such as documentation about the terms declared in the document. Information contained outside of the `@context` value is ignored when the document is used as an external JSON-LD context document.

JSON documents can be interpreted as JSON-LD without having to be modified by referencing a context via an HTTP Link Header as described in § 6.1 Interpreting JSON as JSON-LD. It is also possible to apply a custom context using the JSON-LD 1.1 API [JSON-LD11-API].

In JSON-LD documents, contexts may also be specified inline. This has the advantage that documents can be processed even in the absence of a connection to the Web.

In general, contexts may be used any time a map is defined. The only time that one cannot express a context is as a **direct** child of another context definition (may be used in an expanded term definition).

### Multiple Contexts

A JSON-LD document may have the form of an array composed of one or more node objects, which use a context definition in each top-level node object

```json-ld
[
  {
    "@context": "https://json-ld.org/contexts/person.jsonld",
    "name": "Manu Sporny",
    "homepage": "http://manu.sporny.org/",
    "depiction": "http://twitter.com/account/profile_image/manusporny"
  }, {
    "@context": "https://json-ld.org/contexts/place.jsonld",
    "name": "The Empire State Building",
    "description": "The Empire State Building is a 102-story landmark in New York City.",
    "geo": {
      "latitude": "40.75",
      "longitude": "73.98"
    }
  }
]
```

The outer array is standard for a document in expanded document form and flattened document form, and may be necessary when describing a disconnected graph, where nodes may not reference each other. In such cases, using a top-level map with an `@graph` property can be useful for saving the repetition of `@context`.

```json-ld
{
  "@context": [
    "https://json-ld.org/contexts/person.jsonld",
    "https://json-ld.org/contexts/place.jsonld",
    { "title": "http://purl.org/dc/terms/title" }
  ],
  "@graph": [{
    "http://xmlns.com/foaf/0.1/name": "Manu Sporny",
    "homepage": "http://manu.sporny.org/",
    "depiction": "http://twitter.com/account/profile_image/manusporny"
  }, {
    "title": "The Empire State Building",
    "description": "The Empire State Building is a 102-story landmark in New York City.",
    "geo": {
      "latitude": "40.75",
      "longitude": "73.98"
    }
  }]
}
```

Multiple contexts may be combined using an array, which is processed in order. The set of contexts defined within a specific map are referred to as local contexts. The active context refers to the accumulation of local contexts that are in scope at a specific point within the document. Setting a local context to `null` effectively resets the active context to an empty context, without term definitions, default language, or other things defined within previous contexts.

### Duplicate Context Terms

Duplicate context terms are overridden using a most-recently-defined-wins mechanism.

```json-ld
{
  "@context": {
    "name": "http://example.com/person#name",
    "details": "http://example.com/person#details"
  },
  "name": "Markus Lanthaler",
  ...
  "details": {
    "@context": {
      "name": "http://example.com/organization#name"
    },
    "name": "Graz University of Technology"
  }
}
```

In the example above, the name term is overridden in the more deeply nested details structure, which uses its own embedded context. Note that this is rarely a good authoring practice and is typically used when working with legacy applications that depend on a specific structure of the map.

If a term is redefined within a context, all previous rules associated with the previous definition are removed. If a term is redefined to `null`, the term is effectively removed from the list of terms defined in the active context.

Multiple contexts may be combined using an array, which is processed in order. The set of contexts defined within a specific map are referred to as local contexts. The active context refers to the accumulation of local contexts that are in scope at a specific point within the document. Setting a local context to `null` effectively resets the active context to an empty context, without term definitions, default language, or other things defined within previous contexts.

### Default Vocabulary

At times, all properties and types may come from the same vocabulary. JSON-LD's `@vocab` keyword allows an author to set a common prefix which is used as the vocabulary mapping and is used for all properties and types that do not match a term and are neither an IRI nor a compact IRI (i.e., they do not contain a colon).

```json-ld
{
  "@context": {
    "@vocab": "http://example.com/vocab/"
  },
  "@id": "http://example.org/places#BrewEats",
  "@type": "Restaurant",
  "name": "Brew Eats"
  ...
}
```

If `@vocab` is used but certain keys in an map should not be expanded using the vocabulary IRI, a term can be explicitly set to `null` in the context. For instance, in the example below the databaseId entry would not expand to an IRI causing the property to be dropped when expanding.

```json-ld
{
  "@context": {
     "@vocab": "http://example.com/vocab/",
     "databaseId": null
  },
  "@id": "http://example.org/places#BrewEats",
  "@type": "Restaurant",
  "name": "Brew Eats",
  "databaseId": "23987520"
}
```

### Base IRI

JSON-LD allows IRIs to be specified in a relative form which is resolved against the document base according section 5.1 Establishing a Base URI of [RFC3986]. The base IRI may be explicitly set with a context using the `@base` keyword.

```json-ld
{
  "@context": {
    "@base": "http://example.com/document.jsonld",
    "label": "http://www.w3.org/2000/01/rdf-schema#label"
  },
  "@id": "",
  "label": "Just a simple document"
}
```

See https://www.w3.org/TR/json-ld/#base-iri for details.

## IRIs

A string is interpreted as an IRI when it is the value of a map entry with the key `@id`.

Values that are interpreted as IRIs, can also be expressed as relative IRI references.

IRIs can be expressed directly in the key position.

Term-to-IRI expansion occurs if the key matches a term defined within the active context.

JSON keys that do not expand to an IRI are not Linked Data and thus ignored when processed.

## Specifying the Type

In Linked Data, it is common to specify the type of a graph node; in many cases, this can be inferred based on the properties used within a given node object, or the property for which a node is a value.

The type of a particular node can be specified using the `@type` keyword. In Linked Data, types are uniquely identified with an IRI.

A node can be assigned more than one type by using an array.

```json-ld
{
  "@id": "http://me.markus-lanthaler.com/",
  "@type": [
    "http://schema.org/Person",
    "http://xmlns.com/foaf/0.1/Person"
  ],
}
```

The value of a `@type` key may also be a term defined in the active context:

```json-ld
{
  "@context": {
    "Person": "http://schema.org/Person"
  },
  "@id": "http://me.markus-lanthaler.com/",
  "@type": "Person",
}
```

In addition to setting the type of nodes, `@type` can also be used to set the type of a value to create a typed value. This use of `@type` is similar to that used to define the type of a node object, but value objects are restricted to having just a single type.

**Implicit**
```json-ld
{
  "@context": {
    "modified": {
      "@id": "http://purl.org/dc/terms/modified",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    }
  },
  "modified": "2010-05-29T14:17:39+02:00"
}
```

**Explicit**
```json-ld
{
  "@context": {
    "modified": {
      "@id": "http://purl.org/dc/terms/modified"
    }
  },
  "modified": {
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
    "@value": "2010-05-29T14:17:39+02:00"
  }
}
```

## Keyword Aliasing

Each of the JSON-LD keywords, except for `@context`, may be aliased to application-specific keywords. This feature allows legacy JSON content to be utilized by JSON-LD by re-using JSON keys that already exist in legacy documents. This feature also allows developers to design domain-specific implementations using only the JSON-LD context.

Since keywords cannot be redefined, they can also not be aliased to other keywords. Aliased keywords may not be used within a context, itself.

```json-ld
{
  "@context": {
    "url": "@id",
    "a": "@type",
    "name": "http://xmlns.com/foaf/0.1/name"
  },
  "url": "http://example.com/about#gregg",
  "a": "http://xmlns.com/foaf/0.1/Person",
  "name": "Gregg Kellogg"
}
```

Expands to:

```json-ld
[{
  "@id": "http://example.com/about#gregg",
  "@type": ["http://xmlns.com/foaf/0.1/Person"],
  "http://xmlns.com/foaf/0.1/name": [{"@value": "Gregg Kellogg"}]
}]
```

## Term Definitions

**active context**
A `context` that is used to resolve terms while the processing algorithm is running. The active context refers to the accumulation of local contexts that are in scope at a specific point within the document.

**base direction**
The base direction is the direction used when a string does not have a direction associated with it directly. It can be set in the context using the `@direction` key whose value must be one of the strings `"ltr"`, `"rtl"`, or `null`. See the [Context Definitions section of JSON-LD 1.1][context-definitions] for a normative description.

**compact IRI**
A compact IRI has the form of `prefix:suffix` and is used as a way of expressing an IRI without needing to define separate term definitions for each IRI contained within a common vocabulary identified by prefix.

**context**
A set of rules for interpreting a JSON-LD document as described in the [The Context section of JSON-LD 1.1][context] and normatively specified in the [Context Definitions section of JSON-LD 1.1][context-definitions].

**default language**
The default language is the language used when a string does not have a language associated with it directly. It can be set in the `context` using the `@language` key whose value must be a string representing a BCP47 language code or `null`. See the [Context Definitions section of JSON-LD 1.1][context-definitions] for a normative description.

**default object**
A default object is a map that has a `@default` key.

**embedded context**
An embedded context is a `context` which appears as the `@context` entry of one of the following: a node object, a value object, a graph object, a list object, a set object, the value of a nested properties, or the value of an expanded term definition. Its value may be a map for a context definition, as an IRI, or as an array combining either of the above.

**expanded term definition**
An expanded term definition is a term definition where the value is a map containing one or more keyword keys to define the associated IRI, if this is a reverse property, the type associated with string values, and a container mapping. See the [Expanded Term Definition section of JSON-LD 1.1][expanded-term-definition] for a normative description.

**frame**
A JSON-LD document, which describes the form for transforming another JSON-LD document using matching and embedding rules. A frame document allows additional keywords and certain map entries to describe the matching and transforming process.

**frame object**
A frame object is a map element within a frame which represents a specific portion of the frame matching either a node object or a value object in the input. See the Frame Objects section of JSON-LD 1.1 for a normative description.

**graph object**
A graph object represents a named graph as the value of a map entry within a node object. When expanded, a graph object must have a `@graph` entry and may also have `@id` and `@index` entries. A simple graph object is a graph object which does not have an `@id` entry. Note that node objects may have a `@graph` entry but are not considered graph objects if they include any other entries. A top-level object consisting of `@graph` is also not a graph object. Note that a node object may also represent a named graph if it includes other properties. See the [Graph Objects section of JSON-LD 1.1][graph-objects] for a normative description.

**id map**
An id map is a map value of a term defined with `@container` set to `@id`. The values of the id map must be node objects and its keys are interpreted as IRIs representing the `@id` of the associated node object. If a value in the id map contains a key expanding to `@id`, its value must be equivalent to the referencing key in the id map. See the [Id Maps section of JSON-LD 1.1][id-maps] for a normative description.

**implicitly named graph**
A named graph created from the value of a map entry having an expanded term definition where `@container` is set to `@graph`.

**included block**
An included block is an entry in a node object where the key is either `@included` or an alias of `@included` and the value is one or more node objects. See the [Included Blocks section of JSON-LD 1.1][included-blocks] for a normative description.

**index map**
An index map is a map value of a term defined with `@container` set to `@index`, whose values must be any of the following types: string, number, `true`, `false`, `null`, node object, value object, list object, set object, or an array of zero or more of the above possibilities. See the [Index Maps section in JSON-LD 1.1][index-maps] for a formal description.

**JSON literal**
A JSON literal is a literal where the associated datatype IRI is `rdf:JSON`. In the value object representation, the value of `@type` is `@json`. JSON literals represent values which are valid JSON. See the [The `rdf:JSON` Datatype section in JSON-LD 1.1] for a normative description.

**JSON-LD document**
A JSON-LD document is a serialization of an RDF dataset. See the [JSON-LD Grammar section in JSON-LD 1.1][json-ld-grammar] for a formal description.

**JSON-LD internal representation**
The JSON-LD internal representation is the result of transforming a JSON syntactic structure into the core data structures suitable for direct processing: arrays, maps, strings, numbers, booleans, and null.

**JSON-LD Processor**
A JSON-LD Processor is a system which can perform the algorithms defined in JSON-LD 1.1 Processing Algorithms and API. See the [Conformance section in JSON-LD 1.1 API][conformance] for a formal description.

**JSON-LD value**
A JSON-LD value is a string, a number, `true` or `false`, a typed value, or a language-tagged string. It represents an RDF literal.

**keyword**
A string that is specific to JSON-LD, described in the [Syntax Tokens and Keywords section of JSON-LD 1.1][syntax-tokens-and-keywords], and normatively specified in the [Keywords section of JSON-LD 1.1][[keywords].

**language map**
An language map is a map value of a term defined with `@container` set to `@language`, whose keys must be strings representing BCP47 language codes and the values must be any of the following types: `null`, string, or an array of zero or more of the above possibilities. See the [Language Maps section of JSON-LD 1.1][language-maps] for a normative description.

**list object**
A list object is a map that has a `@list` key. It may also have an `@index` key, but no other entries. See the [Lists and Sets section of JSON-LD 1.1][lists-and-sets] for a normative description.

**local context**
A context that is specified with a map, specified via the `@context` keyword.

**nested property**
A nested property is a key in a node object whose value is a map containing entries which are treated as if they were values of the node object. The nested property itself is semantically meaningless and used only to create a sub-structure within a node object. See the [Property Nesting section of JSON-LD 1.1]
[property-nesting] for a normative description.

**node object**
A node object represents zero or more properties of a node in the graph serialized by the JSON-LD document. A map is a node object if it exists outside of the JSON-LD context and:

  - it is not the top-most map in the JSON-LD document consisting of no other entries than `@graph` and `@context`,
  - it does not contain the `@value`, `@list`, or `@set` keywords, and
  - it is not a graph object.

The entries of a node object whose keys are not keywords are also called properties of the node object. See the [Node Objects section of JSON-LD 1.1][node-objects] for a normative description.

**node reference**
A node object used to reference a node having only the `@id` key.

**prefix**
A prefix is the first component of a compact IRI which comes from a term that maps to a string that, when prepended to the suffix of the compact IRI, results in an IRI.

**processing mode**
The processing mode defines how a JSON-LD document is processed. By default, all documents are assumed to be conformant with this specification. By defining a different version using the `@version` entry in a context, publishers can ensure that processors conformant with JSON-LD 1.0 [JSON-LD10] will not accidentally process JSON-LD 1.1 documents, possibly creating a different output. The API provides an option for setting the processing mode to json-ld-1.0, which will prevent JSON-LD 1.1 features from being activated, or error if `@version` entry in a context is explicitly set to 1.1. This specification extends JSON-LD 1.0 via the json-ld-1.1 processing mode.

**scoped context**
A scoped context is part of an expanded term definition using the `@context` entry. It has the same form as an embedded context. When the term is used as a type, it defines a **type-scoped context**, when used as a property it defines a **property-scoped context**.

**set object**
A set object is a map that has an `@set` entry. It may also have an `@index` key but no other entries. See the [Lists and Sets section of JSON-LD 1.1][lists-and-sets] for a normative description.

**term**
A term is a short word defined in a context that may be expanded to an IRI. See the [Terms section of JSON-LD 1.1]
[terms] for a normative description.

**term definition**
A term definition is an entry in a context, where the key defines a term which may be used within a map as a key, type, or elsewhere that a string is interpreted as a vocabulary item. Its value is either a string (simple term definition), expanding to an IRI, or a map (expanded term definition).

**type map**
A type map is a map value of a term defined with `@container` set to `@type`, whose keys are interpreted as IRIs representing the `@type` of the associated node object; the value must be a node object, or array of node objects. If the value contains a term expanding to `@type`, its values are merged with the map value when expanding. See the [Type Maps section of JSON-LD 1.1][type-maps] for a normative description.

**typed value**
A typed value consists of a value, which is a string, and a type, which is an IRI.

**value object**
A value object is a map that has a `@value` entry. See the [Value Objects section of JSON-LD 1.1][value-objects] for a normative description.

**vocabulary mapping**
The vocabulary mapping is set in the context using the `@vocab` key whose value must be an IRI, a compact IRI, a term, or null. See the [Context Definitions section of JSON-LD 1.1][context-definitions] for a normative description.


## Keywords

**@base**
Used to set the base IRI against which to resolve those relative IRI references which are otherwise interpreted relative to the document.

**@container**
Used to set the default container type for a term.

**@context**
Used to define the short-hand names that are used throughout a JSON-LD document. These short-hand names are called terms and help developers to express specific identifiers in a compact manner.

**@direction**
Used to set the base direction of a JSON-LD value which are not typed values (e.g. strings, or language-tagged strings).

**@graph**
Used to express a graph.

**@id**
Used to uniquely identify node objects that are being described in the document with IRIs or blank node identifiers. A node reference is a node object containing only the `@id` property, which may represent a reference to a node object found elsewhere in the document.

**@import**
Used in a context definition to load an external context within which the containing context definition is merged. This can be useful to add JSON-LD 1.1 features to JSON-LD 1.0 contexts.

**@included**
Used in a top-level node object to define an included block, for including secondary node objects within another node object.

**@index**
Used to specify that a container is used to index information and that processing should continue deeper into a JSON data structure.

**@json**
Used as the `@type` value of a JSON literal.

**@language**
Used to specify the language for a particular string value or the default language of a JSON-LD document.

**@list**
Used to express an ordered set of data.

**@nest**
Used to define a property of a node object that groups together properties of that node but is not an edge in the graph.

**@none**
Used as an index value in an index map, id map, language map, type map, or elsewhere where a map is used to index into other values when the indexed node does not have the feature being indexed.

**@prefix**
With the value `true`, allows this term to be used to construct a compact IRI when compacting. With the value `false`, prevents the term from being used to construct a compact IRI. Also determines if the term will be considered when expanding compact IRIs.

**@propagate**
Used in a context definition to change the scope of that context. By default, it is `true`, meaning that contexts propagate across node objects (other than for type-scoped contexts which default to `false`). Setting this to `false` causes term definitions created within that context to be removed when entering a new node object.

**@protected**
Used to prevent term definitions of a context to be overridden by other contexts.

**@reverse**
Used to express reverse properties.

**@set**
Used to express an unordered set of data and to ensure that values are always represented as arrays.

**@type**
Used to set the type of a node or the datatype of a typed value.

**@value**
Used to specify the data that is associated with a particular property in the graph.

**@version**
Used in a context definition to set the processing mode. New features since JSON-LD 1.0 are not available when processing mode has been explicitly set to `"json-ld-1.0"`.

NOTE: Within a context definition, `@version` takes the specific value `1.1`, not `"json-ld-1.1"`, as a JSON-LD 1.0 processor may accept a string value for `@version` but will reject a numeric value.

NOTE: The use of `1.1` for the value of `@version` is intended to cause a JSON-LD 1.0 processor to stop processing. Although it is clearly meant to be related to JSON-LD 1.1, it does not otherwise adhere to the requirements for Semantic Versioning.

**@vocab**
Used to expand properties and values in `@type` with a common prefix IRI.

## Processing Mode

```json-ld
{
  "@context": {
    "@version": 1.1,
  },
}
```

See https://www.w3.org/TR/json-ld/#json-ld-1-1-processing-mode for details.

## Relationship to RDF

JSON-LD is a concrete RDF syntax. Hence, a JSON-LD document is both an RDF document and a JSON document and correspondingly represents an instance of an RDF data model. However, JSON-LD also extends the RDF data model to optionally allow JSON-LD to serialize generalized RDF Datasets.


## Misc

- While JSON-LD uses the same array representation as JSON, the collection is unordered by default. While order is preserved in regular JSON arrays, it is not in regular JSON-LD arrays unless specifically defined.


[conformance]: https://www.w3.org/TR/json-ld11-api/#conformance
[context]: https://www.w3.org/TR/json-ld/#the-context
[context-definitions]: https://www.w3.org/TR/json-ld/#context-definitions
[expanded-term-definition]: https://www.w3.org/TR/json-ld/#expanded-term-definition
[graph-objects]: https://www.w3.org/TR/json-ld/#graph-objects
[id-maps]: https://www.w3.org/TR/json-ld/#id-maps
[included-blocks]: https://www.w3.org/TR/json-ld/#included-blocks
[index-maps]: https://www.w3.org/TR/json-ld/#index-maps
[json-ld-grammar]: https://www.w3.org/TR/json-ld/#json-ld-grammar
[keywords]: https://www.w3.org/TR/json-ld/#keywords
[language-maps]: https://www.w3.org/TR/json-ld/#language-maps
[lists-and-sets]: https://www.w3.org/TR/json-ld/#lists-and-sets
[node-objects]: https://www.w3.org/TR/json-ld/#node-objects
[property-nesting]: https://www.w3.org/TR/json-ld/#property-nesting
[rdf-json-datatype]: https://www.w3.org/TR/json-ld/#the-rdf-json-datatype
[syntax-tokens-and-keywords]: https://www.w3.org/TR/json-ld/#syntax-tokens-and-keywords
[terms]: https://www.w3.org/TR/json-ld/#terms
[type-maps]: https://www.w3.org/TR/json-ld/#type-maps
[value-objects]: https://www.w3.org/TR/json-ld/#value-objects

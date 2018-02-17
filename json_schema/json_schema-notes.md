# JSON Schema Notes

JSON Schema is a vocabulary that allows you to annotate and validate JSON
documents.

See http://json-schema.org/ for details.

The current version is draft-07, but draft-08 is currently in progress.

Documentation about draft-04 can be found in this
[excellent guide][stsi-json_schema-guide].


## Structure

A JSON schema file is written in JSON.  Its structure consists of a hierarchy of
schemas.  Schemas are JSON objects with its keys consisting of keywords.  The
type of the value each key is associated with depends on the keyword.  Some of
the keywords are associated with sub-schemas, thus forming the hierarchy.
Keywords fall into one or both of two categories: 1) assertions, which produce a
boolean result when applied to an instance and 2) annotations, which attach
information to an instance for application use.  Some keywords are always
applicable in a schema.  Some keywords are only applicable at certain levels in
the hierarchy.  While most keywords depends on the value of the `type` keyword
to determine its applicability.  Some schema properties are not recognized as a
keyword and are expected to be ignored.  Also, which schema properties are
recognized depends on the value of the `$schema` keyword.  All keywords are
optional.


[stsi-json_schema-guide]: https://spacetelescope.github.io/understanding-json-schema/

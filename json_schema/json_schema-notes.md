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


## Keywords

**Core Keywords**

* `$comment` (Reserved in draft-07 but maybe used in any version.)
* `$id` in draft-06 and above. `id` prior to draft-06.
* `$ref`
* `$schema` (SHOULD be in root schema only.)

**Table of Non-Core Keywords**

| Keyword                | Category   | Type    | Description | Notes | Applicability |
| ---------------------- | ---------- | ------- | ----------- | ----- | ------------- |
| `default`              | annotation | any     | Declares a default value for the instance. |  | Always. |
| `description`          | annotation | string  | Provides a description for the schema. |  | Always. |
| `examples`             | annotation | array   | Provides example values of the instance. |  | Always in version draft-06 and above. |
| `readOnly`             | annotation | boolean | Declares that the instance should not be modified. |  | Always in version draft-07 and above. |
| `title`                | annotation | string  | Provides a title for the schema. |  | Always. |
| `writeOnly`            | annotation | boolean | Declares that the instance is never present when retrieved from the owning authority. |  | Always in version draft-07 and above. |
| `additionalItems`      | assertion  | object  | Declares the schema which additional items in the array instance must validate against. | MUST be a valid schema. |  When `type` includes 'array' and `items` is an array of schemas. |
| `additionalProperties` | assertion  | object  | Declares the schema which additional properties in the object instance must validate against. | MUST be a valid schema.  Omitting this keyword has the same behavior as an empty schema. | When `type` includes 'object'. |
| `allOf`                | assertion  | array   | Declares the schemas that all must validate against the instance. | Must be a non-empty array.  Each item of this array MUST be a valid schema. | Always. |
| `anyOf`                | assertion  | array   | Declares the schemas that at least one must validate against the instance. | Must be a non-empty array.  Each item of this array MUST be a valid schema. | Always. |
| `const`                | assertion  | any     | Asserts an instance's value is equal to the value of this keyword. |  | Always in version draft-06 and above. |
| `contains`             | assertion  | object  | Declares the schema which at least one of the items in the array must validate against. | MUST be a valid schema. |  When `type` includes 'array'. |
| `dependencies`         | assertion  | object  | Declares dependencies.  See http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.5.7 for details. | Each property specifies a dependency.  Each dependency value MUST be an array or a valid schema.  If the dependency value is an array, then each element in the array, if any, MUST be a string, and MUST be unique.  Each of the items in the dependency value must be a property that exists in the instance.  Omitting this keyword has the same behavior as an empty object. | When `type` includes 'object'. |
| `else`                 | assertion  | object  | See http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.6 for details. | MUST be a valid schema. | In version draft-07 and above. |
| `enum`                 | assertion  | array   | Asserts an instance's value is equal to one of the elements in the keyword's array value. | This array SHOULD have at least one element. Elements in the array SHOULD be unique. | Always. |
| `exclusiveMaximum`     | assertion  | number  | Asserts an instance's value is strictly less than to the value of this keyword. |  | When `type` includes 'integer' or 'number'. |
| `exclusiveMinimum`     | assertion  | number  | Asserts an instance's value is strictly greater than to the value of this keyword. |  | When `type` includes 'integer' or 'number'. |
| `if`                   | assertion  | object  | See http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.6 for details. | MUST be a valid schema. | In version draft-07 and above. |
| `items`                | assertion  | object \| array | Declares the schema which all items in the array must validate against or the schema of each respective item in the array must validate against. | MUST be either a valid schema or an array of valid schemas. |  When `type` includes 'array'. |
| `maximum`              | assertion  | number  | Asserts an instance's value is less than or equal to the value of this keyword. |  | When `type` includes 'integer' or 'number'. |
| `maxItems`             | assertion  | number  | Asserts the length of the array instance is less than or equal to the value of this keyword. | MUST be a non-negative integer. | When `type` includes 'array'. |
| `maxLength`            | assertion  | string  | Asserts the length of a string instance is less than or equal to the value of this keyword. | MUST be a non-negative integer. | When `type` includes 'string'. |
| `maxProperties`        | assertion  | number  | Asserts the number of properties of the object instance is less than or equal to the value of this keyword. | MUST be a non-negative integer. | When `type` includes 'object'. |
| `minimum`              | assertion  | number  | Asserts an instance's value is greater than or equal to the value of this keyword. |  | When `type` includes 'integer' or 'number'. |
| `minItems`             | assertion  | number  | Asserts the length of an array instance is greater than or equal to the value of this keyword. | MUST be a non-negative integer.  Omitting this keyword has the same behavior as a value of 0. | When `type` includes 'array'. |
| `minLength`            | assertion  | string  | Asserts the length of a string instance is greater than or equal to the value of this keyword. | MUST be a non-negative integer. | When `type` includes 'string'. |
| `minProperties`        | assertion  | number  | Asserts the number of properties of the object instance is greater than or equal to the value of this keyword. | MUST be a non-negative integer.  Omitting this keyword has the same behavior as a value of 0. | When `type` includes 'object'. |
| `multipleOf`           | assertion  | number  | Asserts an instance's value is divisible by the value of this keyword. | MUST be a number strictly greater than 0. | When `type` includes 'integer' or 'number'. |
| `not`                  | assertion  | object  | Declares the schema that must not validate against the instance. | MUST be a valid schema. | Always. |
| `oneOf`                | assertion  | array   | Declares the schemas that only one must validate against the instance. | Must be a non-empty array.  Each item of this array MUST be a valid schema. |  |
| `pattern`              | assertion  | string  | Asserts a string instance matches the regulare expression represented by the value of this keyword. | This string SHOULD be a valid regular expression, according to the ECMA 262 regular expression dialect. | When `type` includes 'string'. |
| `patternProperties`    | assertion  | object  | Declares the schema which each matching property in the object instance must validate against. | Each property name of this object SHOULD be a valid regular expression, according to the ECMA 262 regular expression dialect.  Each property value of this object MUST be a valid schema.  Omitting this keyword has the same behavior as an empty object. | When `type` includes 'object'. |
| `properties`           | assertion  | object  | Declares the schema which each corresponding property in the object instance must validate against. | Each value of this object MUST be a valid schema.  Omitting this keyword has the same behavior as an empty object. | When `type` includes 'object'. |
| `propertyNames`        | assertion  | object  | Declares the schema which each property name in the instance must validate against.  That is, allows one to validate that each property name has a minimum or maximum length and whether the property name matches a pattern. | MUST be a valid schema.  Omitting this keyword has the same behavior as an empty schema. | When `type` includes 'object' and version draft-06 and above. |
| `required`             | assertion  | array   | Asserts that every item in the array is the name of a property in the object instance. | Elements of this array, if any, MUST be strings, and MUST be unique. | When `type` includes 'object'. |
| `then`                 | assertion  | object  | See http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.6 for details. | MUST be a valid schema. | In version draft-07 and above. |
| `type`                 | assertion  | string \| array | Asserts the type of an instance's value is one of the declared types. | MUST be one of the six primitive types ("null", "array", "boolean", "number", "object", or "string"), or "integer" | Always. |
| `uniqueItems`          | assertion  | boolean | Asserts all elements an array instance are unique. | Omitting this keyword has the same behavior as a value of false. | When `type` includes 'array'. |
| `contentEncoding`      | anno/asse  | string  | Declares that the string instance should be interpreted as binary data and decoded using the encoding named by this keyword's value. | MUST be a valid value as defined by RFC 2045, Sec 6.1.  E.g., 'base64'. | When `type` includes 'string'. |
| `contentMediaType`     | anno/asse  | string  | Declares the media type of the string instance. | MUST be a media type as defined by RFC 2046.  E.g., 'image/png' or 'text/html'. | When `type` includes 'string'. |
| `format`               | anno/asse  | string  | Declares the ID of the format that identifies the semantic validation that may optional be applied against the instance. | MAY be one of the predefined values: 'date', 'date-time', 'email', 'hostname', 'idn-email', 'idn-hostname', 'ipv4', 'ipv6', 'iri', 'iri-reference', 'json-pointer', 'regex', 'relative-json-pointer', 'time', 'uri', 'uri-reference', 'uri-template' | Always.  However, may only be meaningful when the instance is of a particular `type` such as 'string'. |
| `definitions`          | misc       | object  | Provides a standardized location for schema authors to inline re-usable schemas into a more general schema. |  | Always in all versions and at any level. |


[stsi-json_schema-guide]: https://spacetelescope.github.io/understanding-json-schema/

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


## Misc

- While JSON-LD uses the same array representation as JSON, the collection is unordered by default. While order is preserved in regular JSON arrays, it is not in regular JSON-LD arrays unless specifically defined.

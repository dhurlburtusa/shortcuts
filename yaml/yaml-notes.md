# YAML Notes

“YAML Ain’t Markup Language” (abbreviated YAML) is a data serialization
language designed to be human-friendly.  YAML was specifically created to work
well for common use cases such as: configuration files, log files,
interprocess messaging, cross-language data sharing, object persistence, and
debugging of complex data structures.


## Goals

The design goals for YAML are, in decreasing priority:

* YAML is easily readable by humans.
* YAML data is portable between programming languages.
* YAML matches the native data structures of agile languages.
* YAML has a consistent model to support generic tools.
* YAML supports one-pass processing.
* YAML is expressive and extensible.
* YAML is easy to implement and use.


## Relation to JSON

Both JSON and YAML aim to be human readable data interchange formats.
However, JSON and YAML have different priorities.  JSON’s foremost design goal
is simplicity and universality.  Thus, JSON is trivial to generate and parse,
at the cost of reduced human readability.  It also uses a lowest common
denominator information model, ensuring any JSON data can be easily processed
by every modern programming environment.

In contrast, YAML’s foremost design goals are human readability and support
for serializing arbitrary native data structures.  Thus, YAML allows for
extremely readable files, but is more complex to generate and parse.  In
addition, YAML ventures beyond the lowest common denominator data types,
requiring more complex processing when crossing between different programming
environments.

YAML can therefore be viewed as a natural superset of JSON, offering improved
human readability and a more complete information model.  This is also the
case in practice; every JSON file is also a valid YAML file.

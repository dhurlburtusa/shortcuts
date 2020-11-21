# RDF Schema Notes

RDF Schema provides a data-modelling vocabulary for RDF data. RDF Schema is a semantic extension of the basic RDF vocabulary. It provides mechanisms for describing groups of related resources and the relationships between these resources. RDF Schema is written in RDF. These resources are used to determine characteristics of other resources, such as the domains and ranges of properties.

The RDF Schema class and property system is similar to the type systems of object-oriented programming languages. RDF Schema differs from many such systems in that instead of defining a class in terms of the properties its instances may have, RDF Schema describes properties in terms of the classes of resource to which they apply. This is the role of the domain and range mechanisms. Using the RDF approach, it is easy for others to subsequently define additional properties to domains.


## Classes

Resources may be divided into groups called classes. The members of a class are known as instances of the class. Classes are themselves resources. They are often identified by IRIs and may be described using RDF properties. The `rdf:type` property may be used to state that a resource is an instance of a class.

RDF distinguishes between a class and the set of its instances. Associated with each class is a set, called the class extension of the class, which is the set of the instances of the class. Two classes may have the same set of instances but be different classes.

A class may be a member of its own class extension and may be an instance of itself.

The group of resources that are RDF Schema classes is itself a class called `rdfs:Class`.

The `rdfs:subClassOf` property may be used to state that one class is a subclass of another. The term super-class is used as the inverse of subclass.

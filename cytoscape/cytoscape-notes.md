# Cytoscape Notes

Cytoscape.js is an open-source graph theory (a.k.a. network) library written in JS. You can use Cytoscape.js for graph analysis and visualisation.

Cytoscape.js allows you to easily display and manipulate rich, interactive graphs.


## Architecture & API

There are two components in the architecture that a programmer must be concerned with in order to use Cytoscape.js, the core (i.e. a graph instance) and the collection. In Cytoscape.js, the core is a programmer’s main entry point into the library. From the core, a programmer can run layouts, alter the viewport, and perform other operations on the graph as a whole.

The core provides several functions to access elements in the graph. Each of these functions returns a collection, a set of elements in the graph. Functions are available on collections that allow the programmer to filter the collection, perform operations on the collection, traverse the graph about the collection, get data about elements in the collection, and so on.

Note that a collection is immutable by default, meaning that the set of elements within a collection can not be changed. The API returns a new collection with different elements when necessary, instead of mutating the existing collection.

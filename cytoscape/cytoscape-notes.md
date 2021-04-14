# Cytoscape Notes

Cytoscape.js is an open-source graph theory (a.k.a. network) library written in JS. You can use Cytoscape.js for graph analysis and visualisation.

Cytoscape.js allows you to easily display and manipulate rich, interactive graphs.


## Architecture & API

There are two components in the architecture that a programmer must be concerned with in order to use Cytoscape.js, the core (i.e. a graph instance) and the collection. In Cytoscape.js, the core is a programmer’s main entry point into the library. From the core, a programmer can run layouts, alter the viewport, and perform other operations on the graph as a whole.

The core provides several functions to access elements in the graph. Each of these functions returns a collection, a set of elements in the graph. Functions are available on collections that allow the programmer to filter the collection, perform operations on the collection, traverse the graph about the collection, get data about elements in the collection, and so on.

Note that a collection is immutable by default, meaning that the set of elements within a collection can not be changed. The API returns a new collection with different elements when necessary, instead of mutating the existing collection.


## Position

A node’s position refers to the centre point of its body.

There is an important distinction to make for position: A position may be a model position or a rendered position.

A model position — as its name suggests — is the position stored in the model for an element. An element’s model position remains constant, despite changes to zoom and pan. Numeric style property values are specified in model co-ordinates, e.g. a node with width 20px will be 20 pixels wide at zoom 1.

A rendered position is an on-screen location relative to the viewport. For example, a rendered position of `{ x: 100, y: 100 }` specifies a point 100 pixels to the right and 100 pixels down from the top-left corner of the viewport. The model position and rendered position are the same at zoom 1 and pan (0, 0).

An element’s rendered position naturally changes as zoom and pan changes, because the element’s on-screen position in the viewport changes as zooming and panning are applied. Panning is always measured in rendered coordinates.

A node’s position can be set manually, or it can be set automatically using a layout. Because the positions of two nodes influence the lengths of the edges in between them, a layout effectively sets edge lengths.

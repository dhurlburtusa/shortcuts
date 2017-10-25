# Relay Notes

Relay is a JavaScript framework for building data-driven React applications.


## Features

* Declarative: Declare the data your components need with GraphQL, Relay
  determines how and when to fetch your data.

* Colocation: GraphQL is written next to the views that rely on them.  Relay
  aggregates queries into efficient network requests.

* Mutations: Write GraphQL mutations and Relay offers automatic data
  consistency, optimistic updates, and error handling.


## Getting Started

To get started building Relay applications, you will need three things:

* A GraphQL Schema: A description of your data model with an associated set of
  resolve methods that know how to fetch any data your application could ever
  need.

* A GraphQL Server: Any server can be taught to load a schema and speak GraphQL.

* Relay: Relay speaks to GraphQL servers through a network layer.

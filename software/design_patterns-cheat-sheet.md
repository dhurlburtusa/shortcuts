# Design Patterns Cheat Sheet


## Creational Patterns

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Abstract Factory</td>
    <td>
      Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
    </td>
  </tr>
  <tr>
    <td>Builder</td>
    <td>
      Separate the construction of a complex object from its representation, allowing the same construction process to
      create various representations.
    </td>
  </tr>
  <tr>
    <td>Factory Method</td>
    <td>
      Define an interface for creating a single object, but let subclasses decide which class to instantiate.  Factory
      Method lets a class defer instantiation to subclasses (dependency injection).
    </td>
  </tr>
  <tr>
    <td>Lazy Initialization</td>
    <td>
      Tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the
      first time it is needed.  This pattern appears in the GoF catalog as "virtual proxy", an implementation strategy for
      the Proxy pattern.
    </td>
  </tr>
  <tr>
    <td>Multiton</td>
    <td>
      Ensure a class has only named instances, and provide a global point of access to them.
    </td>
  </tr>
  <tr>
    <td>Object Pool</td>
    <td>
      Avoid expensive acquisition and release of resources by recycling objects that are no longer in use.  Can be
      considered a generalisation of connection pool and thread pool patterns.
    </td>
  </tr>
  <tr>
    <td>Prototype</td>
    <td>
      Specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an
      existing object, thus boosting performance and keeping memory footprints to a minimum.
    </td>
  </tr>
  <tr>
    <td>Resource acquisition is initialization</td>
    <td>
      Ensure that resources are properly released by tying them to the lifespan of suitable objects.
    </td>
  </tr>
  <tr>
    <td>Singleton</td>
    <td>
      Ensure a class has only one instance, and provide a global point of access to it.
    </td>
  </tr>
</table>


## Structural Patterns

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Adapter or Wrapper or Translator</td>
    <td>
      Convert the interface of a class into another interface clients expect.  An adapter lets classes work together that
      could not otherwise because of incompatible interfaces.  The enterprise integration pattern equivalent is the
      translator.
    </td>
  </tr>
  <tr>
    <td>Bridge</td>
    <td>
      Decouple an abstraction from its implementation allowing the two to vary independently.
    </td>
  </tr>
  <tr>
    <td>Composite</td>
    <td>
      Compose objects into tree structures to represent part-whole hierarchies.  Composite lets clients treat individual
      objects and compositions of objects uniformly.
    </td>
  </tr>
  <tr>
    <td>Decorator</td>
    <td>
      Attach additional responsibilities to an object dynamically keeping the same interface.  Decorators provide a flexible
      alternative to subclassing for extending functionality.
    </td>
  </tr>
  <tr>
    <td>Extension Object</td>
    <td>
      Adding functionality to a hierarchy without changing the hierarchy.
    </td>
  </tr>
  <tr>
    <td>Facade</td>
    <td>
      Provide a unified interface to a set of interfaces in a subsystem.  Facade defines a higher-level interface that makes
      the subsystem easier to use.
    </td>
  </tr>
  <tr>
    <td>Flyweight</td>
    <td>
      Use sharing to support large numbers of similar objects efficiently.
    </td>
  </tr>
  <tr>
    <td>Front Controller</td>
    <td>
      The pattern relates to the design of Web applications.  It provides a centralized entry point for handling requests.
    </td>
  </tr>
  <tr>
    <td>Marker</td>
    <td>
      Empty interface to associate metadata with a class.
    </td>
  </tr>
  <tr>
    <td>Module</td>
    <td>
      Group several related elements, such as classes, singletons, methods, globally used, into a single conceptual entity.
    </td>
  </tr>
  <tr>
    <td>Proxy</td>
    <td>
      Provide a surrogate or placeholder for another object to control access to it.
    </td>
  </tr>
  <tr>
    <td>Twin</td>
    <td>
      Twin allows modeling of multiple inheritance in programming languages that do not support this feature.
    </td>
  </tr>
</table>

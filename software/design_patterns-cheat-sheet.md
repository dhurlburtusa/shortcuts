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


## Behavioral Patterns

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Blackboard</td>
    <td>
      Artificial intelligence pattern for combining disparate sources of data.
    </td>
  </tr>
  <tr>
    <td>Chain of Responsibility</td>
    <td>
      Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.
      Chain the receiving objects and pass the request along the chain until an object handles it.
    </td>
  </tr>
  <tr>
    <td>Command</td>
    <td>
      Encapsulate a request as an object, thereby allowing for the parameterization of clients with different requests, and
      the queuing or logging of requests.  It also allows for the support of undoable operations.
    </td>
  </tr>
  <tr>
    <td>Interpreter</td>
    <td>
      Given a language, define a representation for its grammar along with an interpreter that uses the representation to
      interpret sentences in the language.
    </td>
  </tr>
  <tr>
    <td>Iterator</td>
    <td>
      Provide a way to access the elements of an aggregate object sequentially without exposing its underlying
      representation.
    </td>
  </tr>
  <tr>
    <td>Mediator</td>
    <td>
      Define an object that encapsulates how a set of objects interact.  Mediator promotes loose coupling by keeping objects
      from referring to each other explicitly, and it allows their interaction to vary independently.
    </td>
  </tr>
  <tr>
    <td>Memento</td>
    <td>
      Without violating encapsulation, capture and externalize an object's internal state allowing the object to be restored
      to this state later.
    </td>
  </tr>
  <tr>
    <td>Null Object</td>
    <td>
      Avoid null references by providing a default object.
    </td>
  </tr>
  <tr>
    <td>Observer or Publish/subscribe</td>
    <td>
      Define a one-to-many dependency between objects where a state change in one object results in all its dependents being
      notified and updated automatically.
    </td>
  </tr>
  <tr>
    <td>Servant</td>
    <td>
      Define common functionality for a group of classes.
    </td>
  </tr>
  <tr>
    <td>Specification</td>
    <td>
      Recombinable business logic in a Boolean fashion.
    </td>
  </tr>
  <tr>
    <td>State</td>
    <td>
      Allow an object to alter its behavior when its internal state changes.  The object will appear to change its class.
    </td>
  </tr>
  <tr>
    <td>Strategy</td>
    <td>
      Define a family of algorithms, encapsulate each one, and make them interchangeable.  Strategy lets the algorithm vary
      independently from clients that use it.
    </td>
  </tr>
  <tr>
    <td>Template Method</td>
    <td>
      Define the skeleton of an algorithm in an operation, deferring some steps to subclasses.  Template method lets
      subclasses redefine certain steps of an algorithm without changing the algorithm's structure.
    </td>
  </tr>
  <tr>
    <td>Visitor</td>
    <td>
      Represent an operation to be performed on the elements of an object structure.  Visitor lets a new operation be
      defined without changing the classes of the elements on which it operates.
    </td>
  </tr>
</table>

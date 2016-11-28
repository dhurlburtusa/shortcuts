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

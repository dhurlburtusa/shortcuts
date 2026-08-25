# Stack Notes

A stack is an abstract data type that serves as a collection of elements with two main operations:

- **Push**, which adds an element to the collection, and
- **Pop**, which removes the most recently added element.

Additionally, a **peek** operation can, without modifying the stack, return the value of the last element added.

The order in which elements are added to or removed from a stack is described as last in, first out, referred to by the acronym **LIFO**.

Considered a **sequential collection**, a stack has one end which is the only position at which the push and pop operations may occur, the top of the stack, and is fixed at the other end, the bottom.

A stack may be implemented to have a bounded capacity. If the stack is full and does not contain enough space to accept another element, the stack is in a state of stack overflow.

See https://en.wikipedia.org/wiki/Stack_(abstract_data_type) for details.

## Implementation

Typically implemented using an array or a singly-linked list.

# Queue Notes

A queue is an abstract data type that serves as an ordered collection of entities. By convention, the end of the queue where elements are added is called the back, tail, or rear of the queue. The end of the queue where elements are removed is called the head or front of the queue. It supports two main operations.

- **Enqueue**, which adds one element to the rear of the queue, and
- **Dequeue**, which removes one element from the front of the queue.

Other operations may also be allowed, often including a **peek** or front operation that returns the value of the next element to be dequeued without dequeuing it.

The operations of a queue make it a first-in-first-out (**FIFO**) data structure as the first element added to the queue is the first one removed.

A queue is an example of a linear data structure, or more abstractly a sequential collection.

See https://en.wikipedia.org/wiki/Queue_(abstract_data_type) for details.

## Implementation

A queue may be implemented as circular buffers and linked lists, or by using both the stack pointer and the base pointer.

- Linked list
  + Doubly linked list has O(1) insertion and deletion at both ends.
  + Singly linked list has O(1) insertion and deletion at one end. However, keeping a pointer to the last node in addition to the first node will enable it to be O(1) at both ends.

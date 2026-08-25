# Priority Queue Notes

A priority queue is an abstract data type similar to a regular queue where each element has an associated priority determining its order of service. Priority queue serves highest priority items first. Priority values have to be instances of an ordered data type, and higher priority can be given either to the lesser or to the greater values with respect to the given order relation.

## Operations

### Max-Priority Queue

- `insert(S, element, priority)`: add an element to set `S` with an associated priority. 
- `find_max(S)`: return the element with the highest priority.
- `extract_max(S)`: remove the element from set `S` with highest priority and return it.
- `increase_key(S, element, k)`: increase the associated priority with an element to the new value `k`.

### Min-Priority Queue

- `insert(S, element, priority)`: add an element to set `S` with an associated priority. 
- `find_min(S)`: return the element with the lowest priority.
- `extract_min(S)`: remove the element from set `S` with lowest priority and return it.
- `decrease_key(S, element, k)`: decrease the associated priority with an element to the new value `k`.

In some implementations, if two elements have the same priority, they are served in the same order in which they were enqueued. In other implementations, the order of elements with the same priority is undefined.

## Implementation

Priority queues are often implemented using heaps.

# Computational Complexity Theory Notes

Computational complexity theory focuses on classifying computational problems according to their resource (memory, storage, time, etc) usage, and explores the relationships between these classifications. A computational problem is a task solved by a computer and is solvable by mechanical application of mathematical steps, such as an algorithm.

See https://en.wikipedia.org/wiki/Computational_complexity_theory for details.

## Complexity Classes

### Time Complexity Classes

- [P](https://en.wikipedia.org/wiki/P_(complexity)): the class of problems that are solvable by a deterministic Turing machine in polynomial time. It is often said to be the class of problems that can be solved "quickly" or "efficiently" by a deterministic computer.
- [NP](https://en.wikipedia.org/wiki/NP_(complexity)): the class of problems that are solvable by a nondeterministic Turing machine in polynomial time. It can be equivalently defined as the class of problems whose solutions are verifiable by a deterministic Turing machine in polynomial time.
- [EXPTIME](https://en.wikipedia.org/wiki/EXPTIME): the class of decision problems solvable by a deterministic Turing machine in exponential time.
- [NEXPTIME](https://en.wikipedia.org/wiki/NEXPTIME): the class of decision problems solvable by a nondeterministic Turing machine in exponential time.

### Space Complexity Classes

- [L](https://en.wikipedia.org/wiki/L_(complexity)): the class of problems solvable in logarithmic space on a deterministic Turing machine.
- [NL](https://en.wikipedia.org/wiki/NL_(complexity)): the class of problems solvable in logarithmic space on a nondeterministic Turing machine.
- PSPACE
- NPSPACE
- EXPSPACE
- NEXPSPACE

See https://en.wikipedia.org/wiki/Complexity_class for details.

# Linear Algebra Notes

## Vectors

A **vector** is an ordered list of numbers like $\langle 3, -2, 0 \rangle$. These lists can be as long as we need.

The **coordinates** of a vector only tell us the displacement in each dimension; **not** where it is located in space.

A vector in **standard position** has its tail located at the origin.

Zero Vector: $\vec{0} = \langle 0, 0, \dots \rangle$

### Vector Addition

If $\vec{v}=\langle v_1, v_2 \rangle$ and $\vec{w}=\langle w_1, w_2 \rangle$, then $\vec{v}+\vec{w}=\langle v_1+w_1, v_2+w_2 \rangle$

### Scalar Multiplication

If $\vec{v} = \langle v_1, v_2 \rangle$ and $c$ is a real number, then $c\vec{v} = \langle cv_1, cv_2 \rangle$

### Properties of Vector Operations

Let $\vec{v}, \vec{w}, \vec{x} \in ℝ^n$ be vectors and let $c, d \in ℝ$ be scalars. Then

<ol type="a">
  <li>$\vec{v} + \vec{w} = \vec{w} + \vec{v}$ (commutativity)</li>
  <li>$(\vec{v} + \vec{w}) + \vec{x} = \vec{v} + (\vec{w} + \vec{x})$ (associativity)</li>
  <li>$c(\vec{v} + \vec{w}) = c\vec{v} + c\vec{w}$ (distributivity)</li>
  <li>$(c + d)\vec{v} = c\vec{v} + d\vec{v}$ (distributivity)</li>
  <li>$\vec{v} + \vec{0} = \vec{v}$</li>
  <li>$\vec{v} + (-\vec{v}) = \vec{0}$</li>
  <li>$c(d\vec{v}) = (cd)\vec{v}$</li>
</ol>

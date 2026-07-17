# Linear Algebra Notes

## Vectors

A **vector** is an ordered list of numbers like $`\langle 3, -2, 0 \rangle`$. These lists can be as long as we need.

The **coordinates** of a vector only tell us the displacement in each dimension; **not** where it is located in space.

A vector in **standard position** has its tail located at the origin.

### Special Vectors

**Zero Vector**

$`\vec{0} = \langle 0, 0, \dots \rangle`$

**Standard Basis Vectors**

$`\vec{e_1} = \langle 1, 0, \dots, 0 \rangle`$, $`\vec{e_2} = \langle 0, 1, 0, \dots, 0 \rangle`$, and in general $`\vec{e_j} = \langle 0, \dots, 0, 1, 0, \dots, 0 \rangle`$ where the $`j^{th}`$ entry equals 1.

### Length of a Vector

The **length** of a vector $`\vec{v} = \langle v_1, v_2, \dots, v_n \rangle \in ℝ^n`$, denoted by $`\| \vec{v} \|`$, is defined by

```math
\| \vec{v} \| = \sqrt{\vec{v} ⋅ \vec{v}} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}
```

### Properties of Vector Length

Let $`\vec{v} \in ℝ^n`$ be a vector and let $`c \in ℝ`$ be a scalar. Then

<ol type="a">
  <li>$\| c\vec{v} \| = |c| \| \vec{v} \|$</li>
  <li>$\| \vec{v} \| = 0$ if and only if $\vec{v} = \vec{0}$
  </li>
</ol>


### Vector Addition

If $`\vec{v} = \langle v_1, v_2 \rangle`$ and $`\vec{w} = \langle w_1, w_2 \rangle`$, then $`\vec{v} + \vec{w} = \langle v_1 + w_1, v_2 + w_2 \rangle`$.

### Scalar Multiplication

If $`\vec{v} = \langle v_1, v_2 \rangle`$ and $`c`$ is a real number, then $`c\vec{v} = \langle cv_1, cv_2 \rangle`$.

### Properties of Vector Operations

Let $`\vec{v}, \vec{w}, \vec{x} \in ℝ^n`$ be vectors and let $`c, d \in ℝ`$ be scalars. Then

<ol type="a">
  <li>$\vec{v} + \vec{w} = \vec{w} + \vec{v}$ (commutativity)</li>
  <li>$(\vec{v} + \vec{w}) + \vec{x} = \vec{v} + (\vec{w} + \vec{x})$ (associativity)</li>
  <li>$c(\vec{v} + \vec{w}) = c\vec{v} + c\vec{w}$ (distributivity)</li>
  <li>$(c + d)\vec{v} = c\vec{v} + d\vec{v}$ (distributivity)</li>
  <li>$\vec{v} + \vec{0} = \vec{v}$</li>
  <li>$\vec{v} + (-\vec{v}) = \vec{0}$</li>
  <li>$c(d\vec{v}) = (cd)\vec{v}$</li>
</ol>

### Linear Combinations

**Definition — Linear Combinations**

A **linear combination** of $`\vec{v_1}, \vec{v_2}, \dots, \vec{v_k} \in ℝ^n`$ is a vector of the form

```math
c_1\vec{v_1} + c_2\vec{v_2} + \dots + c_k\vec{v_k}
```

where $`c_1, c_2, \dots, c_k \in ℝ`$.

### The Dot Product

**Definition — Dot Product**

If $`\vec{v} = \langle v_1, v_2, \dots, v_n \rangle \in ℝ^n`$ and $`\vec{w} = \langle w_1, w_2, \dots, w_n \rangle \in ℝ^n`$ then the **dot product** of $`\vec{v}`$ and $`\vec{w}`$, denoted by $`\vec{v} ⋅ \vec{w}`$, is the quantity

```math
\vec{v} ⋅ \vec{w} = v_1w_1 + v_2w_2 + \dots + v_nw_n
```

### Properties of the Dot Product

Let $`\vec{v}, \vec{w}, \vec{x} \in ℝ^n`$ be vectors and let $`c \in ℝ`$ be a scalar. Then

<ol type="a">
  <li>$\vec{v} ⋅ \vec{w} = \vec{w} ⋅ \vec{v}$ (commutativity)</li>
  <li>$\vec{v} ⋅ (\vec{w} + \vec{x}) = \vec{v} ⋅ \vec{w} + \vec{v} ⋅ \vec{x}$ (distributivity)</li>
  <li>$(c\vec{v}) ⋅ \vec{w} = c(\vec{v} ⋅ \vec{w})$</li>
</ol>

### Cauchy-Schwarz Inequality

Suppose that $`\vec{v}, \vec{w} \in ℝ^n`$ are vectors. Then $`| \vec{v} ⋅ \vec{w} | \leq \| \vec{v} \| \| \vec{w} \|`$.

### Triangle Inequality

Suppose that $`\vec{v}, \vec{w} \in ℝ^n`$ are vectors. Then $`\| \vec{v} + \vec{w} \| \leq \| \vec{v} \| + \| \vec{w} \|`$.

### Angle Between Vectors

The **angle** $`\theta`$ between two non-zero vectors $`\vec{v}, \vec{w} \in ℝ^n`$ is the quantity

```math
\theta = \arccos \left( \frac{\vec{v} ⋅ \vec{w}}{\| \vec{v} \| \| \vec{w} \|} \right)
```

### Orthogonality

Two vectors $`\vec{v}, \vec{w} \in ℝ^n`$ are called **orthogonal** if $`\vec{v} ⋅ \vec{w} = 0`$.

## Matrices

A **matrix** is rectangular array of numbers. Those numbers are called the **entries** or **elements** of the matrix.

The **size** of a matrix is a description of the number of rows and columns that it has. A matrix with $`m`$ rows and $`n`$ columns has size $`m \times n`$.

A $`1 \times m`$ matrix is called a **row matrix** or **row vector**. An $`n \times 1`$ matrix is called a **column matrix** or **column vector**. An $`m \times m`$ matrix is called **square**.

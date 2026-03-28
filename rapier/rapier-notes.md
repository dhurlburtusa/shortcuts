# Rapier Notes

## Colliders

Colliders represent the geometric shapes that generate contacts and collision events when they touch. Attaching one or multiple colliders to a rigid body allow the rigid-body to be affected by contact forces.

### Collider Types

- A solid collider represents a geometric shape that can have contact points with other colliders to generate contact forces to prevent objects from penetrating-each-others.
- Sensor colliders on the other end don't generate contacts: they only generate intersection events when one sensor collider and another collider start/stop touching. Sensor colliders are generally used to detect when something enters an area. (Note that sensors do contribute to the mass of a rigid-body they are attached to.)

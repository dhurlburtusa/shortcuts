# Three.js Notes

## Untested Ideas

When building a web application, the app can be composed of the following main items:

- Application:
  + Composed of one or more pages.
  + UI allows navigation between pages.
  + In a game, different pages might be used for different levels.
- Page:
  + Depending on the purpose of the page, it may be composed of:
    * Plain old HTML/SVG and CSS.
    * A 2D/3D world rendered to an HTML canvas.
- 2D/3D world:
  + Composed of a scene graph.
  + May have multiple active cameras, each rendered to a different HTML canvas (e.g., to render the view of multiple players/characters in a game at the same time). I believe the scene graph can be shared (to be verified).
  + May use "entities". Entities could be things like a game character. It will have a 3D object (e.g., a Three.js Mesh) to be rendered. The 3D object could be the root of a tree of 3D objects that together represent the entire entity. It may have different LOD nodes to control which Mesh to rendered depending on proximity to the active camera.
  + Uses a physics engine to transform certain entities/3D objects.

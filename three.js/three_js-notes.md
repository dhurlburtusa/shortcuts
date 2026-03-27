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
- Page Initialization:
  + Asynchronously load all dependencies (e.g., glTF files, textures, etc).
  + Initialize a world
    * Composed of:
      - The scene graph
      - One or more views
        + Composed of a camera, a canvas, and a renderer
    * One scene per world. However, can have more than one view. May have one view per character
- Buiding a Scene Graph:
  + Has a `root` property, a ref to the `THREE.scene` instance.
  + Has other convenience properties that contain references to main nodes of the graph. For example, may have an array containing references to entities that need to be updated each clock time/frame.
  + After all the dependencies are loaded:
    * Solutions:
      - Lazily Create Shareables:
        + Enable a way to lazily create shareables (e.g., materials, geometries, etc) as unshared objects are created.
        + Will need a way to identify/describe the sharable object.
        + Pro: Only creates the sharable objects need by the unsharable objects.
      - Create All Shareables First:
        + Create all shareable objects (e.g., materials, geometries, etc).
        + Make these shareable objects available to use as the rest of the scene is created.
        + Pro: May be a little easier to implement than lazy solution.
        + Con: May create shareable objects that aren't needed.
- Switching worlds/scene graphs:
  + Perform proper clean up. See https://threejs.org/manual/#en/how-to-dispose-of-objects.

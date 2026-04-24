# Three.js Notes

## Installation

```sh
npm install --save three
```

## Geometry

`Geometry` objects represent the vertex data of some piece of geometry like a sphere, cube, plane, dog, cat, human, tree, building, etc... Three.js provides many kinds of built in geometry primitives. You can also create custom geometry as well as load geometry from files.

### Primitives

Three.js has a large number of geometry primitives. Geometry primitives are generally 3D shapes that are generated at runtime with a bunch of parameters.

- Simple:
  + Box
  + Capsule
  + Circle
  + Cone
  + Cylinder
  + Plane
  + Ring
  + Sphere
  + Tetrahedron (4 sides)
  + Octahedron (8 sides)
  + Dodecahedron (12 sides)
  + Icosahedron (20 sides)
  + Torus
  + Torus Knot
- Complex:
  + Extrude
  + Lathe
  + Parametric
  + Polyhedron
  + Shape
  + Text
  + Tube
- Compound:
  + Edges
  + Wireframe
  
See https://threejs.org/manual/#en/primitives.

## Material

- Hierarchy:
  + `Material`
    * `LineBasicMaterial`
      - `LineDashedMaterial`
    * `MeshBasicMaterial`
    * `MeshDepthMaterial`
    * `MeshDistanceMaterial`
    * `MeshLambertMaterial`
    * `MeshMatcapMaterial`
    * `MeshNormalMaterial`
    * `MeshPhongMaterial`
    * `MeshStandardMaterial`
      - `MeshPhysicalMaterial`
    * `MeshToonMaterial`
    * `NodeMaterial`
      - `Line2NodeMaterial`
      - `LineBasicNodeMaterial`
      - `LineDashedNodeMaterial`
      - `MeshBasicNodeMaterial`
      - `MeshLambertNodeMaterial`
      - `MeshMatcapNodeMaterial`
      - `MeshNormalNodeMaterial`
      - `MeshPhongNodeMaterial`
      - `MeshStandardNodeMaterial`
        + `MeshPhysicalNodeMaterial`
          * `MeshSSSNodeMaterial`
      - `MeshToonNodeMaterial`
      - `ShadowNodeMaterial`
      - `SpriteNodeMaterial`
        + `PointsNodeMaterial`
      - `VolumeNodeMaterial`
    * `PointsMaterial`
    * `ShaderMaterial`
      - `LineMaterial`
      - `RawShaderMaterial`
    * `ShadowMaterial`
    * `SpriteMaterial`
- `MeshBasicMaterial`
  + Not affected by lights.
  + Common properties:
    * `color`
    * `combine`
    * `fog`
    * `opacity` (inherited)
    * `reflectivity`
    * `side` (inherited)
    * `transparent` (inherited)
    * `visible` (inherited)
    * `wireframe`
- `MeshLambertMaterial`
  + Computes lighting only at the vertices.
  + Common properties:
    * `color`
    * `combine`
    * `emissive`
    * `flatShading`
    * `fog`
    * `opacity` (inherited)
    * `reflectivity`
    * `side` (inherited)
    * `transparent` (inherited)
    * `visible` (inherited)
    * `wireframe`
- `MeshMatcapMaterial`
  + Defined by a MatCap (or Lit Sphere) texture, which encodes the material color and shading.
  + Does not respond to lights.
  + Will cast a shadow.
  + Will not self-shadow or receive shadows.
  + Common properties:
    * `color`
    * `flatShading`
    * `fog`
    * `matcap`
    * `opacity` (inherited)
    * `side` (inherited)
    * `transparent` (inherited)
    * `visible` (inherited)
    * `wireframe`
- `MeshPhongMaterial`
  + Computes lighting at every pixel.
  + Supports specular highlights.
  + Uses per-fragment shading.
  + Common properties:
    * `color`
    * `combine`
    * `emissive`
    * `flatShading`
    * `fog`
    * `opacity` (inherited)
    * `reflectivity`
    * `shininess`
    * `side` (inherited)
    * `specular`
    * `transparent` (inherited)
    * `visible` (inherited)
    * `wireframe`
- `MeshStandardMaterial`
  + Physically based, using metallic-roughness workflow.
  + Common properties:
    * `color`
    * `emissive`
    * `flatShading`
    * `fog`
    * `metalness`
    * `opacity` (inherited)
    * `roughness`
    * `side` (inherited)
    * `transparent` (inherited)
    * `visible` (inherited)
    * `wireframe`
- `MeshPhysicalMaterial`
  + Extends `MeshStandardMaterial`.
  + Physically based, using metallic-roughness workflow.
  + Common properties:
    * `anisotropy`
    * `attenuationColor`
    * `clearcoat`
    * `clearcoatRoughness`
    * `color` (inherited)
    * `emissive` (inherited)
    * `flatShading` (inherited)
    * `fog` (inherited)
    * `ior`
    * `iridescense`
    * `metalness` (inherited)
    * `opacity` (inherited)
    * `reflectivity`
    * `roughness` (inherited)
    * `sheen`
    * `sheenColor`
    * `sheenRoughness`
    * `side` (inherited)
    * `specularColor`
    * `specularIntensity`
    * `thickness`
    * `transmission`
    * `transparent` (inherited)
    * `visible` (inherited)
    * `wireframe` (inherited)
- `MeshToonMaterial`
  + Similar to the `MeshPhongMaterial` but it uses a gradient map (an X by 1 texture) to decide how to shade rather than shading smoothly.
  + Common properties:
    * `color`
    * `emissive`
    * `fog`
    * `gradientMap`
    * `opacity` (inherited)
    * `side` (inherited)
    * `transparent` (inherited)
    * `visible` (inherited)
    * `wireframe`

## "Disposables"

Several Three.js objects hold onto resources. Those resources should be release when no longer needed. Many Three.js objects will release those resources when their `dispose` method is called.

Here is a partial list of the types of Three.js objects that should be disposed of.

- Controls:
  + `Constrols` (abstract base class)
  + `ArcballControls`
  + `DragControls`
  + `FirstPersonControls`
  + `FlyControls`
  + `MapControls`
  + `OrbitControls`
  + `PointerLockControls`
  + `TrackballControls`
  + `TransformControls`
- Geometries:
  + `BufferGeometry` (base class)
  + `BoxGeometry`
  + `CapsuleGeometry`
  + `CircleGeometry`
  + `ConeGeometry`
  + `CylinderGeometry`
  + `Icosahedron`
  + `Plane`
  + `Sprere`
  + `Torus`
  + Many others
- Helpers:
  + `ArrowHelper`
  + `AxesHelper`
  + `Box3Helper`
  + `BoxHelper`
  + `CameraHelper`
  + `DirectionalLightHelper`
  + `GridHelper`
  + `HemisphereLightHelper`
  + `LightProbeHelper`
  + `OctreeHelper`
  + `PlaneHelper`
  + `PointLightHelper`
  + `PolarGridHelper`
  + `PositionalAudioHelper`
  + `RapierHelper`
  + `RectAreaLightHelper`
  + `SelectionHelper`
  + `SkeletonHelper`
  + `SpotLightHelper`
  + `TextureHelper`
  + `VertexNormalsHelper`
  + `VertexTangentsHelper`
  + `ViewHelper`
  + `WorkerPool`
  + Many others
- Lights:
  + `Light` (abstract base class)
  + `AmbientLight`
  + `DirectionalLight`
  + `HemisphereLight`
  + `IESSpotLight`
  + `LightProbe`
  + `PointLight`
  + `ProjectorLight`
  + `RectAreaLight`
  + `SpotLight`
- Light Shadows:
  + `LightShadow` (abstract base class)
  + `DirectionalLightShadow`
  + `PointLightShadow`
  + `SpotLightShadow`
- Loaders:
  + Some loaders need to be disposed, but not all.
  + `KTX2Loader`
  + `Rhino3dmLoader`
- Materials:
  + `Material` (abstract base class)
  + `MeshBasicMaterial`
  + `MeshDepthMaterial`
  + `MeshLambertMaterial`
  + `MeshMatcapMaterial`
  + `MeshPhongMaterial`
  + `MeshPhysicalMaterial`
  + `MeshStandardMaterial`
  + `MeshToonMaterial`
  + `PointsMaterial`
  + `SpriteMaterial`
  + Several others
- Nodes:
  + `Node` (base class)
  + `ComputeNode`
  + `PassNode`
  + Many others
- Passes:
  + `Pass` (abstract base class)
- Renderers:
  + `Renderer` (base class)
  + `GPUComputationRenderer`
  + `WebGLRenderer`
  + `WebGPURenderer`
- Textures:
  + `Texture` (base class)
- Misc:
  + `BatchedMesh`
  + `CanvasTarget`
  + `ColorEnvironment`
  + `DebugEnvironment`
  + `EffectComposer`
  + `FullScreenQuad`
  + `HTMLMesh`
  + `InstancedMesh`
  + `Lensflare`
  + `LensflareMesh`
  + `OculusHandPointerModel`
  + `PMREMGenerator`
  + `Reflector`
  + `Refractor`
  + `RenderPipeline`
  + `RenderTarget`
    * `CubeRenderTarget`
    * `RenderTarget3D`
    * `WebGL3DRenderTarget`
    * `WebGLArrayRenderTarget`
    * `WebGLCubeRenderTarget`
    * `WebGLRenderTarget`
  + `RoomEnvironment`
  + `Skeleton`
  + `Timer`
  + `TimestampQueryPool` (abstract base class)
    * `WebGLTimestampQueryPool`
    * `WebGPUTimestampQueryPool`
  + `UniformsGroup`
  + Several others

See https://threejs.org/manual/#en/how-to-dispose-of-objects.

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

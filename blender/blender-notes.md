# Blender Notes

## 3D File Formats

See https://www.thepixellab.net/8-best-3d-file-formats

## Organization

Scenes are a way to organize your work. Each blend-file can contain multiple scenes.

## Shortcuts

- Delete: `X`
- Duplicate: `Shift + D`
- Switch between Object and Edit modes: `Tab`
- Move 3D cursor to origin: `Shift + C`
- Open Move to Collection menu: `M`
- Loop cut (edit mode): `Ctrl + R`/`Cmd + R`
- Join meshes: `Ctrl + J`/`Cmd + J`
- Open Add menu: `Shift + A`
- Set 3D rotation center: `Option + MMB`
- Clear Location: `Alt + G`/`Opt + G`
- Clear Rotation: `Alt + R`/`Opt + R`
- Clear Scale: `Alt + S`/`Opt + S`

**Edit Mode**

- Extrude: `E`
- Inset: `I`
- Bevel: `Ctrl + B`/`Cmd + B`
- Loop Cut: `Ctrl + R`/`Cmd + R`
- Open Separate menu: `P`

## Tips

See https://www.youtube.com/watch?v=KfSQh2dFCik.

**Set Transform Apply To**

When applying transforms (e.g., bevel) to objects, you may need to set which properties the transform should apply to.

Use `Ctrl + A`/`Cmd + A` to open the Apply menu. Then select which properties to apply the subsequent transformation.

See https://docs.blender.org/manual/en/latest/scene_layout/object/editing/apply.html for details.

**Set Origin**

Sometimes, after applying a transformation to an object, its origin may be moved to an unintended location. To set it back to the intended location, `RMB` to open the Object context menu. Then select where to move the object's origin.

See https://docs.blender.org/manual/en/latest/scene_layout/object/origin.html#set-origin for details.

**Easily Set Camera Position**

- Change to Camera Perspective
- Set View Lock to Lock Camera to View (camera frame becomes outlined in red)
- Move view to desired position
- Unselect Lock Camera to View

To set View Lock to Lock Camera to View:

- `N` to open Sidebar
- Select View tab
- Under View > View Lock: select Lock Camera to View

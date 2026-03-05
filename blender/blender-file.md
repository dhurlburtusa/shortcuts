# Blender File

## My Common Blender File Changes

**From the Outliner editor**

- Move the Camera and Light to the Scene Collection.
- Make the Camera and Light unselectable.

**From the Properties editor**

Change the following properties.

- Render:
  + Render Engine: Cycles
    * Device: GPU
    * Sampling:
      - Viewport:
        + Add a new preset called Fast Preview with the following values:
          * Noise Threshold: (checked), 0.25
          * Max Samples: 2
          * Min Samples: 0
    * Performance:
      - Memory:
        + Use Tiling: (checked)
        + Tile Size: 480
      - Acceleration Structure:
        + Use Spatial Splits: (checked)
      - Final Render:
        + Persistent Data: (checked)
- Output:
  + Output: //output/
- Scene:
  + Units:
    * Length: Millimeters or whatever unit is easier to work with
- Camera:
  + Lens:
    * Clip Start: 1 mm

# Blender File

## My Common Blender File Changes

- Render:
  + Render Engine: Cycles
    * Device: GPU
    * Check Open Shading Language
    * Sampling:
      - Viewport:
        + Add a new preset called Fast Preview with the following values:
          * Noise Threshold: (checked), 0.25
          * Max Samples: 2
          * Min Samples: 0
          * Denoise: (checked)
            - Denoiser: Automatic
            - Passes: Albedo
            - Prefilter: Fast
            - Quality: Fast
            - Start Sample: 1
            - Use GPU: checked
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
    * Length: Millimeters
- Camera:
  + Lens:
    * Clip Start: 1 mm

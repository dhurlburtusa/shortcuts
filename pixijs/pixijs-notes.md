# Pixi.js Notes

## Optimization

- See [Performance Tips](https://pixijs.com/8.x/guides/concepts/performance-tips).
- On a `Container`, setting the `width` and `height` individually can be an expensive operation, as it requires recalculating the bounds of the container and its children. To avoid this, you can use `setSize` to set both properties at once.
- Use render groups for UI layers, particle systems, or large moving subtrees. See the [Render Groups guide](https://pixijs.com/8.x/guides/concepts/render-groups) for details.
- By rendering a container and its children to a texture, `Container#cacheAsTexture` can significantly improve performance for static or infrequently updated containers. See [Cache as Texture](https://pixijs.com/8.x/guides/components/scene-objects/container#cache-as-texture) for details.

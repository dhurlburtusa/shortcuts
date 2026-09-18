# Pixi.js Notes

## Uncategorized

- On a `Container`, setting the `width` and `height` individually can be an expensive operation, as it requires recalculating the bounds of the container and its children. To avoid this, you can use `setSize` to set both properties at once.

# Pygame Notes

## Optimization

- Pixel access on hardware Surfaces is slow and not recommended. See https://pyga.me/docs/ref/surface.html (no direct link).
- Call `Surface#lock` when repeatedly calling methods that lock the surface. See https://pyga.me/docs/ref/surface.html#pygame.Surface.lock and other lock documentation in the same page.

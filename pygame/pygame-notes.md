# Pygame Notes

## Optimization

- Pixel access on hardware Surfaces is slow and not recommended. See https://pyga.me/docs/ref/surface.html (no direct link).
- Call `Surface#lock` when repeatedly calling methods (`get_at`, `set_at`, `get_at_mapped`, `get_bounding_rect`, `get_buffer`, and `get_view` (may be)) that lock the surface. See https://pyga.me/docs/ref/surface.html#pygame.Surface.lock and other lock documentation in the same page.

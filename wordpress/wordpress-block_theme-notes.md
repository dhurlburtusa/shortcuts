# WordPress Block Theme Notes

## Files and Folders

Block themes also follow a standard structure in how many of those files are laid out.

- `assets/`
  + `fonts/`
  + `images/`
  + `scripts/`
  + `styles/`
  + `videos/`
- `parts/`
  + Houses custom template parts for your theme. Parts are smaller sections that can be included within top-level templates. Often, this will include things like headers, footers, and sidebars.
  + `footer.html`
  + `header.html`
  + others
- `patterns/`
  + Reusable patterns made up of one or more blocks that users can insert via the editor interface. WordPress will automatically register files included in this folder.
  + `example.php`
  + others
- `styles/`
  + Variations on the theme’s global settings and styles stored in individual JSON files.
  + `example.json`
  + others
- `templates/`
  + Files that represent the overall document structure of the front-end. Templates are made up of block markup and are what site visitors see.
  + `404.html`
  + `archive.html`
  + `index.html`
    * **Required**
  + `singular.html`
  + others
- `README.txt`
- `functions.php`
- `screenshot.png`
- `style.css`
  + **Required**
- `theme.json`
  + Used to configure settings and styles for the site, integrating with the user interface.

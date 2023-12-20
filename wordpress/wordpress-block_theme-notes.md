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

## style.css

### File Header

The `style.css` file header is used to configure data about the theme.

When determining which themes are available to activate, WordPress searches through each folder under `/wp-content/themes`, looking for a `style.css` file. If one is found, it pulls the first 8kb of data from the file and determines if there is a file header with standard fields defined.

The following example demonstrates the recommended fields.

```css
/*
Theme Name: My Theme
Version: 0.0
Description: My Theme is ...
Author: Me
Text Domain: my-theme
Tested up to: 6.4
Requires at least: 6.0
Requires PHP: 8.0
License: MIT
License URI: https://spdx.org/licenses/MIT.html
*/
```

#### Child Theme Header Fields

A child theme also supports the `Template` field which is what indicates that it is a child theme. The `Template` field is used to designate the parent theme's folder relative to the `wp-content/themes` directory.

```css
/*
Theme Name: My Child Theme
Template: parent-theme
...
*/
```

See https://developer.wordpress.org/themes/core-concepts/main-stylesheet/ for details.

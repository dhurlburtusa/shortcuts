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
  + Reusable patterns made up of one or more blocks that users can insert via the editor interface. WordPress will automatically register patterns included in this folder when a valid header is provided.
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
- `embed.php`
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

## CSS Custom Properties

WordPress generates several CSS properties—many based on the configuration provided in `theme.json`.

`--wp--custom--{$level-1}--{$level-2}--...--{$level-n}`

`var:custom|$level-1|$level-2|...|$level-n`

`--wp--preset–{$feature}-{$slug}`

where `$feature` is one of `aspect-ratio`, `color`, `font-family`, `font-size`, `gradient`, `shadow`, `spacing`.

`--wp--preset--aspect-ratio--{$slug}`
`--wp--preset--color--{$slug}` `.has-{$slug}-color`, `.has-text-color`, `.has-{$slug}-background-color`, `.has-background` with predefined slugs: `black`, `cyan-bluish-gray`, `light-green-cyan`, `luminous-vivid-amber`, `luminous-vivid-orange`, `pale-cyan-blue`, `pale-pink`, `vivid-cyan-blue`, `vivid-green-cyan`, `vivid-purple`, `vivid-red`, `white` 
`--wp--preset--font-family--{$slug}` `.has-{$slug}-font-family`
`--wp--preset--font-size–{$slug}` `.has-{$slug}-font-size` with predefined slugs: `medium`, `large`, `small`, `x-large`
`--wp--preset--gradient-{$slug}` with predefined slugs: `blush-bordeaux`, `blush-light-purple`, `cool-to-warm-spectrum`, `electric-grass`, `light-green-cyan-to-vivid-green-cyan`, `luminous-dusk`, `luminous-vivid-amber-to-luminous-vivid-orange`, `luminous-vivid-orange-to-vivid-red`, `midnight`, `pale-ocean`, `very-light-gray-to-cyan-bluish-gray`, `vivid-cyan-blue-to-vivid-purple`
`--wp--preset--shadow--{$slug}` with predefined slugs: `crisp`, `deep`, `natural`, `outlined`, `sharp`
`--wp--preset--spacing--{$slug}` where `$slug` is `10`, `20`, `30`, ...

`--wp--style--block-gap`
`--wp--style--global--content-size`
`--wp--style--global--wide-size`
`--wp--style--root--padding-bottom`
`--wp--style--root--padding-left`
`--wp--style--root--padding-right`
`--wp--style--root--padding-top`

`var:preset|$feature|$slug`

`--wp-admin--admin-bar--height`
`--wp-admin--admin-bar--position-offset`
`--wp-admin-theme-color`
`--wp-admin-theme-color--rgb`
`--wp-admin-theme-color-darker-10`
`--wp-admin-theme-color-darker-10--rgb`
`--wp-admin-theme-color-darker-20`
`--wp-admin-theme-color-darker-20--rgb`
`--wp-admin-border-width-focus`

`--wp-block-synced-color`
`--wp-block-synced-color--rgb`

`--wp-bound-block-color`

## CSS Classes

WordPress uses several CSS classes as various points in the DOM.

`has-text-align-left`


### The `body` Element

**On a page**

- `logged-in`: When the user is logged in.
- `admin-bar`: When on some page in the WP admin.

- `page`
- `page-id-{$page-id}`
- `page-template-default`: When using the default page template.

### The `div.entry-content` Element

- `entry-content`
- `wp-block-post-content`
- `is-layout-flow`
- `wp-block-post-content-is-layout-flow`

### The `div.wp-lightbox-overlay` Element

- `wp-lightbox-overlay`

### The `div.wp-site-blocks` Element

- `wp-site-blocks`

### The `div#wpadminbar` Element

- `nojq`: When ?

### The Core Cover Block

- `wp-block-cover`

### The Core Group Block

- `wp-block-group`
- `wp-block-group-is-layout-constrained`: When ?
- `wp-block-group-is-layout-flex`: When a row or stack.
- `wp-block-group-is-layout-flow`: When ?
- `has-background`: When a background color is selected.
- `has-{$color-slug}-background-color`: When a preset background color is selected.
- `has-global-padding`: When `settings.useRootPaddingAwareAlignments` is true.
- `is-content-justification-space-between`: When content justification is set to `space between` for a row.
- `is-layout-constrained`: When?
- `is-layout-flex`: When a row or stack.
- `is-layout-flow`: When ?
- `is-nowrap`: When a row and nowrap is selected.
- `is-position-sticky`: When position is set to sticky.
- `is-vertical`: When a stack.

### The Core Heading Block

- `wp-block-heading`

### The Core Navigation Block

- `wp-block-navigation`
- `wp-block-navigation-is-layout-flex`
- `is-content-justification-right`
- `is-horizontal`: When horizontal.
- `is-layout-flex`
- `is-responsive`

### The Core Template Part Block

- `wp-block-template-part`


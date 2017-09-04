# WordPress Notes


## Themes

At their most basic level, WordPress themes are collections of different files
that work together to create what you see, as well as how your site behaves.

### Template Files

WordPress themes are made up of template files.  These are PHP files that
contain a mixture of HTML, Template Tags, and PHP code.

**Common WordPress Template Files**

Below is a list of some basic theme templates and files recognized by WordPress.

* **index.php**: The main template file. It is required in all themes.
* **style.css**: The main stylesheet. It is required in all themes.
* **rtl.css**: The right-to-left stylesheet is included automatically if the
  website language's text direction is right-to-left.
* **comments.php**: The comments template.
* **front-page.php**: The front page template is always used as the site front
  page if it exists, regardless of what settings on Admin > Settings > Reading.
* **home.php**: The home page template is the front page by default.  If you do
  not set WordPress to use a static front page, this template is used to show
  latest posts.
* **header.php**: The header template file usually contains your site's document
  type, meta information, links to stylesheets and scripts, and other data.
* **singular.php**: The singular template is used for posts when `single.php` is
  not found, or for pages when `page.php` is not found.  If `singular.php` is
  not found, `index.php` is used.
* **single.php**: The single post template is used when a visitor requests a
  single post.
* **single-{post-type}.php**: The single post template used when a visitor
  requests a single post from a custom post type.
* **archive-{post-type}.php**: The archive post type template is used when
  visitors request a custom post type archive.  The `archive.php` template file
  is used if the `archive-{post-type}.php` is not present.
* **page.php**: The page template is used when visitors request individual
  pages, which are a built-in template.
* **page-{slug}.php**: The page slug template is used when visitors request a
  specific page, for example one with the "about" slug (`page-about.php`).
* **category.php**: The category template is used when visitors request posts by
  category.
* **tag.php**: The tag template is used when visitors request posts by tag.
* **taxonomy.php**: The taxonomy term template is used when a visitor requests a
  term in a custom taxonomy.
* **author.php**: The author page template is used whenever a visitor loads an
  author page.
* **date.php**: The date/time template is used when posts are requested by date
  or time.
* **archive.php**: The archive template is used when visitors request posts by
  category, author, or date.  **Note**: this template will be overridden if more
  specific templates are present like `category.php`, `author.php`, and
  `date.php`.
* **search.php**: The search results template is used to display a visitor's
  search results.
* **attachment.php**: The attachment template is used when viewing a single
  attachment like an image, pdf, or other media file.
* **image.php**: The image attachment template is a more specific version of
  `attachment.php` and is used when viewing a single image attachment.  If not
  present, WordPress will use `attachment.php` instead.
* **404.php**: The 404 template is used when WordPress cannot find a post, page,
  or other content that matches the visitor’s request.

See https://developer.wordpress.org/themes/basics/template-files/ for more
details.

There are only two files absolutely required in a WordPress theme:

* index.php
* style.css

The `style.css` file must begin with a stylesheet header comment which will
look something like the following:

```css
/*
 Theme Name:   Name of Theme
 Theme URI:    http://example.com/name-of-theme/
 Author:       John Doe
 Author URI:   http://example.com
 Description:  This is a theme.
 Version:      x.x.x
 License:      GNU General Public License v2 or later
 License URI:  http://www.gnu.org/licenses/gpl-2.0.html
 Text Domain:  name-of-theme
 Tags:         light, dark, two-columns, right-sidebar, responsive-layout, accessibility-ready
*/
```

`Theme Name`, `Author`, `Description`, `Version`, `License`, `License URI`,
and `Text Domain` are all required.  The rest are optional.

Note: When you have the bare minimum, the Customizer will have the "Site
Identity", the Menus, "Static Front Page", and the "Additional CSS" tabs.

### Conditional Tags


## Child Themes

> A child theme is a theme that inherits the functionality and styling of
> another theme, called the parent theme.  Child themes are the recommended way
> of modifying an existing theme.

Like all WP themes, they live in subdirectories of the WordPress themes
directory (wp-content/themes/ by default).  It is recommended (though not
required) that the name of your child theme directory is appended with '-child'.

The child theme directory requires at minimum a `style.css` file.  However, a
`functions.php` file is typically included also so that the parent styles can
be imported.

The `style.css` file must begin with a stylesheet header comment which will
look something like the following:

```css
/*
 Theme Name:   <name-of-child-theme>
 Theme URI:    http://example.com/name-of-parent-theme-child/
 Description:  This is a child theme of such and such parent theme.
 Author:       John Doe
 Author URI:   http://example.com
 Template:     name-of-parent-theme
 Version:      x.x.x
 License:      GNU General Public License v2 or later
 License URI:  http://www.gnu.org/licenses/gpl-2.0.html
 Tags:         light, dark, two-columns, right-sidebar, responsive-layout, accessibility-ready
 Text Domain:  parent-theme-child
*/
```

`Template` is the only parameter that is required.  However, the `Theme Name`,
`Description`, `Author`, and `Version` are usually include since they show up
on the WP Admin.

The `functions.php` file usually includes the parent themess styles.  The
following snippet demonstrates how to do that.

```php
<?php

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 99);

function child_enqueue_styles() {
  $parent_style = 'parent-style';

  wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
  wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( $parent_style ) );
}

if ( get_stylesheet() !== get_template() ) {
  add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
    update_option( 'theme_mods_' . get_template(), $value );
    return $old_value; // prevent update to child theme mods
  }, 10, 2 );

  add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
    return get_option( 'theme_mods_' . get_template(), $default );
  } );
}
?>
```


## Debugging

In `wp-config.php`, you can define the following PHP variables.

```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', true );
```

See https://developer.wordpress.org/themes/getting-started/setting-up-a-development-environment/#other-wordpress-development-tools
for more details and options.

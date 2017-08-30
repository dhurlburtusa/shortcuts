# WordPress Notes


## Themes

At their most basic level, WordPress themes are collections of different files
that work together to create what you see, as well as how your site behaves.

There are only two files absolutely required in a WordPress theme:

* index.php – the main template file
* style.css – the main style file


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

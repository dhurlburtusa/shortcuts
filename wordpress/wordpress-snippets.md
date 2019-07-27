# WordPress Snippets


## Remove Unnecessary HTML Head Content

Add the following to a site-specific plugin.

```php
// Some actions you may want to remove:
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'wp_generator' );
```


## Enable Shortcodes in Text Widgets

By default, WordPress filters out shortcodes in text widgets. You can easily disable that by adding this single line of code to a site-specific plugin.

```php
add_filter( 'widget_text', 'do_shortcode' );
```

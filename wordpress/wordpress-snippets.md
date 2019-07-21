# WordPress Snippets


## Enable Shortcodes in Text Widgets

By default, WordPress filters out shortcodes in text widgets. You can easily disable that by adding this single line of code to a site-specific plugin.

```php
add_filter( 'widget_text', 'do_shortcode' );
```

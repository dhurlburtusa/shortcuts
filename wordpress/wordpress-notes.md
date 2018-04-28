# WordPress Notes


## Common URIs

* /wp-login.php
* /wp-login.php?action=register
* /wp-login.php?action=lostpassword


## Database

See [Database Notes](https://github.com/dhurlburtusa/shortcuts/blob/master/wordpress/wordpress-database-notes.md).


## Plugins

See [Plugins Notes](https://github.com/dhurlburtusa/shortcuts/blob/master/wordpress/wordpress-plugins-notes.md).


## Themes

See [Themes Notes](https://github.com/dhurlburtusa/shortcuts/blob/master/wordpress/wordpress-themes-notes.md).


## Debugging

In `wp-config.php`, you can define the following PHP variables.

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
```

See https://developer.wordpress.org/themes/getting-started/setting-up-a-development-environment/#other-wordpress-development-tools
for more details and options.


## Basic Code Structure

```
require index.php
  require wp-blog-header.php
    require wp-load.php
      if (wp-config.php) {
        require wp-config.php
          require wp-settings.php
            require wp-includes/load.php (function declarations)
            require wp-includes/default-constants.php (function declarations)
            require wp-includes/plugin.php (mostly function declarations for hooks, actions, and filters)
            require wp-includes/version.php (global variable declarations)

            require wp-includes/compat.php (?)
            require wp-includes/class-wp-list-util.php (?)
            require wp-includes/functions.php (function declarations)
            require wp-includes/class-wp-matchesmapregex.php (?)
            require wp-includes/class-wp.php (?)
            require wp-includes/class-wp-error.php (?)
            require wp-includes/pomo/mo.php (?)

            require wp-includes/default-filters.php (?)

            if (multisite) {
              require wp-includes/class-wp-site-query.php (?)
              require wp-includes/class-wp-network-query.php (?)
              require wp-includes/ms-blogs.php (?)
              require wp-includes/ms-settings.php (?)
            }

            require wp-includes/*.php
            require wp-content/plugins/*.php
            require wp-includes/pluggable.php
            require wp-includes/*.php
      }
      else {
        require wp-includes/load.php (function declarations)
        require wp-includes/functions.php (function declarations)
        require wp-includes/option.php (function declarations)
        require wp-includes/version.php (global variable declarations)
      }

    require wp-includes/template-loader.php
      include $template based on URL
```


## Misc

**CSS Selectors**

* `body.page`
* `body.page-id-##`
* `body.page-template-default`
* `article.post-##`
* `article.page`
* `article.status-publish`
* `article.type-page`


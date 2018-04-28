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


## Misc

**CSS Selectors**

* `body.page`
* `body.page-id-##`
* `body.page-template-default`
* `article.post-##`
* `article.page`
* `article.status-publish`
* `article.type-page`


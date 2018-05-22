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
            include wp-content/advanced-cache.php (a WP drop-in)
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

            require wp-includes/l10n.php
            require wp-includes/class-wp-locale.php
            require wp-includes/class-wp-locale-switcher.php

            require wp-includes/class-wp-walker.php (?)
            require wp-includes/class-wp-ajax-response.php (?)
            require wp-includes/formatting.php (?)
            require wp-includes/capabilities.php (?)
            require wp-includes/class-wp-roles.php (?)
            require wp-includes/class-wp-role.php (?)
            require wp-includes/class-wp-user.php (?)
            require wp-includes/class-wp-query.php (?)
            require wp-includes/query.php (?)
            require wp-includes/date.php (?)
            require wp-includes/theme.php (?)
            require wp-includes/class-wp-theme.php (?)
            require wp-includes/template.php (?)
            require wp-includes/user.php (?)
            require wp-includes/class-wp-user-query.php (?)
            require wp-includes/class-wp-session-tokens.php (?)
            require wp-includes/class-wp-user-meta-session-tokens.php (?)
            require wp-includes/meta.php (?)
            require wp-includes/class-wp-meta-query.php (?)
            require wp-includes/class-wp-metadata-lazyloader.php (?)
            require wp-includes/general-template.php (?)
            require wp-includes/link-template.php (?)
            require wp-includes/author-template.php (?)
            require wp-includes/post.php (?)
            require wp-includes/class-walker-page.php (?)
            require wp-includes/class-walker-page-dropdown.php (?)
            require wp-includes/class-wp-post-type.php (?)
            require wp-includes/class-wp-post.php (?)
            require wp-includes/post-template.php (?)
            require wp-includes/revision.php (?)
            require wp-includes/post-formats.php (?)
            require wp-includes/post-thumbnail-template.php (?)
            require wp-includes/category.php (?)
            require wp-includes/class-walker-category.php (?)
            require wp-includes/class-walker-category-dropdown.php (?)
            require wp-includes/category-template.php (?)
            require wp-includes/comment.php (?)
            require wp-includes/class-wp-comment.php (?)
            require wp-includes/class-wp-comment-query.php (?)
            require wp-includes/class-walker-comment.php (?)
            require wp-includes/comment-template.php (?)
            require wp-includes/rewrite.php (?)
            require wp-includes/class-wp-rewrite.php (?)
            require wp-includes/feed.php (?)
            require wp-includes/bookmark.php (?)
            require wp-includes/bookmark-template.php (?)
            require wp-includes/kses.php (?)
            require wp-includes/cron.php (?)
            require wp-includes/deprecated.php (?)
            require wp-includes/script-loader.php (?)
            require wp-includes/taxonomy.php (?)
            require wp-includes/class-wp-taxonomy.php (?)
            require wp-includes/class-wp-term.php (?)
            require wp-includes/class-wp-term-query.php (?)
            require wp-includes/class-wp-tax-query.php (?)
            require wp-includes/update.php (?)
            require wp-includes/canonical.php (?)
            require wp-includes/shortcodes.php (?)
            require wp-includes/embed.php (?)
            require wp-includes/class-wp-embed.php (?)
            require wp-includes/class-oembed.php (?)
            require wp-includes/class-wp-oembed-controller.php (?)
            require wp-includes/media.php (?)
            require wp-includes/http.php (?)
            require wp-includes/class-http.php (?)
            require wp-includes/class-wp-http-streams.php (?)
            require wp-includes/class-wp-http-curl.php (?)
            require wp-includes/class-wp-http-proxy.php (?)
            require wp-includes/class-wp-http-cookie.php (?)
            require wp-includes/class-wp-http-encoding.php (?)
            require wp-includes/class-wp-http-response.php (?)
            require wp-includes/class-wp-http-requests-response.php (?)
            require wp-includes/class-wp-http-requests-hooks.php (?)
            require wp-includes/widgets.php (?)
            require wp-includes/class-wp-widget.php (?)
            require wp-includes/class-wp-widget-factory.php (?)
            require wp-includes/nav-menu.php (?)
            require wp-includes/nav-menu-template.php (?)
            require wp-includes/admin-bar.php (?)
            require wp-includes/rest-api.php (?)
            require wp-includes/rest-api/class-wp-rest-server.php (?)
            require wp-includes/rest-api/class-wp-rest-response.php (?)
            require wp-includes/rest-api/class-wp-rest-request.php (?)
            require wp-includes/rest-api/endpoints/class-wp-rest-controller.php (?)
            require wp-includes/rest-api/endpoints/class-wp-rest-posts-controller.php (?)
            require wp-includes/rest-api/endpoints/class-wp-rest-attachments-controller.php (?)
            require wp-includes/rest-api/endpoints/class-wp-rest-post-types-controller.php (?)
            require wp-includes/rest-api/endpoints/class-wp-rest-post-statuses-controller.php (?)
            require wp-includes/rest-api/endpoints/class-wp-rest-revisions-controller.php (?)
            require wp-includes/rest-api/endpoints/class-wp-rest-taxonomies-controller.php (?)
            require wp-includes/rest-api/endpoints/class-wp-rest-terms-controller.php (?)
            require wp-includes/rest-api/endpoints/class-wp-rest-users-controller.php (?)
            require wp-includes/rest-api/endpoints/class-wp-rest-comments-controller.php (?)
            require wp-includes/rest-api/endpoints/class-wp-rest-settings-controller.php (?)
            require wp-includes/rest-api/fields/class-wp-rest-meta-fields.php (?)
            require wp-includes/rest-api/fields/class-wp-rest-comment-meta-fields.php (?)
            require wp-includes/rest-api/fields/class-wp-rest-post-meta-fields.php (?)
            require wp-includes/rest-api/fields/class-wp-rest-term-meta-fields.php (?)
            require wp-includes/rest-api/fields/class-wp-rest-user-meta-fields.php (?)

            if (multisite) {
              require wp-includes/ms-functions.php (?)
              require wp-includes/ms-default-filters.php (?)
              require wp-includes/ms-deprecated.php (?)
            }

            // Load must-use plugins.
            foreach ( wp_get_mu_plugins() as $mu_plugin ) {
              include_once( $mu_plugin );
            }

            // Load network activated plugins.
            if (multisite) {
              foreach ( wp_get_active_network_plugins() as $network_plugin ) {
                include_once( $network_plugin );
              }
            }

            require wp-includes/vars.php (?)

            // Load active plugins.
            foreach ( wp_get_active_and_valid_plugins() as $plugin ) {
              wp_register_plugin_realpath( $plugin );
              include_once( $plugin );
            }

            require wp-includes/pluggable.php
            require wp-includes/pluggable-deprecated.php

            require wp-content/languages/$locale.php

            // Load the functions for the active theme, for both parent and child theme if applicable.
		        include( STYLESHEETPATH . '/functions.php'
        		include( TEMPLATEPATH . '/functions.php'
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


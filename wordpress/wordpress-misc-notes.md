# WordPress Misc Notes


## Legacy

**Legacy `$error`**

The `$error` global appears to be legacy -- not 100% sure about that.

I found this snippet of code in `wp-login.php`.

```php
	// In case a plugin uses `$error` rather than the `$wp_errors` object.
	if ( ! empty( $error ) ) {
		$wp_error->add( 'error', $error );
		unset( $error );
	}
```

Consider using in custom plugins and themes.


## Files

**`wp-includes/admin-bar.php`**

Toolbar API: Top-level Toolbar functionality.

Note: Only declares functions.

**`wp-includes/author-template.php`**

Author Template functions for use in themes.

These functions must be used within the WordPress Loop.

Note: Only declares functions.

**`wp-includes/blocks.php`**

Functions related to registering and parsing blocks.

Note: Only declares functions.

**`wp-includes/bookmark.php`**

The Link/Bookmark API.

Note: Only declares functions.

**`wp-includes/bookmark-template.php`**

Bookmark Template Functions for usage in Themes.

Note: Only declares functions.

**`wp-includes/canonical.php`**

The Canonical API to handle WordPress Redirecting.

Note: Only declares functions.

**`wp-includes/capabilities.php`**

The core User Role & Capabilities API.

Note: Only declares functions.

**`wp-includes/category.php`**

Taxonomy API: Core category-specific functionality.

Note: Only declares functions.

**`wp-includes/category-template.php`**

Taxonomy API: Core category-specific template tags.

Note: Only declares functions.

**`wp-includes/comment.php`**

The core Comment API.

Note: Only declares functions.

**`wp-includes/comment-template.php`**

Comment template functions.

These functions are meant to live inside of the WordPress loop.

Note: Only declares functions.

**`wp-includes/compat.php`**

WordPress implementation for PHP functions either missing from older PHP versions or not included by default.

Note: Only declares constants and functions.

**`wp-includes/cron.php`**

WordPress Cron API.

Note: Only declares functions.

**`wp-includes/date.php`**

Declares the `WP_Date_Query` class.

**`wp-includes/default-constants.php`**

Functions that define constants and global variables that can be overridden, generally in `wp-config.php`.

**`wp-includes/default-filters.php`**

Sets up the default filters and actions for most of the WordPress hooks.
 
If you need to remove a default hook, this file will give you the priority for which to use to remove the hook.

Not all of the default hooks are found in `default-filters.php`.

It is basically a bunch of calls to `add_action` and `add_filter`.

**`wp-includes/embed.php`**

The oEmbed API.

Note: Only declares functions.

**`wp-includes/error-protection.php`**

Error Protection API: Functions.

Note: Only declares functions.
 
**`wp-includes/feed.php`**

WordPress Feed API.

Note: Only declares functions.

**`wp-includes/formatting.php`**

The main WordPress Formatting API.

Note: Only declares functions.

**`wp-includes/functions.php`**

The main WordPress API.

Note: Only declares functions.

**`wp-includes/general-template.php`**

General template tags that can go anywhere in a template.

Note: Only declares functions.

**`wp-includes/http.php`**

The core HTTP Request API.

Note: Only declares functions.

**`wp-includes/kses.php`**

Defines the `CUSTOM_TAGS` constant, the `$allowedentitynames`, `$allowedposttags`, `$allowedtags` globals, and the plugin API functions.

**`wp-includes/l10n.php`**

The core Translation API.

Note: Only declares functions.

**`wp-includes/link-template.php`**

WordPress Link Template Functions.

Note: Only declares functions.

**`wp-includes/load.php`**

The functions needed to load WordPress.

Note: Only declares functions.

**`wp-includes/media.php`**

WordPress API for media display.

Note: Only declares functions and adds several media related shortcodes.

**`wp-includes/meta.php`**

The core Metadata API.

Note: Only declares functions.

**`wp-includes/nav-menu.php`**

Navigation Menu functions.

Note: Only declares functions.

**`wp-includes/nav-menu-template.php`**

Nav Menu API: Template functions.

Note: Only declares functions.

**`wp-includes/option.php`**

The Option API.

Note: Only declares functions.

**`wp-includes/pluggable.php`**

A set of functions that may be declared by plugins. However, if no plugin declares any of these functions, then WordPress provides their own implementation.

Note: Only declares functions.

**`wp-includes/plugin.php`**

The plugin API is located in this file, which allows for creating actions and filters and hooking functions, and methods. The functions or methods will then be run when the action or filter is called.

Defines the `WP_Hook` class, the `$wp_actions`, `$wp_current_filter`, `$wp_filter` globals, and the plugin API functions.

**`wp-includes/post.php`**

The core Post API.

Note: Only declares functions.

**`wp-includes/post-formats.php`**

Post format functions.

Note: Only declares functions.

**`wp-includes/post-template.php`**

WordPress Post Template Functions.

Gets content for the current post in the loop.

Note: Only declares functions.

**`wp-includes/post-thumbnail-template.php`**

WordPress Post Thumbnail Template Functions.

Note: Only declares functions.

**`wp-includes/query.php`**

The WordPress Query API.

Note: Only declares functions.

**`wp-includes/rest-api.php`**

REST API functions.

Note: Only declares functions and the `REST_API_VERSION` constant.

**`wp-includes/revision.php`**

Post revision functions.

Note: Only declares functions.

**`wp-includes/rewrite.php`**

WordPress Rewrite API.

Note: Only declares constants and functions.

**`wp-includes/shortcodes.php`**

WordPress Shortcode API.

Note: Only declares functions and the `$shortcode_tags` global.

**`wp-includes/taxonomy.php`**

The core Taxonomy API.

Note: Only declares functions.

**`wp-includes/template.php`**

Template loading functions.

Note: Only declares functions.

**`wp-includes/theme.php`**

Theme, template, and stylesheet functions.

Note: Only declares functions.

**`wp-includes/update.php`**

A simple set of functions to check our version 1.0 update service.

Note: Only declares functions and adds actions.

**`wp-includes/user.php`**

The core User API.

Note: Only declares functions.

**`wp-includes/vars.php`**

Creates common globals for the rest of WordPress.

Declares the `$is_apache`, `$is_chrome`, `$is_edge`, `$is_gecko`, `$is_IE`, `$is_IIS`, `$is_iis7`, `$is_iphone`, `$is_lynx`, `$is_macIE`, `$is_nginx`, `$is_NS4`, `$is_opera`, `$is_safari`, `$is_winIE`, `$pagenow`;

**`wp-includes/version.php`**

Declares the current WordPress version information.

That is, sets the values for the `$required_mysql_version`, the `$required_php_version`, the `$tinymce_version`, the `$wp_db_version`, and the `$wp_version` globals.

**`wp-includes/widgets.php`**

The core Widgets API.

Note: Only declares functions and the `$wp_registered_sidebars`, `$wp_registered_widget_controls`, `$wp_registered_widget_updates`, `$wp_registered_widgets` globals.

**`wp-includes/blocks/archives.php`**

Server-side rendering of the `core/archives` block.

Note: Only declares functions and adds an action.

**`wp-includes/blocks/block.php`**

Server-side rendering of the `core/block` block.

Note: Only declares a function and registers a block type.

**`wp-includes/blocks/calendar.php`**

Server-side rendering of the `core/calendar` block.

Note: Only declares functions and adds an action.

**`wp-includes/blocks/categories.php`**

Server-side rendering of the `core/categories` block.

Note: Only declares functions and adds an action.

**`wp-includes/blocks/latest-comments.php`**

Server-side rendering of the `core/latest-comments` block.

Note: Only declares functions and registers a block type.

**`wp-includes/blocks/latest-posts.php`**

Server-side rendering of the `core/latest-posts` block.

Note: Only declares functions and registers a block type.

**`wp-includes/blocks/rss.php`**

Server-side rendering of the `core/rss` block.

Note: Only declares functions and registers a block type.

**`wp-includes/blocks/search.php`**

Server-side rendering of the `core/search` block.

Note: Only declares functions and registers a block type.

**`wp-includes/blocks/shortcode.php`**

Server-side rendering of the `core/shortcode` block.

Note: Only declares functions and registers a block type.

**`wp-includes/blocks/tag-cloud.php`**

Server-side rendering of the `core/tag-cloud` block.

Note: Only declares functions and registers a block type.

**`wp-includes/pomo/entry.php`**

Contains Translation_Entry class.

**`wp-includes/pomo/plural-forms.php`**

A gettext Plural-Forms parser class.

**`wp-includes/pomo/po.php`**

Class for working with PO files.

Ensures existence of `PO_MAX_LINE_LEN` constant.

Turns on `auto_detect_line_endings` configuration option.

**`wp-includes/pomo/translations.php`**

Class for a set of entries for translation and their associated headers.

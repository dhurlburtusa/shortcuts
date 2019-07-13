# WordPress `wp-settings.php` Notes


## Constants

- `WPINC`: The name of the `wp-includes` directory.
- `KB_IN_BYTES`:
- `MB_IN_BYTES`:
- `GB_IN_BYTES`:
- `TB_IN_BYTES`:
- `WP_START_TIMESTAMP`:
- `WP_MEMORY_LIMIT`:
- `WP_MAX_MEMORY_LIMIT`:
- `WP_CONTENT_DIR`: Full absolute path.
- `WP_DEBUG`: Boolean. Defaults to `false`.
- `WP_DEBUG_DISPLAY`: Boolean. Defaults to `true`.
- `WP_DEBUG_LOG`: Boolean. Defaults to `false`.
- `WP_CACHE`: Boolean. Defaults to `false`.
- `SCRIPT_DEBUG`: Boolean. Default value depends on `$GLOBALS['wp_version']`.
- `SHORTINIT`: Boolean. Defaults to false.
- `WP_FEATURE_BETTER_PASSWORDS`: Boolean. Defaults to `true`.
- `MINUTE_IN_SECONDS`: Number.
- `HOUR_IN_SECONDS`: Number.
- `DAY_IN_SECONDS`: Number.
- `WEEK_IN_SECONDS`: Number.
- `MONTH_IN_SECONDS`: Number.
- `YEAR_IN_SECONDS`: Number.
- `WP_LANG_DIR`:
- `WP_CONTENT_URL`:
- `WP_PLUGIN_DIR`:
- `WP_PLUGIN_URL`:
- `WPMU_PLUGIN_DIR`:
- `WPMU_PLUGIN_URL`:
- `COOKIEHASH`:
- `USER_COOKIE`:
- `PASS_COOKIE`:
- `AUTH_COOKIE`:
- `SECURE_AUTH_COOKIE`:
- `LOGGED_IN_COOKIE`:
- `TEST_COOKIE`:
- `COOKIEPATH`:
- `SITECOOKIEPATH`:
- `ADMIN_COOKIE_PATH`:
- `PLUGINS_COOKIE_PATH`:
- `COOKIE_DOMAIN`:
- `RECOVERY_MODE_COOKIE`:
- `FORCE_SSL_ADMIN`:
- `TEMPLATEPATH`:
- `STYLESHEETPATH`:
- `WP_DEFAULT_THEME`:
- `SCRIPT_DEBUG`: Boolean. Defaults to 
- `REST_API_VERSION`:
- `AUTOSAVE_INTERVAL`:
- `EMPTY_TRASH_DAYS`:
- `WP_POST_REVISIONS`:
- `WP_CRON_LOCK_TIMEOUT`:

## Globals

**Available to must-use plugins, standard plugins, and themes**

**Via `wp-includes/plugin.php`:**

- `$wp_filter`:
- `$wp_actions`:
- `$wp_current_filter`:

**Via `wp-settings.php`:**

- `$wp_version`:
- `$wp_db_version`:
- `$tinymce_version`:
- `$required_php_version`:
- `$required_mysql_version`:
- `$wp_local_package`:
- `$blog_id`:
- `$wpdb`:
- `$GLOBALS['table_prefix']`:
- `$GLOBALS['wp_embed']`:

**Via `timer_start` Function Call:**

- $timestart (Similar to `WP_START_TIMESTAMP`.)

**Available to standard plugins, and themes**

- $GLOBALS['wp_plugin_paths']

**Available to themes**

- $GLOBALS['wp_the_query']
- $GLOBALS['wp_query']
- $GLOBALS['wp_rewrite']
- $GLOBALS['wp']
- $GLOBALS['wp_widget_factory']
- $GLOBALS['wp_roles']
- $GLOBALS['wp_locale']
- $GLOBALS['wp_locale_switcher']


**Via `wp-includes/vars.php`**

Note: Theses are available to both plugins and themes.

- $pagenow
- $is_lynx
- $is_gecko
- $is_winIE
- $is_macIE
- $is_opera
- $is_NS4
- $is_safari
- $is_chrome
- $is_iphone
- $is_IE
- $is_edge
- $is_apache
- $is_IIS
- $is_iis7
- $is_nginx

**Via `wp-includes/widgets.php`**

- `$wp_registered_sidebars`
- `$wp_registered_widget_controls`
- `$wp_registered_widget_updates`
- `$wp_registered_widgets`



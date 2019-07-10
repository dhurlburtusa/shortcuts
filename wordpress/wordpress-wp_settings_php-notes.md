# WordPress `wp-settings.php` Notes


## Globals

**Available to must-use Plugins, standard plugins, and themes**

- $wp_version
- $wp_db_version
- $tinymce_version
- $required_php_version
- $required_mysql_version
- $wp_local_package
- $blog_id
- $wpdb
- $GLOBALS['table_prefix']
- $GLOBALS['wp_embed']

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

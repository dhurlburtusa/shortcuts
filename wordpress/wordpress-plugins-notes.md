# WordPress Plugins Notes


## Common/Popular

**WP Development**

* [ACF Content Analysis for Yoast SEO](https://wordpress.org/plugins/acf-content-analysis-for-yoast-seo/) (Free)
* [Add Admin CSS](https://wordpress.org/plugins/add-admin-css/) (Free)
* [Admin Columns](https://wordpress.org/plugins/codepress-admin-columns/) (Free, Paid)
* [Admin Menu Editor](https://wordpress.org/plugins/admin-menu-editor/) (Free, Paid)
* [Admin Menu Tree Page View](https://wordpress.org/plugins/admin-menu-tree-page-view/) (Free)
* [Advanced Custom Fields](https://wordpress.org/plugins/advanced-custom-fields/) (Free, Paid)
* [All in One WP Security & Firewall](https://wordpress.org/plugins/all-in-one-wp-security-and-firewall/) (Free)
* [Beaver Builder](https://www.wpbeaverbuilder.com/) (Paid)
* [Beaver Builder Lite](https://wordpress.org/plugins/beaver-builder-lite-version/) (Free)
* [CMS Tree Page View](https://wordpress.org/plugins/cms-tree-page-view/) (Free)
* [CSS & JavaScript Toolbox](https://wordpress.org/plugins/css-javascript-toolbox/) (Free, Paid)
  + **Caution**: Causes WP Mail SMTP plugin to break due to some Composer
    compatibility issues and the order in which the plugins are loaded.  However, if
    a plugin such as Plugin Organizer is installed, then the plugin load order can
    be changed such that this plugin loads after the WP Main SMTP plugin.
* [Debug Bar](https://wordpress.org/plugins/debug-bar/) (Free)
* [Debug Bar Actions and Filters](https://wordpress.org/plugins/debug-bar-actions-and-filters-addon/) (Free)
* [Debug Bar Console](https://wordpress.org/plugins/debug-bar-console/) (Free)
  + **Caution**: Causes a styling issue with built-in Theme editor and Plugin
    editor.  The editor's gutter ends up covering the first 3 or 4 characters on
    each line.
* [Debug Bar Constants](https://wordpress.org/plugins/debug-bar-constants/) (Free)
* [Debug Bar Cron](https://wordpress.org/plugins/debug-bar-cron/) (Free)
* [Debug Bar Custom Info](https://wordpress.org/plugins/debug-bar-custom-info/) (Free)
* [Debug Bar List Script & Style Dependencies](https://wordpress.org/plugins/debug-bar-list-dependencies/) (Free)
* [Debug Bar Localization](https://wordpress.org/plugins/debug-bar-localization/) (Free)
* [Debug Bar Plugin Activation](https://wordpress.org/plugins/debug-bar-plugin-activation/) (Free)
* [Debug Bar Post Meta](https://wordpress.org/plugins/tdd-debug-bar-post-meta/) (Free)
* [Debug Bar Post Types](https://wordpress.org/plugins/debug-bar-post-types/) (Free)
* [Debug Bar Query Count Alert](https://wordpress.org/plugins/debug-bar-query-count-alert/) (Free)
* [Debug Bar Rewrite Rules](https://wordpress.org/plugins/debug-bar-rewrite-rules/) (Free)
* [Debug Bar Remote Requests](https://wordpress.org/plugins/debug-bar-remote-requests/) (Free)
* [Debug Bar Roles and Capabilities](https://wordpress.org/plugins/debug-bar-roles-and-capabilities/) (Free)
* [Debug Bar Screen Info](https://wordpress.org/plugins/debug-bar-screen-info/) (Free)
* [Debug Bar Shortcodes](https://wordpress.org/plugins/debug-bar-shortcodes/) (Free)
* [Debug Bar Slow Actions](https://wordpress.org/plugins/debug-bar-slow-actions/) (Free)
* [Debug Bar Super Globals](https://wordpress.org/plugins/debug-bar-super-globals/) (Free)
* [Debug Bar Taxonomies](https://wordpress.org/plugins/debug-bar-taxonomies/) (Free)
* [Debug Bar Transients](https://wordpress.org/plugins/debug-bar-transients/) (Free)
* [Debug Bar Widgets](https://wordpress.org/plugins/debug-bar-widgets/) (Free)
* [Debug Media](https://wordpress.org/plugins/debug-media/) (Free)
* [Divi Builder](https://www.elegantthemes.com/plugins/divi-builder/) (Paid)
* [Google Tag Manager](https://wordpress.org/plugins/duracelltomi-google-tag-manager/) (Free)
* [Head & Footer Code](https://wordpress.org/plugins/head-footer-code/) (Free)
  + **Con**: Plaintext editor.
* [Log Viewer](https://wordpress.org/plugins/log-viewer/) (Free)
* [Plugin Notes Plus](https://wordpress.org/plugins/plugin-notes-plus/) (Free)
* [Plugin Organizer](https://wordpress.org/plugins/plugin-organizer/) (Free)
* [Show Current Template](https://wordpress.org/plugins/show-current-template/) (Free)
* [Theme My Login](https://wordpress.org/plugins/theme-my-login/) (Free)
* [UpdraftPlus - Backup](https://wordpress.org/plugins/updraftplus/) (Free, Paid)
  + **Caution**: Does not seem to backup core WordPress files including
    `wp-config.php`.
* [Wordfence](https://wordpress.org/plugins/wordfence/) (Free, Paid)
* [WP Add Custom CSS](https://wordpress.org/plugins/wp-add-custom-css/) (Free)
* ~~[WP Config File Editor](https://wordpress.org/plugins/wp-config-file-editor/)~~ (Free)
  + **Caution**: Make a backup of `wp-config.php` before using.  Using supplied
    Editor will wipe out any special statements included by hosting services.
  + `WP File Manager` plugin preferred.
* [WP File Manager](https://wordpress.org/plugins/wp-file-manager/) (Free, Paid)
* [WP Mail SMTP](https://wordpress.org/plugins/wp-mail-smtp/) (Free)
* [WP NoteUp](https://wordpress.org/plugins/wp-noteup/) (Free)
* [Yoast SEO](https://wordpress.org/plugins/wordpress-seo/) (Free, Paid)
  + If the `Advance Custom Fields` plugin is installed, be sure to also install `ACF
    Content Analysis for Yoast SEO` plugin so Yoast can analyze the custom fields.

**Some to Try**

* [Taxonomy Images](https://wordpress.org/plugins/taxonomy-images/) (Free)


## Specific Plugin Notes

* [PaidMembershipsPro](https://github.com/dhurlburtusa/shortcuts/blob/master/wordpress/wordpress-paid_memberships_pro_plugin-notes.md)
* [Stripe Payments](https://github.com/dhurlburtusa/shortcuts/blob/master/stripe/stripe_payments_wordpress_plugin-notes.md)


## Writing a Plugin

Plugins are packages of code that extend the core functionality of WordPress.
WordPress plugins are made up of PHP code and other assets such as images, CSS,
and JavaScript.

### Basics

**Initial Steps**

* In `wp-content/plugins`, create a directory named after your plugin.
* In the new directory, create a PHP file named after your plugin.
* Add at least the minimum plugin header comment to this file.

  ```php
  <?php
  /*
  Plugin Name: YOUR PLUGIN NAME
  */
  ```

**Hooks: Actions and Filters**

WordPress hooks allow you to tap into WordPress at specific points to change how
WordPress behaves without editing any core files.

There are two types of hooks within WordPress: actions and filters.  Actions
allow you to add or change WordPress functionality, while filters allow you to
alter content as it is loaded and displayed to the website user.

A plugin uses hooks to change how WordPress behaves.

**Plugin Registration Hooks**

After a plugin is installed, it can be activated, deactivated, and then
uninstalled.  WordPress provides three different functions to add your own hook
when the plugin is activated, deactivated, or uninstalled:

* [`register_activation_hook`][register_activation_hook]
* [`register_deactivation_hook`][register_deactivation_hook]
* [`register_uninstall_hook`][register_uninstall_hook]

**Adding Hooks**

You can add your own, custom hooks with [`do_action`][do_action], which will
enable developers to extend your plugin by passing functions through your hooks.

**Removing Hooks**

You can also use invoke [`remove_action`][remove_action] to remove a function
that was defined earlier.

### Header Comment

The header comment is what tells WordPress that a file is a plugin.

See https://developer.wordpress.org/plugins/the-basics/header-requirements/ for
a list of what can put into the header comment.


## Must Use Plugins

Usually, the plugins you use are stored in `wp-content/plugins`.  Whether they
run or not depends on whether they are activated.  However, if any plugins are
stored in `wp-content/mu-plugins`, they are always run.


## Misc

* The plugin PHP file just needs a Plugin Header, a couple of PHP functions, and
  some hooks to attach your functions to.


[do_action]: https://developer.wordpress.org/reference/functions/do_action/
[register_activation_hook]: https://developer.wordpress.org/reference/functions/register_activation_hook/
[register_deactivation_hook]: https://developer.wordpress.org/reference/functions/register_deactivation_hook/
[register_uninstall_hook]: https://developer.wordpress.org/reference/functions/register_uninstall_hook/
[remove_action]: https://developer.wordpress.org/reference/functions/remove_action/


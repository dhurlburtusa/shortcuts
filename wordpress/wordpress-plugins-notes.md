# WordPress Plugins Notes


## Common/Popular

**WP Development**

* [Beaver Builder](https://www.wpbeaverbuilder.com/) (Paid)
* [Beaver Builder Lite](https://wordpress.org/plugins/beaver-builder-lite-version/) (Free)
* [CSS & JavaScript Toolbox](https://wordpress.org/plugins/css-javascript-toolbox/) (Free, Paid)
* [Divi Builder](https://www.elegantthemes.com/plugins/divi-builder/) (Paid)
* [Google Tag Manager](https://wordpress.org/plugins/duracelltomi-google-tag-manager/) (Free)
* [Theme My Login](https://wordpress.org/plugins/theme-my-login/) (Free)
* [UpdraftPlus - Backup](https://wordpress.org/plugins/updraftplus/) (Free, Paid)
* [WP Add Custom CSS](https://wordpress.org/plugins/wp-add-custom-css/) (Free)


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

A plugin may use actions and filters.


## Misc

* The plugin PHP file just needs a Plugin Header, a couple of PHP functions, and
  some hooks to attach your functions to.

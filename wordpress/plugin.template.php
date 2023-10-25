<?php
/*
Plugin Name: My Plugin
Version: 0.0.0
Plugin URI: https://example.com/plugins/my-plugin/
Description: This is a plugin. Keep this description to fewer than 140 characters.
Author: John Smith
Author URI: https://author.example.com/
License: GPL v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Requires at least: 5.0
Requires PHP: 7.2
Text Domain: my-plugin
Domain Path: /languages

See https://developer.wordpress.org/plugins/plugin-basics/header-requirements/#header-fields
for details.
*/

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if (!defined('MP__DIRNAME')) {
  define('MP__DIRNAME', plugin_basename(dirname(__FILE__)));
}
define('MP__PATH', plugin_dir_path(__FILE__));

// Some actions you may want to remove:
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'wp_generator' );

function mp__register_post_type() {
  register_post_type(
    'mp__my_post_type',
    [
      'public' => true
    ]
  );
}

function mp__unregister_post_type() {
  unregister_post_type( 'mp__my_post_type' );
}

function mp__on_init() {
  mp__register_post_type();
}
add_action( 'init', 'mp__on_init' );

/**
 * The activation hook is run when the plugin is activated.
 */
function mp__on_activation () {
  // TODO: Add options (optional).
  // TODO: Add tables (optional).
  mp__register_post_type();
  flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'mp__on_activation' );

/**
 * The deactivation hook is run when the plugin is deactivated.
 */
function mp__on_deactivation () {
  // TODO: Flush Cache/Temp
  // TODO: Flush Permalinks
  mp__unregister_post_type();
  flush_rewrite_rules();
}
register_deactivation_hook( __FILE__, 'mp__on_deactivation' );

/**
 * The uninstall hook is run when the plugin is uninstalled.
 */
function mp__on_uninstall () {
  // TODO: Remove any added options.
  // TODO: Remove any added tables.
}
register_uninstall_hook( __FILE__, 'mp__on_uninstall');

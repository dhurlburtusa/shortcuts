<?php
/*
Plugin Name: Site-Specific Plugin
Description: This is the site-specific plugin. Use this file instead of the
theme's `functions.php` file to make modifications.
Text Domain: hsllc
Domain Path: /languages
*/

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if (!defined('SSP__DIRNAME')) {
  define('SSP__DIRNAME', plugin_basename(dirname(__FILE__)));
}
define('SSP__PATH', plugin_dir_path(__FILE__));

// Some actions you may want to remove:
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'wp_generator' );

function ssp__on_activation () {
  // TODO: Add options (optional).
  // TODO: Add tables (optional).
}
register_activation_hook( __FILE__, 'ssp__on_activation' );

function ssp__on_deactivation () {
  // TODO: Flush Cache/Temp
  // TODO: Flush Permalinks
}
register_deactivation_hook( __FILE__, 'ssp__on_deactivation' );

function ssp__on_uninstall () {
  // TODO: Remove any added options.
  // TODO: Remove any added tables.
}
register_uninstall_hook( __FILE__, 'ssp__on_uninstall');

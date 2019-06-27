<?php
/*
Plugin Name: Site-Specific Plugin
Description: This is the site-specific plugin. Use this file instead of the
theme's `functions.php` file to make modifications.
Text Domain: hsllc
Domain Path: /languages
*/

if (!defined('SSP_DIRNAME')) {
  define('SSP_DIRNAME', plugin_basename(dirname(__FILE__)));
}
define('SSP_PATH', plugin_dir_path(__FILE__));

function ssp_on_activation () {
  // TODO: Add options (optional).
  // TODO: Add tables (optional).
}
register_activation_hook( __FILE__, 'ssp_on_activation' );

function ssp_on_deactivation () {
  // TODO: Flush Cache/Temp
  // TODO: Flush Permalinks
}
register_deactivation_hook( __FILE__, 'ssp_on_deactivation' );

function ssp_on_uninstall () {
  // TODO: Remove any added options.
  // TODO: Remove any added tables.
}
register_uninstall_hook( __FILE__, 'ssp_on_uninstall');

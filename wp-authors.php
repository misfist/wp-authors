<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://patrizialutz.tech
 * @since             1.0.0
 * @package           Wp_Authors
 *
 * @wordpress-plugin
 * Plugin Name:       WordPress Authors
 * Plugin URI:        https://github.com/misfist/wp-authors
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Pea
 * Author URI:        https://patrizialutz.tech
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wp-authors
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'WP_AUTHORS_VERSION', '1.0.0' );
define( 'WP_AUTHORS_DIR', dirname( __FILE__ ) );
define( 'WP_AUTHORS_DIR_URI', plugin_dir_url( __FILE__ ) );

/**
 * Dependencies
 */
require_once( 'includes/class-wp-authors.php' );

require_once( 'includes/util/class-cli-util.php' );

/**
 * Block Initializer.
 */
// require_once( 'blocks/src/init.php' );
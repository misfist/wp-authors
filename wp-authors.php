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
 * @package           WP_Authors
 *
 * @wordpress-plugin
 * Plugin Name:       WordPress Authors
 * Plugin URI:        https://github.com/misfist/wp-authors
 * Description:       Adds the ability to add multiple authors to a post
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


class WP_Authors_Plugin {

	/**
	 * Instance of the class.
	 * @var object
	 */
    private static $instance;
    
    /**
	 * Plugin Dir
	 * @var var
	 */
    public $plugin_dir;

    /**
	 * Plugin Dir URI
	 * @var var
	 */
    public $plugin_dir_uri;

	/**
	 * Class Instance.
	 * @return WP_Authors_Plugin
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof WP_Authors_Plugin ) ) {
			self::$instance = new WP_Authors_Plugin();
			self::$instance->init();
		}
		return self::$instance;
    }
    
    /**
	 * Initialize
	 *
	 * @return void
	 */
	function init() {
        $this->plugin_dir = dirname( __FILE__ );
        $this->plugin_dir_uri = plugin_dir_url( __FILE__ );
        $this->dependencies();
    }

	/**
	 * Hooks
	 *
	 * @return void
	 */
	static function hooks() {
        flush_rewrite_rules();
    }

	/**
	 * Dependencies
	 *
	 * @return void
	 */
	function dependencies() {		
		include_once( $this->plugin_dir . '/includes/class-wp-authors.php' 		);
		include_once( $this->plugin_dir . '/includes/util/class-cli-util.php' 	);

		include_once( $this->plugin_dir . '/blocks/src/init.php'					);
	}
	
	/**
	 * Get Plugin Directory Path
	 *
	 * @return string $this->plugin_dir
	 */
	static function plugin_dir() {
		return $this->plugin_dir;
	}

	/**
	 * Get Plugin Directory URI
	 *
	 * @return string $plugin_dir_uri
	 */
	static function plugin_dir_uri() {
		return $this->plugin_dir_uri;
	}

}

/**
 * The function provides access to the class methods.
 *
 * Use this function like you would a global variable, except without needing
 * to declare the global.
 *
 * @return object
 */
function wp_authors_plugin_init() {
	return WP_Authors_Plugin::instance();
}
add_action( 'plugins_loaded' , 'wp_authors_plugin_init' );

register_activation_hook( __FILE__, array( 'WP_Authors_Plugin', 'hooks' ) );
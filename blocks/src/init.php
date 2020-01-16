<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function wp_authors_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'wp-authors-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'wp-authors-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-data' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'wp-authors-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'wp-authors-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'wp-authors/byline', array(
			'style'         => 'wp-authors-style-css',
			'editor_script' => 'wp-authors-block-js',
			'editor_style'  => 'wp-authors-block-editor-css',
			'render_callback' => 'wp_authors_byline_callback',
		)
	);

		/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'wp-authors/bio', array(
			'style'         => 'wp-authors-style-css',
			'editor_script' => 'wp-authors-block-js',
			'editor_style'  => 'wp-authors-block-editor-css',
			'render_callback' => 'wp_authors_bio_callback',
		)
	);
}

// Hook: Block assets.
add_action( 'init', 'wp_authors_block_assets' );

/**
 * Render Callback
 *
 * @param array $attributes
 * @param string $content
 * @return string
 */
function wp_authors_byline_callback() {
	$post_id = get_the_ID();
	$taxonomy = 'guest_author';
	$term_list = wp_get_post_terms( $post_id, $taxonomy, array( 'fields' => 'all' ) );
    if ( count( $term_list ) === 0 ) {
        return __( 'No terms', 'wp-authors' );
	}
	
	ob_start(); ?>

	<ul class="wp-block-wp-authors-byline">
	<?php
	foreach( $term_list as $term ) : ?>
		<li id="<?php echo esc_attr( $term->slug ); ?>">
			<a href="<?php echo esc_url( get_term_link( $term->term_id ) ); ?>" class="byline vcard" title="<?php echo esc_html( $term->name ); ?>" rel="author">
				<?php echo esc_html( $term->name ); ?>
			</a>
		</li>
	<?php
	endforeach; ?>
	</ul>

	<?php
	$content = ob_get_clean();
	
	return $content;
}

/**
 * Render Callback
 *
 * @return string
 */
function wp_authors_bio_callback() {
	$post_id = get_the_ID();
	$taxonomy = 'guest_author';
	$term_list = wp_get_post_terms( $post_id, $taxonomy, array( 'fields' => 'all' ) );
    if ( count( $term_list ) === 0 ) {
        return __( 'No terms', 'wp-authors' );
	}
	
	ob_start(); ?>

	<div class="wp-block-wp-authors-bio">
	<?php
	foreach( $term_list as $term ) : ?>
		<div class="author-bio">
			<div class="author-name author-title-wrapper">
				<?php if( $image = get_term_meta( $term->term_id, 'image', true ) ) : ?>
					<div class="author-avatar vcard">
						<?php echo wp_get_attachment_image( $image, 'thumbnail' );  ?>
					</div>
				<?php endif; ?>
				<h2 class="author-title heading-size-4">
					<?php echo esc_html( $term->name ); ?>
				</h2>
			</div><!-- .author-name -->
			<div class="author-description">
				<?php echo wpautop( $term->description ); ?>
				<a class="author-link" href="<?php echo esc_url( get_term_link( $term->term_id ) ); ?>" rel="author">
					<?php _e( 'View Archive <span aria-hidden="true">&rarr;</span>', 'wp-authors' ); ?>
				</a>
			</div><!-- .author-description -->
		</div><!-- .author-bio -->
	<?php
	endforeach; ?>
	</div><!-- .wp-block-wp-authors-bio -->

	<?php
	$content = ob_get_clean();
	
	return $content;
}
<?php
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
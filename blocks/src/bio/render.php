<?php
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
            <div class="author-name author-title-wrapper">
                <?php if( $image = get_term_meta( $term->term_id, 'image', true ) ) : ?>
                    <figure class="author-avatar vcard">
                        <?php echo wp_get_attachment_image( $image, 'thumbnail' );  ?>
                    </figure>
                <?php endif; ?>
                <h2 class="author-title heading-size-4">
                    <?php echo esc_html( $term->name ); ?>
                </h2>
            </div><!-- .author-name -->
            <div class="author-description">
                <?php echo wpautop( $term->description ); ?>
                <?php
                // Don't show link to Author archive when on author archive
                if( !is_tax( $taxonomy , $term->term_id ) ) : ?>
                    <a class="author-link" href="<?php echo esc_url( get_term_link( $term->term_id ) ); ?>" rel="author">
                        <?php _e( 'View Archive <span aria-hidden="true">&rarr;</span>', 'wp-authors' ); ?>
                    </a>
                <?php endif; ?>
            </div><!-- .author-description -->
        <?php
        endforeach; ?>
	</div><!-- .wp-block-wp-authors-bio -->

	<?php
	$content = ob_get_clean();
	
	return $content;
}
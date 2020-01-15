/**
 * BLOCK: byline
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { withSelect } = wp.data;
const {
    ServerSideRender,
} = wp.components;
const { Fragment } = wp.element;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'wp-authors/byline', {
    title: __( 'Author Byline', 'wp-author' ),
    icon: 'admin-users',
	category: 'widgets',
	keywords: [
		__( 'byline', 'wp-author' ),
		__( 'author', 'wp-author' ),
	],
 
    edit: withSelect( ( select ) => {
		const post_id = select("core/editor").getCurrentPostId();
		const author_ids = select("core/editor").getEditedPostAttribute( 'authors' );
		const query = {
			include: author_ids
		};

        return {
			terms: select( 'core' ).getEntityRecords( 'taxonomy', 'guest_author', query ),
			author_ids
        };
    } )( ( { terms, author_ids, className } ) => {
		if( author_ids.length === 0 ) {
			return 'Please select author(s).'
		}

        if ( ! terms ) {
            return 'Loading...';
        }
 
        if ( terms && terms.length === 0 ) {
            return 'No authors';
        }
 
        return (
			<ul className={ className }>
				{ terms.map( ( term, index ) => {
					return (
						<li key={ index }>
							<a className='author-link' href={ term.link }>
								{ term.name }
							</a>
						</li>
					);
				}) }
			</ul>			
		);
	} ),
	save: function( props ) {
		return null;
	},
} );
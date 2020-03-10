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

const blockAttributes = {
	'showAvatar': {
		'type': 'boolean'
	},
	'showLink': {
		'type': 'boolean'
	}
}
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
registerBlockType( 'wp-authors/bio', {
    title: __( 'Author Bios', 'wp-author' ),
    icon: 'id',
	category: 'widgets',
	keywords: [
		__( 'bio', 'wp-author' ),
		__( 'author', 'wp-author' ),
		__( 'card', 'wp-author' ),
	],
	attributes: blockAttributes,
 
    edit: withSelect( ( select ) => {
		const author_ids = select( 'core/editor' ).getEditedPostAttribute( 'authors' );
		const query = {
			include: author_ids
		};

        return {
			terms: select( 'core' ).getEntityRecords( 'taxonomy', 'guest_author', query ),
			author_ids
        };
    } )( ( { terms, author_ids, className } ) => {
		if( author_ids.length === 0 ) {
			return __( 'Please select author(s).', 'wp-authors' );
		}

        if ( ! terms ) {
            return __( 'Loading...', 'wp-authors' );
        }
 
        if ( terms && terms.length === 0 ) {
            return __( 'No authors.', 'wp-authors' );
        }
 
        return (
			<div className={ className }>
				{ terms.map( ( term, index ) => {
					return (
						<div key={ index } className="author-bio">
							<div className="author-name author-title-wrapper">
								<h2 className="author-title heading-size-4">
									{ term.name }
								</h2>
							</div>
							<div className="author-description" dangerouslySetInnerHTML={ { __html: term.description } } />
							<a className='author-link' href={ term.link } rel="author">
								{ __( 'View Archive', 'wp-authors' ) }
							</a>
						</div>
					);
				}) }
			</div>			
		);
	} ),
	save: function( props ) {
		return null;
	},
} );

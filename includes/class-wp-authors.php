<?php

/**
 * Main Authors Class
 *
 * @link              https://patrizialutz.tech
 * @since             1.0.0
 * @package           Wp_Authors
 *
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class WP_Authors_Taxonomy {

    /**
     * Plugin Version
     *
     * @var string $version
     */
    protected $version;

    /**
     * Taxonomy Name
     *
     * @var string $taxonomy
     */
    protected $taxonomy;

    /**
     * Post Types to Assign Taxonomy
     *
     * @var array $post_types
     */
    protected $post_types;

    /**
     * User Capabilities Required to Manage Taxonomy Terms
     *
     * @var array $capabilities
     */
    protected $capabilities;

    protected $fields;

    protected $slug;

    /**
     * Construct
     */
    public function __construct() {
        $this->taxonomy = 'guest_author';

        $this->slug = apply_filters( 'wp_authors_slug', 'authors' );

        /**
         * @use `wp_authors_post_types` filter to modify post types
         * @see https://developer.wordpress.org/reference/functions/add_filter/
         * @see https://developer.wordpress.org/reference/functions/get_post_types/
         */
        $this->post_types = apply_filters( 'wp_authors_post_types', get_post_types( array( 'public'   => true ), 'names' ) );

        /**
         * @use `wp_authors_capabilities` filter to modify capabilities
         * @see https://developer.wordpress.org/reference/functions/add_filter/
         * @see https://developer.wordpress.org/plugins/users/roles-and-capabilities/
         */
        $this->capabilities = apply_filters( 'wp_authors_capabilities', array(
            'manage_terms'               => 'edit_users',
            'edit_terms'                 => 'edit_users',
            'delete_terms'               => 'delete_users',
            'assign_terms'               => 'edit_posts',
        ) );

        $this->load_dependencies();

        $this->actions();

        $this->register_block();
    }

    /**
     * Register Actions
     *
     * @return void
     */
    public function actions() {
        add_action( 'after_setup_theme', array( $this, 'load_dependencies' ) );

        add_action( 'init', array( $this, 'register_taxonomy' ), 0 );

        add_filter( 'query_vars', array( $this, 'add_query_vars' ) );

        add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );

        add_action( 'parent_file', array( $this, 'highlight_menu' ) );

        add_action( 'admin_menu', array( $this, 'remove_admin_submenus' ), 999 );

        add_action( 'cmb2_init', array( $this, 'register_fields' ) );

        add_action( 'rest_api_init', array( $this, 'register_rest_field' ) );

        add_filter( 'manage_posts_columns', array( $this, 'remove_author_column' ) );

        add_filter( 'manage_pages_columns', array( $this, 'remove_author_column' ) );

        add_filter( "manage_edit-{$this->taxonomy}_columns", array( $this, 'add_column' ) );

        add_filter( "manage_{$this->taxonomy}_custom_column", array( $this, 'add_column_content' ), 10, 3 );

        // $this->apply_sortable_columns();
    }

    /**
     * Load Dependencies
     *
     * @return void
     */
    public function load_dependencies() {
        require( WP_AUTHORS_DIR . '/vendor/autoload.php' );
    }

    /**
     * Register Taxonomy
     * 
     * @see https://developer.wordpress.org/reference/functions/register_taxonomy/
     * 
     * @since 1.0.0
     *
     * @return void
     */
    public function register_taxonomy() {
        /**
         * @use `wp_authors_labels` filter to modify taxonomy labels
         * @see https://developer.wordpress.org/reference/functions/add_filter/
         * @see https://developer.wordpress.org/reference/functions/register_taxonomy/
         */
        $labels = apply_filters( 'wp_authors_labels', array(
            'name'                       => _x( 'Authors', 'Taxonomy General Name', 'wp-authors' ),
            'singular_name'              => _x( 'Author', 'Taxonomy Singular Name', 'wp-authors' ),
            'menu_name'                  => __( 'Authors', 'wp-authors' ),
            'all_items'                  => __( 'All Authors', 'wp-authors' ),
            'parent_item'                => __( 'Parent Author', 'wp-authors' ),
            'parent_item_colon'          => __( 'Parent Author:', 'wp-authors' ),
            'new_item_name'              => __( 'New Author Name', 'wp-authors' ),
            'add_new_item'               => __( 'Add New Author', 'wp-authors' ),
            'edit_item'                  => __( 'Edit Author', 'wp-authors' ),
            'update_item'                => __( 'Update Author', 'wp-authors' ),
            'view_item'                  => __( 'View Author', 'wp-authors' ),
            'separate_items_with_commas' => __( 'Separate authors with commas', 'wp-authors' ),
            'add_or_remove_items'        => __( 'Add or remove authors', 'wp-authors' ),
            'choose_from_most_used'      => __( 'Choose from the most used', 'wp-authors' ),
            'popular_items'              => __( 'Popular Authors', 'wp-authors' ),
            'search_items'               => __( 'Search Authors', 'wp-authors' ),
            'not_found'                  => __( 'Not Found', 'wp-authors' ),
            'no_terms'                   => __( 'No items', 'wp-authors' ),
            'items_list'                 => __( 'Authors list', 'wp-authors' ),
            'items_list_navigation'      => __( 'Authors list navigation', 'wp-authors' ),
        ) );
    
        $rewrite = array(
            'slug'                       => 'authors',
            'with_front'                 => true,
            'hierarchical'               => false,
        );

        $args = array(
            'labels'                     => $labels,
            'hierarchical'               => false,
            'public'                     => true,
            'show_ui'                    => true,
            'show_admin_column'          => true,
            'show_in_nav_menus'          => false,
            'show_tagcloud'              => true,
            'query_var'                  => $this->slug,
            'rewrite'                    => $rewrite,
            'capabilities'               => $this->capabilities,
            'show_in_rest'               => true,
            'rest_base'                  => $this->slug,
        );

        /**
         * @use `wp-authors-taxonomy-args` filter to modify taxonomy $args
         * @see https://developer.wordpress.org/reference/functions/add_filter/
         * @see https://developer.wordpress.org/reference/functions/register_taxonomy/
         */
        register_taxonomy( $this->taxonomy, $this->post_types, apply_filters( 'wp-authors-taxonomy-args', $args ) );
    }

    /**
     * Add Query Var
     * 
     * @link https://developer.wordpress.org/reference/hooks/query_vars/
     *
     * @param array $query_vars
     * @return array $query_vars
     */
    public function add_query_vars( $query_vars ) {
        $query_vars[] = 'last_name';
        return $query_vars;
    }

    /**
     * Add Admin Menu
     * 
     * @since 1.0.0
     * 
     * @see https://developer.wordpress.org/reference/functions/add_menu_page/
     *
     * @return void
     */
    public function add_admin_menu() {
        add_menu_page(
            __( 'Authors', 'wp-authors' ),
            __( 'Authors', 'wp-authors' ),
            apply_filters( 'wp_authors_menu_capabilities', 'list_users' ),
            "edit-tags.php?taxonomy={$this->taxonomy}",
            '',
            apply_filters( 'wp_authors_menu_icon', 'dashicons-id' ),
            apply_filters( 'wp_authors_menu_position', 65 )
        );
    }

    /**
     * Remove Taxonomy Menu in Admin Post Menus
     * 
     * @since 1.0.0
     * 
     * @see https://developer.wordpress.org/reference/functions/remove_submenu_page/
     *
     * @return void
     */
    public function remove_admin_submenus() {
        if( !empty( $this->post_types ) ) {
            foreach( $this->post_types as $post_type ) {
                remove_submenu_page( "edit.php?post_type={$post_type}", "edit-tags.php?taxonomy={$this->taxonomy}&amp;post_type={$post_type}" );
           }
        }

        remove_submenu_page( "edit.php", "edit-tags.php?taxonomy={$this->taxonomy}" );
        remove_submenu_page( "upload.php", "edit-tags.php?taxonomy={$this->taxonomy}&post_type=attachment" );
    }

    /**
     * Highlight the Custom Admin Menu
     * 
     * @since 1.0.0
     * 
     * @see https://developer.wordpress.org/reference/hooks/parent_file/
     * 
     * @param string $parent_file
     * @return string $parent_file
     */
    public function highlight_menu( $parent_file ) {
        if ( get_current_screen()->taxonomy == 'guest_author' ) {
            $parent_file = "edit-tags.php?taxonomy=guest_author";
        }
        return $parent_file;
    }

    /**
     * Register Term Meta
     * 
     * @since 1.0.0
     * 
     * @uses new_cmb2_box()
     * @see https://github.com/CMB2/CMB2/wiki/Basic-Usage#create-a-metabox
     *
     * @return void
     */
    public function register_fields() {
		$cmb_term = new_cmb2_box( array(
			'id'               => 'meta',
			'title'            => esc_html__( 'Authors', 'wp-authors' ),
			'object_types'     => array( 'term' ),
			'taxonomies'       => array( $this->taxonomy ),
            'new_term_section' => true,
            'show_in_rest'     => true,
		) );

		$cmb_term->add_field( array(
			'name' => esc_html__( 'Nickname', 'wp-authors' ),
			'desc' => esc_html__( '', 'wp-authors' ),
			'id'   => 'nickname',
			'type' => 'text',
			'attributes'        => array(
				'placeholder' 		=> __( 'Nickame', 'wp-authors' ),
            ),
		) );

		$cmb_term->add_field( array(
			'name' => esc_html__( 'First Name', 'wp-authors' ),
			'desc' => esc_html__( '', 'wp-authors' ),
			'id'   => 'first_name',
			'type' => 'text',
			'attributes'        => array(
				'placeholder' 		=> __( 'First Name', 'wp-authors' ),
            ),
		) );

		$cmb_term->add_field( array(
			'name' => esc_html__( 'Last Name', 'wp-authors' ),
			'desc' => esc_html__( '', 'wp-authors' ),
			'id'   => 'last_name',
			'type' => 'text',
			'attributes'        => array(
				'placeholder' 		=> __( 'Last Name', 'wp-authors' ),
            ),
		) );

		$cmb_term->add_field( array(
			'name' => esc_html__( 'Email', 'wp-authors' ),
			'desc' => esc_html__( '', 'wp-authors' ),
			'id'   => 'email',
			'type' => 'text_email',
			'attributes'        => array(
                'placeholder' 		=> __( 'Email', 'wp-authors' ),
                'type'              => 'email'
            ),
		) );

		$cmb_term->add_field( array(
			'name' => esc_html__( 'Website', 'wp-authors' ),
			'desc' => esc_html__( '', 'wp-authors' ),
			'id'   => 'website',
			'type' => 'text_url',
			'attributes'        => array(
                'placeholder' 		=> __( 'Website', 'wp-authors' ),
                'type'              => 'url'
            ),
        ) );
        
        $cmb_term->add_field( array(
			'name' => esc_html__( 'Twitter', 'wp-authors' ),
			'desc' => esc_html__( '', 'wp-authors' ),
			'id'   => 'twitter',
			'type' => 'text_url',
			'attributes'        => array(
                'placeholder' 		=> __( 'Twitter', 'wp-authors' ),
                'type'              => 'url'
            ),
        ) );
        
        $cmb_term->add_field( array(
			'name' => esc_html__( 'Instagram', 'wp-authors' ),
			'desc' => esc_html__( '', 'wp-authors' ),
			'id'   => 'instagram',
			'type' => 'text_url',
			'attributes'        => array(
                'placeholder' 		=> __( 'Instagram', 'wp-authors' ),
                'type'              => 'url'
            ),
        ) );
        
        $cmb_term->add_field( array(
			'name' => esc_html__( 'Facebook', 'wp-authors' ),
			'desc' => esc_html__( '', 'wp-authors' ),
			'id'   => 'facebook',
			'type' => 'text_url',
			'attributes'        => array(
                'placeholder' 		=> __( 'Facebook', 'wp-authors' ),
                'type'              => 'url'
            ),
		) );

		$cmb_term->add_field( array(
			'name'  => esc_html__( 'User', 'wp-authors' ),
			'id'    => 'user',
			'desc'  => esc_html__( 'Type the name of a user to associate with this author', 'wp-authors' ),
			'type'  => 'user_select_text',
            'options' => array(),
		) );

		if( !class_exists( 'WP_Term_Images' ) ) {
			$cmb_term->add_field( array(
				'name' => esc_html__( 'Profile Picture', 'wp-authors' ),
				'id'   => 'image',
                'type' => 'file',
                'options' => array(
                    'url' => false,
                ),
			) );
        }

    }

    /**
     * Register Rest Field
     * 
     * @see https://developer.wordpress.org/reference/functions/register_rest_field/
     */
    public function register_rest_field() {
        register_rest_field( 'guest_author',
            'meta', 
            array(
                'get_callback'    => array( $this, 'get_term_meta' ),
                'schema'          => null,
            )
        );
    }

    function get_term_meta( $object, $field_name, $request ) {
        $term_meta = get_term_meta( $object['id'], '', true );

        $result = array();

        if( is_array( $term_meta ) ) {
            foreach( $term_meta as $key => $value ) {
                array_push( $result, array( $key => $value ) );
            }

            return $result;
        }
    }
    
    /**
     * Remove the built-in author column
     * 
     * @since 1.0.0
     * 
     * @param array $columns
     * @return array $columns
     */
    public function remove_author_column( $columns ) {
        unset( $columns['author'] );
        return $columns;
    }

    /**
     * Add Column for Profile Pic
     * 
     * @since 1.0.0
     * 
     * @see https://codex.wordpress.org/Plugin_API/Filter_Reference/manage_edit-post_type_columns
     *
     * @param array $columns
     * @return array $columns
     */
    public function add_column( $columns ) {
        $columns['image'] = __( 'Image', 'wp-authors' );
        return $columns;
    }

    /**
     * Add Column Content for Profile Pic
     * 
     * @since 1.0.0
     * 
     * @see https://codex.wordpress.org/Plugin_API/Action_Reference/manage_$post_type_posts_custom_column
     *
     * @param string $content
     * @param string $column_name
     * @param int $term_id
     * @return string $content
     */
    public function add_column_content( $content, $column_name, $term_id ) {
        if( $column_name !== 'image' ) {
            return $content;
        }
    
        $term_id = absint( $term_id );
        $image = get_term_meta( $term_id, 'image_id', true );
    
        if( !empty( $image ) ) {
            $content = wp_get_attachment_image( $image, array( '40', '40' ), false, array( 'height' => '40', 'width' => '40' ) );
        }
    
        return $content;
    }

    /**
     * Replace core author column with guest_author taxonomy
     * @todo
     */
    public function replace_author_column( $columns ) {}

    /**
     * Make guest_author column heading sortable
     * @todo
     */
    public function sortable_column( $columns ) {
        $columns['taxonomy-guest_author'] = 'taxonomy-guest_author';

        return $columns;
    }

    /**
     * Enable guest_author sorting for all post types
     * @todo 
     */
    public function apply_sortable_columns() {
        foreach( $this->post_types as $post_type ) {
            add_filter( "manage_edit-{$post_type}_sortable_columns", array( $this, 'sortable_column' ) );
        }
    }

    public function register_block() {}
}

$wp_authors = new WP_Authors_Taxonomy();
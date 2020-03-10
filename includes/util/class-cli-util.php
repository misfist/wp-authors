<?php

/**
 * Utility Functions
 *
 * @link              https://patrizialutz.tech
 * @since             1.0.0
 * @package           WP_Authors
 *
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


if ( defined( 'WP_CLI' ) && WP_CLI ) {
    /**
     * CLI class to create guest author terms
     */
    class WP_Authors_CLI_Util {

        /**
         * Author taxonomy
         * 
         * @string
         */
        public $taxonomy = 'guest_author';

        /**
         * Construct
         */
        public function __construct() {}

        /**
         * Get all users that have posts
         * 
         * @return array $authors
         */
        private function get_authors() {
            global $wpdb;

            $query = "
                SELECT DISTINCT post_author, COUNT(ID) 
                AS count FROM $wpdb->posts 
                WHERE post_type = 'post' 
                AND " . get_private_posts_cap_sql( 'post' ) . " 
                GROUP BY post_author";

            $results = $wpdb->get_results( $query );

            foreach ( $results as $row ) {
                $author = get_userdata( $row->post_author );
                $author_meta = get_user_meta( $author->ID, '', true );
                $authors[$row->post_author]['id'] = $author->ID;
                $authors[$row->post_author]['name'] = $author->display_name;
                $authors[$row->post_author]['first_name'] = get_user_meta( $author->ID, 'first_name', true );
                $authors[$row->post_author]['last_name'] = get_user_meta( $author->ID, 'last_name', true );
                $authors[$row->post_author]['nickname'] = get_user_meta( $author->ID, 'nickname', true );
                $authors[$row->post_author]['description'] = get_user_meta( $author->ID, 'description', true );
                $authors[$row->post_author]['user_login'] = $author->user_login;
                $authors[$row->post_author]['user_email'] = $author->user_email;
                $authors[$row->post_author]['user_url'] = $author->user_url;
                $authors[$row->post_author]['slug'] = sanitize_title( $author->display_name );
                $authors[$row->post_author]['post_count'] = $row->count;
            }
            
            return $authors;
        }

        /**
         * Create Author terms for each author user
         * 
         * @uses $this->get_authors()
         * @uses $this->create_term()
         * 
         * @return void
         */
        public function create() {
            $users = $this->get_authors_without_terms();

            if( !empty( $users ) ) {

                $count = 0;

                foreach( $users as $user ) {
    
                    if( !term_exists( $user['slug'], $this->taxonomy ) ) {
                        $count++;
                        $this->create_term( $user );
    
                        WP_CLI::log( "$count) {$user['slug']} will be created" );
                    }
                }
    
                WP_CLI::success( "$count terms were created" );

            } else {

                WP_CLI::Error( "No terms to create." );

            }

        }

        /**
         * Create Author term for single author user
         * 
         * @param array $user
         * @return void
         */
        private function create_term( $user ) {
            $args = array(
                'slug'   => $user['slug'],
                'description'   => $user['description'],
            );

            if( isset( $user['first_name'] ) && isset( $user['last_name'] ) ) {
                $term_name = trim( $user['first_name'] ) . ' ' . trim( $user['last_name'] );
            } else {
                $term_name = $user['name'];
            }
        
            $term = wp_insert_term( 
                $term_name, 
                $this->taxonomy, 
                $args 
            );

            if( !is_wp_error( $term ) ) {

                $term_meta = array(
                    'first_name'    => $user['first_name'],
                    'last_name'     => $user['last_name'],
                    'nickname'      => $user['nickname'],
                    'email'         => $user['user_email'],
                    'user'          => array(
                        'name'      => $user['name'],
                        'id'        => $user['id']
                    )
                );

                foreach( $term_meta as $key => $value ) {
                    add_term_meta( $term['term_id'], $key, $value );
                }

                WP_CLI::success( "{$term_name} was created" );
                
            } else {
                WP_CLI::log( "{$user['name']} wasn't created" );
            }

        }

        /**
         * Assign Author terms to each post that doesn't already have an Author term
         * 
         * @uses $this->assign_term
         * 
         * @return void
         */
        public function assign() {

            if( $posts = $this->get_posts_without_authors() ) {
                $post_count = count( $posts );
                WP_CLI::log( "{$post_count} posts need {$this->taxonomy} terms assigned." );

                $count = 0;
                foreach( $posts as $post_id ) {

                    $author_id = get_post_field( 'post_author', $post_id );

                    // WP_CLI::log( $author_id );

                    $slug = sanitize_title( get_the_author_meta( 'display_name', $author_id ) );
    
                    if( $term = get_term_by( 'slug', $slug, $this->taxonomy ) ) {

                        // $term_id = $term->term_id;
                        $term_name = $term->name;
                        $count = $this->assign_term( $post_id, $term_name, $count );

                    } else {

                        WP_CLI::log( "We need to create the term." );

                    }

                }
                WP_CLI::success( "$count {$this->taxonomy} terms were assigned." );

            } else {
                WP_CLI::Error( "There are no posts without Author terms." );
            }
        }

        /**
         * Assign Author term to single post
         * 
         * @param int $post_id
         * @param int $term_name
         * @return void
         */
        private function assign_term( $post_id, $term_name, $count ) {

            wp_set_post_terms( $post_id, $term_name, $this->taxonomy );

            $count++;

            WP_CLI::success( "{$count}) {$this->taxonomy} {$term_name} was assigned to post {$post_id}" );

            return $count;
        }

        /**
         * Get all posts without author terms
         * 
         * @return mixed array $posts or error
         */
        private function get_posts_without_authors() {
            $post_types = array( 'post', 'page' );
            $args = [
                'post_type'         => $post_types,
                'posts_per_page'    => -1,
                'fields'            => 'ids',
                'tax_query'         => [
                    [
                        'taxonomy' => $this->taxonomy,
                        'terms'    => get_terms( $this->taxonomy, [ 'fields' => 'ids'  ] ),
                        'operator' => 'NOT IN'
                    ]
                ]
            ];

            $query = new \WP_Query( $args );

            return $query->get_posts();
        }

        /**
         * Get authors that don't already have `$this->taxonomy` term
         * 
         * @return array filtered @users
         */
        private function get_authors_without_terms() {
            $users = $this->get_authors();

            return array_filter( $users, function( $user ) {
                return !term_exists( $user['slug'], $this->taxonomy );
            } );
        }

    }

    WP_CLI::add_command( 'guest-authors', 'WP_Authors_CLI_Util' );
    
}
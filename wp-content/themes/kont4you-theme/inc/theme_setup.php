<?php

/**
 * Theme general setup
 */
function theme_setup() {
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list' ) );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'title-tag' );
    add_filter( 'use_default_gallery_style', '__return_false' );
    add_filter( 'show_admin_bar', '__return_false' );
}
add_action( 'after_setup_theme', 'theme_setup' );

/**
 * Register Navigation Menus
 */
function custom_navigation_menus() {
    register_nav_menus( array(
        'main_menu' => __( 'Menu principal', 'kont4you-theme' ),
        'footer_menu' => __( 'Menu rodapé', 'kont4you-theme' ),
    ) );
}
add_action( 'init', 'custom_navigation_menus' );

/**
 * Remove file accents on upload
 */
if ( is_admin() ) {
    function wp_rauf_check_filetype_and_ext($wp_filetype, $file, $filename, $mimes) {
        if ( !$wp_filetype['proper_filename'] ) {
            $wp_filetype['proper_filename'] = remove_accents(str_replace('.'.$wp_filetype['ext'], '', $filename)).'.'.$wp_filetype['ext'];
        }
        return $wp_filetype;
    }
    add_filter( 'wp_check_filetype_and_ext', 'wp_rauf_check_filetype_and_ext', 10, 4 );
}

/**
 * ACF Options Page
 */
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page('Opções do tema');
}

/**
 * Custom footer admin
 */
function remove_footer_admin () {
    echo 'Obrigado por escolher Kont4You!';
}
add_filter('admin_footer_text', 'remove_footer_admin');

/**
 * Custom link logotipo admin for link website
 */
function my_login_logo_url() {
    return home_url();
}
add_filter( 'login_headerurl', 'my_login_logo_url' );

/**
 * Custom name logotipo admin
 */
function my_login_logo_url_title() {
    return get_bloginfo( 'name' );
}
add_filter( 'login_headertitle', 'my_login_logo_url_title' );
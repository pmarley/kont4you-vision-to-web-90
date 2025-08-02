<?php
/**
 * Kont4You Theme functions and definitions
 *
 * @package Kont4You
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme version
define('KONT4YOU_VERSION', '1.0.0');

/**
 * Theme setup
 */
function kont4you_setup() {
    // Add theme support
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo');
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'kont4you'),
        'footer'  => esc_html__('Footer Menu', 'kont4you'),
    ));
}
add_action('after_setup_theme', 'kont4you_setup');

/**
 * Enqueue scripts and styles
 */
function kont4you_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'kont4you-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        array(),
        KONT4YOU_VERSION
    );

    // Theme styles
    wp_enqueue_style(
        'kont4you-style',
        get_stylesheet_uri(),
        array(),
        KONT4YOU_VERSION
    );

    // React app styles (if built)
    $css_file = get_template_directory() . '/dist/css/app.css';
    if (file_exists($css_file)) {
        wp_enqueue_style(
            'kont4you-app',
            get_template_directory_uri() . '/dist/css/app.css',
            array(),
            filemtime($css_file)
        );
    }

    // React app scripts (if built)
    $js_file = get_template_directory() . '/dist/js/app.js';
    if (file_exists($js_file)) {
        wp_enqueue_script(
            'kont4you-app',
            get_template_directory_uri() . '/dist/js/app.js',
            array(),
            filemtime($js_file),
            true
        );
    }

    // Localize script for WordPress API
    wp_localize_script('kont4you-app', 'kont4youAPI', array(
        'apiUrl' => home_url('/wp-json/wp/v2/'),
        'nonce'  => wp_create_nonce('wp_rest'),
        'homeUrl' => home_url(),
        'themeUrl' => get_template_directory_uri(),
    ));
}
add_action('wp_enqueue_scripts', 'kont4you_scripts');

/**
 * Register widget areas
 */
function kont4you_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'kont4you'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'kont4you'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'kont4you_widgets_init');

/**
 * Custom post types and fields
 */
function kont4you_custom_post_types() {
    // Serviços
    register_post_type('servicos', array(
        'labels' => array(
            'name' => 'Serviços',
            'singular_name' => 'Serviço',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true,
    ));

    // Depoimentos
    register_post_type('depoimentos', array(
        'labels' => array(
            'name' => 'Depoimentos',
            'singular_name' => 'Depoimento',
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true,
    ));

    // FAQ
    register_post_type('faq', array(
        'labels' => array(
            'name' => 'FAQ',
            'singular_name' => 'Pergunta',
        ),
        'public' => true,
        'supports' => array('title', 'editor'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'kont4you_custom_post_types');

/**
 * REST API customizations
 */
function kont4you_rest_api_init() {
    // Custom endpoint for contact form
    register_rest_route('kont4you/v1', '/contact', array(
        'methods' => 'POST',
        'callback' => 'kont4you_handle_contact_form',
        'permission_callback' => '__return_true',
    ));

    // Custom endpoint for lead generation
    register_rest_route('kont4you/v1', '/lead', array(
        'methods' => 'POST',
        'callback' => 'kont4you_handle_lead_form',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'kont4you_rest_api_init');

/**
 * Handle contact form submission
 */
function kont4you_handle_contact_form($request) {
    $params = $request->get_params();
    
    // Validate and sanitize
    $name = sanitize_text_field($params['name']);
    $email = sanitize_email($params['email']);
    $phone = sanitize_text_field($params['phone']);
    $message = sanitize_textarea_field($params['message']);
    
    // Send email
    $to = get_option('admin_email');
    $subject = 'Novo contato do site - ' . get_bloginfo('name');
    $body = "Nome: {$name}\nEmail: {$email}\nTelefone: {$phone}\nMensagem: {$message}";
    
    $sent = wp_mail($to, $subject, $body);
    
    if ($sent) {
        return new WP_REST_Response(array(
            'success' => true,
            'message' => 'Mensagem enviada com sucesso!'
        ), 200);
    } else {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Erro ao enviar mensagem.'
        ), 500);
    }
}

/**
 * Handle lead form submission
 */
function kont4you_handle_lead_form($request) {
    $params = $request->get_params();
    
    // Validate and sanitize
    $name = sanitize_text_field($params['name']);
    $email = sanitize_email($params['email']);
    $phone = sanitize_text_field($params['phone']);
    $company_type = sanitize_text_field($params['company_type']);
    $area = sanitize_text_field($params['area']);
    
    // Save as lead (you could create a custom table or use posts)
    $lead_id = wp_insert_post(array(
        'post_type' => 'leads',
        'post_title' => $name,
        'post_status' => 'private',
        'meta_input' => array(
            'email' => $email,
            'phone' => $phone,
            'company_type' => $company_type,
            'area' => $area,
            'created_at' => current_time('mysql'),
        )
    ));
    
    // Send notification
    $to = get_option('admin_email');
    $subject = 'Novo lead capturado - ' . get_bloginfo('name');
    $body = "Nome: {$name}\nEmail: {$email}\nTelefone: {$phone}\nTipo: {$company_type}\nÁrea: {$area}";
    
    wp_mail($to, $subject, $body);
    
    return new WP_REST_Response(array(
        'success' => true,
        'message' => 'Lead registrado com sucesso!',
        'lead_id' => $lead_id
    ), 200);
}

/**
 * CORS headers for React development
 */
function kont4you_add_cors_headers() {
    if (defined('WP_DEBUG') && WP_DEBUG) {
        header('Access-Control-Allow-Origin: http://localhost:5173');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Credentials: true');
    }
}
add_action('init', 'kont4you_add_cors_headers');

/**
 * Custom image sizes
 */
function kont4you_image_sizes() {
    add_image_size('hero-size', 1200, 800, true);
    add_image_size('card-size', 400, 300, true);
    add_image_size('section-size', 600, 400, true);
}
add_action('after_setup_theme', 'kont4you_image_sizes');

/**
 * Cleanup head
 */
function kont4you_cleanup_head() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
}
add_action('init', 'kont4you_cleanup_head');
<?php

/**
 * Custom post types
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
        'menu_icon' => 'dashicons-admin-tools',
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
        'menu_icon' => 'dashicons-format-quote',
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
        'menu_icon' => 'dashicons-editor-help',
    ));
}
add_action('init', 'kont4you_custom_post_types');
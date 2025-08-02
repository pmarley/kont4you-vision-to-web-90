<?php

/**
 * Custom taxonomies
 */
function kont4you_custom_taxonomies() {
    // Categorias de serviços
    register_taxonomy('categoria_servico', 'servicos', array(
        'labels' => array(
            'name' => 'Categorias de Serviços',
            'singular_name' => 'Categoria de Serviço',
        ),
        'public' => true,
        'hierarchical' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'kont4you_custom_taxonomies');
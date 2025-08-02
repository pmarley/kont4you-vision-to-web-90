<?php

/**
 * Custom image sizes
 */
function kont4you_image_sizes() {
    add_image_size('hero-size', 1200, 800, true);
    add_image_size('card-size', 400, 300, true);
    add_image_size('section-size', 600, 400, true);
    add_image_size('admin-thumb', 100, 100, true);
}
add_action('after_setup_theme', 'kont4you_image_sizes');
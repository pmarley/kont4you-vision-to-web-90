<?php

/**
 * Disable unused WordPress features
 */

// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');

// Remove RSD link
remove_action('wp_head', 'rsd_link');

// Remove wlwmanifest link
remove_action('wp_head', 'wlwmanifest_link');

// Remove next and previous post links
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head');

// Remove shortlink
remove_action('wp_head', 'wp_shortlink_wp_head');

// Remove feed links
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'feed_links', 2);

// Disable REST API link in header
remove_action('wp_head', 'rest_output_link_wp_head');

// Disable oEmbed discovery links
remove_action('wp_head', 'wp_oembed_add_discovery_links');

// Disable REST API link in HTTP headers
remove_action('template_redirect', 'rest_output_link_header', 11);

// Disable emoji support
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('admin_print_styles', 'print_emoji_styles');
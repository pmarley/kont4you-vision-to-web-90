<?php

/**
 * Add custom file types to upload
 */
function kont4you_custom_upload_mimes($mimes) {
    // Add SVG support
    $mimes['svg'] = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
    
    // Add WebP support
    $mimes['webp'] = 'image/webp';
    
    return $mimes;
}
add_filter('upload_mimes', 'kont4you_custom_upload_mimes');

/**
 * Fix SVG upload issue
 */
function kont4you_fix_svg_upload($data, $file, $filename, $mimes) {
    $filetype = wp_check_filetype($filename, $mimes);
    
    if ($filetype['ext'] == 'svg') {
        $data['ext'] = 'svg';
        $data['type'] = 'image/svg+xml';
    }
    
    return $data;
}
add_filter('wp_check_filetype_and_ext', 'kont4you_fix_svg_upload', 10, 4);
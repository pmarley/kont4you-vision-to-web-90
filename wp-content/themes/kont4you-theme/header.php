<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php echo bloginfo('charset'); ?>">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--[if IE]><![endif]-->

    <link rel="shortcut icon" href="<?php echo get_site_icon_url();  ?>">

    <meta name="description" content="<?php echo get_bloginfo('description'); ?>">
    <meta name="author" content="Kont4You">
    <meta property="og:title" content="<?php echo get_bloginfo('name'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:description" content="<?php echo get_bloginfo('description'); ?>">
    <meta property="og:url" content="<?php echo get_bloginfo('url'); ?>">
    <meta property="og:site_name" content="<?php echo get_bloginfo('name'); ?>">
    <meta property="og:image" content="<?php echo image('share.jpg'); ?>">

    <?php wp_head(); ?>

    <style>
        :root {
            --check-icon: url(<?php echo image('checked.svg'); ?>);
        }
    </style>
</head>

<body <?php body_class(); ?>>
    <div id="app">
        <?php partial('header'); ?>
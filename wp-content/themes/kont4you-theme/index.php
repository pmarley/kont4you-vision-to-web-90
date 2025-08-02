<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 *
 * @package Kont4You
 */

get_header(); ?>

<div id="root">
    <!-- React App will be mounted here -->
    <div id="react-loading">
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Carregando...</p>
        </div>
    </div>
</div>

<?php get_footer(); ?>
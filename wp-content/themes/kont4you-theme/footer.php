    <!-- React App Scripts -->
    <script src="<?php echo get_template_directory_uri(); ?>/dist/js/app.js"></script>
    
    <script>
        // WordPress REST API configuration for React
        window.wpApiSettings = {
            root: '<?php echo esc_url_raw(rest_url()); ?>',
            nonce: '<?php echo wp_create_nonce('wp_rest'); ?>',
            theme_url: '<?php echo get_template_directory_uri(); ?>'
        };
        
        // Hide loading when React app mounts
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                document.getElementById('root').classList.add('loaded');
            }, 1000);
        });
    </script>
    
    <?php wp_footer(); ?>
</body>
</html>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
    
    <!-- React App Styles -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/dist/css/app.css">
    
    <style>
        /* Loading styles */
        #react-loading {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            flex-direction: column;
        }
        
        .loading-spinner {
            text-align: center;
        }
        
        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #1e40af;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Hide loading when React is loaded */
        #root.loaded #react-loading {
            display: none;
        }
    </style>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
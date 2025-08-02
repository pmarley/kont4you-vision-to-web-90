<?php
/**
 * Bootstrap file for setting the ABSPATH constant
 * and loading the wp-config.php file. The wp-config.php
 * file will then load the wp-settings.php file, which
 * will then set up the WordPress environment.
 *
 * If the wp-config.php file is not found then an error
 * will be displayed asking the visitor to set up the
 * wp-config.php file.
 *
 * Will also search for wp-config.php in WordPress' parent
 * directory to allow the WordPress directory to remain
 * untouched.
 *
 * @package WordPress
 */

/** Define ABSPATH as this file's directory */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

error_reporting( E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_ERROR | E_WARNING | E_PARSE | E_USER_ERROR | E_USER_WARNING | E_RECOVERABLE_ERROR );

/*
 * If wp-config.php exists in the WordPress root, or if it exists in the root and wp-settings.php
 * doesn't, load wp-config.php. The secondary check for wp-settings.php has the added benefit
 * of avoiding cases where the current directory is a nested installation, e.g. / is WordPress(a)
 * and /blog/ is WordPress(b).
 *
 * If neither set of conditions is true, initiate loading the setup process.
 */
if ( file_exists( ABSPATH . 'wp-config.php' ) ) {

	/** The config file resides in ABSPATH */
	require_once ABSPATH . 'wp-config.php';

} elseif ( @file_exists( dirname( ABSPATH ) . '/wp-config.php' ) && ! @file_exists( dirname( ABSPATH ) . '/wp-settings.php' ) ) {

	/** The config file resides one level above ABSPATH but is not part of another installation */
	require_once dirname( ABSPATH ) . '/wp-config.php';

} else {

	// A config file doesn't exist

	define( 'WPINC', 'wp-includes' );
	require_once ABSPATH . WPINC . '/load.php';

	// Standardize $_SERVER variables across setups.
	wp_fix_server_vars();

	require_once ABSPATH . WPINC . '/functions.php';

	$path = wp_guess_url() . '/wp-admin/setup-config.php';

	/*
	 * We're going to redirect to setup-config.php. While this shouldn't result
	 * in an infinite loop, that's a silly thing to assume, don't you think? If
	 * we're traveling in circles, our last-ditch effort is "Need more help?"
	 */
	if ( false === strpos( $_SERVER['REQUEST_URI'], 'setup-config' ) ) {
		header( 'Location: ' . $path );
		exit;
	}

	define( 'WP_CONTENT_DIR', ABSPATH . 'wp-content' );
	define( 'WP_CONTENT_URL', wp_guess_url() . '/wp-content' );
	define( 'WP_PLUGIN_DIR', WP_CONTENT_DIR . '/plugins' );
	define( 'WP_PLUGIN_URL', WP_CONTENT_URL . '/plugins' );

	// Die with an error message
	require_once ABSPATH . WPINC . '/class-wp-error.php';
	require_once ABSPATH . WPINC . '/formatting.php';
	require_once ABSPATH . WPINC . '/kses.php';
	require_once ABSPATH . WPINC . '/pluggable.php';
	require_once ABSPATH . WPINC . '/user.php';

	$text_direction = 'ltr';
	if ( isset( $_GET['step'] ) ) {
		$step = $_GET['step'];
	} else {
		$step = 0;
	}

	/**
	 * Display setup wp-config.php file creation form.
	 *
	 * @ignore
	 * @since 2.3.0
	 *
	 * @global string    $text_direction
	 * @global int       $step
	 */
	function display_setup_form( $error = null ) {
		global $text_direction, $step;

		$user_table = ( 'rtl' == $text_direction ) ? 'user_table_rtl' : 'user_table';
		$step_1 = 'setup-config.php?step=1' . ( isset( $_REQUEST['noapi'] ) ? '&amp;noapi' : '' );
		header( 'Content-Type: text/html; charset=utf-8' );
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"<?php if ( 'rtl' == $text_direction ) echo ' dir="rtl"'; ?>>
<head>
<meta name="viewport" content="width=device-width" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="robots" content="noindex,nofollow" />
<title>WordPress &rsaquo; Error</title>
<link rel="stylesheet" id="buttons-css" href="<?php echo wp_guess_url(); ?>/wp-admin/css/buttons.min.css?ver=20160416" type="text/css" media="all" />
<link rel="stylesheet" id="install-css" href="<?php echo wp_guess_url(); ?>/wp-admin/css/install.min.css?ver=20160416" type="text/css" media="all" />
</head>
<body class="wp-core-ui">
<p id="logo"><a href="https://wordpress.org/" tabindex="-1">WordPress</a></p>

<?php if ( isset( $error ) ) { ?>
<p class="message"><?php echo $error; ?></p>
<?php } ?>
<p>There doesn't seem to be a <code>wp-config.php</code> file. I need this before we can get started.</p>
<p>Need more help? <a href="https://codex.wordpress.org/Editing_wp-config.php">We got it</a>.</p>
<p>You can create a <code>wp-config.php</code> file through a web interface, but this doesn't work for all server setups. The safest way is to manually create the file.</p>
<p><a href="<?php echo $step_1; ?>" class="button button-large">Create a Configuration File</a></p>
</body>
</html>
<?php
	}

	display_setup_form();
}
-- Dump inicial do WordPress para Kont4You
-- Estrutura básica com configurações do tema

-- Configurações do WordPress
INSERT INTO `wp_options` (`option_name`, `option_value`, `autoload`) VALUES
('siteurl', 'http://localhost/kont4you', 'yes'),
('home', 'http://localhost/kont4you', 'yes'),
('blogname', 'Kont4You - Contabilidade Online', 'yes'),
('blogdescription', 'Contabilidade completa para o seu negócio crescer', 'yes'),
('admin_email', 'admin@kont4you.com', 'yes'),
('start_of_week', '1', 'yes'),
('use_balanceTags', '0', 'yes'),
('use_smilies', '1', 'yes'),
('require_name_email', '1', 'yes'),
('comments_notify', '1', 'yes'),
('posts_per_rss', '10', 'yes'),
('rss_use_excerpt', '0', 'yes'),
('mailserver_url', 'mail.example.com', 'yes'),
('mailserver_login', 'login@example.com', 'yes'),
('mailserver_pass', 'password', 'yes'),
('mailserver_port', '110', 'yes'),
('default_category', '1', 'yes'),
('default_comment_status', 'open', 'yes'),
('default_ping_status', 'open', 'yes'),
('default_pingback_flag', '1', 'yes'),
('posts_per_page', '10', 'yes'),
('date_format', 'd/m/Y', 'yes'),
('time_format', 'H:i', 'yes'),
('links_updated_date_format', 'd/m/Y H:i', 'yes'),
('comment_moderation', '0', 'yes'),
('moderation_notify', '1', 'yes'),
('permalink_structure', '/%postname%/', 'yes'),
('rewrite_rules', '', 'yes'),
('hack_file', '0', 'yes'),
('blog_charset', 'UTF-8', 'yes'),
('moderation_keys', '', 'no'),
('active_plugins', 'a:0:{}', 'yes'),
('category_base', '', 'yes'),
('ping_sites', 'http://rpc.pingomatic.com/', 'yes'),
('template', 'kont4you-theme', 'yes'),
('stylesheet', 'kont4you-theme', 'yes'),
('comment_registration', '0', 'yes'),
('html_type', 'text/html', 'yes'),
('use_trackback', '0', 'yes'),
('default_role', 'subscriber', 'yes'),
('db_version', '53496', 'yes'),
('uploads_use_yearmonth_folders', '1', 'yes'),
('upload_path', '', 'yes'),
('blog_public', '1', 'yes'),
('default_link_category', '2', 'yes'),
('show_on_front', 'page', 'yes'),
('tag_base', '', 'yes'),
('show_avatars', '1', 'yes'),
('avatar_rating', 'G', 'yes'),
('upload_url_path', '', 'yes'),
('thumbnail_size_w', '150', 'yes'),
('thumbnail_size_h', '150', 'yes'),
('thumbnail_crop', '1', 'yes'),
('medium_size_w', '300', 'yes'),
('medium_size_h', '300', 'yes'),
('avatar_default', 'mystery', 'yes'),
('large_size_w', '1024', 'yes'),
('large_size_h', '1024', 'yes'),
('image_default_link_type', 'none', 'yes'),
('image_default_size', '', 'yes'),
('image_default_align', '', 'yes'),
('close_comments_for_old_posts', '0', 'yes'),
('close_comments_days_old', '14', 'yes'),
('thread_comments', '1', 'yes'),
('thread_comments_depth', '5', 'yes'),
('page_comments', '0', 'yes'),
('comments_per_page', '50', 'yes'),
('default_comments_page', 'newest', 'yes'),
('comment_order', 'asc', 'yes'),
('sticky_posts', 'a:0:{}', 'yes'),
('widget_categories', 'a:0:{}', 'yes'),
('widget_text', 'a:0:{}', 'yes'),
('widget_rss', 'a:0:{}', 'yes'),
('uninstall_plugins', 'a:0:{}', 'yes'),
('timezone_string', 'America/Sao_Paulo', 'yes'),
('page_for_posts', '0', 'yes'),
('page_on_front', '2', 'yes'),
('default_post_format', '0', 'yes'),
('link_manager_enabled', '0', 'yes'),
('finished_splitting_shared_terms', '1', 'yes'),
('site_icon', '0', 'yes'),
('medium_large_size_w', '768', 'yes'),
('medium_large_size_h', '0', 'yes'),
('wp_page_for_privacy_policy', '3', 'yes'),
('show_comments_cookies_opt_in', '1', 'yes'),
('admin_email_lifespan', '1640995200', 'yes'),
('disallowed_keys', '', 'no'),
('comment_previously_approved', '1', 'yes'),
('auto_plugin_theme_update_emails', 'a:0:{}', 'no'),
('auto_update_core_dev', 'enabled', 'yes'),
('auto_update_core_minor', 'enabled', 'yes'),
('auto_update_core_major', 'enabled', 'yes');

-- Usuário padrão
INSERT INTO `wp_users` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_url`, `user_registered`, `user_activation_key`, `user_status`, `display_name`) VALUES
(1, 'admin', '$P$BZlPX7NIx8MYpXokBW2AGsN7i.aUOt0', 'admin', 'admin@kont4you.com', '', '2023-01-01 00:00:00', '', 0, 'Administrador');

INSERT INTO `wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) VALUES
(1, 1, 'nickname', 'admin'),
(2, 1, 'first_name', 'Admin'),
(3, 1, 'last_name', 'Kont4You'),
(4, 1, 'description', ''),
(5, 1, 'rich_editing', 'true'),
(6, 1, 'syntax_highlighting', 'true'),
(7, 1, 'comment_shortcuts', 'false'),
(8, 1, 'admin_color', 'fresh'),
(9, 1, 'use_ssl', '0'),
(10, 1, 'show_admin_bar_front', 'true'),
(11, 1, 'locale', 'pt_BR'),
(12, 1, 'wp_capabilities', 'a:1:{s:13:"administrator";b:1;}'),
(13, 1, 'wp_user_level', '10');

-- Página inicial
INSERT INTO `wp_posts` (`ID`, `post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_password`, `post_name`, `to_ping`, `pinged`, `post_modified`, `post_modified_gmt`, `post_content_filtered`, `post_parent`, `guid`, `menu_order`, `post_type`, `post_mime_type`, `comment_count`) VALUES
(2, 1, '2023-01-01 00:00:00', '2023-01-01 00:00:00', '', 'Página Inicial', '', 'publish', 'closed', 'closed', '', 'pagina-inicial', '', '', '2023-01-01 00:00:00', '2023-01-01 00:00:00', '', 0, 'http://localhost/kont4you/?page_id=2', 0, 'page', '', 0);

-- Categorias padrão
INSERT INTO `wp_terms` (`term_id`, `name`, `slug`, `term_group`) VALUES
(1, 'Geral', 'geral', 0);

INSERT INTO `wp_term_taxonomy` (`term_taxonomy_id`, `term_id`, `taxonomy`, `description`, `parent`, `count`) VALUES
(1, 1, 'category', '', 0, 0);

-- Menu principal
INSERT INTO `wp_terms` (`term_id`, `name`, `slug`, `term_group`) VALUES
(2, 'Menu Principal', 'menu-principal', 0);

INSERT INTO `wp_term_taxonomy` (`term_taxonomy_id`, `term_id`, `taxonomy`, `description`, `parent`, `count`) VALUES
(2, 2, 'nav_menu', '', 0, 0);
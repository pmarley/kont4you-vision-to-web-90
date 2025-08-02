<?php

/**
 * Custom REST API endpoints
 */
function kont4you_rest_api_init() {
    // Custom endpoint for contact form
    register_rest_route(THEME_REST_NAMESPACE, '/contact', array(
        'methods' => 'POST',
        'callback' => 'kont4you_handle_contact_form',
        'permission_callback' => '__return_true',
    ));

    // Custom endpoint for lead generation
    register_rest_route(THEME_REST_NAMESPACE, '/lead', array(
        'methods' => 'POST',
        'callback' => 'kont4you_handle_lead_form',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'kont4you_rest_api_init');

/**
 * Handle contact form submission
 */
function kont4you_handle_contact_form($request) {
    $params = $request->get_params();
    
    // Validate and sanitize
    $name = sanitize_text_field($params['name']);
    $email = sanitize_email($params['email']);
    $phone = sanitize_text_field($params['phone']);
    $message = sanitize_textarea_field($params['message']);
    
    // Send email
    $to = get_option('admin_email');
    $subject = 'Novo contato do site - ' . get_bloginfo('name');
    $body = "Nome: {$name}\nEmail: {$email}\nTelefone: {$phone}\nMensagem: {$message}";
    
    $sent = wp_mail($to, $subject, $body);
    
    if ($sent) {
        return new WP_REST_Response(array(
            'success' => true,
            'message' => 'Mensagem enviada com sucesso!'
        ), 200);
    } else {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Erro ao enviar mensagem.'
        ), 500);
    }
}

/**
 * Handle lead form submission
 */
function kont4you_handle_lead_form($request) {
    $params = $request->get_params();
    
    // Validate and sanitize
    $name = sanitize_text_field($params['name']);
    $email = sanitize_email($params['email']);
    $phone = sanitize_text_field($params['phone']);
    $company_type = sanitize_text_field($params['company_type']);
    $area = sanitize_text_field($params['area']);
    
    // Save as lead
    $lead_id = wp_insert_post(array(
        'post_type' => 'leads',
        'post_title' => $name,
        'post_status' => 'private',
        'meta_input' => array(
            'email' => $email,
            'phone' => $phone,
            'company_type' => $company_type,
            'area' => $area,
            'created_at' => current_time('mysql'),
        )
    ));
    
    // Send notification
    $to = get_option('admin_email');
    $subject = 'Novo lead capturado - ' . get_bloginfo('name');
    $body = "Nome: {$name}\nEmail: {$email}\nTelefone: {$phone}\nTipo: {$company_type}\nÁrea: {$area}";
    
    wp_mail($to, $subject, $body);
    
    return new WP_REST_Response(array(
        'success' => true,
        'message' => 'Lead registrado com sucesso!',
        'lead_id' => $lead_id
    ), 200);
}
// Kont4You Theme JavaScript

// Bootstrap import
import 'bootstrap';

// jQuery import
import $ from 'jquery';
window.$ = window.jQuery = $;

// Vue import
import Vue from 'vue';

// Main application
$(document).ready(function() {
    console.log('Kont4You Theme loaded');
    
    // Initialize Vue components if needed
    if (document.getElementById('kont4you-app')) {
        new Vue({
            el: '#kont4you-app',
            data: {
                message: 'Kont4You - Contabilidade com propósito'
            },
            mounted() {
                console.log('Vue app mounted');
            }
        });
    }
    
    // Contact form handling
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: $(this).find('[name="name"]').val(),
            email: $(this).find('[name="email"]').val(),
            phone: $(this).find('[name="phone"]').val(),
            message: $(this).find('[name="message"]').val()
        };
        
        $.ajax({
            url: themeData.restURL + '/contact',
            method: 'POST',
            data: formData,
            success: function(response) {
                alert('Mensagem enviada com sucesso!');
                $('#contact-form')[0].reset();
            },
            error: function() {
                alert('Erro ao enviar mensagem. Tente novamente.');
            }
        });
    });
    
    // Lead form handling
    $('#lead-form').on('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: $(this).find('[name="name"]').val(),
            email: $(this).find('[name="email"]').val(),
            phone: $(this).find('[name="phone"]').val(),
            company_type: $(this).find('[name="company_type"]').val(),
            area: $(this).find('[name="area"]').val()
        };
        
        $.ajax({
            url: themeData.restURL + '/lead',
            method: 'POST',
            data: formData,
            success: function(response) {
                alert('Obrigado! Entraremos em contato em breve.');
                $('#lead-form')[0].reset();
            },
            error: function() {
                alert('Erro ao enviar dados. Tente novamente.');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    // Mobile menu toggle
    $('.mobile-menu-toggle').on('click', function() {
        $('.mobile-menu').toggleClass('active');
        $(this).toggleClass('active');
    });
});
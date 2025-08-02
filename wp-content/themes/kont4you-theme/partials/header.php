<header class="main-header">
    <div class="container">
        <nav class="navbar">
            <!-- Logo -->
            <div class="logo">
                <a href="<?php echo home_url(); ?>" class="logo">
                    Kont<span style="color: var(--accent-color);">4</span>You
                </a>
            </div>
            
            <!-- Menu Desktop -->
            <?php
            wp_nav_menu(array(
                'theme_location' => 'main_menu',
                'menu_class' => 'nav-menu desktop-menu',
                'container' => false,
                'fallback_cb' => function() {
                    echo '<ul class="nav-menu desktop-menu">';
                    echo '<li><a href="#inicio">Início</a></li>';
                    echo '<li><a href="#sobre">Sobre</a></li>';
                    echo '<li><a href="#servicos">Serviços</a></li>';
                    echo '<li><a href="#planos">Planos</a></li>';
                    echo '<li><a href="#contato">Contato</a></li>';
                    echo '</ul>';
                }
            ));
            ?>
            
            <!-- Botão CTA -->
            <div class="header-cta">
                <a href="#contato" class="btn-primary">Fale Conosco</a>
            </div>
            
            <!-- Menu Mobile Toggle -->
            <div class="mobile-menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        
        <!-- Menu Mobile -->
        <div class="mobile-menu">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'main_menu',
                'menu_class' => 'mobile-nav-menu',
                'container' => false,
                'fallback_cb' => function() {
                    echo '<ul class="mobile-nav-menu">';
                    echo '<li><a href="#inicio">Início</a></li>';
                    echo '<li><a href="#sobre">Sobre</a></li>';
                    echo '<li><a href="#servicos">Serviços</a></li>';
                    echo '<li><a href="#planos">Planos</a></li>';
                    echo '<li><a href="#contato">Contato</a></li>';
                    echo '</ul>';
                }
            ));
            ?>
        </div>
    </div>
</header>
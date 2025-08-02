# Kont4You - WordPress + React Integration

## Sobre o Projeto

Este projeto combina a flexibilidade do WordPress com a performance do React, criando uma experiência híbrida única para o site da Kont4You.

## Estrutura do Projeto

```
├── src/                          # Aplicação React original
├── wp-content/
│   └── themes/
│       └── kont4you-theme/      # Tema WordPress personalizado
├── wp-config-sample.php         # Configuração do WordPress
├── index.php                    # Arquivo principal do WordPress
├── webpack.mix.js               # Build configuration
├── _dumps/                      # Backup do banco de dados
└── README-WORDPRESS.md          # Este arquivo
```

## Como Funciona

1. **WordPress Backend**: Gerencia conteúdo, usuários e API
2. **React Frontend**: Interface do usuário moderna e responsiva
3. **Tema Personalizado**: Conecta WordPress com React
4. **API Integration**: WordPress REST API para dados dinâmicos

## Instalação

### 1. Setup WordPress
```bash
# 1. Configure o banco de dados
# 2. Copie wp-config-sample.php para wp-config.php
# 3. Configure as credenciais do banco
# 4. Importe _dumps/inicial.sql
```

### 2. Configuração do Tema
```bash
# Ative o tema kont4you-theme no admin do WordPress
# Vá em Aparência > Temas e ative "Kont4You React Theme"
```

### 3. Build da Aplicação React
```bash
# Instale as dependências
npm install

# Build para produção
npm run build

# Ou use Laravel Mix
npm install laravel-mix
npm run production
```

### 4. Desenvolvimento
```bash
# Para desenvolvimento com hot-reload
npm run dev

# Ou com Laravel Mix
npm run watch
```

## Integração React + WordPress

### API Endpoints Customizados

O tema inclui endpoints personalizados para:

- `/wp-json/kont4you/v1/contact` - Formulário de contato
- `/wp-json/kont4you/v1/lead` - Captura de leads

### Custom Post Types

- **Serviços**: Gerenciamento de serviços oferecidos
- **Depoimentos**: Testemunhos de clientes
- **FAQ**: Perguntas frequentes
- **Leads**: Captura e gerenciamento de leads

### Configuração JavaScript

O WordPress disponibiliza dados para o React via:

```javascript
window.wpApiSettings = {
    root: 'https://seusite.com/wp-json/',
    nonce: 'wp_nonce_value',
    theme_url: '/wp-content/themes/kont4you-theme'
};
```

## Funcionalidades

### WordPress (Backend)
- ✅ Gerenciamento de conteúdo
- ✅ Formulários de contato
- ✅ API REST personalizada
- ✅ Custom Post Types
- ✅ Usuários e permissões
- ✅ SEO (Yoast ready)

### React (Frontend)
- ✅ Interface moderna
- ✅ Responsivo
- ✅ Performance otimizada
- ✅ Componentes reutilizáveis
- ✅ Tailwind CSS
- ✅ TypeScript

## Deployment

### Produção
1. Build da aplicação React
2. Upload dos arquivos para servidor
3. Configuração do banco de dados
4. Configuração de SSL e cache

### Staging
```bash
# Clone o repositório
git clone [repo-url]

# Configure ambiente
cp wp-config-sample.php wp-config.php

# Configure banco e URLs
# Importe dump inicial
# Build da aplicação
npm run build
```

## Plugins Recomendados

- **Yoast SEO**: Otimização para motores de busca
- **Contact Form 7**: Formulários avançados
- **WP Rocket**: Cache e performance
- **Wordfence**: Segurança
- **UpdraftPlus**: Backup automático

## Manutenção

### Backup
- Banco de dados via phpMyAdmin ou WP-CLI
- Arquivos via FTP/SFTP
- Plugin UpdraftPlus para automação

### Atualizações
- WordPress core: Via admin ou WP-CLI
- Plugins: Teste em staging primeiro
- Tema: Versionamento via Git

### Monitoramento
- Google Analytics
- Search Console
- Uptime monitoring
- Performance monitoring

## Suporte

Para dúvidas sobre:
- **WordPress**: Documentação oficial
- **React**: React docs
- **Tema**: Documentação interna
- **Deploy**: Guias de hosting

## Tecnologias

- **WordPress** 6.0+
- **React** 18+
- **TypeScript** 4.9+
- **Tailwind CSS** 3+
- **Laravel Mix** 6+
- **PHP** 8.0+
- **MySQL** 8.0+

## Licença

Este projeto é proprietário da Kont4You.
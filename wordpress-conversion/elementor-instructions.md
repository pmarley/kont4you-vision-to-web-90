# Instruções Detalhadas para Elementor

## Configuração Inicial

### 1. Preparação do WordPress
```
- Instale WordPress (versão mais recente)
- Instale Elementor Pro
- Instale tema Hello Elementor ou Astra
- Configure SSL e performance básica
```

### 2. Upload de Assets
- Faça upload de todas as imagens em **Mídia > Biblioteca**
- Organize em pastas: hero, services, team, testimonials
- Use compressão WebP quando possível

### 3. CSS Global
- Vá em **Aparência > Personalizar > CSS Adicional**
- Cole todo o conteúdo de `custom-css/global-styles.css`
- Salve as alterações

## Implementação Passo a Passo

### Header (Cabeçalho)
1. **Elementor > Theme Builder > Header**
2. Crie novo header
3. Adicione Section (Container)
4. Configure layout: 3 colunas (20% - 60% - 20%)

**Coluna 1 (Logo):**
- Widget: Image
- Selecione logo da empresa
- Link: URL da home

**Coluna 2 (Menu):**
- Widget: Nav Menu
- Configure menu horizontal
- Links: #inicio, #sobre, #servicos, #planos, #contato

**Coluna 3 (CTA):**
- Widget: Button
- Texto: "Fale Conosco"
- Link: #contato
- Estilo: Primary

### Hero Section
1. Adicione Section
2. Layout: 2 colunas (50/50)
3. Configurações da seção:
   - Background: Gradient (#f8fafc para #e2e8f0)
   - Padding: 120px top, 80px bottom

**Coluna Esquerda:**
- Widget: Heading (H1)
  - Texto: "Contabilidade completa para o seu negócio crescer"
  - Destaque "completa" em amarelo
- Widget: Text Editor
  - Descrição do serviço
- Widget: Button (2 botões)
  - "Fale com especialista" (Primary)
  - "Conheça planos" (Secondary)
- Widget: Icon List
  - Abertura grátis, 100% online, Suporte humano

**Coluna Direita:**
- Widget: Image
  - Hero image
- Widget: HTML (para card de estatística)
  - Use código do arquivo hero-section.html

### Services Section
1. Nova Section
2. Background: #f8fafc
3. Layout: 4 colunas (responsivo)

**Para cada serviço:**
- Widget: Icon Box
- Configure ícone, título e descrição
- Use hover effects personalizados

### Pricing Section
1. Nova Section
2. Layout: 3 colunas
3. Para cada plano:
   - Widget: Pricing Table (Elementor Pro)
   - Configure recursos e preços
   - Destaque plano "Essencial"

### FAQ Section
1. Nova Section
2. Widget: Accordion
3. Configure perguntas e respostas
4. Aplique estilos personalizados

## Responsividade

### Breakpoints Elementor
- Desktop: 1025px+
- Tablet: 768px - 1024px
- Mobile: até 767px

### Configurações por Dispositivo
**Tablet:**
- Grid 4 cols → 2 cols
- Ajustar spacing
- Fontes menores

**Mobile:**
- Grid → 1 coluna
- Botões full-width
- Padding reduzido
- Menu hamburger

## Widgets Essenciais

### Widgets Nativos
- Heading
- Text Editor
- Button
- Image
- Icon List
- Nav Menu

### Widgets Pro
- Pricing Table
- Accordion
- Forms
- Posts (para blog)

## Formulários de Contato

### Contact Form 7
1. Instale plugin Contact Form 7
2. Crie formulário:
```
[text* nome placeholder "Seu nome"]
[email* email placeholder "Seu e-mail"]
[tel telefone placeholder "Seu telefone"]
[textarea mensagem placeholder "Sua mensagem"]
[submit "Enviar Mensagem"]
```

### Integração no Elementor
- Widget: Contact Form 7
- Selecione formulário criado
- Configure estilos

## Otimização e Performance

### Plugins Recomendados
- **WP Rocket**: Cache
- **Smush**: Otimização de imagens
- **Yoast SEO**: SEO
- **WhatsApp Chat**: Chat widget

### Configurações de Performance
- Minificar CSS/JS
- Lazy loading para imagens
- CDN (Cloudflare)
- Compressão GZIP

## Menu e Navegação

### Configuração do Menu
1. **Aparência > Menus**
2. Crie menu "Principal"
3. Adicione itens:
   - Início (#inicio)
   - Sobre (#sobre)
   - Serviços (#servicos)
   - Planos (#planos)
   - Contato (#contato)

### Smooth Scroll
Adicione no CSS:
```css
html {
  scroll-behavior: smooth;
}
```

## WhatsApp Integration

### Plugin WhatsApp Chat
1. Instale plugin
2. Configure:
   - Número: +55 11 99999-9999
   - Posição: Bottom right
   - Mensagem padrão: "Olá! Gostaria de saber mais sobre os serviços da Kont4You."

## SEO Básico

### Yoast SEO
- Title: "Kont4You - Contabilidade Completa Online"
- Description: "Abertura de CNPJ grátis, contabilidade mensal e consultoria especializada. Atendimento humano para seu negócio crescer."
- Focus keyword: "contabilidade online"

### Meta Tags Essenciais
```html
<meta name="description" content="...">
<meta name="keywords" content="contabilidade, CNPJ, planejamento tributário">
<meta property="og:title" content="Kont4You - Contabilidade Online">
<meta property="og:description" content="...">
<meta property="og:image" content="hero-image.jpg">
```

## Backup e Manutenção

### Backup Automático
- Plugin: UpdraftPlus
- Frequência: Diária
- Armazenamento: Google Drive/Dropbox

### Atualizações
- WordPress core: Automática
- Plugins: Manual (testar primeiro)
- Tema: Manual

## Troubleshooting

### Problemas Comuns
1. **Elementor não carrega**: Aumentar memory_limit PHP
2. **Fonts não aparecem**: Verificar CSS personalizado
3. **Mobile quebrado**: Revisar responsividade
4. **Formulário não envia**: Configurar SMTP

### Logs Úteis
- Error logs do WordPress
- Elementor system info
- Plugin conflict testing
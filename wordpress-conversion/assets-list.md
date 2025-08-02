# Lista de Assets para WordPress

## 📁 Imagens Necessárias

### Hero Section
- `hero-image.jpg` (Equipe celebrando sucesso)
  - Resolução: 1200x800px
  - Formato: JPG/WebP
  - Uso: Imagem principal do hero

### Specialists Section  
- `doctor.jpg` (Médico profissional)
  - Resolução: 400x300px
  - Formato: JPG/WebP
  - Uso: Card médicos PJ

- `analytics.jpg` (Gráficos e análise)
  - Resolução: 400x300px  
  - Formato: JPG/WebP
  - Uso: Card corretores

- `businessman.jpg` (Empresário/executivo)
  - Resolução: 400x300px
  - Formato: JPG/WebP
  - Uso: Card prestadores de serviço

### Other Sections
- `office.jpg` (Escritório/ambiente corporativo)
  - Resolução: 600x400px
  - Formato: JPG/WebP
  - Uso: Seção sobre nós

- `planning.jpg` (Planejamento/estratégia)
  - Resolução: 600x400px
  - Formato: JPG/WebP
  - Uso: Seção de serviços

- `handshake.jpg` (Aperto de mãos/parceria)
  - Resolução: 600x400px
  - Formato: JPG/WebP
  - Uso: Seção de confiança

## 📂 Organização no WordPress

### Estrutura de Pastas na Mídia
```
/wp-content/uploads/
├── 2024/
│   ├── hero/
│   │   └── hero-image.jpg
│   ├── specialists/
│   │   ├── doctor.jpg
│   │   ├── analytics.jpg
│   │   └── businessman.jpg
│   ├── about/
│   │   └── office.jpg
│   ├── services/
│   │   └── planning.jpg
│   └── general/
│       └── handshake.jpg
```

## ⚙️ Configurações de Upload

### Tamanhos de Imagem (functions.php)
```php
// Tamanhos customizados para o tema
add_image_size('hero-size', 1200, 800, true);
add_image_size('card-size', 400, 300, true);
add_image_size('section-size', 600, 400, true);
```

### Otimização
- **Compressão:** 85-90% qualidade
- **Formato preferido:** WebP (com fallback JPG)
- **Lazy loading:** Habilitado
- **Responsive:** Múltiplos tamanhos gerados

## 🎨 Ícones e Elementos Gráficos

### Font Awesome (já incluído no Elementor)
- `fas fa-building` - Abertura de CNPJ
- `fas fa-calculator` - Contabilidade
- `fas fa-chart-line` - Planejamento tributário
- `fas fa-users` - Consultoria
- `fas fa-stethoscope` - Médicos
- `fas fa-home` - Corretores imobiliários
- `fas fa-briefcase` - Prestadores de serviço
- `fas fa-phone` - Telefone
- `fas fa-envelope` - Email
- `fab fa-whatsapp` - WhatsApp
- `fab fa-linkedin` - LinkedIn
- `fab fa-instagram` - Instagram
- `fab fa-facebook` - Facebook

### Cores dos Ícones
- **Principal:** #1e40af (azul)
- **Destaque:** #fbbf24 (amarelo)
- **Sucesso:** #10b981 (verde)

## 📱 Responsividade das Imagens

### Breakpoints
```css
/* Desktop */
@media (min-width: 1200px) {
  .hero-image { max-width: 100%; }
}

/* Tablet */  
@media (max-width: 1199px) and (min-width: 768px) {
  .hero-image { max-width: 90%; }
}

/* Mobile */
@media (max-width: 767px) {
  .hero-image { max-width: 100%; margin-bottom: 2rem; }
}
```

### Elementor Responsive Settings
- **Desktop:** Imagem original
- **Tablet:** 80% do tamanho
- **Mobile:** 100% da largura, stack vertical

## 🔧 Implementação no Elementor

### Upload Process
1. **Mídia > Biblioteca > Adicionar Novo**
2. **Fazer upload** de todas as imagens
3. **Organizaer** em pastas por seção
4. **Adicionar Alt Text** descritivo para SEO
5. **Configurar** tamanhos responsivos

### Widget Configuration
```
Image Widget Settings:
- Size: Custom (conforme necessário)
- Border Radius: 8-16px (cards)
- Hover Effects: Zoom leve (1.05x)
- Loading: Lazy Load habilitado
```

## ✅ Checklist de Assets

### Antes do Launch
- [ ] Todas as imagens uploadadas
- [ ] Alt text adicionado
- [ ] Tamanhos otimizados
- [ ] Compressão aplicada
- [ ] Teste responsivo realizado
- [ ] Lazy loading funcionando
- [ ] WebP com fallback configurado

### Performance
- [ ] PageSpeed > 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Imagens < 150KB cada

---

💡 **Dica:** Use plugins como ShortPixel ou Smush para otimização automática de imagens.
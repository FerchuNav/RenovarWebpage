# Pinturería Renovar — Sitio Web

Sitio web de Pinturería Renovar, pinturería de barrio en Mitre y 11 de Abril, Bahía Blanca.

## Cómo ejecutar

Abrí `index.html` directamente en el navegador. No requiere build step ni servidor.

**Requisito:** Conexión a internet en la primera carga (React 18, ReactDOM y Babel se cargan desde CDN).

```bash
# Opción 1: Abrir directamente
start index.html

# Opción 2: Servidor local (recomendado para desarrollo)
npx serve .
```

## Estructura

```
├── index.html          # Entry point (SEO, meta, JSON-LD, CDN scripts)
├── css/
│   └── style.css       # Todos los estilos (custom properties, componentes, responsive)
├── js/
│   ├── data.js         # Datos: PALETTE, PRODUCTS, REVIEWS, TWEAK_DEFAULTS
│   ├── components.js   # Componentes React: Logo, Mixer, Product, Review, MapBlock, etc.
│   └── app.js          # App principal + renderizado
├── tweaks-panel.jsx    # Panel de tweaks flotante (para edición visual)
├── assets/
│   ├── fachada.jpg     # Foto del frente del local
│   └── fadepa.jpeg     # Logo Fadepa
├── vercel.json         # Config de deploy en Vercel (headers, cache, redirects)
├── robots.txt          # SEO
├── sitemap.xml         # SEO
└── .gitignore
```

## Tecnología

- **React 18** (producción, desde CDN)
- **Babel standalone** (transpilación JSX en navegador)
- **CSS custom properties** para design tokens
- **Sin build step** — abrir y listo

## Deploy en Vercel

1. Conectá el repo de GitHub a Vercel
2. El `vercel.json` ya incluye headers de seguridad y reglas de caché
3. No requiere build command ni framework preset (es sitio estático)

## Tweaks / Modo edición

El panel de tweaks (`tweaks-panel.jsx`) permite editar colores y visibilidad en tiempo real. Se activa mediante mensajes `postMessage` desde un toolbar host. Ver `CLAUDE.md` para más detalles del protocolo.

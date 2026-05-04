const PALETTE = [
  { hex: '#F4EAD4', name: 'Crema Renovar' },
  { hex: '#1f7d7e', name: 'Turquesa Profundo' },
  { hex: '#6cb6b3', name: 'Aguamarina' },
  { hex: '#0f5759', name: 'Verde Bosque' },
  { hex: '#c2563a', name: 'Terracota' },
  { hex: '#e8a87c', name: 'Salmón' },
  { hex: '#2e4057', name: 'Azul Profundo' },
  { hex: '#a8b89a', name: 'Salvia' },
  { hex: '#f5d76e', name: 'Mostaza Suave' },
  { hex: '#b27d5b', name: 'Cuero' },
  { hex: '#3a3a3a', name: 'Carbón' },
  { hex: '#fbf6e9', name: 'Algodón' },
  { hex: '#6b4f3f', name: 'Café Tostado' },
  { hex: '#d96b6b', name: 'Coral' },
  { hex: '#7a8a5c', name: 'Oliva' },
  { hex: '#4a6fa5', name: 'Azul Cobalto' },
  { hex: '#dcb6a3', name: 'Arena' },
  { hex: '#5d2e2e', name: 'Borgoña' },
];

const PRODUCTS = [
  {
    cat: 'Látex interior',
    name: 'Látex Premium 4L',
    desc: 'Acabado mate, alto cubritivo. Listo para una habitación entera.',
    price: '38.900',
    unit: '/ balde 4L',
    badge: 'Oferta',
    art: (
      <svg viewBox="0 0 200 200">
        <ellipse cx="100" cy="160" rx="60" ry="8" fill="rgba(0,0,0,0.15)"/>
        <path d="M50 60 L55 165 Q55 170 60 170 L140 170 Q145 170 145 165 L150 60 Z" fill="#fff" stroke="#1f7d7e" strokeWidth="3"/>
        <ellipse cx="100" cy="60" rx="50" ry="10" fill="#fff" stroke="#1f7d7e" strokeWidth="3"/>
        <path d="M60 50 Q100 40 140 50" stroke="#14201f" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <text x="100" y="115" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="22" fill="#1f7d7e">Renovar</text>
        <text x="100" y="140" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="9" fill="#14201f" letterSpacing="2">LÁTEX 4L</text>
      </svg>
    )
  },
  {
    cat: 'Esmaltes',
    name: 'Esmalte sintético 1L',
    desc: 'Para hierro y madera. Brillo profundo, secado rápido.',
    price: '14.500',
    unit: '/ lata 1L',
    art: (
      <svg viewBox="0 0 200 200">
        <ellipse cx="100" cy="170" rx="55" ry="6" fill="rgba(0,0,0,0.15)"/>
        <rect x="65" y="70" width="70" height="100" fill="#c2563a" stroke="#14201f" strokeWidth="2.5"/>
        <ellipse cx="100" cy="70" rx="35" ry="5" fill="#14201f"/>
        <rect x="80" y="40" width="40" height="35" fill="#3a3a3a" stroke="#14201f" strokeWidth="2"/>
        <path d="M85 40 Q100 28 115 40" stroke="#14201f" strokeWidth="2" fill="none"/>
        <rect x="65" y="100" width="70" height="22" fill="#fbf6e9"/>
        <text x="100" y="116" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="14" fill="#1f7d7e">Renovar</text>
        <text x="100" y="145" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="8" fill="#fff" letterSpacing="1.5">SINTÉTICO 1L</text>
      </svg>
    )
  },
  {
    cat: 'Impermeabilizantes',
    name: 'Membrana líquida 20kg',
    desc: 'Techos y terrazas. Una mano y olvidate de las filtraciones.',
    price: '92.000',
    unit: '/ balde 20kg',
    badge: 'Nuevo',
    art: (
      <svg viewBox="0 0 200 200">
        <ellipse cx="100" cy="170" rx="68" ry="9" fill="rgba(0,0,0,0.15)"/>
        <path d="M35 65 L42 170 Q42 178 50 178 L150 178 Q158 178 158 170 L165 65 Z" fill="#3a3a3a" stroke="#14201f" strokeWidth="3"/>
        <ellipse cx="100" cy="65" rx="65" ry="12" fill="#3a3a3a" stroke="#14201f" strokeWidth="3"/>
        <path d="M50 56 Q100 44 150 56" stroke="#fbf6e9" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <rect x="55" y="95" width="90" height="50" fill="#c2563a"/>
        <text x="100" y="118" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="20" fill="#fbf6e9">Renovar</text>
        <text x="100" y="138" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="9" fill="#fbf6e9" letterSpacing="2">MEMBRANA</text>
      </svg>
    )
  },
];

const REVIEWS = [
  { name: 'Marcelo F.', when: 'hace 2 semanas', stars: 5, color: '#1f7d7e',
    text: 'Excelente atención. Te asesoran de verdad: les conté qué quería pintar y me cambiaron el producto que había pedido por uno mejor para el caso. Volví a comprar tres veces.' },
  { name: 'Carolina P.', when: 'hace 1 mes', stars: 5, color: '#c2563a',
    text: 'Tienen sistema tintométrico y pegaron el color exacto que llevé en una foto. Los precios bien y siempre hay alguien con paciencia para explicarte si nunca pintaste antes.' },
  { name: 'Hernán G.', when: 'hace 3 meses', stars: 5, color: '#0f5759',
    text: 'La pinturería de barrio que todavía existe. Variedad enorme: pinturas, rodillos, pinceles, lijas, todo. Si no lo tienen, lo consiguen en el día.' },
  { name: 'Daniela R.', when: 'hace 2 meses', stars: 4, color: '#b27d5b',
    text: 'Muy buena experiencia. Compré látex y esmalte para el frente de mi casa. Me ayudaron con el cálculo de litros para que no me sobre ni falte.' },
  { name: 'Juan Pablo S.', when: 'hace 4 semanas', stars: 5, color: '#2e4057',
    text: 'Atienden los dueños y se nota. Pinturas de marcas conocidas a precio justo, y las recomendaciones siempre te ahorran plata. Recomendable 100%.' },
  { name: 'Vanesa T.', when: 'hace 5 meses', stars: 5, color: '#7a8a5c',
    text: 'Pinté toda la casa con productos de Renovar. Los colores quedaron tal como los vi en la cartilla. Servicio cálido y honesto, como debe ser.' },
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#1f7d7e",
  "warm": "#c2563a",
  "showStats": true
}/*EDITMODE-END*/;

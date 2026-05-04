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

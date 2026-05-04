const { useState } = React;

const Logo = ({ size = 38 }) => (
  <svg viewBox="0 0 220 80" style={{ height: size, width: 'auto' }} aria-label="Renovar Pinturerías">
    <defs>
      <filter id="rough">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="3"/>
        <feDisplacementMap in="SourceGraphic" scale="2"/>
      </filter>
    </defs>
    <text x="6" y="50" fontFamily="Fraunces, serif" fontStyle="italic" fontWeight="500" fontSize="52" fill="#1f7d7e" filter="url(#rough)">Renovar</text>
    <path d="M 8 60 Q 80 56 200 62" stroke="#1f7d7e" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7"/>
    <text x="118" y="74" fontFamily="DM Mono, monospace" fontSize="9" fill="#14201f" letterSpacing="2">PINTURERÍAS</text>
  </svg>
);

const BrushUnderline = () => (
  <svg className="brush" viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
    <path d="M 10 32 C 80 18, 160 50, 280 28 S 480 10, 590 32 L 588 50 C 470 30, 360 56, 240 42 S 70 60, 12 50 Z" fill="currentColor"/>
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="gicon" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const isDark = (hex) => {
  const c = hex.replace('#','');
  const r = parseInt(c.substr(0,2),16), g = parseInt(c.substr(2,2),16), b = parseInt(c.substr(4,2),16);
  return (r*0.299 + g*0.587 + b*0.114) < 140;
};

const RoomPreview = ({ wallColor }) => (
  <div className="room" style={{ background: wallColor }}>
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect x="0" y="220" width="400" height="80" fill="rgba(0,0,0,0.18)"/>
      <line x1="0" y1="220" x2="400" y2="220" stroke="rgba(0,0,0,0.25)" strokeWidth="1"/>
      <rect x="60" y="60" width="120" height="130" fill="rgba(255,255,255,0.85)" stroke="rgba(0,0,0,0.3)" strokeWidth="2"/>
      <line x1="120" y1="60" x2="120" y2="190" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
      <line x1="60" y1="125" x2="180" y2="125" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
      <path d="M55 55 L55 195 L185 195 L185 55 Z" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="3"/>
      <rect x="240" y="195" width="36" height="28" fill="#8b5a3c" rx="1"/>
      <ellipse cx="258" cy="180" rx="22" ry="28" fill="#6b8e4e" opacity="0.9"/>
      <ellipse cx="248" cy="170" rx="14" ry="18" fill="#7da55e"/>
      <ellipse cx="270" cy="172" rx="14" ry="20" fill="#5f7d44"/>
      <rect x="300" y="80" width="60" height="78" fill="rgba(255,255,255,0.7)" stroke="rgba(0,0,0,0.4)" strokeWidth="2"/>
      <rect x="306" y="86" width="48" height="66" fill="rgba(0,0,0,0.15)"/>
      <rect x="0" y="216" width="400" height="6" fill="rgba(0,0,0,0.2)"/>
      <rect x="0" y="0" width="400" height="220" fill="url(#light)"/>
      <defs>
        <radialGradient id="light" cx="0.3" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.08)"/>
        </radialGradient>
      </defs>
    </svg>
  </div>
);

const Mixer = () => {
  const [active, setActive] = useState(2);
  const c = PALETTE[active];
  return (
    <div className="mixer">
      <div className="palette-wall">
        {PALETTE.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`swatch ${i===active ? 'active' : ''} ${isDark(p.hex) ? 'dark-text' : ''}`}
            style={{ background: p.hex, border: 'none', padding: 0 }}
            aria-label={p.name}
            title={p.name}
          >
            <span className="code">{p.hex}</span>
          </button>
        ))}
      </div>
      <div className="room-preview">
        <RoomPreview wallColor={c.hex} />
        <div className="room-info">
          <span className="name">{c.name}</span>
          <span className="hex">{c.hex.toUpperCase()}</span>
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.5 }}>
          Tocá un color y mirá cómo cambia la pared. ¿Te gustó? Vení al local con el código y te lo preparamos en el sistema tintométrico — látex interior o exterior, esmalte sintético o al agua.
        </div>
      </div>
    </div>
  );
};

const Product = ({ p }) => (
  <article className="product">
    <div className="product-art">
      {p.badge && <span className="badge">{p.badge}</span>}
      {p.art}
    </div>
    <div className="product-body">
      <div className="product-cat">{p.cat}</div>
      <h3 className="product-name">{p.name}</h3>
      <p className="product-desc">{p.desc}</p>
      <div className="product-foot">
        <div className="product-price"><small>$</small>{p.price}</div>
        <div className="product-unit">{p.unit}</div>
      </div>
    </div>
  </article>
);

const Review = ({ r }) => (
  <article className="review">
    <span className="quote-mark" aria-hidden="true">"</span>
    <div className="stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
    <p className="body">{r.text}</p>
    <div className="author">
      <div className="avatar" style={{ background: r.color }}>{r.name[0]}</div>
      <div className="who">
        <b>{r.name}</b>
        <span>{r.when} · vía Google</span>
      </div>
    </div>
  </article>
);

const MapBlock = () => (
  <div className="map-wrap">
    <iframe
      title="Pinturería Renovar — Mitre y 11 de Abril, Bahía Blanca"
      width="100%"
      height="100%"
      style={{ border: 0, position: 'absolute', inset: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://maps.google.com/maps?q=Mitre%20y%2011%20de%20Abril%2C%20Bahia%20Blanca&t=&z=16&ie=UTF8&iwloc=&output=embed">
    </iframe>
  </div>
);

const { useEffect } = React;

const App = () => {
  let tweaks = TWEAK_DEFAULTS, setTweak = () => {};
  if (window.useTweaks) [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--teal', tweaks.accent || TWEAK_DEFAULTS.accent);
    r.style.setProperty('--teal-deep', tweaks.accent || TWEAK_DEFAULTS.accent);
    r.style.setProperty('--rust', tweaks.warm || TWEAK_DEFAULTS.warm);
  }, [tweaks.accent, tweaks.warm]);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav className="top">
        <div className="nav-row">
          <a className="brandmark" href="#">
            <Logo size={42} />
          </a>
          <div className="nav-links">
            <a href="#colores">Color</a>
            <a href="#deco">Renovar Deco</a>
            <a href="#resenas">Reseñas</a>
            <a href="#local">Local</a>
          </div>
          <a className="nav-cta" href="https://wa.me/542915033022" target="_blank" rel="noopener noreferrer">Abierto · WhatsApp</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-meta">
          <span><span className="dot"></span>BAHÍA BLANCA · ARG · DESDE 1998</span>
          <span>EST. MITRE & 11 DE ABRIL</span>
          <span>N°001 — PINTURERÍA DE BARRIO</span>
        </div>

        <h1 className="hero-title display">
          Pintá tu casa<br/>
          como si la <span className="accent">renovaras<BrushUnderline /></span><br/>
          de cero.
        </h1>

        <div className="hero-grid">
          <p className="hero-lead">
            Veintisiete años en la esquina de <em>Mitre y 11 de Abril</em>. Pinturas, herramientas, asesoramiento honesto — y el color exacto que estás buscando, mezclado en el momento.
          </p>
          <div className="hero-img-wrap">
            <img src="assets/fachada.jpg" alt="Frente de Pinturería Renovar en Mitre y 11 de Abril, Bahía Blanca" width="800" height="600" />
            <span className="img-tag">// La esquina de siempre</span>
          </div>
        </div>

        {tweaks.showStats !== false && (
          <div className="hero-stats">
            <div className="stat">
              <div className="num">27<sup>años</sup></div>
              <div className="lbl">En el barrio</div>
            </div>
            <div className="stat">
              <div className="num">4.9<sup>★</sup></div>
              <div className="lbl">Reseñas Google</div>
            </div>
            <div className="stat">
              <div className="num">+2 mil</div>
              <div className="lbl">Tonos disponibles</div>
            </div>
            <div className="stat">
              <div className="num">24<sup>hs</sup></div>
              <div className="lbl">Asesoramiento por WhatsApp</div>
            </div>
          </div>
        )}
      </header>

      <div className="marquee">
        <div className="marquee-track">
          <span>Látex</span><span className="star">✦</span>
          <span>Esmaltes sintéticos</span><span className="star">✦</span>
          <span>Impermeabilizantes</span><span className="star">✦</span>
          <span>Sistema tintométrico</span><span className="star">✦</span>
          <span>Rodillos y pinceles</span><span className="star">✦</span>
          <span>Barnices y lacas</span><span className="star">✦</span>
          <span>Asesoramiento</span><span className="star">✦</span>
          <span>Envíos en Bahía</span><span className="star">✦</span>
          <span>Látex</span><span className="star">✦</span>
          <span>Esmaltes sintéticos</span><span className="star">✦</span>
          <span>Impermeabilizantes</span><span className="star">✦</span>
        </div>
      </div>

      <main>
        <section className="band reveal" id="colores">
          <div className="section-eyebrow"><span className="num">01</span> MEZCLÁ TU COLOR</div>
          <h2 className="section-title">El color que <span className="it">imaginás</span>,<br/>preparado en el momento.</h2>
          <p style={{ maxWidth: '60ch', fontSize: 18, color: 'var(--ink-soft)', marginTop: 8 }}>
            Sistema tintométrico Fadepa. Más de 2.000 tonos posibles. Tocá un color y mirá cómo se ve en una pared real — después vení al local y te lo preparamos.
          </p>
          <Mixer />
        </section>

        <section className="band cream" id="fadepa">
          <div className="band-inner reveal">
            <div className="fadepa-grid">
              <div>
                <div className="section-eyebrow"><span className="num">02</span> REPRESENTANTE OFICIAL</div>
                <h2 className="section-title">Somos <span className="it">representantes</span><br/>de Pinturas Fadepa.</h2>
                <p style={{ maxWidth: '50ch', fontSize: 18, color: 'var(--ink-soft)', marginTop: 16 }}>
                  Línea completa de productos Fadepa para profesionales y particulares — látex interior y exterior, esmaltes, impermeabilizantes y revestimientos. Asesoramiento técnico y stock garantizado en Bahía Blanca.
                </p>
                <div className="fadepa-feats">
                  <div className="feat"><span>✓</span> Stock permanente de toda la línea</div>
                  <div className="feat"><span>✓</span> Precios de fábrica</div>
                  <div className="feat"><span>✓</span> Sistema tintométrico oficial</div>
                  <div className="feat"><span>✓</span> Asesoramiento técnico directo</div>
                </div>
              </div>
              <div className="fadepa-card">
                <div className="fadepa-logo-wrap">
                  <img src="assets/fadepa.jpeg" alt="Fadepa Pinturas — Distribuidor oficial" />
                </div>
                <div className="fadepa-tag">// Distribuidor oficial · Bahía Blanca</div>
              </div>
            </div>
          </div>
        </section>

        <section className="band dark reveal" id="resenas">
          <div className="band-inner">
            <div className="reviews-head">
              <div>
                <div className="section-eyebrow"><span className="num">03</span> LO QUE DICEN LOS VECINOS</div>
                <h2 className="section-title">Reseñas <span className="it">verificadas</span><br/>de Google.</h2>
              </div>
              <div className="gscore">
                <GoogleIcon />
                <div>
                  <div className="num">4.9</div>
                  <div className="stars">★★★★★</div>
                </div>
                <div className="meta">
                  Basado en<br/>
                  <b style={{ color: 'var(--ink)' }}>87 reseñas</b><br/>
                  en Google Maps
                </div>
              </div>
            </div>
            <div className="reviews">
              {REVIEWS.map((r, i) => <Review key={i} r={r} />)}
            </div>
            <p style={{ marginTop: 32, fontSize: 12, fontFamily: 'DM Mono, monospace', color: 'rgba(244,234,212,0.5)' }}>
              // Reseñas representativas. Reemplazar con extractos reales del perfil de Google Business.
            </p>
          </div>
        </section>

        <section className="band dark reveal" id="deco" style={{ paddingTop: 140, paddingBottom: 140 }}>
          <div className="band-inner">
            <span className="deco-tag">Renovar Deco · empresa familiar</span>
            <div className="deco-hero">
              <h2 className="section-title">Soluciones <span className="it">integrales</span><br/>en pintura, obra y mantenimiento.</h2>
              <p className="deco-lead">
                Renovar Deco es nuestra unidad de obra: empresa familiar con más de <em>25 años de trayectoria</em>, especializada en pintura profesional, construcción liviana y mantenimiento. Combinamos experiencia técnica, conocimiento del mercado y capacidad operativa.
              </p>
            </div>

            <div className="deco-services">
              <div className="deco-svc"><div className="svc-num">/ 01</div><h4>Pintura interior y exterior profesional</h4><p>Acabados prolijos, productos de primera línea y cuadrillas propias.</p></div>
              <div className="deco-svc"><div className="svc-num">/ 02</div><h4>Tabiquería y cielorrasos de durlock</h4><p>Diseño de espacios, cerramientos y terminaciones de construcción liviana.</p></div>
              <div className="deco-svc"><div className="svc-num">/ 03</div><h4>Impermeabilización de techos y superficies</h4><p>Sistemas certificados para terrazas, paredes y losas. Garantía de obra.</p></div>
              <div className="deco-svc"><div className="svc-num">/ 04</div><h4>Microcemento y terminaciones modernas</h4><p>Pisos, paredes y mesadas con acabado continuo, contemporáneo y resistente.</p></div>
              <div className="deco-svc"><div className="svc-num">/ 05</div><h4>Albañilería y reformas integrales</h4><p>De trabajos puntuales a reformas completas, con dirección propia de obra.</p></div>
              <div className="deco-svc"><div className="svc-num">/ 06</div><h4>Mantenimiento para empresas y comercios</h4><p>Planes a medida con respuesta rápida y resolución integral sin intermediarios.</p></div>
            </div>

            <div className="deco-process">
              <div className="section-eyebrow" style={{ marginBottom: 12 }}><span className="num">·</span> NUESTRO PROCESO</div>
              <h3 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>Calidad y eficiencia <span className="it">en cada etapa</span>.</h3>
              <div className="process-grid">
                <div className="process-step"><span className="step-num">1</span><h5>Análisis</h5><p>Evaluación detallada de necesidades y viabilidad del proyecto.</p></div>
                <div className="process-step"><span className="step-num">2</span><h5>Planificación</h5><p>Plan de trabajo claro y presupuesto transparente, sin letra chica.</p></div>
                <div className="process-step"><span className="step-num">3</span><h5>Ejecución</h5><p>Implementación con equipo capacitado y materiales seleccionados.</p></div>
                <div className="process-step"><span className="step-num">4</span><h5>Control</h5><p>Supervisión constante y ajustes para asegurar resultados óptimos.</p></div>
                <div className="process-step"><span className="step-num">5</span><h5>Entrega</h5><p>Finalización y soporte post-obra para tu total satisfacción.</p></div>
              </div>
            </div>

            <div className="deco-projects">
              <div>
                <div className="section-eyebrow" style={{ marginBottom: 16 }}><span className="num">·</span> EXPERIENCIA</div>
                <h3 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', marginBottom: 32 }}>Proyectos en los que <span className="it">trabajamos</span>.</h3>
                <ul className="proj-list">
                  <li>Viviendas particulares <span className="arrow">→</span></li>
                  <li>Edificios corporativos y comerciales <span className="arrow">→</span></li>
                  <li>Instalaciones industriales y plantas <span className="arrow">→</span></li>
                  <li>Locales comerciales <span className="arrow">→</span></li>
                  <li>Obras públicas e infraestructura <span className="arrow">→</span></li>
                </ul>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: 'rgba(244,234,212,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 20 }}>
                  / Referencias detalladas disponibles a solicitud
                </p>
              </div>
              <div>
                <div className="section-eyebrow" style={{ marginBottom: 16 }}><span className="num">·</span> NUESTRO VALOR AGREGADO</div>
                <h3 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', marginBottom: 24 }}>Por qué <span className="it">elegirnos</span>.</h3>
                <div className="deco-values">
                  <div className="value-card"><div className="v-icon">a</div><h6>+25 años de trayectoria</h6><p>Experiencia comprobada en obras de toda escala.</p></div>
                  <div className="value-card"><div className="v-icon">b</div><h6>Equipo de confianza</h6><p>Cuadrilla propia, consolidada y capacitada.</p></div>
                  <div className="value-card"><div className="v-icon">c</div><h6>Cumplimiento de tiempos</h6><p>Entregamos cuando decimos que vamos a entregar.</p></div>
                  <div className="value-card"><div className="v-icon">d</div><h6>Resolución integral</h6><p>Sin intermediarios. Una sola interlocución, de principio a fin.</p></div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 80, padding: '40px 0 0', borderTop: '1px solid rgba(244,234,212,0.18)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
              <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 26, color: 'var(--cream-soft)', maxWidth: '34ch' }}>
                ¿Tenés un proyecto en mente? Contanos qué necesitás y lo resolvemos.
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="btn btn-primary" href="https://wa.me/542915033022" target="_blank" rel="noopener noreferrer">→ WhatsApp · 291 503-3022</a>
                <a className="btn btn-ghost" href="https://wa.me/542914614180" target="_blank" rel="noopener noreferrer">WhatsApp · 291 461-4180</a>
              </div>
            </div>
          </div>
        </section>

        <section className="band reveal" id="local">
          <div className="section-eyebrow"><span className="num">05</span> VENÍ AL LOCAL</div>
          <h2 className="section-title">Mitre y <span className="it">11 de Abril</span>.<br/>La esquina de siempre.</h2>
          <div className="store-grid">
            <div className="store-info">
              <h3>Información</h3>
              <div className="info-row">
                <div className="ico">→</div>
                <div>
                  <div className="lbl">Dirección</div>
                  <div className="val">Mitre 1100 esq. 11 de Abril</div>
                  <div className="sub">Bahía Blanca · Buenos Aires</div>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">⏱</div>
                <div>
                  <div className="lbl">Horario</div>
                  <div className="val">Lun a Vie · 8:30 — 12:30 / 16:00 — 20:00</div>
                  <div className="sub">Sábados · 9:00 — 13:00</div>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">☎</div>
                <div>
                  <div className="lbl">Teléfonos</div>
                  <div className="val">291 503-3022 · 291 461-4180</div>
                  <div className="sub">WhatsApp con asesoramiento</div>
                </div>
              </div>
              <div className="info-row">
                <div className="ico">✉</div>
                <div>
                  <div className="lbl">Email</div>
                  <div className="val">hola@pintureriarenovar.com.ar</div>
                  <div className="sub">Respondemos en el día</div>
                </div>
              </div>
            </div>
            <MapBlock />
          </div>
        </section>

        <section className="cta-band reveal">
          <h2 className="display">¿Pintamos<br/><span className="it">tu casa</span>?</h2>
          <p>Pasá por el local, mandanos un WhatsApp con la foto del ambiente, o llamanos. Te ayudamos a calcular litros, elegir color y producto correcto.</p>
          <div className="cta-buttons">
            <a className="btn btn-primary" href="https://wa.me/542915033022" target="_blank" rel="noopener noreferrer">→ WhatsApp · 291 503-3022</a>
            <a className="btn btn-ghost" href="https://wa.me/542914614180" target="_blank" rel="noopener noreferrer">WhatsApp · 291 461-4180</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="foot-grid">
          <div>
            <Logo size={48} />
            <p style={{ marginTop: 14, maxWidth: '34ch' }}>Pinturería de barrio en Bahía Blanca. Color, asesoramiento y oficio honesto desde 1998.</p>
          </div>
          <div>
            <h4>Navegación</h4>
            <a href="#colores">Mezclá tu color</a>
            <a href="#deco">Renovar Deco</a>
            <a href="#resenas">Reseñas</a>
            <a href="#local">El local</a>
          </div>
          <div>
            <h4>Contacto</h4>
            <p>Mitre y 11 de Abril</p>
            <p>Bahía Blanca</p>
            <a href="tel:+5492915033022">291 503-3022</a>
            <a href="tel:+5492914614180">291 461-4180</a>
            <a href="https://wa.me/542915033022" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div>
            <h4>Horarios</h4>
            <p>Lun–Vie · 8:30–12:30</p>
            <p>Lun–Vie · 16:00–20:00</p>
            <p>Sáb · 9:00–13:00</p>
            <p>Dom · cerrado</p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} PINTURERÍA RENOVAR · TODOS LOS DERECHOS</span>
          <span>BAHÍA BLANCA · ARGENTINA</span>
        </div>
      </footer>
    </>
  );
};

const Tweaks = () => {
  const TweaksPanel = window.TweaksPanel;
  const TweakSection = window.TweakSection;
  const TweakColor = window.TweakColor;
  const TweakToggle = window.TweakToggle;
  const useTweaksHook = window.useTweaks;
  if (!TweaksPanel || !useTweaksHook) return null;
  const [tweaks, setTweak] = useTweaksHook(TWEAK_DEFAULTS);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Paleta">
        <TweakColor label="Acento turquesa" value={tweaks.accent} onChange={v => setTweak('accent', v)} />
        <TweakColor label="Acento cálido" value={tweaks.warm} onChange={v => setTweak('warm', v)} />
      </TweakSection>
      <TweakSection title="Layout">
        <TweakToggle label="Mostrar stats del hero" value={tweaks.showStats} onChange={v => setTweak('showStats', v)} />
      </TweakSection>
    </TweaksPanel>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<><App /><Tweaks /></>);

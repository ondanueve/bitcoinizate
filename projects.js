/*
 * Bitcoinizate: list of projects shown on the home page.
 * To add a project, append an object to this array. Fields:
 *   id        unique slug
 *   name      display name
 *   status    "live" (has a public url), "code" (public repo only) or "soon" (shown without links)
 *   url       where "Open" points (site path or full URL); omit when status is "soon"
 *   repo      public source repo URL; omit for private repos
 *   more      optional extra page (e.g. an about/how-to-play page)
 *   cta       optional label key for the main button: "play" or "open" (default)
 *   kind      short label, { en, es }
 *   desc      one or two sentences, { en, es }
 *   note      optional first-session line, { en, es }
 *   image     optional still, a site path
 *   alt       optional still alt text, { en, es }
 * Order here is the order on the page.
 */
window.BZ_PROJECTS = [
  {
    id: "choppy-bitcoin",
    name: "Choppy Bitcoin",
    status: "live",
    url: "/choppy-bitcoin/",
    cta: "play",
    more: "/choppy-bitcoin/about/",
    repo: "https://github.com/ondanueve/choppy-bitcoin",
    image: "/stills/choppy.jpg",
    kind: { en: "Browser game", es: "Juego en el navegador" },
    alt: {
      en: "A coin crossing a Japanese candlestick chart",
      es: "Una moneda cruzando un gráfico de velas japonesas"
    },
    desc: {
      en: "A trading arcade in your browser. Fly the ₿ through Japanese candlesticks: time the market or just DCA and chill. Climb the daily Ranked — the same chart for everyone until 00:00 UTC — or set off on a story, from a family stake to the shores of Bitcoin Country. Score is play money. No token.",
      es: "Un arcade de trading en el navegador. Volá el ₿ entre velas japonesas: timeá el mercado o hacé DCA y quedate. Subí el Ranked del día —la misma vela para todos hasta las 00:00 UTC— o salí de aventura, de una apuesta familiar a las costas de Bitcoin Country. El puntaje es plata de juego. Sin token."
    },
    note: {
      en: "Tap or press space and slip between the candles. A wick liquidates you. Buy and sell show up in the run, not before.",
      es: "Tocá o apretá espacio y pasá entre las velas. Una mecha te liquida. Comprar y vender entran en la partida, no antes."
    }
  },
  {
    id: "stonk-arena",
    name: "Stonk Arena",
    status: "live",
    url: "https://stonk-arena.vercel.app",
    cta: "play",
    image: "/stills/stonk.jpg",
    kind: { en: "Browser card game", es: "Juego de cartas en el navegador" },
    alt: {
      en: "Five trading cards on a dark desk",
      es: "Cinco cartas de trading sobre un escritorio oscuro"
    },
    desc: {
      en: "A trading-card duel in the browser. Five desks try to take a rival Portfolio to zero while the tape cycles Bull, Bear and Chop. Build a book, hold or attack, and climb a six-floor campaign.",
      es: "Un duelo de cartas en el navegador. Cinco mesas pelean para llevar el Portfolio rival a cero mientras el mercado rota entre Bull, Bear y Chop. Armá un mazo, aguantá o atacá, y subí una campaña de seis pisos."
    }
  },
  {
    id: "parques-en-guerra",
    name: "Parques en Guerra",
    status: "live",
    url: "https://ondanueve.github.io/batalla-naval-parques/",
    cta: "play",
    repo: "https://github.com/ondanueve/batalla-naval-parques",
    image: "/stills/parques.jpg",
    kind: { en: "Browser game", es: "Juego en el navegador" },
    alt: {
      en: "Three national parks as tiles on a board",
      es: "Tres parques nacionales como fichas de un tablero"
    },
    desc: {
      en: "A territorial battle in Argentina's national parks. Play as Argentina defending Nahuel Huapi, Iguazú and Los Glaciares, or as an invader (Chile, UK, USA, China, Russia or Brazil), against the CPU or online.",
      es: "Batalla territorial en los parques nacionales argentinos. Defendé Nahuel Huapi, Iguazú y Los Glaciares como Argentina, o invadí como Chile, UK, EE.UU., China, Rusia o Brasil, contra la máquina o en línea."
    }
  },
  {
    id: "rayo-borgesdebioyizador",
    name: "rayo borgesdebioyizador",
    status: "live",
    url: "https://ondanueve.github.io/RB/",
    cta: "open",
    repo: "https://github.com/ondanueve/RB",
    image: "/stills/rayo.jpg",
    kind: { en: "Literary toy", es: "Juguete literario" },
    alt: {
      en: "A page of an apocryphal diary and a pen",
      es: "Una página de diario apócrifo y una pluma"
    },
    desc: {
      en: "An apocryphal-diary generator in the style of Bioy Casares's notes on Borges. Pick two public figures with a documented bond and a date; it writes two diary pages. Parody · AI-generated fiction.",
      es: "Generador de diarios apócrifos al estilo de las anotaciones de Bioy Casares sobre Borges. Elegís dos figuras públicas con un vínculo documentado y una fecha; te arma dos páginas de diario. Parodia · Ficción generada por IA."
    }
  },
  {
    id: "capital-capers",
    name: "Capital Capers",
    status: "soon",
    kind: { en: "Browser board game", es: "Juego de mesa en el navegador" },
    desc: {
      en: "A race across Europe's capitals.",
      es: "Una carrera por las capitales de Europa."
    }
  },
  {
    id: "aspirante-escritor",
    name: "Aspirante a Escritor",
    status: "soon",
    kind: { en: "Browser game", es: "Juego en el navegador" },
    desc: {
      en: "A simulator about an aspiring writer's life.",
      es: "Simulador de la vida de un escritor que busca publicar."
    }
  },
];

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
 *   image     optional still, a site path (16:9 WebP, 1200x675)
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
    image: "/stills/choppy.webp",
    kind: { en: "Browser game", es: "Browser game" },
    alt: {
      en: "A coin crossing a Japanese candlestick chart",
      es: "Una moneda cruzando un gráfico de velas japonesas"
    },
    desc: {
      en: "A trading arcade in your browser. Fly the ₿ through Japanese candlesticks: time the market or just DCA and chill. Climb the daily Ranked, or set off on story adventures, from family stakes to the shores of Bitcoin Country.",
      es: "A trading arcade in your browser. Fly the ₿ through Japanese candlesticks: time the market or just DCA and chill. Climb the daily Ranked, or set off on story adventures, from family stakes to the shores of Bitcoin Country."
    }
  },
  {
    id: "stonk-arena",
    name: "Stonk Arena",
    status: "live",
    url: "https://stonk-arena.vercel.app",
    cta: "play",
    image: "/stills/stonk.webp",
    kind: { en: "Browser card game", es: "Juego de cartas en el navegador" },
    alt: {
      en: "Five trading cards and a lit candle on a dark desk",
      es: "Cinco cartas de trading y una vela encendida sobre un escritorio oscuro"
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
    image: "/stills/parques.webp",
    kind: { en: "Browser game", es: "Juego en el navegador" },
    alt: {
      en: "Three national parks as tiles on a board: a lake, a waterfall and a glacier",
      es: "Tres parques nacionales como fichas de un tablero: un lago, una cascada y un glaciar"
    },
    desc: {
      en: "Battleship on real satellite maps of Argentina's national parks: Nahuel Huapi, Iguazú and Los Glaciares. On water a piece is a ship, on land a tank, never across the shore. Take on the CPU, invite a friend with a link, or join a free-for-all of up to eight.",
      es: "Batalla naval sobre mapas satelitales reales de los parques nacionales argentinos: Nahuel Huapi, Iguazú y Los Glaciares. En el agua cada pieza es un barco, en tierra un tanque, nunca cruzando la costa. Contra la máquina, con alguien invitado por enlace o en un todos contra todos de hasta ocho."
    }
  },
  {
    id: "rayo-borgesdebioyizador",
    name: "rayo borgesdebioyizador",
    status: "live",
    url: "https://ondanueve.github.io/RB/",
    cta: "open",
    repo: "https://github.com/ondanueve/RB",
    image: "/stills/rayo.webp",
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

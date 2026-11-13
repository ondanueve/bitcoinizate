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
    kind: { en: "Browser game", es: "Browser game" },
    desc: {
      en: "A trading arcade in your browser. Fly the ₿ through Japanese candlesticks: time the market or just DCA and chill. Climb the daily Ranked, or set off on story adventures, from family stakes to the shores of Bitcoin Country.",
      es: "A trading arcade in your browser. Fly the ₿ through Japanese candlesticks: time the market or just DCA and chill. Climb the daily Ranked, or set off on story adventures, from family stakes to the shores of Bitcoin Country."
    }
  },
  {
    id: "parques-en-guerra",
    name: "Parques en Guerra",
    status: "live",
    url: "https://ondanueve.github.io/batalla-naval-parques/",
    cta: "play",
    repo: "https://github.com/ondanueve/batalla-naval-parques",
    kind: { en: "Browser game", es: "Juego en el navegador" },
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
    kind: { en: "Literary generator", es: "Generador literario" },
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

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
    kind: { en: "Browser game", es: "Juego en el navegador" },
    desc: {
      en: "A trading arcade. Fly the ₿ through Japanese candlesticks, buy the dip, sell the rip and survive the black swans. Scores are play money.",
      es: "Un arcade de trading. Vuela el ₿ entre velas japonesas, compra en la baja, vende en la suba y sobrevive a los cisnes negros. El puntaje es dinero de juego."
    }
  },
  {
    id: "bonxai-pruner",
    name: "BonXai Pruner",
    status: "code",
    url: "https://github.com/ondanueve/BonXai-Pruner",
    repo: "https://github.com/ondanueve/BonXai-Pruner",
    kind: { en: "Chrome extension", es: "Extensión de Chrome" },
    desc: {
      en: "Prunes your X feed in real time with a plain-language instruction, using Chrome's on-device Gemini Nano. Free, private, no cloud APIs.",
      es: "Poda tu feed de X en tiempo real a partir de una instrucción en lenguaje natural, con Gemini Nano dentro de Chrome. Gratis, privado, sin APIs en la nube."
    }
  },
  {
    id: "borgesdebioyizador",
    name: "rayo borgesdebioyizador",
    status: "live",
    url: "/borgesdebioyizador/",
    repo: "https://github.com/ondanueve/borgesdebioyizador",
    kind: { en: "Literary generator", es: "Generador literario" },
    desc: {
      en: "Apocryphal diary entries in the manner of Bioy's Borges, starring real public figures with a documented friendship. Parody and fiction.",
      es: "Entradas apócrifas de diario a la manera del Borges de Bioy, protagonizadas por figuras públicas reales con una amistad documentada. Parodia y ficción."
    }
  }
];

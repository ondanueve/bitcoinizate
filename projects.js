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
];

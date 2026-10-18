/* Bitcoinizate hub: EN/ES strings and project list rendering. No dependencies. */
(function () {
  "use strict";
  var KEY = "bitcoinizate-lang"; // shared with Choppy Bitcoin's i18n.js
  var dict = {
    en: {
      tagline: "A small shelf of projects",
      intro: "Games, tools and literary toys, made one at a time. Some are finished, some are on the way.",
      projects: "Projects",
      open: "Open",
      play: "Play",
      about: "About",
      source: "Source",
      soon: "Coming soon",
      statusLive: "Live",
      statusCode: "Open source",
      statusSoon: "In the works",
      privacy: "Privacy",
      contact: "Contact",
      notFoundH: "Page not found",
      notFoundB: "This page is not on the shelf. It may have moved.",
      backHome: "Back to Bitcoinizate",
      redirecting: "Redirecting…",
      noscript: "The project list needs JavaScript. Choppy Bitcoin is at /choppy-bitcoin/.",
      privacyH: "Privacy policy",
      privacyB1: "Bitcoinizate is a browser games site. We do not sell a token, we do not run ads, and we do not sell your data.",
      privacyB2: "If you play as a guest, this device keeps your best score, awards, and settings such as look, sound, and language. That stays in local storage on the device. We do not receive it.",
      privacyB3: "If you create an account we keep your email, a password hash (handled by Supabase), your alias, optional Bitcoin and Lightning payout addresses, your cloud high score, a saved run tape, awards, and your versus rating. Feedback you send while signed in is stored with your account.",
      privacyB4: "We use that to sign you in, show a public leaderboard of alias and score, pay prize winners, and read feedback. We do not sell lists. Donations go to our Lightning invoice or Bitcoin address. The payment itself does not tell us who you are.",
      privacyB5: "You can sign out anytime. To delete an account, email hello@bitcoinizate.com from the address you registered with. We delete the account and the profile tied to it.",
      privacyB7: "rayo borgesdebioyizador stores each page it writes (the names and options you type plus the generated text) so its link can be shared. Those pages are public, so do not type personal data. To limit use we keep a salted hash of your IP address with a counter for a short time, never the address itself.",
      privacyB6: "Questions: <a href=\"mailto:hello@bitcoinizate.com\">hello@bitcoinizate.com</a>"
    },
    es: {
      tagline: "Un pequeño estante de proyectos",
      intro: "Juegos, herramientas y juguetes literarios, hechos de a uno. Algunos están terminados, otros vienen en camino.",
      projects: "Proyectos",
      open: "Abrir",
      play: "Jugar",
      about: "Info",
      source: "Código",
      soon: "Próximamente",
      statusLive: "En línea",
      statusCode: "Código abierto",
      statusSoon: "En preparación",
      privacy: "Privacidad",
      contact: "Contacto",
      notFoundH: "Página no encontrada",
      notFoundB: "Esta página no está en el estante. Puede que se haya mudado.",
      backHome: "Volver a Bitcoinizate",
      redirecting: "Redirigiendo…",
      noscript: "La lista de proyectos necesita JavaScript. Choppy Bitcoin está en /choppy-bitcoin/.",
      privacyH: "Política de privacidad",
      privacyB1: "Bitcoinizate es un sitio de juegos en el navegador. No vendemos un token, no mostramos anuncios y no vendemos tus datos.",
      privacyB2: "Si juegas como invitado, este dispositivo guarda tu mejor puntaje, premios de partida y ajustes como el aspecto, el sonido y el idioma. Eso queda en el almacenamiento local del dispositivo. No lo recibimos.",
      privacyB3: "Si creas una cuenta guardamos tu correo, un hash de contraseña (lo maneja Supabase), tu alias, direcciones opcionales de Bitcoin y Lightning para cobros, tu puntaje en la nube, una cinta de partida guardada, premios y tu rating de versus. El feedback que envías con la sesión iniciada se guarda con tu cuenta.",
      privacyB4: "Eso sirve para iniciar sesión, mostrar un ranking público de alias y puntaje, pagar premios y leer el feedback. No vendemos listas. Las donaciones van a nuestra factura Lightning o dirección Bitcoin. El pago en sí no nos dice quién eres.",
      privacyB5: "Puedes cerrar sesión cuando quieras. Para borrar una cuenta escribe a hello@bitcoinizate.com desde el correo con el que te registraste. Borramos la cuenta y el perfil asociado.",
      privacyB7: "rayo borgesdebioyizador guarda cada página que escribe (los nombres y opciones que escribes y el texto generado) para que su link se pueda compartir. Esas páginas son públicas: no escribas datos personales. Para limitar el uso guardamos por poco tiempo un hash con sal de tu dirección IP y un contador, nunca la dirección en sí.",
      privacyB6: "Consultas: <a href=\"mailto:hello@bitcoinizate.com\">hello@bitcoinizate.com</a>"
    }
  };

  function detect() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "es" || saved === "en") return saved;
    } catch (e) {}
    var list = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"]);
    for (var i = 0; i < list.length; i++) {
      var l = String(list[i] || "").toLowerCase();
      if (l === "es" || l.indexOf("es-") === 0) return "es";
    }
    return "en";
  }
  var lang = detect();
  function t(k) { var p = dict[lang] || dict.en; return p[k] != null ? p[k] : (dict.en[k] != null ? dict.en[k] : k); }
  function pick(o) { return o ? (o[lang] || o.en || "") : ""; }

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    if (attrs) for (var a in attrs) if (attrs[a] != null) n.setAttribute(a, attrs[a]);
    if (text != null) n.textContent = text;
    return n;
  }
  function isExternal(u) { return /^https?:\/\//.test(u || ""); }
  function link(href, label, cls) {
    var a = el("a", { href: href, "class": cls || null }, label);
    if (isExternal(href)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  }

  function renderProjects() {
    var box = document.getElementById("projects");
    if (!box) return;
    var list = window.BZ_PROJECTS || [];
    box.textContent = "";
    list.forEach(function (p, i) {
      var li = el("li", { "class": "project status-" + p.status, id: p.id });
      var num = el("span", { "class": "num", "aria-hidden": "true" }, ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][i] || String(i + 1));
      var body = el("div", { "class": "body" });
      var head = el("h3");
      if (p.status !== "soon" && p.url) head.appendChild(link(p.url, p.name)); else head.textContent = p.name;
      var meta = el("p", { "class": "meta" });
      meta.textContent = pick(p.kind) + " · " + t(p.status === "live" ? "statusLive" : p.status === "code" ? "statusCode" : "statusSoon");
      var desc = el("p", { "class": "desc" }, pick(p.desc));
      var acts = el("p", { "class": "acts" });
      if (p.status === "soon") {
        acts.appendChild(el("span", { "class": "soon" }, t("soon")));
      } else {
        if (p.url && p.url !== p.repo) acts.appendChild(link(p.url, t(p.cta || "open"), "btn"));
        if (p.more) acts.appendChild(link(p.more, t("about")));
        if (p.repo) acts.appendChild(link(p.repo, t("source")));
      }
      body.appendChild(head); body.appendChild(meta); body.appendChild(desc); body.appendChild(acts);
      li.appendChild(num); li.appendChild(body);
      box.appendChild(li);
    });
  }

  function apply() {
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"));
    nodes = document.querySelectorAll("[data-i18n-html]");
    for (i = 0; i < nodes.length; i++) nodes[i].innerHTML = t(nodes[i].getAttribute("data-i18n-html"));
    nodes = document.querySelectorAll("[data-lang]");
    for (i = 0; i < nodes.length; i++) nodes[i].classList.toggle("on", nodes[i].getAttribute("data-lang") === lang);
    renderProjects();
  }
  function setLang(next) {
    lang = next === "es" ? "es" : "en";
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    apply();
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-lang]");
    if (!b) return;
    e.preventDefault();
    setLang(b.getAttribute("data-lang"));
  });
  window.BZHub = { t: t, lang: function () { return lang; }, setLang: setLang, apply: apply };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply); else apply();
})();

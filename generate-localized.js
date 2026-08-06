const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = __dirname;
const domain = "https://wefortuneasset.com";
const pages = [
  ["index.html", "home"],
  ["about.html", "about"],
  ["services.html", "services"],
  ["why-us.html", "why"],
  ["approach.html", "approach"],
  ["global-strategy.html", "global"],
  ["team.html", "team"],
  ["contact.html", "contact"]
];

const languageConfig = {
  "pt-BR": { directory: "pt-br", ogLocale: "pt_BR", alternateLocale: "en_US" },
  "en-US": { directory: "en-us", ogLocale: "en_US", alternateLocale: "pt_BR" }
};

const seo = {
  "pt-BR": {
    home: {
      title: "WeFortuneAsset | Gestão Global de Ativos e Patrimônio",
      description: "A WeFortuneAsset oferece alocação global de ativos, pesquisa de investimentos, gestão de riscos, estratégias digitais e consultoria patrimonial internacional."
    },
    about: {
      title: "Sobre a WeFortuneAsset | Gestão Global de Investimentos",
      description: "Conheça a WeFortuneAsset, gestora independente com sede nos Estados Unidos, visão global, pesquisa profissional e disciplina de investimento de longo prazo."
    },
    services: {
      title: "Gestão de Ativos e Patrimônio | WeFortuneAsset",
      description: "Conheça os serviços da WeFortuneAsset em alocação global, ativos digitais, renda fixa, ações, ativos reais, capital privado, patrimônio e gestão de riscos."
    },
    why: {
      title: "Por Que Escolher a WeFortuneAsset | Gestão Global",
      description: "Descubra por que clientes internacionais escolhem a WeFortuneAsset pela pesquisa global, tecnologia, gestão disciplinada de riscos e soluções patrimoniais."
    },
    approach: {
      title: "Abordagem de Investimento e Risco | WeFortuneAsset",
      description: "Entenda a abordagem da WeFortuneAsset, que combina pesquisa global, alocação diversificada de ativos, disciplina de riscos e convicção de longo prazo."
    },
    global: {
      title: "Estratégia Global de Investimento | WeFortuneAsset",
      description: "Veja como a WeFortuneAsset conecta mercados, classes de ativos, moedas e pesquisa regional para identificar oportunidades globais resilientes de longo prazo."
    },
    team: {
      title: "Wallace Sterling Caldwell | Presidente da WeFortuneAsset",
      description: "Conheça Wallace Sterling Caldwell, Presidente e fundador da WeFortuneAsset, sua trajetória global, filosofia de investimento e equipe de liderança."
    },
    contact: {
      title: "Contato WeFortuneAsset | Gestão Patrimonial Global",
      description: "Entre em contato com a WeFortuneAsset para conversar sobre alocação global, gestão de investimentos, riscos e soluções patrimoniais de longo prazo."
    }
  },
  "en-US": {
    home: {
      title: "WeFortuneAsset | Global Asset & Wealth Management",
      description: "WeFortuneAsset delivers global asset allocation, investment research, risk management, digital asset strategies, and wealth advisory for international clients."
    },
    about: {
      title: "About WeFortuneAsset | Global Investment Management",
      description: "Learn about WeFortuneAsset, a U.S.-headquartered investment management firm built on global insight, professional research, and long-term discipline."
    },
    services: {
      title: "Asset Management Services | WeFortuneAsset",
      description: "Explore WeFortuneAsset services across global asset allocation, digital assets, fixed income, equities, private capital, wealth advisory, and risk management."
    },
    why: {
      title: "Why WeFortuneAsset | Global Investment Expertise",
      description: "Discover why international clients choose WeFortuneAsset for global research, disciplined risk management, technology, and long-term wealth strategies."
    },
    approach: {
      title: "Investment Approach & Risk Management | WeFortuneAsset",
      description: "Explore the WeFortuneAsset investment approach, combining global research, diversified asset allocation, disciplined risk management, and long-term conviction."
    },
    global: {
      title: "Global Investment Strategy | WeFortuneAsset",
      description: "See how WeFortuneAsset connects global markets, asset classes, currencies, and regional research to identify resilient long-term investment opportunities."
    },
    team: {
      title: "Wallace Sterling Caldwell | WeFortuneAsset Chairman",
      description: "Discover Wallace Sterling Caldwell, Chairman and Founder of WeFortuneAsset, his global investment career, leadership philosophy, and management team."
    },
    contact: {
      title: "Contact WeFortuneAsset | Global Wealth Advisory",
      description: "Contact WeFortuneAsset to discuss global asset allocation, investment management, digital asset strategies, risk management, and long-term wealth advisory."
    }
  }
};

const nav = [
  ["index.html", "Início", "Home", "home"],
  ["about.html", "Sobre nós", "About Us", "about"],
  ["services.html", "Serviços", "Core Services", "services"],
  ["why-us.html", "Diferenciais", "Why Choose Us", "why"],
  ["approach.html", "Abordagem", "Investment Approach", "approach"],
  ["global-strategy.html", "Estratégia global", "Global Strategy", "global"],
  ["team.html", "Equipe", "Management Team", "team"],
  ["contact.html", "Contato", "Contact Us", "contact"]
];

const logo = `<svg class="brand-mark" viewBox="0 0 44 44" aria-hidden="true"><path d="M5 11.5 12.2 34h6.5l3.4-10.3L25.6 34h6.2L39 11.5h-7l-3.7 13.8-3.5-10.8h-5.2l-3.7 10.8-3.8-13.8Z"/><path class="mark-accent" d="M5 6h34v3H5z"/></svg><span class="brand-type">WeFortune<span>Asset</span></span>`;

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function canonicalUrl(language, fileName) {
  const directory = languageConfig[language].directory;
  return `${domain}/${directory}/${fileName === "index.html" ? "" : fileName}`;
}

function seoMarkup(language, fileName, pageKey) {
  const config = languageConfig[language];
  const meta = seo[language][pageKey];
  const currentUrl = canonicalUrl(language, fileName);
  const ptUrl = canonicalUrl("pt-BR", fileName);
  const enUrl = canonicalUrl("en-US", fileName);
  const title = escapeAttribute(meta.title);
  const description = escapeAttribute(meta.description);
  return `<title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <link rel="canonical" href="${currentUrl}">
  <link rel="alternate" hreflang="pt-BR" href="${ptUrl}">
  <link rel="alternate" hreflang="en-US" href="${enUrl}">
  <link rel="alternate" hreflang="x-default" href="${enUrl}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="WeFortuneAsset">
  <meta property="og:locale" content="${config.ogLocale}">
  <meta property="og:locale:alternate" content="${config.alternateLocale}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${currentUrl}">
  <meta property="og:image" content="${domain}/assets/og-wefortuneasset.png">
  <meta property="og:image:width" content="1660">
  <meta property="og:image:height" content="954">
  <meta property="og:image:alt" content="WeFortuneAsset — Global Asset Management">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${domain}/assets/og-wefortuneasset.png">
  <meta name="theme-color" content="#090909">
  <link rel="icon" href="../assets/favicon.png" type="image/png">
  <link rel="manifest" href="../site.webmanifest">`;
}

function replaceHeadMetadata(html, language, fileName, pageKey) {
  html = html.replace(/<title>[\s\S]*?<\/title>/i, "");
  html = html.replace(/\s*<meta name="description"[^>]*>/i, "");
  html = html.replace(/\s*<meta name="robots"[^>]*>/gi, "");
  html = html.replace(/\s*<meta name="theme-color"[^>]*>/gi, "");
  html = html.replace(/\s*<meta name="twitter:[^"]+"[^>]*>/gi, "");
  html = html.replace(/\s*<meta property="og:[^"]+"[^>]*>/gi, "");
  html = html.replace(/\s*<link rel="canonical"[^>]*>/gi, "");
  html = html.replace(/\s*<link rel="alternate"[^>]*>/gi, "");
  html = html.replace(/\s*<link rel="icon"[^>]*>/gi, "");
  html = html.replace(/\s*<link rel="manifest"[^>]*>/gi, "");
  return html.replace(
    /(<meta name="viewport"[^>]*>)/i,
    `$1\n  ${seoMarkup(language, fileName, pageKey)}`
  );
}

function localizedHref(language, fileName) {
  return `../${languageConfig[language].directory}/${fileName}`;
}

function transformAssetPaths(html) {
  return html
    .replace(/href="styles\.css"/g, 'href="../styles.css"')
    .replace(/href="pages\.css"/g, 'href="../pages.css"')
    .replace(/src="script\.js"/g, 'src="../script.js"')
    .replace(/src="inner-pages\.js"/g, 'src="../inner-pages.js"')
    .replace(/(href|src)="assets\//g, '$1="../assets/');
}

function transformPageLinks(html, language) {
  const files = pages.map(([file]) => file.replace(".", "\\.")).join("|");
  return html.replace(
    new RegExp(`href="(${files})"`, "g"),
    (_, fileName) => `href="${localizedHref(language, fileName)}"`
  );
}

function applyIndexTranslations(html, dictionary) {
  for (const [key, value] of Object.entries(dictionary)) {
    const safeKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(
      `(<([a-z0-9-]+)[^>]*data-i18n="${safeKey}"[^>]*>)([\\s\\S]*?)(</\\2>)`,
      "gi"
    );
    html = html.replace(pattern, `$1${value}$4`);
  }
  return html;
}

function staticHeader(language, currentPage) {
  const isPt = language === "pt-BR";
  const links = nav.map(([file, pt, en, key]) =>
    `<a class="${key === currentPage ? "active" : ""}" href="${localizedHref(language, file)}">${isPt ? pt : en}</a>`
  ).join("");
  return `<header class="site-header">
    <div class="utility-bar"><div class="container utility-inner"><p>${isPt ? "Conectando capital global. Alocando valor de longo prazo." : "Connecting global capital. Allocating long-term value."}</p><nav><a href="${localizedHref(language, "services.html")}">${isPt ? "Documentos" : "Documents"}</a><a href="${localizedHref(language, "contact.html")}">${isPt ? "Contato" : "Contact"}</a></nav></div></div>
    <div class="main-nav"><div class="container nav-inner">
      <a class="brand" href="${localizedHref(language, "index.html")}" aria-label="WeFortuneAsset home">${logo}</a>
      <nav class="desktop-nav multi-page-nav" aria-label="${isPt ? "Navegação principal" : "Primary navigation"}">${links}</nav>
      <div class="nav-actions"><button class="language-toggle" type="button" aria-label="${isPt ? "Mudar para inglês" : "Switch to Portuguese"}"><span class="active-lang">${isPt ? "PT" : "EN"}</span><span class="toggle-divider"></span><span class="inactive-lang">${isPt ? "EN" : "PT"}</span></button><button class="menu-toggle" type="button" aria-label="${isPt ? "Abrir menu" : "Open menu"}" aria-expanded="false"><span></span><span></span><span></span></button></div>
    </div></div>
    <div class="mobile-menu" aria-hidden="true"><nav>${links}</nav></div>
  </header>`;
}

function staticFooter(language) {
  const isPt = language === "pt-BR";
  return `<section class="inner-cta"><div class="container"><h2>${isPt ? "Construa um futuro financeiro mais resiliente." : "Build a more resilient financial future."}</h2><a class="button" href="${localizedHref(language, "contact.html")}">${isPt ? "Fale conosco" : "Start a conversation"} →</a></div></section>
  <footer class="footer"><div class="container footer-top">
    <div class="footer-brand"><a class="brand brand-light" href="${localizedHref(language, "index.html")}">${logo}</a><p>${isPt ? "Visão global. Gestão disciplinada. Inovação para o futuro." : "Global insights. Disciplined wealth management. Innovation for the future."}</p></div>
    <div class="footer-col"><h3>${isPt ? "Empresa" : "Company"}</h3><a href="${localizedHref(language, "about.html")}">${isPt ? "Sobre nós" : "About Us"}</a><a href="${localizedHref(language, "why-us.html")}">${isPt ? "Diferenciais" : "Why Choose Us"}</a><a href="${localizedHref(language, "team.html")}">${isPt ? "Equipe" : "Management Team"}</a></div>
    <div class="footer-col"><h3>${isPt ? "Capacidades" : "Capabilities"}</h3><a href="${localizedHref(language, "services.html")}">${isPt ? "Serviços" : "Core Services"}</a><a href="${localizedHref(language, "approach.html")}">${isPt ? "Abordagem" : "Investment Approach"}</a><a href="${localizedHref(language, "global-strategy.html")}">${isPt ? "Estratégia global" : "Global Strategy"}</a></div>
    <div class="footer-col footer-contact"><h3>${isPt ? "Contato" : "Contact"}</h3><a href="mailto:contact@wefortuneasset.com">contact@wefortuneasset.com</a><p>${isPt ? "Estados Unidos<br>Atendimento a clientes globais" : "United States<br>Serving clients globally"}</p></div>
  </div><div class="container footer-bottom"><p>© 2026 WeFortuneAsset. ${isPt ? "Todos os direitos reservados." : "All rights reserved."}</p></div></footer>`;
}

function loadHomepageTranslations() {
  const source = fs.readFileSync(path.join(root, "script.js"), "utf8");
  const prefix = source.slice(0, source.indexOf("const newsData"));
  const sandbox = {};
  vm.runInNewContext(
    prefix.replace("const translations =", "globalThis.translations ="),
    sandbox
  );
  return sandbox.translations;
}

function loadInnerPageData() {
  const source = fs.readFileSync(path.join(root, "inner-pages.js"), "utf8");
  const prefix = source.slice(0, source.indexOf("let innerLanguage"));
  const sandbox = {};
  const exportable = prefix
    .replace("const innerNav =", "globalThis.innerNav =")
    .replace("const sharedCopy =", "globalThis.sharedCopy =")
    .replace("const assetIconSvgs =", "globalThis.assetIconSvgs =")
    .replace("const pageData =", "globalThis.pageData =");
  vm.runInNewContext(exportable, sandbox);
  return sandbox.pageData;
}

function generateHomepage(language, translations) {
  const fileName = "index.html";
  let html = fs.readFileSync(path.join(root, fileName), "utf8");
  html = applyIndexTranslations(html, translations[language]);
  html = html.replace(/<html lang="[^"]+">/, `<html lang="${language}">`);
  html = html.replace("<body>", `<body data-language="${language}">`);
  html = replaceHeadMetadata(html, language, fileName, "home");
  html = transformAssetPaths(html);
  html = transformPageLinks(html, language);
  return html;
}

function generateInnerPage(language, fileName, pageKey, pageData) {
  const isPt = language === "pt-BR";
  const data = pageData[pageKey][language];
  let html = fs.readFileSync(path.join(root, fileName), "utf8");
  html = html.replace(/<html lang="[^"]+">/, `<html lang="${language}">`);
  html = html.replace(
    /<body class="inner-page" data-page="[^"]+">/,
    `<body class="inner-page" data-page="${pageKey}" data-language="${language}">`
  );
  html = replaceHeadMetadata(html, language, fileName, pageKey);
  html = transformAssetPaths(html);
  html = html.replace(
    /<a class="skip-link"[\s\S]*?<\/a>/,
    `<a class="skip-link" href="#page-content">${isPt ? "Pular para o conteúdo" : "Skip to content"}</a>`
  );
  html = html.replace(
    '<div id="shared-header"></div>',
    `<div id="shared-header">${staticHeader(language, pageKey)}</div>`
  );
  html = html.replace(
    '<main id="page-content"></main>',
    `<main id="page-content"><section class="page-hero"><div class="container page-hero-inner"><div class="page-hero-copy"><span class="page-index">${data.index}</span><h1>${data.title}</h1><p class="page-hero-lead">${data.lead}</p></div><div class="page-hero-art" aria-hidden="true"><span></span></div></div></section>${data.html}</main>`
  );
  html = html.replace(
    '<div id="shared-footer"></div>',
    `<div id="shared-footer">${staticFooter(language)}</div>`
  );
  return html;
}

const homepageTranslations = loadHomepageTranslations();
const innerPageData = loadInnerPageData();

for (const language of Object.keys(languageConfig)) {
  const outputDirectory = path.join(root, languageConfig[language].directory);
  fs.mkdirSync(outputDirectory, { recursive: true });
  for (const [fileName, pageKey] of pages) {
    const output = pageKey === "home"
      ? generateHomepage(language, homepageTranslations)
      : generateInnerPage(language, fileName, pageKey, innerPageData);
    fs.writeFileSync(path.join(outputDirectory, fileName), output, "utf8");
  }
}

const sitemapEntries = [];
for (const [fileName] of pages) {
  for (const language of ["en-US", "pt-BR"]) {
    sitemapEntries.push(`  <url>
    <loc>${canonicalUrl(language, fileName)}</loc>
    <xhtml:link rel="alternate" hreflang="en-US" href="${canonicalUrl("en-US", fileName)}"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${canonicalUrl("pt-BR", fileName)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${canonicalUrl("en-US", fileName)}"/>
    <lastmod>2026-07-31</lastmod>
  </url>`);
  }
}

fs.writeFileSync(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries.join("\n")}
</urlset>
`,
  "utf8"
);

console.log("Generated localized WeFortuneAsset pages for pt-BR and en-US.");

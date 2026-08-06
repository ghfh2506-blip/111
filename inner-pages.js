const innerNav = [
  ["index.html", "Home", "Início", "home"],
  ["about.html", "About Us", "Sobre nós", "about"],
  ["services.html", "Core Services", "Serviços", "services"],
  ["why-us.html", "Why Choose Us", "Diferenciais", "why"],
  ["approach.html", "Investment Approach", "Abordagem", "approach"],
  ["global-strategy.html", "Global Strategy", "Estratégia global", "global"],
  ["team.html", "Management Team", "Equipe", "team"],
  ["contact.html", "Contact Us", "Contato", "contact"]
];

const sharedCopy = {
  "en-US": {
    utility: "Connecting global capital. Allocating long-term value.",
    docs: "Documents",
    contact: "Contact",
    company: "Company",
    services: "Capabilities",
    legal: "Legal",
    footerLine: "Global insights. Disciplined wealth management. Innovation for the future.",
    rights: "All rights reserved.",
    cta: "Build a more resilient financial future.",
    ctaButton: "Start a conversation",
    menu: "Open menu"
  },
  "pt-BR": {
    utility: "Conectando capital global. Alocando valor de longo prazo.",
    docs: "Documentos",
    contact: "Contato",
    company: "Empresa",
    services: "Capacidades",
    legal: "Legal",
    footerLine: "Visão global. Gestão disciplinada. Inovação para o futuro.",
    rights: "Todos os direitos reservados.",
    cta: "Construa um futuro financeiro mais resiliente.",
    ctaButton: "Fale conosco",
    menu: "Abrir menu"
  }
};

const assetIconSvgs = [
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 6-8"/><path d="M18 6h3v3"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-6 9 6"/><path d="M5 10v8"/><path d="M9 10v8"/><path d="M15 10v8"/><path d="M19 10v8"/><path d="M3 18h18"/><path d="M2 22h20"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M3 22h18"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="m11 3-3 6 4 13 4-13-3-6"/><path d="M2 9h20"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 22V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17"/><path d="M3 22h14"/><path d="M6 8h8"/><path d="m16 8 3 3v7a2 2 0 0 0 4 0v-5l-2-2"/><path d="M8 13h4"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 12h8"/><path d="M12 10v4"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.87 12.87 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2Z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4"/><path d="M5 16v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/></svg>`
];

const pageData = {
  about: {
    "en-US": {
      index: "01 · About WeFortuneAsset",
      title: "Global perspective.<br><em>Long-term conviction.</em>",
      lead: "A next-generation asset management institution connecting traditional finance, digital assets, professional research, and disciplined risk management.",
      html: `
        <section class="inner-section">
          <div class="container prose-grid">
            <div class="prose-label"><p class="eyebrow">Company overview</p><strong>Built for a more connected and complex investment world.</strong></div>
            <div class="prose-content">
              <p>WeFortuneAsset is a professional asset management institution serving global clients through diversified asset allocation, investment research, digital asset strategies, and wealth management advisory.</p>
              <p>Headquartered in the United States and connected to global capital markets, we develop long-term value-oriented solutions through a professional, international, and technology-driven framework. Our capabilities span equities, fixed income, real estate, gold, energy, private capital, venture capital, and digital assets.</p>
              <p>We primarily serve entrepreneurs, family wealth organizations, private equity executives, venture capital partners, professional investors, and high-net-worth individuals. Every relationship begins with the client's distinct priorities?from capital preservation and global diversification to liquidity planning and intergenerational wealth transfer.</p>
            </div>
          </div>
        </section>
        <section class="inner-section inner-section-dark">
          <div class="container">
            <div class="section-intro"><div><p class="eyebrow">What guides us</p><h2>Purpose translated into practice.</h2></div><p>Our philosophy, mission, and vision shape every research process, allocation decision, and client relationship.</p></div>
            <div class="statement-grid">
              <article class="statement-block"><p class="eyebrow">Mission</p><h2>Manage wealth more effectively.</h2><p>Help clients control investment risks and achieve sustainable long-term value growth through global perspectives, professional allocation, and technology-enabled wealth solutions.</p></article>
              <article class="statement-block gold"><p class="eyebrow">Vision</p><h2>Bridge traditional and digital finance.</h2><p>Build a globally influential integrated asset management platform spanning markets, asset classes, strategies, and economic cycles.</p></article>
            </div>
          </div>
        </section>
        <section class="inner-section">
          <div class="container">
            <div class="section-intro"><div><p class="eyebrow">Core philosophy</p><h2>Discipline over speculation.</h2></div><p>Sustainable wealth creation comes from research, strategic allocation, risk management, and the power of long-term compounding&mdash;not short-term market noise.</p></div>
            <div class="card-grid">
              <article class="info-card"><span class="info-number">01</span><h3>Long-term investing</h3><p>We assess economic cycles, industry structures, capital flows, and valuations with a multi-year perspective.</p><span class="card-tail">Conviction <b>→</b></span></article>
              <article class="info-card"><span class="info-number">02</span><h3>Professional excellence</h3><p>Specialized research and experienced judgment turn complex information into clear portfolio decisions.</p><span class="card-tail">Research <b>→</b></span></article>
              <article class="info-card"><span class="info-number">03</span><h3>Prudent management</h3><p>Risk awareness, transparency, liquidity, custody security, and compliance remain fundamental at every stage.</p><span class="card-tail">Responsibility <b>→</b></span></article>
            </div>
          </div>
        </section>`
    },
    "pt-BR": {
      index: "01 · Sobre a WeFortuneAsset",
      title: "Perspectiva global.<br><em>Convicção de longo prazo.</em>",
      lead: "Uma gestora de nova geração que conecta finanças tradicionais, ativos digitais, pesquisa profissional e gestão disciplinada de riscos.",
      html: `
        <section class="inner-section">
          <div class="container prose-grid">
            <div class="prose-label"><p class="eyebrow">Visão da empresa</p><strong>Preparada para um universo de investimentos mais conectado e complexo.</strong></div>
            <div class="prose-content">
              <p>A WeFortuneAsset é uma instituição profissional de gestão de ativos que atende clientes globais por meio de alocação diversificada, pesquisa de investimentos, estratégias em ativos digitais e consultoria patrimonial.</p>
              <p>Com sede nos Estados Unidos e conectada aos mercados globais, desenvolvemos soluções orientadas ao valor de longo prazo dentro de uma estrutura profissional, internacional e tecnológica. Nossas capacidades abrangem ações, renda fixa, imóveis, ouro, energia, capital privado, venture capital e ativos digitais.</p>
              <p>Atendemos principalmente empreendedores, organizações de patrimônio familiar, executivos de private equity, parceiros de venture capital, investidores profissionais e indivíduos de alto patrimônio. Cada relacionamento começa pelas prioridades específicas do cliente&mdash;da preservação de capital e diversificação global ao planejamento de liquidez e sucessão patrimonial.</p>
            </div>
          </div>
        </section>
        <section class="inner-section inner-section-dark">
          <div class="container">
            <div class="section-intro"><div><p class="eyebrow">O que nos orienta</p><h2>Propósito traduzido em prática.</h2></div><p>Nossa filosofia, missão e visão direcionam cada pesquisa, decisão de alocação e relacionamento com clientes.</p></div>
            <div class="statement-grid">
              <article class="statement-block"><p class="eyebrow">Missão</p><h2>Gerir patrimônio com mais eficiência.</h2><p>Ajudar clientes a controlar riscos e alcançar crescimento sustentável por meio de visão global, alocação profissional e soluções patrimoniais habilitadas por tecnologia.</p></article>
              <article class="statement-block gold"><p class="eyebrow">Visão</p><h2>Conectar finanças tradicionais e digitais.</h2><p>Construir uma plataforma integrada e globalmente relevante, abrangendo mercados, classes de ativos, estratégias e ciclos econômicos.</p></article>
            </div>
          </div>
        </section>
        <section class="inner-section">
          <div class="container">
            <div class="section-intro"><div><p class="eyebrow">Filosofia central</p><h2>Disciplina acima da especulação.</h2></div><p>A criação sustentável de patrimônio nasce da pesquisa, alocação estratégica, gestão de risco e força dos juros compostos&mdash;não do ruído de curto prazo.</p></div>
            <div class="card-grid">
              <article class="info-card"><span class="info-number">01</span><h3>Investimento de longo prazo</h3><p>Avaliamos ciclos econômicos, estruturas setoriais, fluxos de capital e valuations com horizonte plurianual.</p><span class="card-tail">Convicção <b>→</b></span></article>
              <article class="info-card"><span class="info-number">02</span><h3>Excelência profissional</h3><p>Pesquisa especializada e julgamento experiente transformam informação complexa em decisões claras.</p><span class="card-tail">Pesquisa <b>→</b></span></article>
              <article class="info-card"><span class="info-number">03</span><h3>Gestão prudente</h3><p>Risco, transparência, liquidez, custódia e conformidade são fundamentos em todas as etapas.</p><span class="card-tail">Responsabilidade <b>→</b></span></article>
            </div>
          </div>
        </section>`
    }
  },
  services: {
    "en-US": {
      index: "02 · Core Services",
      title: "Integrated capabilities.<br><em>One clear direction.</em>",
      lead: "A connected suite of investment, research, risk, and advisory capabilities designed around sophisticated wealth.",
      html: `
        <section class="inner-section"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Our capabilities</p><h2>From global markets to individual objectives.</h2></div><p>We integrate traditional and emerging assets within one disciplined framework, helping clients navigate multiple currencies, markets, strategies, and economic cycles.</p></div>
          <div class="card-grid">
            <article class="info-card"><span class="info-number">01</span><h3>Global Asset Allocation</h3><p>Customized portfolios across markets, currencies, regions, and asset classes based on objectives, liquidity, and risk tolerance.</p><span class="card-tail">Multi-asset <b>→</b></span></article>
            <article class="info-card"><span class="info-number">02</span><h3>Digital Asset Management</h3><p>Research-led exposure to blockchain infrastructure, tokenization, and digital finance with rigorous security and risk standards.</p><span class="card-tail">Digital finance <b>→</b></span></article>
            <article class="info-card"><span class="info-number">03</span><h3>Investment Research</h3><p>Global macro, industry, valuation, capital-flow, and emerging-technology research supporting informed decisions.</p><span class="card-tail">Intelligence <b>→</b></span></article>
            <article class="info-card"><span class="info-number">04</span><h3>Risk Management</h3><p>Integrated market, credit, liquidity, operational, custody, cybersecurity, and compliance risk assessment.</p><span class="card-tail">Resilience <b>→</b></span></article>
            <article class="info-card"><span class="info-number">05</span><h3>Wealth Advisory</h3><p>Long-term support for liquidity planning, family wealth, global diversification, protection, and succession.</p><span class="card-tail">Partnership <b>→</b></span></article>
            <article class="info-card"><span class="info-number">06</span><h3>Private Capital</h3><p>Evaluation of private equity, venture capital, infrastructure, and real asset opportunities across global markets.</p><span class="card-tail">Alternatives <b>→</b></span></article>
          </div>
        </div></section>
        <section class="inner-section inner-section-dark"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Asset universe</p><h2>Broad access. Selective execution.</h2></div><p>Our research capabilities cover complementary sources of return, protection, income, and long-term growth.</p></div>
          <div class="asset-grid">
            ${["Equities","Fixed Income","Real Estate","Gold","Energy & Oil","Private Equity","Venture Capital","Digital Assets"].map((x,i)=>`<div class="asset-item"><span class="asset-icon" aria-hidden="true">${assetIconSvgs[i]}</span><h3>${x}</h3></div>`).join("")}
          </div>
        </div></section>`
    },
    "pt-BR": {
      index: "02 · Serviços",
      title: "Capacidades integradas.<br><em>Uma direção clara.</em>",
      lead: "Um conjunto conectado de competências em investimento, pesquisa, risco e consultoria, desenvolvido para patrimônios sofisticados.",
      html: `
        <section class="inner-section"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Nossas capacidades</p><h2>Dos mercados globais aos objetivos individuais.</h2></div><p>Integramos ativos tradicionais e emergentes em uma estrutura disciplinada, ajudando clientes a navegar moedas, mercados, estratégias e ciclos econômicos.</p></div>
          <div class="card-grid">
            <article class="info-card"><span class="info-number">01</span><h3>Alocação Global de Ativos</h3><p>Portfólios personalizados entre mercados, moedas, regiões e classes de ativos, conforme objetivos, liquidez e tolerância a risco.</p><span class="card-tail">Multiativos <b>→</b></span></article>
            <article class="info-card"><span class="info-number">02</span><h3>Gestão de Ativos Digitais</h3><p>Exposição orientada por pesquisa a blockchain, tokenização e finanças digitais, com rigor em segurança e risco.</p><span class="card-tail">Finanças digitais <b>→</b></span></article>
            <article class="info-card"><span class="info-number">03</span><h3>Pesquisa de Investimentos</h3><p>Pesquisa macro, setorial, de valuation, fluxos de capital e tecnologias emergentes para decisões fundamentadas.</p><span class="card-tail">Inteligência <b>→</b></span></article>
            <article class="info-card"><span class="info-number">04</span><h3>Gestão de Riscos</h3><p>Avaliação integrada de risco de mercado, crédito, liquidez, operação, custódia, cibersegurança e compliance.</p><span class="card-tail">Resiliência <b>→</b></span></article>
            <article class="info-card"><span class="info-number">05</span><h3>Consultoria Patrimonial</h3><p>Suporte contínuo em liquidez, patrimônio familiar, diversificação global, proteção e sucessão.</p><span class="card-tail">Parceria <b>→</b></span></article>
            <article class="info-card"><span class="info-number">06</span><h3>Capital Privado</h3><p>Avaliação de private equity, venture capital, infraestrutura e ativos reais nos mercados globais.</p><span class="card-tail">Alternativos <b>→</b></span></article>
          </div>
        </div></section>
        <section class="inner-section inner-section-dark"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Universo de ativos</p><h2>Acesso amplo. Execução seletiva.</h2></div><p>Nossa pesquisa cobre fontes complementares de retorno, proteção, renda e crescimento de longo prazo.</p></div>
          <div class="asset-grid">
            ${["Ações","Renda Fixa","Imóveis","Ouro","Energia e Petróleo","Private Equity","Venture Capital","Ativos Digitais"].map((x,i)=>`<div class="asset-item"><span class="asset-icon" aria-hidden="true">${assetIconSvgs[i]}</span><h3>${x}</h3></div>`).join("")}
          </div>
        </div></section>`
    }
  },
  why: {
    "en-US": {
      index: "03 · Why Choose Us",
      title: "Professional judgment.<br><em>Built around trust.</em>",
      lead: "Global reach, integrated research, disciplined risk management, and a relationship model aligned with long-term client outcomes.",
      html: `
        <section class="inner-section"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Our difference</p><h2>Complexity managed with clarity.</h2></div><p>We combine the reach of a global platform with the attentiveness of a long-term partner.</p></div>
          <div class="card-grid">
            <article class="info-card"><span class="info-number">01</span><h3>Global by design</h3><p>Cross-market research and allocation capabilities connect opportunities across the Americas, Europe, Asia, and emerging regions.</p></article>
            <article class="info-card"><span class="info-number">02</span><h3>Traditional + digital</h3><p>One framework evaluates established financial assets alongside the evolving digital asset ecosystem.</p></article>
            <article class="info-card"><span class="info-number">03</span><h3>Research before action</h3><p>Macroeconomics, fundamentals, valuations, industry dynamics, and risk analysis guide every decision.</p></article>
            <article class="info-card"><span class="info-number">04</span><h3>Risk at the foundation</h3><p>Risk is assessed across the complete investment lifecycle?from selection and execution to custody and review.</p></article>
            <article class="info-card"><span class="info-number">05</span><h3>Customized around you</h3><p>Strategies reflect each client's objectives, capital structure, liquidity needs, horizon, and risk tolerance.</p></article>
            <article class="info-card"><span class="info-number">06</span><h3>Human judgment, enhanced</h3><p>Technology expands analytical capacity while experienced professionals remain accountable for decisions.</p></article>
          </div>
        </div></section>
        <section class="inner-section inner-section-dark"><div class="container prose-grid">
          <div class="prose-label"><p class="eyebrow">Long-term commitment</p><strong>We do not view investment management as a one-time transaction.</strong></div>
          <div class="prose-content" style="color:#aaa69f"><p>We build stable, trusted partnerships through regular portfolio reviews, market communication, risk assessment, objective management, and wealth planning support.</p><p>Exceptional asset management requires more than identifying opportunities. It requires rationality amid uncertainty, discipline during volatility, and responsibility throughout long-term development.</p></div>
        </div></section>`
    },
    "pt-BR": {
      index: "03 · Diferenciais",
      title: "Julgamento profissional.<br><em>Construído sobre confiança.</em>",
      lead: "Alcance global, pesquisa integrada, gestão disciplinada de riscos e um modelo de relacionamento alinhado aos resultados de longo prazo.",
      html: `
        <section class="inner-section"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Nossa diferença</p><h2>Complexidade gerida com clareza.</h2></div><p>Combinamos o alcance de uma plataforma global com a atenção de um parceiro de longo prazo.</p></div>
          <div class="card-grid">
            <article class="info-card"><span class="info-number">01</span><h3>Global por natureza</h3><p>Pesquisa e alocação conectam oportunidades nas Américas, Europa, Ásia e mercados emergentes.</p></article>
            <article class="info-card"><span class="info-number">02</span><h3>Tradicional + digital</h3><p>Uma única estrutura avalia ativos financeiros consolidados e o ecossistema digital em evolução.</p></article>
            <article class="info-card"><span class="info-number">03</span><h3>Pesquisa antes da ação</h3><p>Macroeconomia, fundamentos, valuations, dinâmica setorial e risco orientam cada decisão.</p></article>
            <article class="info-card"><span class="info-number">04</span><h3>Risco como fundamento</h3><p>O risco é avaliado durante todo o ciclo&mdash;da seleção e execução à custódia e revisão.</p></article>
            <article class="info-card"><span class="info-number">05</span><h3>Personalizado para você</h3><p>Estratégias refletem objetivos, estrutura de capital, liquidez, horizonte e tolerância a risco.</p></article>
            <article class="info-card"><span class="info-number">06</span><h3>Julgamento humano ampliado</h3><p>A tecnologia expande a análise, enquanto profissionais experientes respondem pelas decisões.</p></article>
          </div>
        </div></section>
        <section class="inner-section inner-section-dark"><div class="container prose-grid">
          <div class="prose-label"><p class="eyebrow">Compromisso duradouro</p><strong>Não vemos a gestão de investimentos como uma transação isolada.</strong></div>
          <div class="prose-content" style="color:#aaa69f"><p>Construímos relações estáveis por meio de revisões periódicas, comunicação de mercado, avaliação de risco, gestão de objetivos e planejamento patrimonial.</p><p>Uma gestão excepcional exige mais que identificar oportunidades. Exige racionalidade na incerteza, disciplina na volatilidade e responsabilidade no longo prazo.</p></div>
        </div></section>`
    }
  },
  approach: {
    "en-US": {
      index: "04 · Investment Approach",
      title: "Research-led.<br><em>Risk-aware. Adaptive.</em>",
      lead: "A repeatable investment process that connects global macro insight, fundamental research, strategic allocation, and continuous risk oversight.",
      html: `
        <section class="inner-section inner-section-gold"><div class="container">
          <div class="section-intro"><div><p class="eyebrow" style="color:#5f4c2a">Our process</p><h2>From insight to disciplined execution.</h2></div><p>Every mandate is guided by a transparent sequence designed to improve adaptability and resilience.</p></div>
          <div class="process-list">
            <article class="process-step"><strong>01</strong><h3>Define objectives</h3><p>Goals, horizon, liquidity, constraints, and risk tolerance.</p></article>
            <article class="process-step"><strong>02</strong><h3>Read the cycle</h3><p>Growth, inflation, monetary policy, valuations, and capital flows.</p></article>
            <article class="process-step"><strong>03</strong><h3>Construct</h3><p>Strategic diversification across assets, regions, and currencies.</p></article>
            <article class="process-step"><strong>04</strong><h3>Control risk</h3><p>Scenario analysis, liquidity review, exposure limits, and security.</p></article>
            <article class="process-step"><strong>05</strong><h3>Review & adapt</h3><p>Continuous monitoring, reporting, and disciplined rebalancing.</p></article>
          </div>
        </div></section>
        <section class="inner-section"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Portfolio construction</p><h2>Diversification with intention.</h2></div><p>We dynamically allocate across asset classes, geographies, investment horizons, and risk profiles to seek a stronger balance between stability and growth.</p></div>
          <div class="card-grid">
            <article class="info-card"><span class="info-number">A</span><h3>Strategic allocation</h3><p>Long-term portfolio anchors informed by client objectives and structural return drivers.</p></article>
            <article class="info-card"><span class="info-number">B</span><h3>Dynamic positioning</h3><p>Measured adjustments based on economic cycles, valuations, and changing risk conditions.</p></article>
            <article class="info-card"><span class="info-number">C</span><h3>Ongoing oversight</h3><p>Portfolio transparency, risk budgeting, liquidity management, and regular review.</p></article>
          </div>
        </div></section>
        <section class="inner-section inner-section-dark"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Digital asset discipline</p><h2>Innovation without abandoning fundamentals.</h2></div><p>We evaluate blockchain infrastructure, digital applications, decentralized finance, and tokenized real-world assets while remaining cautious about volatility, liquidity, custody, technology, and regulation.</p></div>
          <div class="pillars">
            <article class="pillar"><span>01</span><h3>Compliance</h3><p>Applicable regulation, investor suitability, and transparent operating standards.</p></article>
            <article class="pillar"><span>02</span><h3>Security</h3><p>Custody, counterparty, smart-contract, cybersecurity, and operational review.</p></article>
            <article class="pillar"><span>03</span><h3>Utility</h3><p>Focus on infrastructure, real applications, sustainable economics, and long-term relevance.</p></article>
          </div>
        </div></section>`
    },
    "pt-BR": {
      index: "04 · Abordagem de Investimento",
      title: "Guiada por pesquisa.<br><em>Atenta ao risco. Adaptável.</em>",
      lead: "Um processo consistente que conecta visão macro global, pesquisa fundamentalista, alocação estratégica e supervisão contínua de riscos.",
      html: `
        <section class="inner-section inner-section-gold"><div class="container">
          <div class="section-intro"><div><p class="eyebrow" style="color:#5f4c2a">Nosso processo</p><h2>Da análise à execução disciplinada.</h2></div><p>Cada mandato segue uma sequência transparente, criada para aumentar adaptabilidade e resiliência.</p></div>
          <div class="process-list">
            <article class="process-step"><strong>01</strong><h3>Definir objetivos</h3><p>Metas, horizonte, liquidez, restrições e tolerância a risco.</p></article>
            <article class="process-step"><strong>02</strong><h3>Ler o ciclo</h3><p>Crescimento, inflação, política monetária, valuations e fluxos.</p></article>
            <article class="process-step"><strong>03</strong><h3>Construir</h3><p>Diversificação estratégica entre ativos, regiões e moedas.</p></article>
            <article class="process-step"><strong>04</strong><h3>Controlar riscos</h3><p>Cenários, liquidez, limites de exposição e segurança.</p></article>
            <article class="process-step"><strong>05</strong><h3>Revisar e adaptar</h3><p>Monitoramento, relatórios e rebalanceamento disciplinado.</p></article>
          </div>
        </div></section>
        <section class="inner-section"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Construção de portfólio</p><h2>Diversificação com intenção.</h2></div><p>Alocamos dinamicamente entre classes, regiões, horizontes e perfis de risco para buscar equilíbrio entre estabilidade e crescimento.</p></div>
          <div class="card-grid">
            <article class="info-card"><span class="info-number">A</span><h3>Alocação estratégica</h3><p>Âncoras de longo prazo informadas pelos objetivos e vetores estruturais de retorno.</p></article>
            <article class="info-card"><span class="info-number">B</span><h3>Posicionamento dinâmico</h3><p>Ajustes medidos conforme ciclos econômicos, valuations e condições de risco.</p></article>
            <article class="info-card"><span class="info-number">C</span><h3>Supervisão contínua</h3><p>Transparência, orçamento de risco, gestão de liquidez e revisões periódicas.</p></article>
          </div>
        </div></section>
        <section class="inner-section inner-section-dark"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Disciplina em ativos digitais</p><h2>Inovação sem abandonar fundamentos.</h2></div><p>Avaliamos blockchain, aplicações digitais, finanças descentralizadas e ativos reais tokenizados, mantendo cautela com volatilidade, liquidez, custódia, tecnologia e regulação.</p></div>
          <div class="pillars">
            <article class="pillar"><span>01</span><h3>Compliance</h3><p>Regulação aplicável, adequação do investidor e padrões transparentes de operação.</p></article>
            <article class="pillar"><span>02</span><h3>Segurança</h3><p>Revisão de custódia, contraparte, contratos inteligentes, cibersegurança e operação.</p></article>
            <article class="pillar"><span>03</span><h3>Utilidade</h3><p>Foco em infraestrutura, aplicações reais, economia sustentável e relevância duradoura.</p></article>
          </div>
        </div></section>`
    }
  },
  global: {
    "en-US": {
      index: "05 · Global Strategy",
      title: "Across markets.<br><em>Through every cycle.</em>",
      lead: "A global strategy built to identify structural change, connect regional opportunity, and strengthen portfolios in an evolving world.",
      html: `
        <section class="inner-section"><div class="container prose-grid">
          <div class="prose-label"><p class="eyebrow">Market environment</p><strong>The investment landscape has changed structurally.</strong></div>
          <div class="prose-content"><p>Since 2020, supply chains, inflation, interest rates, energy systems, currencies, demographics, and global capital flows have undergone profound change. At the same time, artificial intelligence, blockchain, clean energy, digital finance, and advanced manufacturing are reshaping industries and valuation frameworks.</p><p>In this environment, relying on a single market, asset class, or strategy is no longer sufficient. Investors increasingly require cross-market, multi-currency, multi-strategy, and all-weather solutions supported by comprehensive research and risk management.</p></div>
        </div></section>
        <section class="inner-section inner-section-dark"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Regional perspective</p><h2>Global reach. Local context.</h2></div><p>We study each market through its economic structure, regulatory environment, demographic trends, industrial advantages, and capital dynamics.</p></div>
          <div class="region-grid">
            <article class="region-card"><small>AMERICAS</small><h3>Established depth, emerging momentum</h3><p>U.S. innovation and capital-market scale connected with the growth, resources, and digital adoption of Latin America.</p></article>
            <article class="region-card"><small>EUROPE</small><h3>Quality, transition, and discipline</h3><p>Industrial leadership, energy transformation, premium businesses, and sophisticated private markets.</p></article>
            <article class="region-card"><small>ASIA</small><h3>Technology and consumer scale</h3><p>Advanced manufacturing, digital ecosystems, expanding capital markets, and long-term consumption growth.</p></article>
            <article class="region-card"><small>MIDDLE EAST & EMERGING MARKETS</small><h3>Capital, infrastructure, and transformation</h3><p>Economic diversification, infrastructure investment, energy transition, and rapidly evolving financial centers.</p></article>
          </div>
        </div></section>
        <section class="inner-section"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Strategic pillars</p><h2>Five priorities for durable growth.</h2></div><p>Our development agenda strengthens the platform needed to serve increasingly international and sophisticated client needs.</p></div>
          <div class="pillars">
            <article class="pillar" style="border-color:var(--dark-line)"><span>01</span><h3>Globalization</h3><p>Regional partnerships, research coverage, and multicultural client service capabilities.</p></article>
            <article class="pillar" style="border-color:var(--dark-line)"><span>02</span><h3>Professionalization</h3><p>Specialized talent across research, allocation, risk, compliance, technology, and service.</p></article>
            <article class="pillar" style="border-color:var(--dark-line)"><span>03</span><h3>Technology</h3><p>AI, data analytics, blockchain, digital operations, and intelligent decision support.</p></article>
            <article class="pillar" style="border-color:var(--dark-line)"><span>04</span><h3>Compliance</h3><p>Governance, suitability, AML, data protection, custody, and jurisdiction-specific standards.</p></article>
            <article class="pillar" style="border-color:var(--dark-line)"><span>05</span><h3>Ecosystem</h3><p>Open partnerships with financial institutions, technology companies, and professional networks.</p></article>
          </div>
        </div></section>
        <section class="inner-section inner-section-gold"><div class="container">
          <div class="section-intro"><div><p class="eyebrow" style="color:#5f4c2a">Development roadmap</p><h2>From foundation to ecosystem.</h2></div><p>A staged path toward a distinctive global platform at the convergence of traditional and digital finance.</p></div>
          <div class="roadmap">
            <article class="roadmap-item"><small>PHASE 01</small><h3>Strengthen foundations</h3><p>Governance, research, risk, evaluation, client service, and digital operations.</p></article>
            <article class="roadmap-item"><small>PHASE 02</small><h3>Expand market presence</h3><p>International markets, investment solutions, institutional and client relationships.</p></article>
            <article class="roadmap-item"><small>PHASE 03</small><h3>Build the platform</h3><p>Integrate research, allocation, risk systems, technology, and client solutions.</p></article>
            <article class="roadmap-item"><small>PHASE 04</small><h3>Create the ecosystem</h3><p>Connect global capital, institutions, technology, and professional service networks.</p></article>
          </div>
        </div></section>`
    },
    "pt-BR": {
      index: "05 · Estratégia Global",
      title: "Entre mercados.<br><em>Ao longo de cada ciclo.</em>",
      lead: "Uma estratégia global criada para identificar mudanças estruturais, conectar oportunidades regionais e fortalecer portfólios em um mundo em evolução.",
      html: `
        <section class="inner-section"><div class="container prose-grid">
          <div class="prose-label"><p class="eyebrow">Ambiente de mercado</p><strong>O cenário de investimentos mudou estruturalmente.</strong></div>
          <div class="prose-content"><p>Desde 2020, cadeias de suprimentos, inflação, juros, sistemas de energia, moedas, demografia e fluxos globais passaram por mudanças profundas. Ao mesmo tempo, inteligência artificial, blockchain, energia limpa, finanças digitais e manufatura avançada transformam setores e modelos de valuation.</p><p>Nesse ambiente, depender de um único mercado, classe ou estratégia não é suficiente. Investidores demandam soluções entre mercados, moedas e estratégias, apoiadas por pesquisa abrangente e gestão de riscos.</p></div>
        </div></section>
        <section class="inner-section inner-section-dark"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Perspectiva regional</p><h2>Alcance global. Contexto local.</h2></div><p>Estudamos cada mercado por sua estrutura econômica, ambiente regulatório, demografia, vantagens industriais e dinâmica de capital.</p></div>
          <div class="region-grid">
            <article class="region-card"><small>AMÉRICAS</small><h3>Profundidade consolidada, novo impulso</h3><p>Inovação e escala dos EUA conectadas ao crescimento, recursos e adoção digital da América Latina.</p></article>
            <article class="region-card"><small>EUROPA</small><h3>Qualidade, transição e disciplina</h3><p>Liderança industrial, transição energética, empresas premium e mercados privados sofisticados.</p></article>
            <article class="region-card"><small>ÁSIA</small><h3>Tecnologia e escala de consumo</h3><p>Manufatura avançada, ecossistemas digitais, mercados de capitais e crescimento do consumo.</p></article>
            <article class="region-card"><small>ORIENTE MÉDIO E EMERGENTES</small><h3>Capital, infraestrutura e transformação</h3><p>Diversificação econômica, infraestrutura, transição energética e centros financeiros em evolução.</p></article>
          </div>
        </div></section>
        <section class="inner-section"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Pilares estratégicos</p><h2>Cinco prioridades para crescer com solidez.</h2></div><p>Nossa agenda fortalece a plataforma necessária para atender clientes cada vez mais internacionais e sofisticados.</p></div>
          <div class="pillars">
            <article class="pillar" style="border-color:var(--dark-line)"><span>01</span><h3>Globalização</h3><p>Parcerias regionais, cobertura de pesquisa e atendimento multicultural.</p></article>
            <article class="pillar" style="border-color:var(--dark-line)"><span>02</span><h3>Profissionalização</h3><p>Talentos especializados em pesquisa, alocação, risco, compliance, tecnologia e atendimento.</p></article>
            <article class="pillar" style="border-color:var(--dark-line)"><span>03</span><h3>Tecnologia</h3><p>IA, análise de dados, blockchain, operações digitais e suporte inteligente a decisões.</p></article>
            <article class="pillar" style="border-color:var(--dark-line)"><span>04</span><h3>Compliance</h3><p>Governança, suitability, AML, dados, custódia e normas de cada jurisdição.</p></article>
            <article class="pillar" style="border-color:var(--dark-line)"><span>05</span><h3>Ecossistema</h3><p>Parcerias abertas com instituições financeiras, tecnologia e redes profissionais.</p></article>
          </div>
        </div></section>
        <section class="inner-section inner-section-gold"><div class="container">
          <div class="section-intro"><div><p class="eyebrow" style="color:#5f4c2a">Roteiro de desenvolvimento</p><h2>Da fundação ao ecossistema.</h2></div><p>Uma jornada em etapas rumo a uma plataforma global na convergência das finanças tradicionais e digitais.</p></div>
          <div class="roadmap">
            <article class="roadmap-item"><small>FASE 01</small><h3>Fortalecer fundamentos</h3><p>Governança, pesquisa, risco, avaliação, atendimento e operações digitais.</p></article>
            <article class="roadmap-item"><small>FASE 02</small><h3>Expandir presença</h3><p>Mercados internacionais, soluções, relacionamentos institucionais e clientes.</p></article>
            <article class="roadmap-item"><small>FASE 03</small><h3>Construir a plataforma</h3><p>Integrar pesquisa, alocação, risco, tecnologia e soluções para clientes.</p></article>
            <article class="roadmap-item"><small>FASE 04</small><h3>Criar o ecossistema</h3><p>Conectar capital global, instituições, tecnologia e redes profissionais.</p></article>
          </div>
        </div></section>`
    }
  },
  team: {
    "en-US": {
      index: "06 · Management Team",
      title: "Global experience.<br><em>Shared discipline.</em>",
      lead: "Professionals across macro research, portfolio management, private capital, and international client service.",
      html: `
        <section class="inner-section"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Management Team</p><h2>Leadership Shaped by Long-Term Conviction.</h2></div><p>Led by Chairman Caldwell, our team combines global market experience, academic rigor, cross-border perspective, and disciplined long-term management.</p></div>
          <div class="team-grid">
            <article class="team-card"><div class="team-card-top"><div class="team-monogram">WC</div><div class="team-summary"><small>Chairman</small><h2>Wallace Sterling Caldwell</h2><p>Founder, global investment strategist, and long-term steward of WeFortuneAsset's international development.</p></div></div><details class="chairman-profile" open><summary>Complete Profile</summary><div class="team-bio chairman-bio"><div class="chairman-profile-content dynamic-chairman-profile">
              <div class="chairman-profile-lead"><h3>Investor, Strategist, and Long-Term Steward.</h3><div><p>Wallace Sterling Caldwell is an international investor with more than three decades of experience across economic research, investment banking, strategic investment, and global asset allocation. Caldwell's work has spanned the United States, Germany, Hong Kong, Brazil, and major financial markets across the Asia-Pacific region.</p><p>Caldwell's career has been shaped by financial-market research, corporate financing, cross-border capital operations, asset management, and long-term investment strategy. Across each phase, Caldwell has built a framework centered on macroeconomic cycles, disciplined risk management, data analysis, and sustainable asset allocation.</p><p>When facing opportunities, Caldwell first evaluates risk. When facing profits, Caldwell focuses on sustainability. When markets become volatile, Caldwell maintains rational judgment and long-term discipline.</p></div></div>
              <blockquote class="chairman-quote">&ldquo;The essence of prudent investing is not to stay ahead at every moment, but to retain control and flexibility throughout every market cycle.&rdquo;</blockquote>
              <div class="chairman-content-grid">
                <section class="chairman-content-block"><p class="leadership-subhead">Education</p><h3>Economics and Global Finance</h3><p><strong>1989&ndash;1993 &middot; Harvard University</strong><br>Studied Economics at Harvard University in the United States and obtained a Bachelor of Arts (B.A.) degree in Economics. During this period, Caldwell focused on financial markets, international economics, and capital operation mechanisms, laying a solid foundation for a future career in international investment.</p><p><strong>1993&ndash;1995 &middot; Master's Studies in Finance</strong><br>Continued pursuing a Master's degree in Finance, with research areas including investment management, corporate financing, and international capital flows. Caldwell gradually developed a research framework centered on macroeconomic cycles and asset allocation.</p></section>
                <section class="chairman-content-block"><p class="leadership-subhead">Professional Experience</p><h3>An International Career</h3><ul class="chairman-timeline"><li><strong>1996&ndash;1999</strong><span>Worked as a researcher at a university economic research center, focusing on financial markets, international trade, and macroeconomic policies. Caldwell participated in specialized research projects and academic studies, published several professional papers, and built extensive experience in financial and economic research, earning broad recognition within the industry.</span></li><li><strong>1999&ndash;2005</strong><span>Joined a leading international investment bank in the United States, where Caldwell's responsibilities included capital-market analysis, corporate financing, and investment management. Caldwell participated in numerous cross-border mergers and acquisitions, corporate restructuring projects, and large-scale investment initiatives. Through outstanding professional expertise and strong market judgment, Caldwell quickly advanced into the core business team and accumulated extensive practical experience in international finance.</span></li><li><strong>2005&ndash;2010</strong><span>Joined the strategic investment division of a globally renowned financial institution in Germany, responsible for European market research, risk assessment, and asset management. Caldwell participated in multiple multinational investment projects, further enhancing Caldwell's professional influence and expertise in global financial markets.</span></li><li><strong>2010&ndash;2015</strong><span>Served as a Senior Investment Advisor at the Hong Kong branch, primarily responsible for investment strategies in Asia-Pacific capital markets and cross-border investment operations. Caldwell participated in several large-scale multinational mergers and acquisitions and asset allocation projects, developed long-term investment strategies for clients, achieved steady asset growth, and established an international investment cooperation network covering major financial markets across Asia.</span></li></ul></section>
                <section class="chairman-content-block"><p class="leadership-subhead">2015&ndash;Present</p><h3>Founder and Chairman of WeFortuneAsset</h3><p>In 2015, Caldwell returned to the United States and founded <strong>WeFortuneAsset</strong>, serving as Chairman and taking full responsibility for the company's investment philosophy, risk management system, global strategic planning, and investment management operations.</p><p>With years of experience in international capital markets, the company has gradually established a global investment network covering North America, Europe, the Asia-Pacific region, and Latin America. Its business areas include asset management, corporate investment consulting, cross-border capital allocation, and strategic investments.</p><p>As the company expands its business into Latin America, Caldwell has maintained frequent travel between the United States and Brazil, conducting in-depth research into Brazil's economic structure, capital markets, and local business development opportunities. Brazil is regarded as a key component of the company's global strategic expansion. Currently, the company is actively advancing the establishment of its Brazilian branch and is committed to providing investors with more professional, systematic investment education and market research services through long-term local partnerships.</p></section>
                <section class="chairman-content-block"><p class="leadership-subhead">Investment Philosophy</p><h3>Data, Discipline, and Time</h3><p>Caldwell adheres to long-term value investing principles, emphasizing risk control, data analysis, and investment discipline. When facing opportunities, Caldwell first evaluates risks; when facing profits, Caldwell focuses more on sustainability; and when facing market volatility, Caldwell maintains rational judgment. Caldwell firmly believes in the power of data, discipline, and time.</p><p>To promote financial knowledge and investment education, <strong>WeFortuneAsset</strong> has launched a free investment learning community, focusing on financial fundamentals, risk management, asset allocation, and long-term investment principles through discussions and knowledge sharing.</p><p>The initiative aims to help participants improve their financial literacy, develop rational and prudent long-term investment perspectives, and collectively build a healthier and more mature investment ecosystem.</p><div class="chairman-certifications"><span>CFP</span><span>CPA</span><span>FRM</span><span>CFA</span><span>CAIA</span><span>CVA</span></div></section>
              </div>
            </div></div></details></article>
            <article class="team-card"><div class="team-card-top"><div class="team-monogram">EW</div><div class="team-summary"><small>Executive Assistant</small><h2>Elise Marlowe Winslow</h2><p>International client service, cross-border coordination, research support, and operational management.</p></div></div><details><summary>View profile</summary><div class="team-bio"><p>Elise Winslow began her career in Hong Kong supporting cross-border financial planning and client relationships for international families and U.S.-based clients.</p><p>At WeFortuneAsset, she supports administrative operations, client communication, credit due diligence, macroeconomic research, and project coordination. She is a CFA® charterholder.</p></div></details></article>
            <article class="team-card"><div class="team-card-top"><div class="team-monogram">AF</div><div class="team-summary"><small>Senior Equity Fund Manager</small><h2>Adeline Rowan Fairchild</h2><p>Equity research, portfolio management, institutional allocation, and capital-markets strategy.</p></div></div><details><summary>View profile</summary><div class="team-bio"><p>An MBA graduate of the Wharton School, Adeline built her career across financial analysis, investment management, and institutional portfolio leadership.</p><p>Her experience spans roles at JPMorgan Chase, Citigroup, and BlackRock before joining WeFortuneAsset as a shareholder and senior investment professional.</p></div></details></article>
            <article class="team-card"><div class="team-card-top"><div class="team-monogram">EH</div><div class="team-summary"><small>Global Head of Private Capital</small><h2>Elias Holtwick</h2><p>Private equity, corporate valuation, due diligence, and global strategic capital allocation.</p></div></div><details><summary>View profile</summary><div class="team-bio"><p>Elias studied Economics at Harvard University and earned a Master's degree in Finance from MIT. He began his career evaluating private equity opportunities at Bain Capital.</p><p>He now leads WeFortuneAsset's global private capital strategy and institutional relationships.</p></div></details></article>
            <article class="team-card"><div class="team-card-top"><div class="team-monogram">LA</div><div class="team-summary"><small>Senior Portfolio Manager</small><h2>Leon Avelcroft</h2><p>Multi-asset allocation, securities research, risk budgeting, and cross-border portfolio management.</p></div></div><details><summary>View profile</summary><div class="team-bio"><p>Leon brings more than ten years of European asset-management and private-banking experience. He studied Economics at Goethe University Frankfurt and Finance at Frankfurt School.</p><p>He constructs global portfolios for high-net-worth and institutional clients across equities, fixed income, and multi-asset strategies.</p></div></details></article>
          </div>
        </div></section>`
    },
    "pt-BR": {
      index: "06 · Equipe de Gestão",
      title: "Experiência global.<br><em>Disciplina compartilhada.</em>",
      lead: "Profissionais com experiência em pesquisa macroeconômica, gestão de portfólio, capital privado e atendimento internacional.",
      html: `
        <section class="inner-section"><div class="container">
          <div class="section-intro"><div><p class="eyebrow">Equipe de Gestão</p><h2>Liderança Orientada por Convicção de Longo Prazo.</h2></div><p>Liderada pelo Presidente Caldwell, nossa equipe combina experiência em mercados globais, rigor acadêmico, perspectiva internacional e gestão disciplinada de longo prazo.</p></div>
          <div class="team-grid">
            <article class="team-card"><div class="team-card-top"><div class="team-monogram">WC</div><div class="team-summary"><small>Presidente</small><h2>Wallace Sterling Caldwell</h2><p>Fundador, estrategista global de investimentos e respons&aacute;vel pela vis&atilde;o de longo prazo da expans&atilde;o internacional da WeFortuneAsset.</p></div></div><details class="chairman-profile" open><summary>Perfil Completo</summary><div class="team-bio chairman-bio"><div class="chairman-profile-content dynamic-chairman-profile">
              <div class="chairman-profile-lead"><h3>Investidor, Estrategista e Guardi&atilde;o de Longo Prazo.</h3><div><p>Wallace Sterling Caldwell &eacute; um investidor internacional com mais de tr&ecirc;s d&eacute;cadas de experi&ecirc;ncia em pesquisa econ&ocirc;mica, banco de investimento, investimento estrat&eacute;gico e aloca&ccedil;&atilde;o global de ativos. A trajet&oacute;ria de Caldwell inclui atua&ccedil;&atilde;o nos Estados Unidos, na Alemanha, em Hong Kong, no Brasil e em importantes mercados financeiros da regi&atilde;o &Aacute;sia-Pac&iacute;fico.</p><p>A carreira de Caldwell foi constru&iacute;da sobre pesquisa de mercados financeiros, financiamento corporativo, opera&ccedil;&otilde;es internacionais de capital, gest&atilde;o de ativos e estrat&eacute;gia de investimento de longo prazo. Em cada etapa, Caldwell desenvolveu uma estrutura de an&aacute;lise centrada em ciclos macroecon&ocirc;micos, gest&atilde;o disciplinada de riscos, an&aacute;lise de dados e aloca&ccedil;&atilde;o sustent&aacute;vel de ativos.</p><p>Diante de oportunidades, Caldwell avalia primeiro os riscos. Diante de lucros, prioriza a sustentabilidade. Em per&iacute;odos de volatilidade, Caldwell preserva julgamento racional e disciplina de longo prazo.</p></div></div>
              <blockquote class="chairman-quote">&ldquo;A ess&ecirc;ncia do investimento prudente n&atilde;o &eacute; estar &agrave; frente em todos os momentos, mas preservar controle e flexibilidade ao longo de cada ciclo de mercado.&rdquo;</blockquote>
              <div class="chairman-content-grid">
                <section class="chairman-content-block"><p class="leadership-subhead">Forma&ccedil;&atilde;o</p><h3>Economia e Finan&ccedil;as Globais</h3><p><strong>1989&ndash;1993 &middot; Harvard University</strong><br>Estudou Economia na Harvard University, nos Estados Unidos, e obteve o t&iacute;tulo de Bachelor of Arts (B.A.) em Economia. Nesse per&iacute;odo, Caldwell concentrou seus estudos em mercados financeiros, economia internacional e mecanismos de opera&ccedil;&atilde;o de capital, construindo uma base s&oacute;lida para a carreira futura em investimentos internacionais.</p><p><strong>1993&ndash;1995 &middot; Mestrado em Finan&ccedil;as</strong><br>Prosseguiu os estudos em n&iacute;vel de mestrado em Finan&ccedil;as, com &aacute;reas de pesquisa em gest&atilde;o de investimentos, financiamento corporativo e fluxos internacionais de capital. Gradualmente, Caldwell desenvolveu uma estrutura de pesquisa centrada em ciclos macroecon&ocirc;micos e aloca&ccedil;&atilde;o de ativos.</p></section>
                <section class="chairman-content-block"><p class="leadership-subhead">Experi&ecirc;ncia Profissional</p><h3>Uma Carreira Internacional</h3><ul class="chairman-timeline"><li><strong>1996&ndash;1999</strong><span>Atuou como pesquisador em um centro universit&aacute;rio de pesquisa econ&ocirc;mica, com foco em mercados financeiros, com&eacute;rcio internacional e pol&iacute;ticas macroecon&ocirc;micas. Caldwell participou de diversos projetos especializados e estudos acad&ecirc;micos, publicou v&aacute;rios artigos profissionais e acumulou ampla experi&ecirc;ncia em pesquisa financeira e econ&ocirc;mica, conquistando amplo reconhecimento no setor.</span></li><li><strong>1999&ndash;2005</strong><span>Ingressou em um importante banco de investimento internacional nos Estados Unidos, com responsabilidades em an&aacute;lise de mercados de capitais, financiamento corporativo e gest&atilde;o de investimentos. Caldwell participou de numerosas fus&otilde;es e aquisi&ccedil;&otilde;es internacionais, reestrutura&ccedil;&otilde;es corporativas e grandes iniciativas de investimento. Com s&oacute;lida compet&ecirc;ncia profissional e forte capacidade de leitura de mercado, avan&ccedil;ou rapidamente para a equipe central de neg&oacute;cios e acumulou ampla experi&ecirc;ncia pr&aacute;tica em finan&ccedil;as internacionais.</span></li><li><strong>2005&ndash;2010</strong><span>Ingressou na divis&atilde;o de investimento estrat&eacute;gico de uma institui&ccedil;&atilde;o financeira globalmente reconhecida na Alemanha, respons&aacute;vel por pesquisa do mercado europeu, avalia&ccedil;&atilde;o de riscos e gest&atilde;o de ativos. Caldwell participou de diversos projetos multinacionais de investimento, ampliando a influ&ecirc;ncia profissional e a especializa&ccedil;&atilde;o de Caldwell nos mercados financeiros globais.</span></li><li><strong>2010&ndash;2015</strong><span>Atuou como Consultor S&ecirc;nior de Investimentos na filial de Hong Kong, principalmente respons&aacute;vel por estrat&eacute;gias de investimento para os mercados de capitais da &Aacute;sia-Pac&iacute;fico e por opera&ccedil;&otilde;es internacionais de investimento. Caldwell participou de v&aacute;rios projetos multinacionais de fus&otilde;es e aquisi&ccedil;&otilde;es e de aloca&ccedil;&atilde;o de ativos, Caldwell desenvolveu estrat&eacute;gias de longo prazo para clientes, alcan&ccedil;ou crescimento est&aacute;vel de ativos e estabeleceu uma rede internacional de coopera&ccedil;&atilde;o em investimentos nos principais mercados financeiros da &Aacute;sia.</span></li></ul></section>
                <section class="chairman-content-block"><p class="leadership-subhead">2015&ndash;Presente</p><h3>Fundador e Presidente da WeFortuneAsset</h3><p>Em 2015, Caldwell retornou aos Estados Unidos e fundou a <strong>WeFortuneAsset</strong>, assumindo a Presid&ecirc;ncia e a responsabilidade integral pela filosofia de investimentos, pelo sistema de gest&atilde;o de riscos, pelo planejamento estrat&eacute;gico global e pelas opera&ccedil;&otilde;es de gest&atilde;o de investimentos da empresa.</p><p>Com anos de experi&ecirc;ncia nos mercados internacionais de capitais, a empresa estabeleceu gradualmente uma rede global de investimentos que abrange Am&eacute;rica do Norte, Europa, &Aacute;sia-Pac&iacute;fico e Am&eacute;rica Latina. Suas &aacute;reas de atua&ccedil;&atilde;o incluem gest&atilde;o de ativos, consultoria de investimentos corporativos, aloca&ccedil;&atilde;o internacional de capital e investimentos estrat&eacute;gicos.</p><p>Com a expans&atilde;o dos neg&oacute;cios para a Am&eacute;rica Latina, Caldwell mant&eacute;m viagens frequentes entre os Estados Unidos e o Brasil, realizando pesquisas aprofundadas sobre a estrutura econ&ocirc;mica brasileira, os mercados de capitais e as oportunidades locais de desenvolvimento empresarial. O Brasil &eacute; considerado uma pe&ccedil;a-chave da expans&atilde;o estrat&eacute;gica global da empresa. Atualmente, a companhia avan&ccedil;a ativamente na cria&ccedil;&atilde;o de sua filial brasileira e est&aacute; comprometida em oferecer aos investidores servi&ccedil;os mais profissionais e sistem&aacute;ticos de educa&ccedil;&atilde;o financeira e pesquisa de mercado por meio de parcerias locais de longo prazo.</p></section>
                <section class="chairman-content-block"><p class="leadership-subhead">Filosofia de Investimento</p><h3>Dados, Disciplina e Tempo</h3><p>Caldwell segue princ&iacute;pios de investimento em valor de longo prazo, com &ecirc;nfase em controle de riscos, an&aacute;lise de dados e disciplina de investimento. Diante de oportunidades, avalia primeiro os riscos; diante de lucros, observa sobretudo a sustentabilidade; e, diante da volatilidade do mercado, Caldwell mant&eacute;m julgamento racional. Caldwell acredita firmemente no poder dos dados, da disciplina e do tempo.</p><p>Para promover conhecimento financeiro e educa&ccedil;&atilde;o em investimentos, a <strong>WeFortuneAsset</strong> lan&ccedil;ou uma comunidade gratuita de aprendizagem em investimentos, focada em fundamentos financeiros, gest&atilde;o de riscos, aloca&ccedil;&atilde;o de ativos e princ&iacute;pios de investimento de longo prazo por meio de discuss&otilde;es e compartilhamento de conhecimento.</p><p>A iniciativa busca ajudar os participantes a ampliar sua educa&ccedil;&atilde;o financeira, desenvolver perspectivas racionais e prudentes de investimento de longo prazo e construir coletivamente um ecossistema de investimentos mais saud&aacute;vel e maduro.</p><div class="chairman-certifications"><span>CFP</span><span>CPA</span><span>FRM</span><span>CFA</span><span>CAIA</span><span>CVA</span></div></section>
              </div>
            </div></div></details></article>
            <article class="team-card"><div class="team-card-top"><div class="team-monogram">EW</div><div class="team-summary"><small>Assistente Executiva</small><h2>Elise Marlowe Winslow</h2><p>Atendimento internacional, coordenação transfronteiriça, suporte à pesquisa e gestão operacional.</p></div></div><details><summary>Ver perfil</summary><div class="team-bio"><p>Elise iniciou a carreira em Hong Kong, apoiando planejamento financeiro internacional e relacionamento com famílias globais e clientes norte-americanos.</p><p>Na WeFortuneAsset, apoia operações administrativas, comunicação, due diligence de crédito, pesquisa macro e projetos. É CFA® charterholder.</p></div></details></article>
            <article class="team-card"><div class="team-card-top"><div class="team-monogram">AF</div><div class="team-summary"><small>Gestor Sênior de Ações</small><h2>Adeline Rowan Fairchild</h2><p>Pesquisa de ações, gestão de portfólio, alocação institucional e estratégia de mercados.</p></div></div><details><summary>Ver perfil</summary><div class="team-bio"><p>MBA pela Wharton School, Adeline construiu carreira em análise financeira, gestão de investimentos e liderança de portfólios institucionais.</p><p>Passou por JPMorgan Chase, Citigroup e BlackRock antes de ingressar na WeFortuneAsset como acionista e profissional sênior.</p></div></details></article>
            <article class="team-card"><div class="team-card-top"><div class="team-monogram">EH</div><div class="team-summary"><small>Head Global de Capital Privado</small><h2>Elias Holtwick</h2><p>Private equity, valuation, due diligence e alocação estratégica de capital.</p></div></div><details><summary>Ver perfil</summary><div class="team-bio"><p>Elias estudou Economia em Harvard e concluiu mestrado em Finanças no MIT. Iniciou a carreira avaliando oportunidades de private equity na Bain Capital.</p><p>Hoje lidera a estratégia global de capital privado e os relacionamentos institucionais da WeFortuneAsset.</p></div></details></article>
            <article class="team-card"><div class="team-card-top"><div class="team-monogram">LA</div><div class="team-summary"><small>Gestor Sênior de Portfólio</small><h2>Leon Avelcroft</h2><p>Alocação multiativos, pesquisa, orçamento de risco e gestão internacional de portfólio.</p></div></div><details><summary>Ver perfil</summary><div class="team-bio"><p>Leon reúne mais de dez anos em gestão de ativos e private banking na Europa. Estudou Economia na Goethe University Frankfurt e Finanças na Frankfurt School.</p><p>Constrói portfólios globais para clientes de alto patrimônio e institucionais em ações, renda fixa e estratégias multiativos.</p></div></details></article>
          </div>
        </div></section>`
    }
  },
  contact: {
    "en-US": {
      index: "07 · Contact Us",
      title: "A conversation can<br><em>shape what comes next.</em>",
      lead: "Tell us about your priorities, investment horizon, and the questions that matter to you.",
      html: `
        <section class="inner-section"><div class="container contact-layout">
          <div class="contact-details">
            <div><p class="eyebrow">Connect with us</p><h2 style="font-size:42px;font-weight:400;letter-spacing:-.04em;line-height:1.15">Global perspective.<br>Personal attention.</h2></div>
            <div class="contact-detail"><small>Email</small><a href="mailto:contact@wefortuneasset.com">contact@wefortuneasset.com</a></div>
            <div class="contact-detail"><small>Telegram</small><a href="https://t.me/share/url?url=%2B551140404040">+55 11 4040 4040</a></div>
            <div class="contact-detail"><small>San Francisco</small><p>1528 Franklin St<br>San Francisco, California</p></div>
            <div class="contact-detail"><small>Client profile</small><p>Entrepreneurs, family offices, professional investors, high-net-worth families, and institutional partners.</p></div>
          </div>
          <aside class="contact-panel">
            <p class="eyebrow">A personal relationship</p>
            <h2>Start with a private conversation.</h2>
            <p>Whether you are considering global diversification, family wealth planning, private capital, or an institutional partnership, our team will connect you with the appropriate professional.</p>
            <div class="contact-panel-actions">
              <a class="button button-gold" href="mailto:contact@wefortuneasset.com">Email our team →</a>
            </div>
            <div class="contact-panel-note"><span>Response standard</span><strong>Within two business days</strong></div>
          </aside>
        </div></section>`
    },
    "pt-BR": {
      index: "07 · Contato",
      title: "Uma conversa pode<br><em>definir o próximo passo.</em>",
      lead: "Conte-nos sobre suas prioridades, horizonte de investimento e as questões que mais importam para você.",
      html: `
        <section class="inner-section"><div class="container contact-layout">
          <div class="contact-details">
            <div><p class="eyebrow">Conecte-se conosco</p><h2 style="font-size:42px;font-weight:400;letter-spacing:-.04em;line-height:1.15">Perspectiva global.<br>Atenção pessoal.</h2></div>
            <div class="contact-detail"><small>E-mail</small><a href="mailto:contato@wefortuneasset.com">contato@wefortuneasset.com</a></div>
            <div class="contact-detail"><small>Telegram</small><a href="https://t.me/share/url?url=%2B551140404040">+55 11 4040 4040</a></div>
            <div class="contact-detail"><small>San Francisco</small><p>1528 Franklin St<br>San Francisco, California</p></div>
            <div class="contact-detail"><small>Perfil de clientes</small><p>Empreendedores, family offices, investidores profissionais, famílias de alto patrimônio e parceiros institucionais.</p></div>
          </div>
          <aside class="contact-panel">
            <p class="eyebrow">Um relacionamento pessoal</p>
            <h2>Comece com uma conversa privada.</h2>
            <p>Seja para diversificação global, planejamento patrimonial familiar, capital privado ou parceria institucional, nossa equipe conectará você ao profissional adequado.</p>
            <div class="contact-panel-actions">
              <a class="button button-gold" href="mailto:contato@wefortuneasset.com">Enviar e-mail →</a>
            </div>
            <div class="contact-panel-note"><span>Prazo de resposta</span><strong>Em até dois dias úteis</strong></div>
          </aside>
        </div></section>`
    }
  }
};

let innerLanguage = document.body.dataset.language || localStorage.getItem("wefortune-language") || "pt-BR";
const currentPage = document.body.dataset.page;

function localizedInnerHref(href, language = innerLanguage) {
  if (!document.body.dataset.language) return href;
  const directory = language === "pt-BR" ? "pt-br" : "en-us";
  return `../${directory}/${href}`;
}

const innerTitleCaseSmallWords = new Set([
  "a", "an", "and", "as", "at", "but", "by", "for", "from", "in",
  "into", "nor", "of", "on", "or", "over", "per", "the", "to",
  "via", "with", "vs"
]);

function titleCaseInnerHeading(element) {
  const textNodes = [];
  const collect = (node) => {
    node.childNodes.forEach((child) => {
      if (child.nodeType === 3) textNodes.push(child);
      else collect(child);
    });
  };
  collect(element);

  const wordPattern = /[A-Za-z]+(?:'[A-Za-z]+)?/g;
  const totalWords = textNodes.reduce(
    (total, node) => total + (node.nodeValue.match(wordPattern)?.length || 0),
    0
  );
  let wordIndex = 0;

  textNodes.forEach((node) => {
    node.nodeValue = node.nodeValue.replace(wordPattern, (word) => {
      const currentIndex = wordIndex++;
      const lower = word.toLowerCase();
      if (/[A-Z].*[A-Z]/.test(word)) return word;
      if (
        currentIndex !== 0 &&
        currentIndex !== totalWords - 1 &&
        innerTitleCaseSmallWords.has(lower)
      ) {
        return lower;
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    });
  });
}

function applyInnerEnglishTitleCase() {
  if (innerLanguage !== "en-US") return;
  document.querySelectorAll("#page-content h1, #page-content h2, #shared-footer h2")
    .forEach(titleCaseInnerHeading);
}

function headerMarkup(lang) {
  const copy = sharedCopy[lang];
  const isPt = lang === "pt-BR";
  const links = innerNav.map(([href, en, pt, key]) =>
    `<a class="${key === currentPage ? "active" : ""}" href="${localizedInnerHref(href, lang)}">${isPt ? pt : en}</a>`
  ).join("");

  return `
    <header class="site-header">
      <div class="utility-bar"><div class="container utility-inner"><p>${copy.utility}</p><nav><a href="${localizedInnerHref("services.html", lang)}">${copy.docs}</a><a href="${localizedInnerHref("contact.html", lang)}">${copy.contact}</a></nav></div></div>
      <div class="main-nav"><div class="container nav-inner">
        <a class="brand" href="${localizedInnerHref("index.html", lang)}" aria-label="WeFortuneAsset home">
          <svg class="brand-mark" viewBox="0 0 44 44" aria-hidden="true"><path d="M5 11.5 12.2 34h6.5l3.4-10.3L25.6 34h6.2L39 11.5h-7l-3.7 13.8-3.5-10.8h-5.2l-3.7 10.8-3.8-13.8Z"/><path class="mark-accent" d="M5 6h34v3H5z"/></svg>
          <span class="brand-type">WeFortune<span>Asset</span></span>
        </a>
        <nav class="desktop-nav multi-page-nav" aria-label="Primary navigation">${links}</nav>
        <div class="nav-actions">
          <button class="language-toggle" type="button" aria-label="Change language"><span class="active-lang">${isPt ? "PT" : "EN"}</span><span class="toggle-divider"></span><span class="inactive-lang">${isPt ? "EN" : "PT"}</span></button>
          <button class="menu-toggle" type="button" aria-label="${copy.menu}" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
      </div></div>
      <div class="mobile-menu" aria-hidden="true"><nav>${links}</nav></div>
    </header>`;
}

function footerMarkup(lang) {
  const copy = sharedCopy[lang];
  const isPt = lang === "pt-BR";
  return `
    <section class="inner-cta"><div class="container"><h2>${copy.cta}</h2><a class="button" href="${localizedInnerHref("contact.html", lang)}">${copy.ctaButton} →</a></div></section>
    <footer class="footer"><div class="container footer-top">
      <div class="footer-brand"><a class="brand brand-light" href="${localizedInnerHref("index.html", lang)}"><svg class="brand-mark" viewBox="0 0 44 44" aria-hidden="true"><path d="M5 11.5 12.2 34h6.5l3.4-10.3L25.6 34h6.2L39 11.5h-7l-3.7 13.8-3.5-10.8h-5.2l-3.7 10.8-3.8-13.8Z"/><path class="mark-accent" d="M5 6h34v3H5z"/></svg><span class="brand-type">WeFortune<span>Asset</span></span></a><p>${copy.footerLine}</p></div>
      <div class="footer-col"><h3>${copy.company}</h3><a href="${localizedInnerHref("about.html", lang)}">${isPt ? "Sobre nós" : "About Us"}</a><a href="${localizedInnerHref("why-us.html", lang)}">${isPt ? "Diferenciais" : "Why Choose Us"}</a><a href="${localizedInnerHref("team.html", lang)}">${isPt ? "Equipe" : "Management Team"}</a></div>
      <div class="footer-col"><h3>${copy.services}</h3><a href="${localizedInnerHref("services.html", lang)}">${isPt ? "Serviços" : "Core Services"}</a><a href="${localizedInnerHref("approach.html", lang)}">${isPt ? "Abordagem" : "Investment Approach"}</a><a href="${localizedInnerHref("global-strategy.html", lang)}">${isPt ? "Estratégia global" : "Global Strategy"}</a></div>
      <div class="footer-col footer-contact"><h3>${copy.contact}</h3><a href="mailto:contact@wefortuneasset.com">contact@wefortuneasset.com</a><p>${isPt ? "Estados Unidos<br>Atendimento a clientes globais" : "United States<br>Serving clients globally"}</p></div>
    </div><div class="container footer-bottom"><p>© 2026 WeFortuneAsset. ${copy.rights}</p></div></footer>`;
}

function bindInnerInteractions() {
  const langButton = document.querySelector(".language-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  langButton?.addEventListener("click", () => {
    const targetLanguage = innerLanguage === "pt-BR" ? "en-US" : "pt-BR";
    if (document.body.dataset.language) {
      const fileName = `${currentPage === "home" ? "index" : currentPage}.html`;
      window.location.href = localizedInnerHref(fileName, targetLanguage);
      return;
    }
    innerLanguage = targetLanguage;
    localStorage.setItem("wefortune-language", innerLanguage);
    renderInnerPage();
  });

  menuButton?.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    menuButton.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
  });

}

function renderInnerPage() {
  const data = pageData[currentPage]?.[innerLanguage];
  if (!data) return;
  document.documentElement.lang = innerLanguage;
  const isLocalizedStaticPage = Boolean(document.body.dataset.language);
  if (!isLocalizedStaticPage) {
    document.title = `${data.title.replace(/<[^>]+>/g, "").replace(/\s+/g, " ")} -WeFortuneAsset`;
    document.querySelector("#shared-header").innerHTML = headerMarkup(innerLanguage);
    document.querySelector("#page-content").innerHTML = `
      <section class="page-hero"><div class="container page-hero-inner"><div class="page-hero-copy"><span class="page-index">${data.index}</span><h1>${data.title}</h1><p class="page-hero-lead">${data.lead}</p></div><div class="page-hero-art" aria-hidden="true"><span></span></div></div></section>
      ${data.html}`;
    document.querySelector("#shared-footer").innerHTML = footerMarkup(innerLanguage);
  }
  applyInnerEnglishTitleCase();
  document.body.classList.remove("menu-open");
  bindInnerInteractions();
}

renderInnerPage();


const VIDEOS = [
  { titulo: 'Algoritmos',                                        id: 'UEBXAxmjBMY' },
  { titulo: 'Operadores, Tipos e Variáveis',                     id: 'XLn60EOvSqs' },
  { titulo: 'Operadores, Tipos e Variáveis — Resolvendo Exercícios', id: 'VLIf3tyuhCE' },
  { titulo: 'Instalação do Node.js no Windows',                  id: 'YyMBeDmxoBI' },
  { titulo: 'Instalação do Node.js no Linux',                    id: '1tbverb40U8' },
  { titulo: 'Execução Condicional',                              id: 's35H9_vJ2N8' },
  { titulo: 'Execução Condicional — Resolvendo Exercícios',      id: 'z1gSDmYIbUw' },
  { titulo: 'Operadores Lógicos',                                id: 'TKLrr0--elc' },
  { titulo: 'Operadores Lógicos — Exercícios',                   id: 'VCtAt_0r50o' },
  { titulo: 'Laços',                                             id: '-tiTSUWUi1w' },
  { titulo: 'Laços — Resolvendo Exercícios',                     id: 'tVr7E7Xpyxo' },
  { titulo: 'Subprogramas',                                      id: 'Rxl4htf9Y0s' },
  { titulo: 'Subprogramas — Resolvendo Exercícios',              id: 'BrySkVEOFww' },
]

const TOPICOS = [
  { chave: 'variaveis',    num: '01', nome: 'Variáveis',         desc: 'let e const' },
  { chave: 'tipagem',      num: '02', nome: 'Tipagem',           desc: 'string, number, boolean...' },
  { chave: 'algoritmo',    num: '03', nome: 'Algoritmo',         desc: 'lógica e tipos de dados' },
  { chave: 'operadores',   num: '04', nome: 'Operadores',        desc: 'arimt., relac. e lógicos' },
  { chave: 'condicionais', num: '05', nome: 'Condicionais',      desc: 'if, else, switch' },
  { chave: 'repeticao',    num: '06', nome: 'Repetição',         desc: 'for, while, do...while' },
  { chave: 'arrays',       num: '07', nome: 'Arrays',            desc: 'vetores e métodos' },
  { chave: 'matrizes',     num: '08', nome: 'Matrizes',          desc: 'arrays bidimensionais' },
  { chave: 'funcoes',      num: '09', nome: 'Funções',           desc: 'subprogramas e retorno' },
  { chave: 'strings',      num: '10', nome: 'Strings',           desc: 'manipulação de textos' },
  { chave: 'classes',      num: '11', nome: 'Classes',           desc: 'objetos e herança' },
  { chave: 'imperativo',   num: '12', nome: 'Paradigma',         desc: 'lógica imperativa' },
]

export function renderHome(container, _secoes, navegar) {
  container.innerHTML = `

    <!-- ═══ HERO ════════════════════════════════════════════ -->
    <section class="home-hero">
      <div class="hero-badge">// Fundamentos da Programação</div>
      <h1 class="hero-titulo">CodeLogic</h1>
      <p class="hero-descricao">
        Esse projeto é um guia completo e interativo dos fundamentos da
        programação usando <strong>TypeScript</strong> — com exemplos em três níveis
        de dificuldade, do zero ao avançado.
      </p>
      <p class="hero-sub">
      Desenvolvido por Karolayne Firmino S. L. - IPI (IFPE)       
      </p>
      <div class="hero-cta-grid">
        <button class="btn-primario" id="btn-comecar">▶ Começar agora</button>
        <a class="btn-secundario" href="#videos-section">🎬 Ver videoaulas</a>
      </div>
    </section>

    <!-- ═══ BENEFÍCIOS ════════════════════════════════════════ -->
    <section class="home-beneficios">
      <div class="home-secao-label">// Por que estudar aqui?</div>
      <h2 class="home-secao-titulo">Como este projeto pode te ajudar</h2>
      <p class="home-secao-sub">
        Lógica de programação é a base de tudo. Sem ela, aprender qualquer linguagem
        é como construir uma casa sem alicerce. Este guia foi feito para fixar
        os conceitos de forma prática e progressiva.
      </p>
      <div class="beneficios-grid">
        <div class="beneficio-card">
          <div class="beneficio-icone">🎯</div>
          <div class="beneficio-titulo">Aprendizado progressivo</div>
          <p class="beneficio-texto">
            Cada tópico tem três níveis: Simples, Médio e Avançado.
            Você avança no seu próprio ritmo, sem pular etapas.
          </p>
        </div>
        <div class="beneficio-card">
          <div class="beneficio-icone">💡</div>
          <div class="beneficio-titulo">Exemplos reais em TypeScript</div>
          <p class="beneficio-texto">
            Todo conceito é ilustrado com código comentado linha por linha,
            com variáveis de nomes intuitivos e fáceis de entender.
          </p>
        </div>
        <div class="beneficio-card">
          <div class="beneficio-icone">🎬</div>
          <div class="beneficio-titulo">Videoaulas do professor</div>
          <p class="beneficio-texto">
            Assista às aulas diretamente aqui, sem sair do guia.
            Combine o conteúdo escrito com as explicações em vídeo.
          </p>
        </div>
        <div class="beneficio-card">
          <div class="beneficio-icone">🧩</div>
          <div class="beneficio-titulo">12 tópicos organizados</div>
          <p class="beneficio-texto">
            De variáveis até classes e paradigmas — tudo o que você
            precisa para dominar a lógica antes de partir pro mercado.
          </p>
        </div>
        <div class="beneficio-card">
          <div class="beneficio-icone">🔍</div>
          <div class="beneficio-titulo">Navegação por tema</div>
          <p class="beneficio-texto">
            Acesse qualquer tópico diretamente pela barra de navegação.
            Estude na ordem ou vá direto ao que precisa revisar.
          </p>
        </div>
        <div class="beneficio-card">
          <div class="beneficio-icone">📱</div>
          <div class="beneficio-titulo">Responsivo e acessível</div>
          <p class="beneficio-texto">
            Funciona em qualquer dispositivo — celular, tablet ou desktop.
            Estude onde e quando quiser.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ GRADE DE TÓPICOS ══════════════════════════════════ -->
    <section class="home-topicos">
      <div class="home-secao-label">// Conteúdo do guia</div>
      <h2 class="home-secao-titulo">Escolha um tópico</h2>
      <p class="home-secao-sub">Clique em qualquer tópico para ver a definição, exemplos e exercícios.</p>
      <div class="topicos-grid" id="grade-topicos">
        ${TOPICOS.map(t => `
          <div class="topico-card" data-chave="${t.chave}" role="button" tabindex="0">
            <span class="topico-num">${t.num}</span>
            <div>
              <div class="topico-nome">${t.nome}</div>
              <div class="topico-desc">${t.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- ═══ VIDEOAULAS ════════════════════════════════════════ -->
    <section class="home-videos" id="videos-section">
      <div class="home-secao-label">// Videoaulas</div>
      <h2 class="home-secao-titulo">Aulas do professor</h2>
      <p class="home-secao-sub">
        Videoaulas complementares para reforçar cada tópico.
        Clique para assistir sem sair da página.
      </p>
      <div class="carousel-wrapper">
        <button class="carousel-btn carousel-btn-prev" id="carousel-prev">‹</button>
        <div class="carousel-trilho" id="carousel-trilho">
          ${VIDEOS.map((v, i) => `
            <div class="video-card" data-video-id="${v.id}" data-video-titulo="${v.titulo}">
              <div class="video-thumb">
                <img
                  src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg"
                  alt="${v.titulo}"
                  loading="lazy"
                />
                <div class="video-thumb-overlay">
                  <div class="play-icon">▶</div>
                </div>
              </div>
              <div class="video-info">
                <div class="video-numero">Aula ${String(i + 1).padStart(2, '0')}</div>
                <div class="video-titulo">${v.titulo}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <button class="carousel-btn carousel-btn-next" id="carousel-next">›</button>
      </div>
    </section>

    <!-- ═══ MODAL DE VÍDEO ════════════════════════════════════ -->
    <div class="modal-video" id="modal-video">
      <div class="modal-inner">
        <div class="modal-cabecalho">
          <span class="modal-titulo" id="modal-titulo-texto"></span>
          <button class="modal-fechar" id="modal-fechar">✕</button>
        </div>
        <div class="modal-iframe-wrap">
          <iframe
            id="modal-iframe"
            src=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

  `

  document.querySelectorAll('.topico-card').forEach(card => {
    const ativar = () => navegar(card.dataset.chave)
    card.addEventListener('click', ativar)
    card.addEventListener('keydown', e => e.key === 'Enter' && ativar())
  })

  document.getElementById('btn-comecar')?.addEventListener('click', () => navegar('variaveis'))

  const trilho = document.getElementById('carousel-trilho')
  document.getElementById('carousel-prev')?.addEventListener('click', () => {
    trilho.scrollBy({ left: -320, behavior: 'smooth' })
  })
  document.getElementById('carousel-next')?.addEventListener('click', () => {
    trilho.scrollBy({ left: 320, behavior: 'smooth' })
  })

  const modal      = document.getElementById('modal-video')
  const iframe     = document.getElementById('modal-iframe')
  const modalTitulo = document.getElementById('modal-titulo-texto')

  function abrirVideo(id, titulo) {
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`
    modalTitulo.textContent = titulo
    modal.classList.add('aberto')
    document.body.style.overflow = 'hidden'
  }

  function fecharVideo() {
    iframe.src = ''
    modal.classList.remove('aberto')
    document.body.style.overflow = ''
  }

  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      abrirVideo(card.dataset.videoId, card.dataset.videoTitulo)
    })
  })

  document.getElementById('modal-fechar')?.addEventListener('click', fecharVideo)
  modal?.addEventListener('click', e => { if (e.target === modal) fecharVideo() })
  document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharVideo() })
}

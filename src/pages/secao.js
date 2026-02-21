

export function renderSecao(container, htmlConteudo, meta, navegar) {
  container.innerHTML = `

    <!-- ── Cabeçalho da seção ── -->
    <div class="secao-hero animar">
      <div class="secao-breadcrumb">
        <a id="link-home-breadcrumb">Início</a>
        <span>/</span>
        <span>${meta.titulo}</span>
      </div>
      <div class="secao-num">${meta.num}</div>
      <h1 class="secao-titulo">${meta.titulo}</h1>
    </div>

    <!-- ── Conteúdo da seção (vindo do HTML público) ── -->
    <div class="secao-conteudo animar">
      ${htmlConteudo}
    </div>

    <!-- ── Rodapé com botão voltar ── -->
    <div class="secao-footer">
      <span class="secao-footer-texto">// ${meta.num} · ${meta.titulo}</span>
      <button class="btn-voltar" id="btn-voltar-home">← Voltar ao início</button>
    </div>

  `

  document.getElementById('btn-voltar-home')?.addEventListener('click', () => navegar('home'))
  document.getElementById('link-home-breadcrumb')?.addEventListener('click', () => navegar('home'))
}

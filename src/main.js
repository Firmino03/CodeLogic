
import { renderHome } from './pages/home.js'
import { renderSecao } from './pages/secao.js'

const SECOES = {
  variaveis:   { arquivo: 'secao-01-variaveis',   num: '01', titulo: 'Declaração de Variáveis' },
  tipagem:     { arquivo: 'secao-02-tipagem',      num: '02', titulo: 'Tipagem Explícita' },
  algoritmo:   { arquivo: 'secao-03-algoritmo',    num: '03', titulo: 'Algoritmo e Tipos de Dados' },
  operadores:  { arquivo: 'secao-04-operadores',   num: '04', titulo: 'Operadores' },
  condicionais:{ arquivo: 'secao-05-condicionais', num: '05', titulo: 'Estruturas Condicionais' },
  repeticao:   { arquivo: 'secao-06-repeticao',    num: '06', titulo: 'Estruturas de Repetição' },
  arrays:      { arquivo: 'secao-07-arrays',       num: '07', titulo: 'Arrays (Vetores)' },
  matrizes:    { arquivo: 'secao-08-matrizes',     num: '08', titulo: 'Arrays Bidimensionais' },
  funcoes:     { arquivo: 'secao-09-funcoes',      num: '09', titulo: 'Funções' },
  strings:     { arquivo: 'secao-10-strings',      num: '10', titulo: 'Manipulação de Strings' },
  classes:     { arquivo: 'secao-11-classes',      num: '11', titulo: 'Classes' },
  imperativo:  { arquivo: 'secao-12-imperativo',   num: '12', titulo: 'Paradigma Imperativo' },
}

const app = document.getElementById('app')

export function navegar(para) {
  const hash = para === 'home' ? '' : `#${para}`
  history.pushState({ rota: para }, '', hash || '/')

  renderizar(para)
}

async function renderizar(rota) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('ativo', link.dataset.secao === rota)
  })

  window.scrollTo({ top: 0, behavior: 'smooth' })

  if (rota === 'home' || !rota || !SECOES[rota]) {
    app.innerHTML = ''
    renderHome(app, SECOES, navegar)
  } else {
    const meta = SECOES[rota]
    app.innerHTML = '<div style="padding:80px;text-align:center;color:#64748b;font-family:monospace">Carregando...</div>'
    try {
      const resp = await fetch(`/sections/${meta.arquivo}.html`)
      const html = await resp.text()
      app.innerHTML = ''
      renderSecao(app, html, meta, navegar)
    } catch (e) {
      app.innerHTML = `<div style="padding:40px;color:#f87171">Erro ao carregar seção: ${e.message}</div>`
    }
  }
}

function iniciar() {
  const hash = location.hash.replace('#', '').trim()
  const rotaInicial = hash && SECOES[hash] ? hash : 'home'

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      navegar(link.dataset.secao)
    })
  })

  document.getElementById('btn-home')?.addEventListener('click', () => navegar('home'))

  window.addEventListener('popstate', e => {
    const rota = e.state?.rota || 'home'
    renderizar(rota)
  })

  renderizar(rotaInicial)
}

document.addEventListener('DOMContentLoaded', iniciar)

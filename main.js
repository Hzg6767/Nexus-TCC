// --- FILMES E CATEGORIAS ---
const filmes = [
  {
    id: 1,
    titulo: 'Valente',
    ano: 2012,
    duracao: 90,
    avaliacao: 8.5,
    generos: ['Ação', 'Aventura', 'Fantasia', 'Animação'],
    poster: '../nexus2.5/img/valente.png',
    descricao: 'A princesa Merida deve seguir os costumes do seu reino e tomar-se rainha ao lado do cavalheiro que conseguir a sua mão durante um torneio de arco e flecha. Porém, a jovem está determinada a trilhar seu próprio caminho e desafia a tradição ancestral.',
    trailer: 'https://www.youtube.com/watch?v=TEHWDA_6e3M',
    assistir: 'https://drive.google.com/file/d/1m-tdZhebyZGVdC-naSKkM8QhnnR19eF8/view?usp=drive_link',
    comentarios: [
      { autor: 'Emerson CostaXD', data: 'Há 2 dias', texto: 'Filme Top, me emocionou do inicio ao fim, agora penso em viver minha vida solta pelo vento com meus cabelos soltos.' },
      { autor: 'Yvan', data: 'Há 5 dias', texto: 'Daora D+.' }
    ]
  },
  {
    id: 2,
    titulo: 'Dois Irmãos',
    ano: 2020,
    duracao: 102,
    avaliacao: 7.9,
    generos: ['Comédia', 'Aventura', 'Animação'],
    poster: '../nexus2.5/img/Onward.png',
    descricao: 'Em um mundo transformado, no qual as criaturas não dependiam mais da magia para viver, dois irmãos elfos recebem um cajado de bruxo de seu falecido pai...',
    trailer: 'https://youtu.be/gn5QmllRCn4?si=peEJNVggGgye4Gag',
    assistir: 'https://drive.google.com/file/d/1EWxu4EyGrvE3aUPu6NwJkWi0E-yce0GY/view?usp=drive_link',
    comentarios: [
      { autor: 'José Alves', data: 'Há 1 semana', texto: 'Muito legal.' }
    ]
  },
  {
    id: 3,
    titulo: 'Planeta dos Macacos: O Reinado',
    ano: 2024,
    duracao: 105,
    avaliacao: 9.1,
    generos: ['Drama', 'Ficção Científica', 'Ação', 'Aventura'],
    poster: '../nexus2.5/img/mamacos.png',
    descricao: 'Muitas sociedades de macacos cresceram desde quando César levou seu povo a um oásis...',
    trailer: 'https://www.youtube.com/watch?v=Kdr5oedn7q8',
    assistir: 'https://drive.google.com/file/d/1rgyXCD3gTjB6wJF3S1_qBmxJdIbX0O4N/view?usp=drive_link',
    comentarios: [
      { autor: 'Carol Heli', data: 'Há 2 horas', texto: 'Nossa vei muito bom sério, Tá ai uma franquia que não tem um filme ruim.' },
      { autor: 'Ayrton Pierri', data: 'Há 1 semana', texto: 'Fiquei muito impressionado com o filme, muito legal o jeito que trabalharam a imagem de César depois da morte...' }
    ]
  },
  {
    id: 4,
    titulo: 'A Baleia',
    ano: 2021,
    duracao: 110,
    avaliacao: 8.2,
    generos: ['Drama', 'Suspense'],
    poster: '../nexus2.5/img/a-baleia.png',
    descricao: 'Homem obeso e solitário busca se reconectar com filha adolescente em uma última chance de redenção.',
    trailer: 'https://www.youtube.com/watch?v=vqi1OuxQtJ8',
    assistir: 'https://drive.google.com/file/d/1L6WiqluCIaF1z8wNNST77yaovrcMQwlB/view?usp=drive_link',
    comentarios: [
      { autor: 'Yasmin Pricila', data: 'Há 4 dias', texto: 'Filme assustador! Não consegui dormir depois de assistir.' }
    ]
  }
];

const categorias = {
  acao: { nome: 'Ação', filmes: [1, 3, 2] },
  comedia: { nome: 'Comédia', filmes: [2] },
  drama: { nome: 'Drama', filmes: [4, 2] },
  terror: { nome: 'Terror', filmes: [4] },
  ficcao: { nome: 'Ficção Científica', filmes: [3] },
  animacao: { nome: 'Animação', filmes: [1, 2] }
};

const imagensCategorias = {
  acao: 'img/durodematar.png',
  comedia: 'img/gentegrande.png',
  drama: 'img/comoera.png',
  terror: 'img/invocacao.png',
  ficcao: 'img/anakin.png',
  animacao: 'img/banguela.png'
};

// --- VARIÁVEIS GLOBAIS ---
let minhaLista = [];
let filmeAtual = null;

// --- CRIAÇÃO DE CARDS DE FILME ---
function criarCardFilme(filme) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', filme.titulo);
  card.innerHTML = `
    <div class="movie-poster">
      <img src="${filme.poster}" alt="${filme.titulo}">
    </div>
    <div class="movie-info">
      <h3>${filme.titulo}</h3>
      <div class="movie-meta">
        <span class="year">${filme.ano}</span>
        <span class="duration">${filme.duracao} min</span>
        <span class="rating">${filme.avaliacao || '-'} <i class="fas fa-star"></i></span>
      </div>
    </div>
  `;
  card.onclick = () => abrirModal(filme);
  card.onkeypress = e => { if (e.key === 'Enter' || e.key === ' ') abrirModal(filme); };
  return card;
}

// --- RENDERIZAÇÃO DOS SLIDERS PRINCIPAIS ---
function renderizarFilmesNosSlidersPrincipais() {
  document.querySelectorAll('#home .movie-slider').forEach(slider => {
    slider.innerHTML = '';
    filmes.forEach(filme => slider.appendChild(criarCardFilme(filme)));
  });
}

// --- CATEGORIAS ---
function inicializarCategorias() {
  const grid = document.querySelector('#categories .category-grid');
  if (!grid) return;
  grid.innerHTML = '';
  Object.entries(categorias).forEach(([key, categoria]) => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <img src="${imagensCategorias[key] || 'img/default.jpg'}" alt="${categoria.nome}">
      <h3>${categoria.nome}</h3>
    `;
    card.onclick = () => mostrarFilmesPorCategoria(key);
    card.onkeypress = e => { if (e.key === 'Enter' || e.key === ' ') mostrarFilmesPorCategoria(key); };
    grid.appendChild(card);
  });
}

function mostrarFilmesPorCategoria(categoriaId) {
  const categoria = categorias[categoriaId];
  const container = document.getElementById('category-results');
  if (!categoria || !categoria.filmes.length) {
    container.innerHTML = `<div class="empty-category"><p>Nenhum filme encontrado nesta categoria.</p></div>`;
    return;
  }
  container.innerHTML = `
    <h2>Filmes de ${categoria.nome}</h2>
    <div class="movie-slider">
      ${categoria.filmes.map(id => {
        const filme = filmes.find(f => f.id === id);
        return filme ? criarCardFilme(filme).outerHTML : '';
      }).join('')}
    </div>
  `;
  // Adiciona eventos aos cards criados via innerHTML
  container.querySelectorAll('.movie-card').forEach(card => {
    const titulo = card.querySelector('h3').textContent;
    const filme = filmes.find(f => f.titulo === titulo);
    card.onclick = () => abrirModal(filme);
    card.onkeypress = e => { if (e.key === 'Enter' || e.key === ' ') abrirModal(filme); };
  });
}

function abrirModal(filme) {
  filmeAtual = filme;
  const modal = document.getElementById('movie-modal');
  document.getElementById('modal-poster-img').src = filme.poster;
  document.getElementById('modal-poster-img').alt = filme.titulo;
  document.getElementById('modal-title').textContent = filme.titulo;
  document.getElementById('modal-year').textContent = filme.ano;
  document.getElementById('modal-duration').textContent = `${filme.duracao} min`;
  document.getElementById('modal-genre').textContent = filme.generos ? filme.generos.join(', ') : '';
  document.getElementById('modal-description').textContent = filme.descricao;

  // Adicione estas duas linhas:
  document.getElementById('watch-button').onclick = () => window.open(filme.assistir, '_blank');
  document.getElementById('trailer-button').onclick = () => window.open(filme.trailer, '_blank');

  document.getElementById('add-to-list-button').onclick = () => adicionarALista(filme);


  // Comentários
  atualizarComentariosModal(filme);

  // Botão de comentar
  const commentBtn = document.getElementById('submit-comment-btn');
  const commentTextarea = document.getElementById('comment-textarea');
  commentBtn.onclick = () => {
    const texto = commentTextarea.value.trim();
    if (texto) {
      if (!filme.comentarios) filme.comentarios = [];
      filme.comentarios.push({
        autor: 'Você',
        data: 'Agora',
        texto
      });
      commentTextarea.value = '';
      atualizarComentariosModal(filme);
    } else {
      commentTextarea.focus();
    }
  };

  // Botão de fechar
  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.onclick = () => { modal.style.display = 'none'; };

  // Fecha ao clicar fora ou ESC
  modal.style.display = 'block';
  window.onclick = function(e) {
    if (e.target === modal) modal.style.display = 'none';
  };
  window.onkeydown = function(e) {
    if (e.key === 'Escape') modal.style.display = 'none';
  };
}

function atualizarComentariosModal(filme) {
  const commentsList = document.getElementById('comments-list');
  if (!filme.comentarios || filme.comentarios.length === 0) {
    commentsList.innerHTML = '<p style="color:#bbb;">Nenhum comentário ainda.</p>';
    return;
  }
  commentsList.innerHTML = filme.comentarios.map(comentario =>
    `<div class="comment">
      <b>${comentario.autor}</b> <span style="color:#888;font-size:0.9em;">${comentario.data}</span>
      <div>${comentario.texto}</div>
    </div>`
  ).join('');
}


function atualizarMinhaLista() {
  const content = document.getElementById('my-list-movies');
  const emptyMsg = document.getElementById('empty-list-message');
  if (!content || !emptyMsg) return;
  if (!minhaLista.length) {
    emptyMsg.style.display = 'block';
    content.style.display = 'none';
  } else {
    emptyMsg.style.display = 'none';
    content.style.display = 'flex';
    content.innerHTML = '';
    minhaLista.forEach(filme => content.appendChild(criarCardFilme(filme)));
  }
}

// --- BUSCA ---
function inicializarBusca() {
  const input = document.getElementById('search-input');
  const btn = document.getElementById('search-button');
  btn.onclick = () => realizarBusca(input.value);
  input.onkeypress = e => { if (e.key === 'Enter') realizarBusca(input.value); };
}
function realizarBusca(termo) {
  if (!termo.trim()) return;
  document.querySelector('nav ul li a[data-tab="categories"]').click();
  const container = document.getElementById('category-results');
  const resultados = filmes.filter(f =>
    f.titulo.toLowerCase().includes(termo.toLowerCase()) ||
    f.generos.some(g => g.toLowerCase().includes(termo.toLowerCase()))
  );
  if (!resultados.length) {
    container.innerHTML = `<div class="empty-search"><p>Nenhum filme encontrado para sua busca.</p></div>`;
    return;
  }
  container.innerHTML = `
    <div class="search-results">
      <h2>Resultados para "${termo}"</h2>
      <div class="movie-slider">
        ${resultados.map(filme => criarCardFilme(filme).outerHTML).join('')}
      </div>
    </div>
  `;
  container.querySelectorAll('.movie-card').forEach(card => {
    const titulo = card.querySelector('h3').textContent;
    const filme = filmes.find(f => f.titulo === titulo);
    card.onclick = () => abrirModal(filme);
    card.onkeypress = e => { if (e.key === 'Enter' || e.key === ' ') abrirModal(filme); };
  });
}

// --- INICIALIZAÇÃO PRINCIPAL ---
document.addEventListener('DOMContentLoaded', () => {
  // Abas
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.onclick = function(e) {
      e.preventDefault();
      const tabId = this.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
      document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
      this.classList.add('active');
      if (tabId === 'categories') {
        inicializarCategorias();
        document.getElementById('category-results').innerHTML = '';
      }
      if (tabId === 'my-list') atualizarMinhaLista();
    };
  });

  renderizarFilmesNosSlidersPrincipais();
  inicializarCategorias();
  inicializarBusca();
});

function adicionarALista(filme) {
  if (!minhaLista.some(item => item.id === filme.id)) {
    minhaLista.push(filme);
    atualizarMinhaLista();
    alert(`${filme.titulo} adicionado à sua lista!`);
  } else {
    alert(`${filme.titulo} já está na sua lista.`);
  }
}


function renderizarPlanos() {
  const planos = [
    {
      nome: "Básico",
      preco: "R$ 19,90/mês",
      beneficios: [
        "Acesso a todo o catálogo",
        "1 tela simultânea",
        "Qualidade HD"
      ]
    },
    {
      nome: "Padrão",
      preco: "R$ 29,90/mês",
      beneficios: [
        "Acesso a todo o catálogo",
        "2 telas simultâneas",
        "Qualidade FULLHD",
        "Download de filmes e séries",
      ]
    },
    {
      nome: "Premium",
      preco: "R$ 39,90/mês",
      beneficios: [
        "Acesso a todo o catálogo",
        "4 telas simultâneas",
        "Qualidade Ultra HD",
        "Download de filmes e séries",
        "Acesso antecipado a lançamentos",
        "Conteúdo exclusivo"
      ]
    }
  ];

  const container = document.querySelector('.plans-container');
  if (!container) return;
  container.innerHTML = planos.map((plano, idx) => `
    <div class="plan-card${idx === 1 ? ' selected' : ''}">
      <h3>${plano.nome}</h3>
      <div class="price">${plano.preco}</div>
      <ul>
        ${plano.beneficios.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <button onclick="selecionarPlano('${plano.nome}')">Selecionar</button>
    </div>
  `).join('');
}

// Função para destacar o plano selecionado
window.selecionarPlano = function(nomePlano) {
  document.querySelectorAll('.plan-card').forEach(card => {
    if (card.querySelector('h3').textContent === nomePlano) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
};

// Chame ao carregar a aba de inscrição
document.addEventListener('DOMContentLoaded', () => {
  // ...código existente...
  renderizarPlanos();
});

document.getElementById('menu-toggle').onclick = function() {
  const navList = document.querySelector('nav ul');
  navList.classList.toggle('active');
};

// ClickSpark estilo faísca com canvas (JS puro)
(function() {
  // Configurações
  const sparkColor = "#e50914";
  const sparkSize = 18; // comprimento da faísca
  const sparkRadius = 24; // distância do centro
  const sparkCount = 10;
  const duration = 400; // ms

  // Cria o canvas global
  let canvas = document.getElementById('click-spark-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'click-spark-canvas';
    canvas.className = 'click-spark-canvas';
    document.body.appendChild(canvas);
  }
  const ctx = canvas.getContext('2d');

  // Ajusta o tamanho do canvas ao viewport
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Guarda as faíscas ativas
  let sparks = [];

  // Função de easing (ease-out)
  function ease(t) {
    return t * (2 - t);
  }

  // Desenha as faíscas
  function drawSparks(now) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparks = sparks.filter(spark => {
      const elapsed = now - spark.startTime;
      if (elapsed > duration) return false;
      const progress = elapsed / duration;
      const eased = ease(progress);

      const distance = eased * sparkRadius;
      const lineLength = sparkSize * (1 - eased);

      for (let i = 0; i < sparkCount; i++) {
        const angle = (2 * Math.PI * i) / sparkCount;
        const x1 = spark.x + distance * Math.cos(angle);
        const y1 = spark.y + distance * Math.sin(angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      return true;
    });
    if (sparks.length > 0) {
      requestAnimationFrame(drawSparks);
    }
  }
// fechar menu hamburguer
// Fecha o menu hambúrguer ao clicar em um item do menu (mobile)
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
      document.querySelector('nav ul').classList.remove('active');
      document.getElementById('menu-toggle').classList.remove('active');
    }
  });
});

  // Ao clicar, adiciona faíscas
  document.addEventListener('click', function(e) {
    // Evita faísca ao clicar no modal de fundo
    if (e.target.classList && e.target.classList.contains('modal')) return;

    sparks.push({
      x: e.clientX,
      y: e.clientY,
      startTime: performance.now()
    });
    requestAnimationFrame(drawSparks);
  });
})();

// --- PARTICLES BACKGROUND ---// Partículas animadas com parallax no mouse
(function() {
  const canvas = document.getElementById('particles-bg');
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  let mouse = { x: width/2, y: height/2 };
  let particles = [];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  resize();
  window.addEventListener('resize', resize);

  // Cria partículas
  const PARTICLE_COUNT = 60;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.5 + Math.random() * 2.5,
      dx: -0.2 + Math.random() * 0.4,
      dy: -0.2 + Math.random() * 0.4,
      baseX: 0,
      baseY: 0,
      parallax: 0.08 + Math.random() * 0.12,
      color: `rgba(${180+Math.floor(Math.random()*60)},${220+Math.floor(Math.random()*35)},255,0.3)`
    });
  }

  // Atualiza posição base para parallax
  function updateBase() {
    for (let p of particles) {
      p.baseX = (mouse.x - width/2) * p.parallax;
      p.baseY = (mouse.y - height/2) * p.parallax;
    }
  }

  window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    updateBase();
  });

  // Animação
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      // Movimento suave
      p.x += p.dx;
      p.y += p.dy;

      // Rebote nas bordas
      if (p.x < 0 || p.x > width) p.dx *= -1;
      if (p.y < 0 || p.y > height) p.dy *= -1;

      // Parallax
      const px = p.x + p.baseX;
      const py = p.y + p.baseY;

      // Desenha partícula
      ctx.beginPath();
      ctx.arc(px, py, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.shadowColor = "#aeeaff";
    
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    requestAnimationFrame(animate);
  }
  animate();
})();


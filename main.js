// --- FILMES E CATEGORIAS ---
const filmes = [
  {
    id: 1,
    titulo: 'Valente',
    ano: 2012,
    duracao: 90,
    avaliacao: 8.5,
    generos: ['Ação', 'Aventura', 'Fantasia', 'Animação'],
    poster: 'img/valente.png',
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
    duracao: 102 ,
    avaliacao: 7.9,
    generos: ['Comédia', 'Aventura', 'Animação'],
    poster: 'img/Onward.png',
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
    duracao: 105 ,
    avaliacao: 9.1,
    generos: ['Drama', 'Ficção Científica', 'Ação', 'Aventura'],
    poster: 'img/mamacos.png',
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
    duracao: 110 ,
    avaliacao: 8.2,
    generos: ['Drama', 'Suspense'],
    poster: 'img/a-baleia.png',
    descricao: 'Homem obeso e solitário busca se reconectar com filha adolescente em uma última chance de redenção.',
    trailer: 'https://www.youtube.com/watch?v=vqi1OuxQtJ8',
    assistir: 'https://drive.google.com/file/d/1L6WiqluCIaF1z8wNNST77yaovrcMQwlB/view?usp=drive_link',
    comentarios: [
      { autor: 'Yasmin Pricila', data: 'Há 4 dias', texto: 'Filme assustador! Não consegui dormir depois de assistir.' }
    ]
  },
  // NOVOS FILMES
  {
    id: 5,
    titulo: 'Vingadores: Ultimato',
    ano: 2019,
    duracao: 181 ,
    avaliacao: 8.4,
    generos: ['Ação', 'Herói', 'Ficção Científica'],
    poster: 'img/endgame.jpg',
    descricao: 'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.',
    trailer: 'https://www.youtube.com/watch?v=spJoZReeIeQ',
    assistir: 'https://drive.google.com/file/d/1y7vDON9vkYSLaXsYCXsuQPzM4AgCGBZ-/view?usp=drive_link',
    comentarios: [
      { autor: 'Emerson CostaXD', data: 'Há 5 dias', texto: 'Cena do Capitão pegando o Mjolnir foi insana, velho.' }, 
      { autor: 'Geovana', data: 'Há 1 semana', texto: 'Eu nem sou fã de herói, mas esse foi brabo. Amei a cena da galera toda voltando.' },
      { autor: 'Yvan', data: 'Há 4 dias',texto: 'Tecnologia do Homem de Ferro é muito massa. Que pena que morreu.' },
      
    ]
  },
  {
    id: 6,
    titulo: 'Jogos Mortais',
    ano: 2004,
    duracao: 114 ,
    avaliacao: 7.6,
    generos: ['Terror', 'Suspense'],
    poster: 'img/Saw.jpg',
    descricao: 'Dois homens acordam acorrentados em um banheiro como prisioneiros de um assassino em série que leva suas vítimas a situações limítrofes em um jogo macabro. Para sobreviver, eles terão de desvendar juntos as peças desse quebra-cabeças doentio.',
    trailer: 'https://www.youtube.com/watch?v=rX2hCa3ae9o',
    assistir: 'https://drive.google.com/file/d/1IWASrb6kLSiTO6hvlQX5E25aKMJqG0jQ/view?usp=drive_link',
   comentarios: [
      { autor: 'Carol Heli',data: 'Há 3 dias', texto: 'Eu não consegui assistir tudo. Aquilo é perturbador.' },
      { autor: 'Geovana',data: 'Há 1 dia', texto: 'Credo! Mas confesso que não consegui parar de ver o filme, amei.' },
      { autor: 'Yhasmin Pricila',data: 'Há  2 semanas', texto: 'Eu parei na primeira armadilha. Não consegui continuar.' },
      { autor: 'José Alves',data: 'Há 2 semanas', texto: 'Fez o que tinha que fazer. As pessoas têm que valorizar a vida. Simples.' }
    ]
  },
  {
    id: 7,
    titulo: 'Duro de Matar',
    ano: 1988,
    duracao: 131,
    avaliacao: 8.2,
    generos: ['Adrenalina', 'Ação', 'Aventura'],
    poster: 'img/durodematar.png',
    descricao: 'O policial de Nova York John McClane está visitando sua família no Natal. Ele participa de uma confraternização de fim de ano na sede da empresa japonesa em que a esposa trabalha. A festa é interrompida por terroristas que invadem o edifício de luxo. McClane não demora a perceber que não há ninguém para salvá-los, a não ser ele próprio.',
    trailer: 'https://www.youtube.com/watch?v=jaJuwKCmJbY',
    assistir: 'https://drive.google.com/file/d/1AranhaversoLink/view?usp=drive_link',
     comentarios: [
      { autor: 'Emerson CostaXD',data: 'Há 4 dias', texto: 'Clássico raiz. O McClane é brabo demais. Hoje em dia só tem herói chorando.' },
      { autor: 'Ayrton Pierri',data: 'Há 6 dias', texto: 'É um filme de ação massa, mas vamos ser sinceros: se fosse um preto no lugar, já tinha tomado tiro na primeira cena.' },
      { autor: 'José Alves',data: 'Há  3 semanas', texto: 'Esse é o tipo de homem de verdade. Bate, apanha e vence. Sem frescura.' }
    ]
  },
  {
    id: 8,
    titulo: 'O serviço de entregas da kiki',
    ano: 1989,
    duracao: 100,
    avaliacao: 8.1,
    generos: ['Anime', 'Animação', 'Familia'],
    poster: 'img/kiki.jpg',
    descricao: 'Por ordem de sua mãe, Kiki parte para um aprendizado de um ano, acompanhada por seu gato preto. A um comando de sua vassoura mágica, ela vai parar na charmosa cidadezinha de Moreoastal. Infelizmente, os hotéis locais não aceitam bruxas e a polícia a flagra fazendo algumas travessuras..',
    trailer: 'https://www.youtube.com/watch?v=4bG17OYs-GA',
    assistir: 'https://drive.google.com/file/d/1RQeTcbdsfScLOb3l4xGsRmOgaITAZzJR/view?usp=drive_link',
    comentarios: [
    { autor: 'Ayrton Pierri', data: 'Há 6 dias', texto: 'Eu achei muito poético. Kiki é tipo uma metáfora pra amadurecer, achar seu lugar no mundo... filme tranquilo, mas cheio de sentido.' },
    { autor: 'Geovana', data: 'Há 5 dias',texto: 'Aff, coisa mais linda! Me deu vontade de morar naquela cidade e voar levando pão quentinho. É aquele filme que abraça a gente, sabe?' },
    { autor: 'Yhasmin Pricila',data: 'Há 4 dias', texto: 'Esse é meu tipo de filme! Fofinho, com gatinho, menina se descobrindo… quase chorei. Quero assistir de novo com legenda e dublado.' },
    ]
  },
  {
    id: 9,
    titulo: '10 Coisas que Eu Odeio em Você',
    ano: 1999,
    duracao: 90,
    avaliacao: 7.4,
    generos: ['Drama', 'Comédia', 'Romance'],
    poster: 'img/odeioemvc.jpg',
    descricao: 'Bianca Stratford é bonita e popular, mas não pode namorar antes que sua irmã mais velha encontre um namorado primeiro. O problema é que nenhum garoto consegue chegar perto da irmã, Kat Stratford. Para resolver a situação, um rapaz interessado em Bianca suborna um amigo com passado misterioso para sair com Kat e, quem sabe, tentar conquistá-la.',
    trailer: 'https://www.youtube.com/watch?v=tD76OqlJRwQ',
    assistir: 'https://drive.google.com/file/d/1abkKtm9MvEloFyU89MoTbNxZ6C9I2xfk/view?usp=drive_link',
    comentarios: [
      { autor: 'Geovana',data: 'Há 1 dia', texto: 'Eu já assisti umas 5 vezes. É mó vibe boa. E o final no campo de futebol? Fofo!' },
      { autor: 'Yhasmin Pricila',data: 'Há 4 dias', texto: 'Meu coração não aguenta esse filme. O poema, gente… muito lindo.' },
      { autor: 'Caducando',data: 'Há 2 anos', texto: 'Cantar na arquibancada da escola que nem um doido pra mina que eu gosto tá no ranking de top coisas malucas que eu faria, e tirei a ideia desse filme.' },
    ]
  },
  {
    id: 10,
    titulo: '(500) Dias com Ela',
    ano: 2009,
    duracao: 90,
    avaliacao: 7.6,
    generos: ['Drama', 'Comédia', 'Romance'],
    poster: 'img/diascomela.jpg',
    descricao: 'Um romântico escritor se surpreende quando sua namorada Summer termina o namoro repentinamente. Com isso, ele relembra vários momentos dos 500 dias que passaram juntos para tentar descobrir onde seu caso de amor se perdeu e vai redescobrindo suas verdadeiras paixões.',
    trailer: 'https://www.youtube.com/watch?v=PsD0NpFSADM',
    assistir: 'https://drive.google.com/file/d/14MBM8HZ286k5w41_h1bLItgn9LGHNg3U/view?usp=drive_link',
    comentarios: [
     
      { autor: 'Ayrton Pierri',data: 'Há 2 semanas', texto: 'Ela avisou. O cara que criou uma ilusão. Não foi culpa dela.' },
      { autor: 'Yhasmin Pricila',data: 'Há 7 dias', texto: 'Eu chorei. A música, o clima... ele era tão fofo, não merecia.' },
      { autor: 'José Alves', data: 'Há 5 dias',texto: 'Mulher confunde o cara, some, depois casa com outro. Fala sério. Sem valores.' }
    ]
  },
  {
    id: 11,
    titulo: 'Speed Racer: O Filme',
    ano: 2008,
    duracao: 135,
    avaliacao: 6.1,
    generos: ['Animação', 'Aventura', 'Comédia'],
    poster: 'img/speed.jpg',
    descricao: 'Nascido em um família de pilotos de carros, Speed Racer é uma estrelas das corridas. Ao negar uma oferta lucrativa do empresário da Royalton Indústrias, Speed o deixa furioso e acaba descobrindo a corrupção dos patrocinadores em corridas. Para salvar os negócios da família, Speed participa do mesmo rally que matou seu irmão para desafiar um magnata corrupto.',
    trailer: 'https://www.youtube.com/watch?v=NKbO3dFqiP4',
    assistir: 'https://drive.google.com/file/d/1BQVawCkleFY0ynT4xnY7oaa0Lm1mB1Hw/view?usp=drive_link',
    comentarios: [
      { autor: 'Emerson CostaXD',data: 'Há 4 dias', texto: 'Visual meio doido, mas as corridas foram insanas. Curti!' },
      { autor: 'Yvan',data: 'Há 6 dias', texto: 'Mano, a tecnologia visual é doida. Fiquei vendo frame por frame.' },
    ]
  },
  {
    id: 12,
    titulo: 'Todo Poderoso',
    ano: 2003,
    duracao: 101,
    avaliacao: 6.8,
    generos: [, 'Comédia', 'Fantasia'],
    poster: 'img/todopoderoso.jpg',
    descricao: 'Bruce Nolan é um jornalista que tem a vida perfeita. Quando as coisas começam a dar errado, ele questiona Deus e a forma como ele comanda a Terra. O Todo Poderoso dá ao rapaz todos seus poderes, mas Bruce percebe como é difícil ser onipresente.',
    trailer: 'https://www.youtube.com/watch?v=OOVmS_Z3ZZs',
    assistir: 'https://drive.google.com/file/d/108Q2IybFe2dEw8Ox6CMj92161x0OQvqI/view?usp=drive_link',
    comentarios: [
      { autor: 'Emerson CostaXD', data: 'Há 4 dias',texto: 'Mano, esse filme é engraçado demais. E dá aquela ideia: será que a gente saberia usar o poder de Deus?' },
      { autor: 'Ayrton Pierri',data: 'Há 3 semanas', texto: 'É um filme de comédia, mas tem uns questionamentos sobre fé que são profundos.' },
      { autor: 'Carol Heli', data: 'Há 1 mês',texto: 'Eu amo esse filme! Mostra que só Deus é Deus. A gente não pode fazer tudo.' },
      
    ]
  },
];

// --- CATEGORIAS ---
const categorias = {
  acao: { nome: 'Ação', filmes: [1, 3, 2, 5, 7, 11] },
  comedia: { nome: 'Comédia', filmes: [2, 9, 10, 12] },
  drama: { nome: 'Drama', filmes: [4, 2, 9, 10] },
  terror: { nome: 'Terror', filmes: [4, 6] },
  ficcao: { nome: 'Ficção Científica', filmes: [3, 5, 11] },
  animacao: { nome: 'Animação', filmes: [1, 2, 8] }
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
function criarCardFilme(filme, numero = null) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', filme.titulo);

  let numeroHtml = '';
  if (numero !== null) {
    numeroHtml = `<span class="movie-rank-num">${numero}</span>`;
  }

  card.innerHTML = `
    ${numeroHtml}
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

// --- RENDERIZAÇÃO DOS SLIDERS ---
function renderizarSlider(sliderId, filmesParaMostrar, opcoes = {}) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  slider.innerHTML = '';
  filmesParaMostrar.forEach((filme, idx) => {
    let numero = null;
    if (opcoes.numerar && idx < opcoes.numerar) {
      numero = idx + 1;
    }
    slider.appendChild(criarCardFilme(filme, numero));
  });
}

// --- NOVA BARRA "Para você" ---
function renderizarSliderParaVoce() {
  // Exemplo: recomendações (pode ser aleatório ou por lógica, aqui os 6 primeiros)
  renderizarSlider('slider-para-voce', filmes.slice(0, 6));
}

// --- DESTAQUES DA SEMANA (TOP 5) ---
function renderizarSliderDestaquesSemana() {
  // Exemplo: 5 primeiros filmes, numerados de 1 a 5
  renderizarSlider('slider-destaques', filmes.slice(0, 5), { numerar: 5 });
}

// --- LANÇAMENTOS (TODOS OS 12, ORDEM DECRESCENTE) ---
function renderizarSliderLancamentos() {
  // Filmes do 12 ao 1
  renderizarSlider('slider-lancamentos', [...filmes].sort((a, b) => b.id - a.id));
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

// --- MODAL ---
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

  document.getElementById('watch-button').onclick = () => window.open(filme.assistir, '_blank');
  document.getElementById('trailer-button').onclick = () => window.open(filme.trailer, '_blank');
  document.getElementById('add-to-list-button').onclick = () => adicionarALista(filme);

  atualizarComentariosModal(filme);

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

  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.onclick = () => { modal.style.display = 'none'; };

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

// --- MINHA LISTA ---
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

function adicionarALista(filme) {
  if (!minhaLista.some(item => item.id === filme.id)) {
    minhaLista.push(filme);
    atualizarMinhaLista();
    alert(`${filme.titulo} adicionado à sua lista!`);
  } else {
    alert(`${filme.titulo} já está na sua lista.`);
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

// --- PLANOS ---
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

window.selecionarPlano = function(nomePlano) {
  document.querySelectorAll('.plan-card').forEach(card => {
    if (card.querySelector('h3').textContent === nomePlano) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
};

// --- SLIDER BOTÕES ---
function inicializarSliders() {
  document.querySelectorAll('.movie-slider-wrapper').forEach(wrapper => {
    const slider = wrapper.querySelector('.movie-slider');
    const btnLeft = wrapper.querySelector('.slider-btn-left');
    const btnRight = wrapper.querySelector('.slider-btn-right');
    const scrollAmount = 320;

    btnLeft.onclick = () => {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };
    btnRight.onclick = () => {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };
  });
}

// --- MENU HAMBURGUER ---
document.getElementById('menu-toggle').onclick = function() {
  const navList = document.querySelector('nav ul');
  navList.classList.toggle('active');
};
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
      document.querySelector('nav ul').classList.remove('active');
      document.getElementById('menu-toggle').classList.remove('active');
    }
  });
});

// --- PARTICLES BACKGROUND COM LINHAS ENTRE PARTICULAS ---
(function() {
  const canvas = document.getElementById('particles-bg');
  if (!canvas) return;
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

  const PARTICLE_COUNT = 180;
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

  function drawLines() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      const x1 = p1.x + p1.baseX;
      const y1 = p1.y + p1.baseY;
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const x2 = p2.x + p2.baseX;
        const y2 = p2.y + p2.baseY;
        const dx = x1 - x2;
        const dy = y1 - y2;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          ctx.save();
          ctx.globalAlpha = 1 - dist / maxDist;
          ctx.strokeStyle = "#aeeaff";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    // Desenha linhas entre partículas próximas
    drawLines();
    // Desenha partículas
    for (let p of particles) {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > width) p.dx *= -1;
      if (p.y < 0 || p.y > height) p.dy *= -1;
      const px = p.x + p.baseX;
      const py = p.y + p.baseY;
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


// --- CLICKSPARK ---
(function() {
  const sparkColor = "#e50914";
  const sparkSize = 18;
  const sparkRadius = 24;
  const sparkCount = 10;
  const duration = 400;

  let canvas = document.getElementById('click-spark-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'click-spark-canvas';
    canvas.className = 'click-spark-canvas';
    document.body.appendChild(canvas);
  }
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let sparks = [];
  function ease(t) { return t * (2 - t); }

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

  document.addEventListener('click', function(e) {
    if (e.target.classList && e.target.classList.contains('modal')) return;
    sparks.push({
      x: e.clientX,
      y: e.clientY,
      startTime: performance.now()
    });
    requestAnimationFrame(drawSparks);
  });
})();

// --- PERFIL NO MENU ---
function carregarPerfilNoMenu() {
  const data = JSON.parse(localStorage.getItem('nexus-profile') || '{}');
  const avatar = document.getElementById('profile-menu-avatar');
  const nome = document.getElementById('profile-menu-name');
  if (data.pic) avatar.src = data.pic;
  if (data.username) nome.textContent = '@' + data.username;
  else nome.textContent = 'Perfil';
}
carregarPerfilNoMenu();
window.addEventListener('storage', function(e) {
  if (e.key === 'nexus-profile') carregarPerfilNoMenu();
});
document.getElementById('logout-btn').onclick = function() {
  localStorage.removeItem('nexus-profile');
  window.location.reload();
};

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

  // Sliders
  renderizarSliderParaVoce();
  renderizarSliderDestaquesSemana();
  renderizarSliderLancamentos();
  inicializarSliders();

  inicializarCategorias();
  inicializarBusca();
  renderizarPlanos();
});

// Função para embaralhar e pegar 9 filmes aleatórios do feito para voce
function getFilmesAleatorios(qtd) {
  const copia = [...filmes];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia.slice(0, qtd);
}

// Renderiza a linha "Escolhas para você"
function renderizarSliderEscolhas() {
  const filmesAleatorios = getFilmesAleatorios(9);
  renderizarSlider('slider-escolhas', filmesAleatorios);
}

// Chame na inicialização:
renderizarSliderEscolhas();

// ...código existente...

// --- SLIDER BOTÕES COM CARROSSEL INFINITO ---
function inicializarSliders() {
  document.querySelectorAll('.movie-slider-wrapper').forEach(wrapper => {
    const slider = wrapper.querySelector('.movie-slider');
    const btnLeft = wrapper.querySelector('.slider-btn-left');
    const btnRight = wrapper.querySelector('.slider-btn-right');
    const scrollAmount = 320;

    // Carrossel infinito: clona os primeiros e últimos elementos
    if (slider && !slider.dataset.carouselInitialized) {
      const cards = Array.from(slider.children);
      if (cards.length > 0) {
        // Clona os primeiros 3 e últimos 3 cards (ajuste conforme visibilidade)
        for (let i = 0; i < 3 && i < cards.length; i++) {
          slider.appendChild(cards[i].cloneNode(true));
          slider.insertBefore(cards[cards.length - 1 - i].cloneNode(true), slider.firstChild);
        }
        slider.dataset.carouselInitialized = "true";
        // Ajusta scroll inicial para o primeiro "real"
        slider.scrollLeft = scrollAmount * 3;
      }
    }

    btnLeft.onclick = () => {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setTimeout(() => {
        // Se chegou no início dos clones, volta para o final real
        if (slider.scrollLeft <= scrollAmount * 1) {
          slider.scrollLeft = slider.scrollWidth - scrollAmount * (slider.childElementCount - 6);
        }
      }, 350);
    };
    btnRight.onclick = () => {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(() => {
        // Se chegou no final dos clones, volta para o início real
        if (slider.scrollLeft >= slider.scrollWidth - scrollAmount * 4) {
          slider.scrollLeft = scrollAmount * 3;
        }
      }, 350);
    };
  });
}


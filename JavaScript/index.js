// Array com dados dos produtos
const produtos = [
    {
      nome: "Fundamentos de Html5 e Css3",
      preco: "R$ 49,99",
      imagem: "image/FundamentosHtml5Css3.jpg",
      link: "livros/Livro1.html"
    },
    {
      nome: "JavaScript - Guia definitivo",
      preco: "R$ 249,50",
      imagem: "image/JavaScript - Guia definitivo.jpg",
      link: "livros/Livro2.html"
    },
    {
      nome: "Java - Como programar",
      preco: "R$ 299,99",
      imagem: "image/Java como programar.jpg",
      link: "livros/Livro3.html"
    },
    {
      nome: "Programando Python: Powerful",
      preco: "R$ 350,00",
      imagem: "image/Programando Python Powerful Object Oriented.jpg",
      link: "livros/Livro4.html"
    },
    {
      nome: "Use a Cabeça!: C#",
      preco: "R$ 99,50",
      imagem: "image/Use a Cabeça C.jpg",
      link: "livros/Livro5.html"
    },
    {
      nome: "Brain F*ck",
      preco: "R$ 549,00",
      imagem: "image/brainFu.jpg",
      link: "livros/Livro6.html"
    },
    
  ];

  const container = document.getElementById('containerCards');

  produtos.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'card-produto';
  
    card.innerHTML = `
      <div class="imagem-container">
        <img src="${prod.imagem}" alt="${prod.nome}">
      </div>
      <div class="info-produto">
        <h2>${prod.nome}</h2>
        <p class="preco">${prod.preco}</p><br>
        <a href="${prod.link}">
          <button class="botao-detalhes">Ver mais Detalhes</button>
        </a>
      </div>
    `;
  
    // Seleciona a imagem dentro do card e aplica estilo para limitar tamanho
    const img = card.querySelector('img');
    img.style.width = '160px';      // largura fixa menor
    img.style.height = '240px';     // altura fixa maior (proporção 2:3, comum em livros)
    img.style.objectFit = 'cover';  // mantém o corte para preencher o espaço
    img.style.borderRadius = '8px';
    
  
    container.appendChild(card);
  });
  

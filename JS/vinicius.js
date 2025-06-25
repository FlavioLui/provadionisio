document.addEventListener("DOMContentLoaded", function () {
  const galeriaFotos = [
    {
      id: 1,
      imagem: "https://picsum.photos/1920/1080?random=301"
    },
    {
      id: 7,
      imagem: "https://picsum.photos/1920/1080?random=307"
    },
    {
      id: 18,
      imagem: "https://picsum.photos/1920/1080?random=318"
    }
  ];

  const carouselInner = document.querySelector("#carouselBackground .carousel-inner");
  if (!carouselInner) return;

  // Limpa o conteúdo antigo
  carouselInner.innerHTML = "";

  galeriaFotos.forEach((foto, index) => {
    const item = document.createElement("div");
    item.className = `carousel-item${index === 0 ? " active" : ""}`;

    const img = document.createElement("img");
    img.src = foto.imagem;
    img.alt = `Slide ${index + 1}`;
    img.className = "d-block w-100 vh-100 object-fit-cover";

    item.appendChild(img);
    carouselInner.appendChild(item);
  });

  // Inicia o carrossel após carregar as imagens
  const myCarousel = document.querySelector("#carouselBackground");
  if (myCarousel) {
    new bootstrap.Carousel(myCarousel, {
      interval: 4000,
      ride: "carousel"
    });
  }
});

// puxando poemas 

  let todosOsCards = document.querySelectorAll('.poema-card');

    function popularCardsDePoemas() {

        todosOsCards.forEach((card, index) => {
              
            let poema = poemas[index];
           {
                let imagemElemento = card.querySelector('.card-img-top');
                let tituloElemento = card.querySelector('.card-title');
                let textoElemento = card.querySelector('.card-text');

                if (imagemElemento) {
                    imagemElemento.src = poema.imagem;
                    imagemElemento.alt = `Imagem para ${poema.titulo}`;
                }
                if (tituloElemento) {
                    tituloElemento.innerText = poema.titulo;
                }
                if (textoElemento) {
                    textoElemento.innerText = poema.texto;
                }
            }
        })
    }

    popularCardsDePoemas();


      function carregarFrase() {
      let fraseContainer = document.getElementById('frase-header');

        if (fraseContainer) {
            
           let fraseSorteada = frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)];

            if (fraseSorteada) {
                fraseContainer.innerHTML = `
                    <h1 class="h1 mb-5 text-roxo ">${fraseSorteada.tema}
                    <p class="h1 mb-1 text-rosa-forte">"${fraseSorteada.frase}"</p>
                    <footer class="blockquote-footer text-rosinha  mt-1">${fraseSorteada.autor}, ${fraseSorteada.data}</footer>
                
                    <div class="d-flex justify-content-center gap-3 mt-4">
                      <a href="leituraDoDia.html" class="btn custom-button text-white fw-bold">Quero outra frase</a>
                      <a href="catalogo.html" class="btn custom-button text-white fw-bold">Quero um livro</a>
                    </div>

                
                    `;
            }
        }
    }

    carregarFrase();



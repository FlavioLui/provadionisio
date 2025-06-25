
// PÁGINA HOME

// PUXANDO IMG DO ARRAY PARA O HEADER

    let headerfundo = document.getElementById('header-fundo');

    function carregarBackgroundHeader() {
    
        let fotoHeader = listaFotos.find(foto => foto.nome === "Biblioteca Histórica");

      
        if (headerfundo && fotoHeader) {

            headerfundo.style.setProperty('--bg-image-url', `url('${fotoHeader.imagem}')`);

            headerfundo.classList.add('header-com-fundo');
        }
    }

    carregarBackgroundHeader();

// --------------------------------------------------------------------------------------------------

    // puxando imagens do array para os cards 
    

    const container = document.getElementById('livros-destaque-container');

        function carregarCardsDeLivros() {

            container.innerHTML = '';

            for (let i = 0; i < 4; i++) {
                
                const livro = catalogoFilmesSeries[i];

                    let cardHTML = `
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="card h-100 card-livro">
                                <img src="${livro.imagem}" class="card-img-top" alt="Capa do livro ${livro.titulo}">
                                <div class="card-body">
                                    <h5 class="card-title">${livro.titulo}</h5>
                                    <p class="card-text text-muted">${livro.genero.join(', ')} (${livro.anoLancamento})</p>
                                </div>
                                <div class="card-footer bg-transparent border-0 pb-3">
                                    <button type="button" class="btn btn-outline-dark w-100" data-bs-toggle="modal" data-bs-target="#modal-${livro.id}">
                                        Ver Detalhes
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;

                    container.innerHTML += cardHTML;
                }
            }

        carregarCardsDeLivros();



        // Modais 

let modalsContainer = document.getElementById('modals-container');

function carregarModais() {

    modalsContainer.innerHTML = '';

    for (let i = 0; i < catalogoFilmesSeries.length; i++) {
        
        const livro = catalogoFilmesSeries[i];

        const modalHTML = `
            <div class="modal fade" id="modal-${livro.id}" tabindex="-1" aria-labelledby="modalLabel-${livro.id}" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header text-white bg-roxo-principal">
                    <h5 class="modal-title" id="modalLabel-${livro.id}">${livro.titulo}</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="d-flex align-items-start">
                      <div>
                        <img src="${livro.imagem}" class="img-fluid me-4" alt="Capa de ${livro.titulo}" style="max-width: 180px; border-radius: 4px;">
                      </div>
                      <div>
                        <h4>Sinopse</h4>
                        <p>${livro.sinopse}</p>
                        <hr>
                        <h6>Detalhes:</h6>
                        <ul class="list-unstyled mt-3">
                          <li class="mb-2"><i class="bi bi-calendar-event me-2 text-roxo-principal"></i><strong>Ano de Lançamento:</strong> ${livro.anoLancamento}</li>
                          <li class="mb-2"><i class="bi bi-tag-fill me-2 text-roxo-principal"></i><strong>Gênero:</strong> ${livro.genero.join(', ')}</li>
                          <li class="mb-2"><i class="bi bi-shield-check me-2 text-roxo-principal"></i><strong>Classificação:</strong> ${livro.classificacao}</li>
                          ${livro.duracao ? `<li class="mb-2"><i class="bi bi-clock-fill me-2 text-roxo-principal"></i><strong>Duração:</strong> ${livro.duracao}</li>` : ''}
                          ${livro.temporadas ? `<li class="mb-2"><i class="bi bi-collection-play me-2 text-roxo-principal"></i><strong>Temporadas:</strong> ${livro.temporadas}</li>` : ''}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer bg-roxo-principal">
                    <button type="button" class="btn btn-outline-roxo" data-bs-dismiss="modal">Fechar</button>
                    <a href="Pages/cadastroLivro.html" class="btn btn-rosa-vibrante">Tenho Interesse na Troca</a>
                  </div>
                </div>
              </div>
            </div>
        `;

        modalsContainer.innerHTML += modalHTML;
    }
}

carregarModais()
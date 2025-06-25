

// Código para carregar frases motivacionais no header da "sobre nós"
    function carregarFrase() {
      let fraseContainer = document.getElementById('frase-header');

        if (fraseContainer) {
            
           let fraseSorteada = frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)];

            if (fraseSorteada) {
                fraseContainer.innerHTML = `
                    <p class="mb-1 ">"${fraseSorteada.frase}"</p>
                    <footer class="blockquote-footer text-white-50 mt-1">${fraseSorteada.autor}</footer>
                `;
            }
        }
    }

    carregarFrase();


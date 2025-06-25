// PÁGINA CADASTRO DE LIVROS 

// Validação do cadastro de livros

let form = document.getElementById('form-cadastro');
let successAlert = document.getElementById('success-alert');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    successAlert.classList.remove('d-none');
    
    form.reset();

    window.scrollTo(0, 0);
});


// Pega um poema aleatório do array de objetos 'poemas'
let poemaDoDia = poemas[Math.floor(Math.random() * poemas.length)]

let blocoInspiracao = document.getElementById('bloco-inspiracao');

if (blocoInspiracao) {
    blocoInspiracao.innerHTML = `
        <p class="fst-italic">"${poemaDoDia.texto.substring(0, 100)}..."</p>
        <footer class="blockquote-footer">${poemaDoDia.autor} <cite title="Título">em "${poemaDoDia.titulo}"</cite></footer>
    `;
}
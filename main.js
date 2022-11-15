const teclas = document.querySelectorAll('.teclas');
const telaDaCalculadora = document.getElementById('visor');
const teclaApagar = document.querySelector('[data-apagar]');
const teclaSoma = document.querySelector('[data-soma]');

teclaApagar.addEventListener('click', () => {
    telaDaCalculadora.value = ""
})

teclas.forEach(element => {
    element.addEventListener('click', (evento) => {
        const valorClicado = evento.target.value;
        mostraValorNaTela(valorClicado)
    })
});

function mostraValorNaTela(valorClicado) {
    telaDaCalculadora.value += valorClicado;    
}

teclaSoma.addEventListener('click', soma)

function soma(valorClicado) {
    console.log((valorClicado + valorClicado));
}





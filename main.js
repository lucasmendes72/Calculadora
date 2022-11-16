const teclas = document.querySelectorAll('.teclas');
const telaDaCalculadora = document.getElementById('visor');
const telaDeArmazenamento = document.getElementById('armazenamento');
const teclaApagar = document.querySelector('[data-apagar]');
const teclaSoma = document.querySelector('[data-soma]');
const teclaIgual = document.querySelector('[data-igual]');
var primeiroNumero = parseInt(telaDaCalculadora.value);
var segundoNumero = parseInt(telaDeArmazenamento.value);

teclaApagar.addEventListener('click', () => {
    apagarTela();
})

function apagarTela(){
    telaDaCalculadora.value = ""
    telaDeArmazenamento.value = ""
}

teclas.forEach(element => {
    element.addEventListener('click', (evento) => {
        const valorClicado = evento.target.value;
        mostraValorNaTela(valorClicado)
    })
});

function mostraValorNaTela(valorClicado) {
    telaDaCalculadora.value += valorClicado;    
}

teclaSoma.addEventListener('click', () => funcaoSoma())

function funcaoSoma(){
    telaDeArmazenamento.value = parseInt(telaDaCalculadora.value);
    telaDaCalculadora.value = ""
}

teclaIgual.addEventListener('click', () => {
    funcaoIgualdade();
})

function funcaoIgualdade(){
    var somou = parseInt(telaDaCalculadora.value) + parseInt(telaDeArmazenamento.value)
    apagarTela();
    telaDaCalculadora.value = somou;
}









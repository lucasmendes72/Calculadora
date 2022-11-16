const teclas = document.querySelectorAll('.teclas');
const telaDaCalculadora = document.getElementById('visor');
const telaDeArmazenamento = document.getElementById('armazenamento');
const telaMostraOperacao = document.getElementById('operacao');
const teclaApagar = document.querySelector('[data-apagar]');
const teclaSoma = document.querySelector('[data-soma]');
const teclaSubtrai = document.querySelector('[data-subtrai]');
const teclaIgual = document.querySelector('[data-igual]');

teclaApagar.addEventListener('click', () => {
    apagarTela();
})

function apagarTela(){
    telaDaCalculadora.value = ""
    telaDeArmazenamento.value = ""
    telaMostraOperacao.value = ""
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
    telaMostraOperacao.value = "+"
}

teclaSubtrai.addEventListener('click', () => funcaoSubtrai())

function funcaoSubtrai(){
    telaDeArmazenamento.value = parseInt(telaDaCalculadora.value);
    telaDaCalculadora.value = ""
    telaMostraOperacao.value = "-"
}

teclaIgual.addEventListener('click', () => {
    funcaoIgualdade();
})

function funcaoIgualdade(){
    var somou = parseInt(telaDeArmazenamento.value) + parseInt(telaDaCalculadora.value)
    var subtraiu = parseInt(telaDeArmazenamento.value) - parseInt(telaDaCalculadora.value)

    if(telaMostraOperacao.value == '+'){
        telaDaCalculadora.value = somou;
    }else if(telaMostraOperacao.value == '-'){
        telaDaCalculadora.value = subtraiu;
    }

    telaDeArmazenamento.value = ""
    telaMostraOperacao.value = ""
}









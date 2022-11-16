const teclas = document.querySelectorAll('.teclas');
const telaDaCalculadora = document.getElementById('visor');
const telaDeArmazenamento = document.getElementById('armazenamento');
const telaMostraOperacao = document.getElementById('operacao');
const teclaApagar = document.querySelector('[data-apagar]');
const teclaSoma = document.querySelector('[data-soma]');
const teclaSubtrai = document.querySelector('[data-subtrai]');
const teclaMultiplica = document.querySelector('[data-multiplica]');
const teclaDivide = document.querySelector('[data-divide]');
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

teclaMultiplica.addEventListener('click', () => funcaoMultiplica())

function funcaoMultiplica(){
    telaDeArmazenamento.value = parseInt(telaDaCalculadora.value);
    telaDaCalculadora.value = ""
    telaMostraOperacao.value = "x"
}
//Função Multiplicar

teclaDivide.addEventListener('click', () => funcaoDivide())

function funcaoDivide(){
    telaDeArmazenamento.value = parseInt(telaDaCalculadora.value);
    telaDaCalculadora.value = ""
    telaMostraOperacao.value = "/"
}

teclaIgual.addEventListener('click', () => {
    funcaoIgualdade();
})

function funcaoIgualdade(){
    var somou = parseInt(telaDeArmazenamento.value) + parseInt(telaDaCalculadora.value)
    var subtraiu = parseInt(telaDeArmazenamento.value) - parseInt(telaDaCalculadora.value)
    var multiplicou = parseInt(telaDeArmazenamento.value) * parseInt(telaDaCalculadora.value)
    var dividiu = parseInt(telaDeArmazenamento.value) / parseInt(telaDaCalculadora.value)

    if(telaMostraOperacao.value == '+'){
        telaDaCalculadora.value = somou;
    }else if(telaMostraOperacao.value == '-'){
        telaDaCalculadora.value = subtraiu;
    }else if(telaMostraOperacao.value == 'x'){
        telaDaCalculadora.value = multiplicou;
    }else{
        telaDaCalculadora.value = dividiu;
    }

    telaDeArmazenamento.value = ""
    telaMostraOperacao.value = ""
}









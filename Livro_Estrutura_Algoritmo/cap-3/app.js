'use strict';

const stack = new Stack();

const $elemento = document.querySelector("[data-js='elemento']");
const $adicionar = document.querySelector("[data-js='adicionar']");
const $remover = document.querySelector("[data-js='remover']");
const $limpar = document.querySelector("[data-js='limpar']");
const $notificacao = document.querySelector("[data-js='notificacao']");
const $resultado = document.querySelector("[data-js='resultado']");
const $resultadoUltimoAdicionado = document.querySelector("[data-js='resultadoUltimoAdicionado']");

const adicionarElemento = () => {

    if ($elemento.value === '') {
        return notificacao('Elemento vazio!');
    }
    stack.push($elemento.value);
    printElemento();
    printUltimoElementoAdicionado();
}

const removerPrimeiroElemento = () => {
    if (!stack.isEmpty) {
        return notificacao('Não tem elemento para ser removido!')
    }
    stack.pop();
    return printElemento();
}

const limpar = () => {
    $resultado.innerHTML = '';
    $resultadoUltimoAdicionado.innerHTML = '';
    stack.clear();
}

function printElemento() {
    return $resultado.innerHTML = ` Elementos Adicionados: ${stack.print()}`;
}

function notificacao(mensagem) {
    $notificacao.style.display = 'block';
    $notificacao.innerHTML = mensagem;
    setTimeout(() => {
        $notificacao.style.display = 'none';
    }, 2000)
}

function printUltimoElementoAdicionado() {
    return $resultadoUltimoAdicionado.innerHTML = ` Último Elemento Adicionado: ${stack.peek()}`;
}

$adicionar.addEventListener('click', adicionarElemento);
$remover.addEventListener('click', removerPrimeiroElemento);
$limpar.addEventListener('click', limpar);


// Método Decimal para Binário

const stackBinario = new Stack();

const $numeroDecimal = document.querySelector("[data-js='numeroDecimal']");
const $conversor = document.querySelector("[data-js='conversor']");
const $resultadoBinario = document.querySelector("[data-js='resultadoBinario']");






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
  $elemento.value = '';
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
  $elemento.value = '';
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
const $numeroDecimal = document.querySelector("[data-js='numeroDecimal']");
const $conversor = document.querySelector("[data-js='conversor']");
const $resultadoBinario = document.querySelector("[data-js='resultadoBinario']");

const converterDecimalParaBinario = () => {

  if ($numeroDecimal.value === '') {
    return $resultadoBinario.innerHTML = 'Digite um número';
  }

  const stackBinario = new Stack();
  let numeroDecimal = $numeroDecimal.value;
  let resultado = '';
  let resto;

  while (numeroDecimal > 0) {
    resto = Math.floor(numeroDecimal % 2);
    stackBinario.push(resto);
    numeroDecimal = Math.floor(numeroDecimal / 2);
  }

  while (!stackBinario.isEmpty()) {
    resultado += stackBinario.pop().toString();
  }

  return $resultadoBinario.innerHTML = `${$numeroDecimal.value} em binario é: ${resultado}`;
}

$conversor.addEventListener('click', converterDecimalParaBinario);

// Método Conversor de Base
const $numeroDecimalQualquerBase = document.querySelector("[data-js='numeroDecimalQualquerBase']");
const $numeroBase = document.querySelector("[data-js='numeroBase']");
const $conversorQualquerBase = document.querySelector("[data-js='conversorQualquerBase']");
const $resultadoQualquerBase = document.querySelector("[data-js='resultadoQualquerBase']");

const converterDecimalQualquerBase = () => {
  
  if ($numeroDecimal.value === '') {
    return $resultadoQualquerBase.innerHTML = 'Digite um número!'
  }
  const stackBaseQualquer = new Stack();
  let numeroDecimalQualquerBase = $numeroDecimalQualquerBase.value;
  let numeroBase = $numeroBase.value;
  let resto;
  let resultado = '';
  let digitios = '0123456789ABCDEF';

  while (numeroDecimalQualquerBase > 0) {
    resto = Math.floor(numeroDecimalQualquerBase % numeroBase);
    stackBaseQualquer.push(resto);
    numeroDecimalQualquerBase = Math.floor(numeroDecimalQualquerBase / numeroBase);
  }

  while(!stackBaseQualquer.isEmpty()) {
    resultado += digitios[stackBaseQualquer.pop()];
  }

  return $resultadoQualquerBase.innerHTML = `${$numeroDecimalQualquerBase.value} em ${nomeBase($numeroBase.value)} é ${resultado}.`


}

function nomeBase(base) {
  let resultado;
  console.log(base)
  switch(base){
    case '2' : resultado = 'Binário'; break;
    case '8' : resultado = 'Octal'; break;
    case '16' : resultado = 'Hexadecimal'; break;
  }
  return resultado;
}

$conversorQualquerBase.addEventListener('click', converterDecimalQualquerBase);





'use strict';

//método fila de prioridade
const queuePrioridade = new QueuePrioridade();

const $adicionar = document.querySelector("[data-js='adicionar']");
const $nome = document.querySelector("[data-js='nome']");
const $prioridades = document.querySelector("[data-js='prioridades']");
const $markup = document.querySelector("[data-js='markup']");

const arrayProridades = [
  "Estagiário",
  "Júnior",
  "Desenvolvedor Pleno",
  "Desenvolvedor Senior",
  "Analista",
  "Supervisor",
  "Gerente",
  "Diretor",
  "Presidente"
];

const adicionarElemento = () => {

  if ($nome.value === '') {
    return console.error('Validação campos');
  }
  queuePrioridade.enqueue($nome.value, $prioridades.value);
  $nome.value = '';
  return printMarkup();
}

function printMarkup() {
  let lista = `
    <ul>
    ${queuePrioridade.print()
      .map((item) =>
        `<li> Funcionário: ${item.elemento} - Cargo - ${arrayProridades[item.prioridade - 1]} </li>`).join('')}
    </ul>`
  return $markup.innerHTML = lista;
}

$adicionar.addEventListener('click', adicionarElemento);
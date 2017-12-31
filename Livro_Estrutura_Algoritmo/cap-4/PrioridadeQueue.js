'use strict';

const QueuePrioridade = (function () {

  const items = new WeakMap();

  class PrioridadeElemento {

    constructor(elemento, prioridade) {
      this.elemento = elemento;
      this.prioridade = prioridade;
    }
  }

  class QueuePrioridade {

    constructor() {
      items.set(this, []);
    }

    enqueue(elemento, prioridade) {
      let queueElemento = new PrioridadeElemento(elemento, prioridade);
      let adicionado = false;

      for (let i = 0; i < items.get(this).length; i++) {
        if (queueElemento.prioridade > items.get(this)[i].prioridade) {
          items.get(this).splice(i, 0, queueElemento);
          adicionado = true;
          break;
        }
      }
      if (!adicionado) {
        items.get(this).push(queueElemento);
      }
    }

    print() {
      return items.get(this);
    }

  }

  return QueuePrioridade;


})();
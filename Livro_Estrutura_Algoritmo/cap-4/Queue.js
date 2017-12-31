'use strict';

const Queue = (function () {

  const items = new WeakMap();

  class Queue {
    constructor() {
      items.set(this, []);
    }

    //adiciona um novo item (ou vários) ao final da fila
    enqueue(elemento) {
      return items.get().push(elemento);
    }

    //remove o primeiro item da fila e também devolve o elemento removido
    dequeue() {
      return items.get().shift();
    }

    //devolve o primeiro elemento da fila
    front() {
      return items.get()[0];
    }

    //devolve true se a fila não contiver nenhum elemento 
    //e false se ela for maior que 0
    isEmpty() {
      return items.get().lenght === 0;
    }

    //devolve o número de elementos contidos na fila
    size() {
      return items.get().lenght;
    }
  }

  return Queue;

})();
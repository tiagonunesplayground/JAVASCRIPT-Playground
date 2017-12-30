const Stack = (function () {

  const items = new WeakMap();

  class Stack {

    constructor() {
      items.set(this, []);
    }

    //adiciona um novo item (ou vários itens) ao topo da pilha
    push(element) {
      let s = items.get(this);
      s.push(element);
    }

    //remove o time do topo da pilha e devolve o elemento removido
    pop() {
      let s = items.get(this);
      return s.pop();
    }

    //devolve o elemento que está no topo da pilha
    peek() {
      let s = items.get(this);
      return s[s.length - 1];
    }

    //devolve true se a pilha não contiver nenhum elemento e
    //false se o tamanho da pilha for maior que 0
    isEmpty() {
      let s = items.get(this);
      return s.length == 0;
    }

    //devolve o número de elementos contido na pilha
    size() {
      let s = items.get(this);
      return s.length;
    }

    //remove todos os elementos da pilha
    clear() {
      return items.set(this, []);
    }

    //exibe os conteúdo da pilha
    print() {
      let s = items.get(this);
      return s.toString();
    }

  }

  return Stack;
})();
const Stack = (function () {

  const items = new WeakMap();

  class Stack {

    constructor() {
      items.set(this, []);
    }

    push(element) {
      let s = items.get(this);
      s.push(element);
    }

    pop() {
      let s = items.get(this);
      return s.pop();
    }

    peek() {
      let s = items.get(this);
      return s[s.length - 1];
    }

    isEmpty() {
      let s = items.get(this);
      return s.length == 0;
    }

    size() {
      let s = items.get(this);
      return s.length;
    }

    clear() {
      return items.set(this, []);
    }

    print() {
      let s = items.get(this);
      return s.toString();
    }

  }

  return Stack;
})();
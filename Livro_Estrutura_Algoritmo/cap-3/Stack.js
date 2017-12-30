const Stack = (function () {

	const items = new WeakMap();

	class Stack {
		constructor() {
			items.set(this, []);
		}
	}

	return Stack;
})();
var { Node, Nil, node } = require('./list-fp-basic');

var map = function (list, fn) {
	if (list.isEmpty) {
		return list;
	}

	return node(fn(list.head), map(list.tail, fn));
}

var list = node(1, node(2, node(3, Nil)));
console.log(list);

var double = (n) => n * 2;

var m = map(list, double);
console.log(m);

/* oop method style */

Node.prototype.map = function (fn) {
	return node(fn(this.head), this.tail.map(fn));
}

Nil.map = function () {
	return this;
}

var m = map(list, (n) => n * 3);
console.log(m);
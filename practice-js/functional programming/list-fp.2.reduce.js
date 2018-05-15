var { Node, Nil, node } = require('./list-fp-basic');

Node.prototype.reduce = function (fn, v) {
	return this.tail.reduce(fn, fn(v, this.head));
}

Nil.reduce = function (fn, v) {
	return v;
}

var list = node(1, node(2, node(3, Nil)));
console.log(list);

var add = (x, y) => y + "" + x;

var r = list.reduce(add, '0');

console.log(r);
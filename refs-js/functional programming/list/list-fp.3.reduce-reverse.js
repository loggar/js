var { Node, Nil, node } = require('./list-fp-basic');

Node.prototype.reduce = function (fn, v) {
	return this.tail.reduce(fn, fn(v, this.head));
}

Nil.reduce = function (fn, v) {
	return v;
}

Node.prototype.reduce_reverse = function (fn, v) {
	return fn(this.tail.reduce_reverse(fn, v), this.head);
}

Nil.reduce_reverse = Nil.reduce;

var list = node(1, node(2, node(3, Nil)));
console.log(list);

var add = (x, y) => y + "" + x;

var r = list.reduce_reverse(add, '0');

console.log(r);
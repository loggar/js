var { Node, Nil, node } = require('./list-fp-basic');

Node.prototype.reduce_reverse = function (fn, v) {
	console.log('processing node value ' + this.head);
	return fn(this.tail.reduce_reverse(fn, v), this.head);
}

Nil.reduce_reverse = function (fn, v) {
	console.log('processing node value ' + 'Nil');
	return v;
}

Node.prototype.map = function (fn) {
	var nodeBuilder = function (mapValue, nodeValue) {
		return node(fn(nodeValue), mapValue);
	}
	return this.reduce_reverse(nodeBuilder, Nil);
}

var list = node(1, node(2, node(3, Nil)));
var m = list.map((n) => n * 2);
console.log(m);
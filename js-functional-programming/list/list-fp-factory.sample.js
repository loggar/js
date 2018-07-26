var { Node, Nil, node } = require('./list-fp-basic');

console.log(new Node(1, new Node(2, new Node(3, Nil))));
console.log(node(1, node(2, node(3, Nil))));

/*
let's implement the list constructor in a functional manner
*/

var list = function () {
	if (arguments.length < 1) {
		return Nil;
	}

	var head = arguments[0];
	var tail = [].slice.call(arguments, 1);

	return node(head, list.apply(null, tail));
}

console.log(list(1, 2, 3));

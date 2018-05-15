var Nil = {
	isEmpty: true,

	get head() {
		throw new Error('Accessing head on empty list.')
	},

	get tail() {
		throw new Error('Accessing tail on empty list.')
	}
}

var Node = function (head, tail) {
	this.head = head;
	this.tail = tail;
}

Node.prototype.isEmpty = false;

var node = function (head, tail) {
	return new Node(head, tail);
}

module.exports = { Node, Nil, node };

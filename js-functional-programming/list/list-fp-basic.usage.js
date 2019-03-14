var { Node, Nil, node } = require('./list-fp-basic');

console.log(new Node(1, new Node(2, new Node(3, Nil))));
console.log(node(1, node(2, node(3, Nil))));
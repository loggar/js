"use strict";

var _context;

// Binding a function to a context
var log = (_context = console).log.bind(_context);

// Calling functions with a context
var foo = {};

function bar() {
	log(this);
}

function world(a) {
	log(this, a);
}

bar.call(foo);

function hello() {
	world.call.apply(world, [foo].concat(Array.prototype.slice.call(arguments)));
}

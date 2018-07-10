'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compose = _ramda2.default.compose;

var map = function map(f) {
	return function (x) {
		return Array.prototype.map.call(x, f);
	};
}; // now method map is detached from Array object by currying.

/*
Decoupling allows us to compose functions:
*/

var doStuff = function doStuff(item) {
	console.log(item);
	return item;
};
var doSomething = function doSomething(item) {
	console.log(item + ' another function');
	return item;
};

var mapDoStuff = map(doStuff);
var mapDoSomething = map(doSomething);

// composing 2 mappings
var mapDoSomethingThenStuff = compose(mapDoStuff, mapDoSomething);

var result = mapDoSomethingThenStuff(['a', 'b', 'c']);
console.log(result);

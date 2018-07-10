'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compose = _ramda2.default.compose;

var addTen = function addTen(x) {
	return x + 10;
};
var square = function square(x) {
	return x * x;
};
var sum = function sum(x, y) {
	return x + y;
};

var compute = compose(addTen, square, sum);

var result = compute(3, 5); // 74
console.log(result);

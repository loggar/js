'use strict';

var _composePipeModule = require('./compose-pipe.module.build');

var composed = (0, _composePipeModule.compose)(function (x) {
	console.log(x + 1);
	return x + 1;
}, function (x) {
	console.log(x + 2);
	return x + 2;
}, function (x) {
	console.log(x + 3);
	return x + 3;
}, function (x) {
	console.log(x + 4);
	return x + 4;
});

/*
It is also worth mentioning, compose has a companion function pipe. pipe also composes functions, but in reverse order.
In some situations, it can be easier to understand when it’s written left to right (or top down).
*/

var piped = (0, _composePipeModule.pipe)(function (x) {
	console.log(x + 1);
	return x + 1;
}, function (x) {
	console.log(x + 2);
	return x + 2;
}, function (x) {
	console.log(x + 3);
	return x + 3;
}, function (x) {
	console.log(x + 4);
	return x + 4;
});

console.log('composed');
composed(0);

console.log('piped');
piped(0);

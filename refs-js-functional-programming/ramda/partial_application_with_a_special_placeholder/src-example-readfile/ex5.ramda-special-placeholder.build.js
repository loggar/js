'use strict';

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

var _ = require('ramda/src/__');

var _2 = _interopRequireDefault(_);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var output = function output(err, data) {
	if (err) return console.log('error:', err);
	console.log(data);
}; // special placeholder


var readFile = (0, _curry2.default)(_fs2.default.readFile);

// 'readFile' can also be used like this because now we have more options
var files = ['readme.md', 'package.json'];
files.map(readFile(_2.default, 'utf8', output));

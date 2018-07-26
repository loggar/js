'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var output = function output(err, data) {
	if (err) return console.log('error:', err);
	console.log(data);
};

// how do i partially apply for utf8?
_fs2.default.readFile('readme.md', 'utf8', output);
_fs2.default.readFile('package.json', 'utf8', output);

/*
// harrumph!
const outputUtf8File = file => fs.readFile(file, 'utf8', output)

For this example bind cannot be used because 'bind' will only apply arguments from left to right.
*/

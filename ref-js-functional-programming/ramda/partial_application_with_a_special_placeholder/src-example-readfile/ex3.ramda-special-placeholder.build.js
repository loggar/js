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
};

// curry fs.readFile to add the magic
// special placeholder
/*
Ramda has what they refer to as a Special Placeholder which is used to to partially apply arguments regardless of position.
*/

var readFile = (0, _curry2.default)(_fs2.default.readFile);

/*
Now that fs.readFile has been curried into 'readFile', we can use Ramda's special Placeholder (__) for the filename argument and partially apply, urf8, and output to 'readFile'.
*/

// partially apply utf and output
var outputUtf8File = readFile(_2.default, 'utf8', output);

outputUtf8File('readme.md');
outputUtf8File('package.json');

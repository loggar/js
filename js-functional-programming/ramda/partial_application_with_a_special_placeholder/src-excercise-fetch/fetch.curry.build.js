'use strict';

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

var _ = require('ramda/src/__');

var _2 = _interopRequireDefault(_);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url_get = 'https://loggar.github.io/note/sample-res/sample.1.json';

(0, _nodeFetch2.default)(url_get, { method: 'GET' }).then(function (res) {
	return res.text();
}).then(function (body) {
	return console.log(body);
});

var getchGet = null; // create a partial application of 'fetch'
var getchPost = null; // create a partial application of 'fetch'

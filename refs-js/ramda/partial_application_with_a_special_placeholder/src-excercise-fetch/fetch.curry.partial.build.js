'use strict';

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

var _ = require('ramda/src/__');

var _2 = _interopRequireDefault(_);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url_get = 'https://loggar.github.io/js/docs/sample-res/sample.1.json';

/*
fetch(url_get, { method: 'GET' })
	.then(res => res.text())
	.then(body => console.log(body));
*/

var fetchGet = function fetchGet(url) {
	var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var o = Object.assign({ method: 'GET' }, option);
	return (0, _nodeFetch2.default)(url, o);
};

fetchGet(url_get).then(function (res) {
	return res.text();
}).then(function (body) {
	return console.log(body);
});

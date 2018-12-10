'use strict';

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

var _ = require('ramda/src/__');

var _2 = _interopRequireDefault(_);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url_get = 'https://loggar.github.io/note/docs/sample-res/sample.1.json';

/*
fetch(url_get, { method: 'GET' })
	.then(res => res.text())
	.then(body => console.log(body));
*/

var crFetch = (0, _curry2.default)(_nodeFetch2.default);

var fetchGet = crFetch(_2.default, { method: 'GET' });

fetchGet(url_get).then(function (res) {
	return res.text();
}).then(function (body) {
	return console.log(body);
});

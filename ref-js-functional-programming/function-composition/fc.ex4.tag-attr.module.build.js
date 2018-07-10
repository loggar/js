'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var encodeAttribute = function encodeAttribute() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	return x.replace(/"/g, '&quot;');
};

var toAttributeString = function toAttributeString() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	return Object.keys(x).map(function (attr) {
		return encodeAttribute(attr) + '="' + encodeAttribute(x[attr]) + '"';
	}).join(' ');
};

var tagAttributes = function tagAttributes(x) {
	return function () {
		var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		return '<' + x.tag + (x.attr ? ' ' : '') + toAttributeString(x.attr) + '>' + c + '</' + x.tag + '>';
	};
};

var tag = function tag(x) {
	return typeof x === 'string' ? tagAttributes({ tag: x }) : tagAttributes(x);
};

exports.default = tag;

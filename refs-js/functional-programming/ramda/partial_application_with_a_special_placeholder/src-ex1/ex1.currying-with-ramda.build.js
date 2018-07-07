'use strict';

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var multiply = (0, _curry2.default)(function (a, b) {
  return a * b;
});

var double = multiply(2);

console.log(double(3));

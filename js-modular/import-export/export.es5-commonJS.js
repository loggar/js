// Using ES5 CommonJS - helpers.js

exports.isNull = function(val) {
  return val === null;
};

exports.isUndefined = function(val) {
  return val === undefined;
};

exports.isNullOrUndefined = function(val) {
  return exports.isNull(val) || exports.isUndefined(val);
};

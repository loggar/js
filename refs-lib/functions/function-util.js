var function_util = (function () {
	return {
		isFunction: function (f) {
			return Object.prototype.toString.call(f) === "[object Function]";
		}
	}
})();

module.exports = function_util;

var function_util = (function () {
	return {
		isFunction: function (f) {
			return Object.prototype.toString.call(f) === "[object Function]";
		},
		isFn: function (f) {
			// Underscore.js Style.
			return !!(f && f.constructor && f.call && f.apply);
		}
	}
})();

module.exports = function_util;

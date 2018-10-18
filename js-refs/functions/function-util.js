var function_util = (function () {
	return {
		isFunction: function (f) {
			// Underscore.js Style.
			return !!(f && f.constructor && f.call && f.apply);
		}
	}
})();

module.exports = function_util;

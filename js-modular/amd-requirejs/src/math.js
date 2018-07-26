define([], function () {
	return {
		sum: function () {
			var total = 0;
			for (var idx in arguments) {
				total += arguments[idx];
			}
			return total;
		}
	};
});
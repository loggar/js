; (function () {
	var isArray = function (v) {
		return v &&
			typeof v === 'object' &&
			typeof v.length === 'number' &&
			typeof v.splice === 'function' &&
			!(v.propertyIsEnumerable('length'));
	}

	// export however you want
	module.exports = isArray;
}());
const fns_in_context = [function (v) { return v + 1; }, function (v) { return v * 2; }];

const pipe = (...functions) => data => functions.reduce((value, func) => func(value), data);

Array.prototype.ap = function (vals_in_context) {
	if (this.length > 0) {
		return vals_in_context.map(pipe(...this));
	} else {
		return [];
	}
}

const r = fns_in_context.ap([1, 2]);
console.log(r);

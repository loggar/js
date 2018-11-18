const fns_in_context = [function (v) { return v + 1; }, function (v) { return v * 2; }];

Array.prototype.ap = function (vals_in_context) {
	let r = [];
	for (let i = 0; i < this.length; i++) {
		r.push(vals_in_context.map(this[i]));
	}
	return r;
}

const r = fns_in_context.ap([1, 2]);
console.log(r);

// applicative : apply function_in_context to values_in_context
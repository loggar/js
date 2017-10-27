// This object generates strictly increasing serial numbers
var serialnum = {
	// This data property holds the next serial number.
	// The $ in the property name hints that it is a private property.
	$n: 0,
	// Return the current value and increment it
	get next() { return this.$n++; },
	// Set a new value of n, but only if it is larger than current
	set next(n) {
		if (n >= this.$n) this.$n = n;
		else throw "serial number can only be set to a larger value";
	}
};
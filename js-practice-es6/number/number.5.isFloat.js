function isFloat(x) {
	return Number.isFinite(x) && !Number.isInteger(x);
}

isFloat(4.2);                        // true
isFloat(4);                        // false

isFloat(NaN);                        // false
isFloat(Infinity);                // false
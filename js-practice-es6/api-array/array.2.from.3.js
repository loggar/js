/* Mapping */

var arrLike = {
	length: 4,
	2: "foo"
};

Array.from(arrLike, function mapper(val, idx) {
	if (typeof val == "string") {
		return val.toUpperCase();
	}
	else {
		return idx;
	}
});
// [ 0, 1, "FOO", 3 ]



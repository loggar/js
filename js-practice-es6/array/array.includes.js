var vals = ["foo", "bar", 42, "baz"];

if (vals.indexOf(42) >= 0) {
	// found it!
}



var vals2 = ["foo", "bar", 42, "baz"];

if (~vals2.indexOf(42)) {
	// found it!
}



var vals3 = ["foo", "bar", 42, "baz"];

if (vals3.includes(42)) {
	// found it!
}
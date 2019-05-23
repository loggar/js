var f1 = () => 12;
var f2 = x => x * 2;
var f3 = (x, y) => {
	var z = x * 2 + y;
	y++;
	x *= 3;
	return (x + y + z) / 2;
};

console.log(f1());
console.log(f2(2));
console.log(f3(2, 4));


var a = [1, 2, 3, 4, 5];

a = a.map(v => v * 2);

console.log(a);                // [2,4,6,8,10]


var dollabillsyall = (strings, ...values) =>
	strings.reduce((s, v, idx) => {
		if (idx > 0) {
			if (typeof values[idx - 1] == "number") {
				// look, also using interpolated string literals!
				s += `$${values[idx - 1].toFixed(2)}`;
			}
			else {
				s += values[idx - 1];
			}
		}

		return s + v;
	}, "");

console.log(dollabillsyall(["str1 ", "str2", "str3"], 1, 2, 3));
const constructor = function () {
	let x = 0;
	return {
		a: 1,
		b: "b",

		x: function () {
			return x;
		},
		setX: function (_x) {
			x = _x;
		}
	}
}

const a = constructor();

const b = constructor();

b.a = 2;
b.setX(-1);

console.log(a, a.x());
console.log(b, b.x());
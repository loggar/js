console.log(typeof NaN);

console.log(NaN + 0);
console.log(NaN + '1');
console.log(NaN + 'str');

console.log(NaN === NaN);
console.log(NaN !== NaN);

var isNumber = function isNumber(value) {
	return typeof value === 'number' && isFinite(value);
}

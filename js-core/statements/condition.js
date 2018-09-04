import { isArray } from "util";

const first = 'first';
const truthy = true;

const second = 'second';
const third = 'third';

const temp00 = first || truthy ? second : third;
const temp01 = first || (truthy ? second : third);

console.log(temp00);
console.log(temp01);
console.log(temp00 === temp01);


function asgn(arr) {
	if (!arr) {
		return false;
	}

	if (!isArray(arr)) {
		return false;
	}

	arr.forEach(function (x) {
		if (!x) {
			// countinue;
		}
		else return x;
	});
}

var t = asgn(
	first
	, truthy ? second : third
	, x2
	, x3
	// , ...
);
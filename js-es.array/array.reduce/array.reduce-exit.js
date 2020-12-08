function isInside_org(array, value) {
	return array.reduce(function (found, element) {
		console.log(element);
		return found || element === value;
	}, false);
}

var numbers = [1, 3, 5, 7, 9];
console.log(isInside_org(numbers, 3));
/*
1
3
5
7
9
true
*/


function reduce(array, func, acc) {
	var result = func(acc, array[0]);
	return array.length === 0 ? acc :
		(result ? result : reduce(array.slice(1), func, result));
}

function isInside(array, value) {
	return reduce(array, function (_, element) {
		console.log(element);
		return element === value;
	}, false);
}

console.log(isInside(numbers, 3));
/*
1
3
true
*/